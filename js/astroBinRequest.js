$(document).ready(() => {
const dayOffset = 14;
const limit = 200;
const endDate = new Date();
const formatEndDate = endDate.toISOString().split("T")[0];
const startDate = new Date(endDate.getDate() - dayOffset).toISOString().split("T")[0];
const url =  `https://astrobin.com/api/v1/image/?uploaded__gte=${startDate}%200:00:00&uploaded__lt=${formatEndDate}%200:00:00&api_key=9985b5e659306f24f98faa7c5d78fae212622dc1&api_secret=766c984b731d1d522f8e8fb966ec3be20075c23c&limit=${limit}`

function getImageByID() {
  $.ajax({
    url: url,
    type: "GET",
    dataType: 'jsonp',
    success: function(result) {
      result.objects.sort( sortByDate );
      populateAstroBin(result.objects);
    }
  });
} getImageByID();

function populateAstroBin(result) {
  const alignLeft = "articleImage uk-card-media-left uk-cover-container";
  result.forEach(element => {
    $("#astroBinSlideContainer").append(
      
      `<li>
      <img src="${
        element.url_hd
      }" alt="" uk-cover>
      <div class="uk-overlay uk-light uk-position-bottom uk-text-center uk-transition-slide-bottom">
      <h3 class="uk-margin-remove">${element.title}</h3>
      <p class="uk-margin-remove">${element.published}</p>
      <p><a href="https://www.astrobin.com/users/${element.user}">${element.user}</a></p>
      </div>
      </li>`
    );
  });
}

function sortByDate(left, right) {
  let leftDate = new Date(left.published);
  let rightDate = new Date(right.published);
  return leftDate > rightDate ? 1 : leftDate < rightDate ? -1 : 0;
}

});
