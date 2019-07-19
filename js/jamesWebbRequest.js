$(document).ready(function() {
  const containerID = "#jwtFeedContainer";
  async function getJWTFeed() {
    let result;
    try {
      result = await $.ajax({
        url: `https://hubblesite.org/api/v3/external_feed/jwst_feed`,
        type: "GET",
        dataType: "jsonp",
        casche: true,
      });
      populateJWTFeed(result);
    } catch (error) {
      console.log(error);
    }
  }

  function populateJWTFeed(result) {
    const alignLeft = "articleImage uk-card-media-left uk-cover-container";
    result.forEach(element => {
      $(containerID).append(
        `<div class="spaceFlightCardContainer uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
      <div class="${alignLeft}">
      <img class='fitImage' src="https:${
        element.image_square_large
      }" alt="" uk-cover>
      <canvas width="600px" height="600px"></canvas>
      </div>
      <div id='articleContent'>
      <div class="uk-card-body">
      <h3 class="articleTitle uk-card-title">${element.title}</h3>
      <p>${element.description}</p>
      <p>Published: ${element.pub_date}</p>
      <a class="uk-link-muted" href="${element.link}">View Article</a>
      </div>
      </div>
      </div>`
      );
    });
  }

  getJWTFeed();
});
