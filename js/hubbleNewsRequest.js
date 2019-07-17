$(document).ready(function() {
  const articleListURL = "https://hubblesite.org/api/v3/news?page=all";
  let totalShown = 0;

  async function getAllArticles() {
    let result;
    let limit = totalShown + 25;
    let articles = [];
    try {
      result = await $.ajax({
        url: articleListURL,
        type: 'GET',
        dataType: 'jsonp',
      })
      while(totalShown < limit) {
        articles.push(await getArticleByID(result[totalShown].news_id));
        totalShown++;
      }
      articles.sort( sortByDate );
      articles.forEach((element) => {
        populateSlideShow(element);
      })
    }
    catch (error) {
      console.log(error);
    }
  }

  async function getArticleByID (articleID) {
    let result
    try {
      result = await $.ajax({
        url: `https://hubblesite.org/api/v3/news_release/${articleID}`,
        type: 'GET',
        dataType: 'jsonp',
      })
      return result;
    }
    catch (error) {
      console.log(error);
    }
  }

  function populateSlideShow(result) {
      const alignLeft = "articleImage uk-card-media-left uk-cover-container";
      $("#hubbleNewsFeedContainer").append(
        `<div class="spaceFlightCardContainer uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
            <div class="${alignLeft}">
                <img class='fitImage' src="https:${result.thumbnail_retina}" alt="" uk-cover>
                <canvas width="600px" height="600px"></canvas>
            </div>
            <div id='articleContent'>
              <div class="uk-card-body">
                <h3 class="articleTitle uk-card-title">${result.name}</h3>
                <p>Published ${new Date(result.publication).toUTCString()}</p>
                <a class="uk-link-muted" href="${result.url}">View Article</a>
              </div>
            </div>
        </div>`
      )
  }


  function hubbleImageInit() {
    getAllArticles();
  } 

  function sortByDate(left, right) {
    let leftDate = new Date(left);
    let rightDate = new Date(right);
    return leftDate > rightDate ? 1 : leftDate < rightDate ? -1 : 0;
  }

  hubbleImageInit();

});
