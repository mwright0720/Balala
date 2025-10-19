const decksUrl = 'https://balatrowiki.org/w/Decks'
// All decks have file name structure of 
// /images/*/*_deck.png/*
let decksMatch = /src="\/images\/thumb\/[A-Za-z]+_Deck\.png\/80px-[A-Za-z]+_Deck\.png\?[A-Za-z0-9]+"/g;

fetch(decksUrl).then(response => {
    // When the page is loaded convert it to text
    return response.text()
  })
  .then(html => {

    


    

    const deckImages = html.match(decksMatch);

    // Images now have the thumb and the size
    // We just want deck type and its id
    // Which happens to be the last part of the url

    const finalImageUrls = [];
    for (const image of deckImages) {
      const newUrl = image.split('-')[1]
      finalImageUrls.push(newUrl)
    }

    console.log(finalImageUrls)

    



    

  })
  .catch(error => {
     console.error('Failed to fetch page: ', error)
  })