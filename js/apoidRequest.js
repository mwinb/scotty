$(document).ready(function() {
  var url =
    "https://api.nasa.gov/planetary/apod?api_key=x6vBGH5z5njOqWKVMz5pcXKnBPCYDDgGMeQaGcPl";

  var hubbleImagesUrl = "https://hubblesite.org/api/v3/images";

  $.ajax({
    url: url,
    error: () => {
      $("#apoidLI").remove();
    },
    success: result => {
      if ("copyright" in result) {
        $("#apoidCopyWrite").text("Image Credits: " + result.copyright);
      } else {
        $("#apoidCopyWrite").text("Image Credits: " + "Public Domain");
      }

      if (result.media_type == "video") {
        $("#apoidImage").css("display", "none");
        $("#apoidVideo").attr("src", result.url);
      } else {
        $("#apoidVideo").css("display", "none");
        $("#apoidImage").attr("src", result.url);
      }
      $("#apoidDescription").text(result.explanation);
      $("#apoidTitle").text(result.title);

      getHubbleImages();
    },
    timeout: 3000
  });

  getHubbleImages = () => {
    $.ajax({
      url: hubbleImagesUrl,
      type: "GET",
      dataType: "jsonp",
      success: function(result) {
        result.forEach(element => {
          getImageByID(element.id);
        });
      }
    });
  };

  getImageByID = imageID => {
    $.ajax({
      url: `https://hubblesite.org/api/v3/image/${imageID}`,
      type: "GET",
      dataType: "jsonp",
      success: function(result) {
        console.log(result.image_files.file_url);
        $("#slideContainer").append(
          `<li>
        <img src="https:${
          result.image_files[0].file_url.includes("png")
            ? result.image_files[0].file_url
            : result.image_files[1].file_url
        }" alt="" uk-cover>
        <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
          <h3 class="uk-margin-remove">${result.name}</h3>
          <p class="uk-margin-remove">${result.mission}</p>
          <p class='uk-margin-remove'>${result.description && result.description.length < 5000 ? 
            result.description : result.collection}</p>
        </div>
      </li>`
        );
      }
    });
  };
});
