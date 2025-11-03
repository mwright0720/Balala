from bs4 import BeautifulSoup
import requests
import re


def get_deck_image_urls(soup):
    regexPattern = 'src=\"\/images\/thumb\/[A-Za-z]+_Deck\.png\/80px-[A-Za-z]+_Deck\.png\?[A-Za-z0-9]+'
    imgSrcs = re.findall(regexPattern, str(soup))

    # The image source only needs the final part of the string.    
    finalUrls = []
    for srcUrl in imgSrcs:
        finalizedUrl = srcUrl.split('-')[-1]
        finalUrls.append(finalizedUrl)

    return finalUrls
    
def get_stake_image_urls(soup):
    regexPattern = '\/images\/[A-Za-z]+_stake\.png\?[A-Za-z0-9]+'
    imgSrcs = re.findall(regexPattern, str(soup))

    finalUrls = []
    for srcUrl in imgSrcs:
        finalizedUrl = srcUrl.split('/')[-1]
        finalUrls.append(finalizedUrl)
    
    return finalUrls

def get_joker_image_urls(soup):
    # 
    table = soup.select("table.wikitable.sortable")[0]

    
    finalUrls = []
    imgSrcs = []

    images = table.find_all("img")

    for img in images:
        src=img.get("srcset")
        imgSrcs.append(src)

    for srcUrl in imgSrcs:

        if srcUrl:
            finalizedUrl = srcUrl.split(' ')[0]
            finalUrls.append(finalizedUrl)

    print(finalUrls)
    return finalUrls

def get_page_html(url):
    page = requests.get(url)
    return page


def get_soup(pageHTML):
    return BeautifulSoup(pageHTML.content, 'html.parser')

def save_all_images_locally(srcList, destination):
    for imgSrcUrl in srcList:
        data = requests.get(imgSrcUrl).content
        imgName = get_image_name(imgSrcUrl)
        newFile = open(imgName, 'wb')
        newFile.write(data)
        newFile.close()



def get_image_name(imageUrl):
    firstPart, secondPart = imageUrl.split('images/', 1)
    result = secondPart.split('?', 1)
    return result[0].replace('/', '_')


def save_image_files():
    url = 'https://balatrowiki.org/w/Decks'
    imageBaseUrl = 'https://balatrowiki.org/images/'
    pageHTML = get_page_html(url)
    soup = get_soup(pageHTML)
    finalUrlEnds = get_deck_image_urls(soup)
    finalUrls = []

    for urlEnd in finalUrlEnds:
        finalUrls.append(imageBaseUrl + urlEnd)

    save_all_images_locally(finalUrls, 'assets')


def save_stake_files():
    url = 'https://balatrowiki.org/w/Stakes'
    imageBaseUrl = 'https://balatrowiki.org/images/'

    pageHTML = get_page_html(url)
    soup = get_soup(pageHTML)

    finalUrlEnds = get_stake_image_urls(soup)

    finalUrls = []

    for urlEnd in finalUrlEnds:
        finalUrls.append(imageBaseUrl + urlEnd)
    
    save_all_images_locally(finalUrls, 'assets')


def save_joker_files():
    url='https://balatrowiki.org/w/Jokers#List_of_Jokers'
    imageBaseUrl = 'https://balatrowiki.org'

    pageHTML = get_page_html(url)
    soup = get_soup(pageHTML)

    

    finalUrlEnds = get_joker_image_urls(soup)
    finalUrls = []

    
   

    for urlEnd in finalUrlEnds:
        finalUrls.append(imageBaseUrl + urlEnd)
    
    print(len(finalUrls))
    
    save_all_images_locally(finalUrls, 'assets')

    
    #finalUrlEnds = get_joker_image_urls(soup)

def main():
    save_joker_files()

    
    
    



if __name__ == "__main__":
    main()
