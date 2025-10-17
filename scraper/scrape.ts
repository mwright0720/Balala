const { webkit } = require('playwright')

const url = 'https://balatrowiki.org/w/Decks';

(async () => {
  const browser = await webkit.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(url);
  
  const table = await page.locator('html.client-js.ve-available body.skin-vector-legacy.mediawiki.ltr.sitedir-ltr.mw-hide-empty-elt.ns-0.ns-subject.mw-editable.page-Decks.rootpage-Decks.skin-vector.action-view.wgl-darkmode.wgl-theme-dark div#content.mw-body.ve-init-mw-desktopArticleTarget-targetContainer div#bodyContent.vector-body div#mw-content-text.mw-body-content div.mw-content-ltr.mw-parser-output table.wikitable.sortable.jquery-tablesorter')

  console.log(await table.allInnerTexts())
  // Select all images from the table of decks
  

  await context.close();
  await browser.close();
})();

