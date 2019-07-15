$(document).ready(function() {
    const url =
      "https://spaceflightnewsapi.net/api/v1/articles?limit=100";
    console.log(new Date(1563164353));

    $.ajax({
      url: url,
      success: function(result) {
        const alignLeft = "articleImage uk-card-media-left uk-cover-container"
        result.docs.forEach((element, count) => {
          $('#spaceFlightFeedContainer').append(
            `<div class="spaceFlightCardContainer uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-width-expand uk-margin" uk-grid>
                <div class="${alignLeft}">
                    <img src="${element.featured_image}" alt="" uk-cover>
                    <canvas width="600px" height="600px"></canvas>
                </div>
                <div id='articleContent'>
                  <div class="uk-card-body">
                    <h3 class="articleTitle uk-card-title">${element.title}</h3>
                    <a class="uk-link-muted" href="${element.url}">View Article</a>
                  </div>
                </div>
            </div>`
            );
        });

      }
    });
  });