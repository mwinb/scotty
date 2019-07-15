$(document).ready(function() {
  const articleListURL = "https://hubblesite.org/api/v3/news?page=all";
  let idArray = [];
  let totalShown = 0;

  getAllArticles = () => {
    $.ajax({
      url: articleListURL,
      type: "GET",
      dataType: "jsonp",
      success: function(result) {
        result.forEach(element => {
          idArray.push(element.news_id);
        });
        let startCount = 0;
        totalShown += 25;
        while (startCount < totalShown) {
          getArticleByID(result[startCount].news_id, startCount);
          startCount++;
        }
      }
    });
  };

  getArticleByID = (articleID, count) => {
    $.ajax({
      url: `https://hubblesite.org/api/v3/news_release/${articleID}`,
      dataType: "jsonp",
      success: function(result) {
        const alignLeft = "articleImage uk-card-media-left uk-cover-container";
        $("#hubbleNewsFeedContainer").append(
          `<div class="spaceFlightCardContainer uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
              <div class="${alignLeft}">
                  <img class='fitImage' src="https:${result.thumbnail_retina}" alt="" uk-cover>
                  <canvas width="200" height="200"></canvas>
              </div>
              <div id='articleContent'>
                <div class="uk-card-body">
                  <h3 class="articleTitle uk-card-title">${result.name}</h3>
                  <p>${result.abstract}</p>
                  <a class="uk-link-muted" href="${result.url}">View Article</a>
                </div>
              </div>
          </div>`
        );
      }
    });
  };

  loadMore = () => {
    getAllArticles();
  };

  $("#showMore").click(() => {
    loadMore();
  });

  loadMore();
});
