$(document).ready(function() {
  const apoidUrl = 
  'https://api.nasa.gov/planetary/apod?api_key=x6vBGH5z5njOqWKVMz5pcXKnBPCYDDgGMeQaGcPl';
  const hubbleImagesUrl = 'https://hubblesite.org/api/v3/images';
  
  const slideContainer = '#slideContainer';

  async function getApoid() {
    let result;
    try {
      result = await $.ajax({
        url: apoidUrl,
        type: 'GET',
        timeout: 3000,
      });

      const iFrame = 
      `<iframe id="apoidVideo" src="${result.url}?autoplay=1&mute=1}" type="text/html" width="640" height="385" frameborder="0" loop muted plays-inline allow='autoplay' uk-video="autoplay: inview" uk-cover></iframe>`;
      const image = `<img id="apoidImage" src="${result.url}" alt="" uk-cover>`;
      
      $(slideContainer).append(
       `<li id='apoidLI'>
          ${result.media_type === "video" ? iFrame : image}
          <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
            <h3 id='apoidTitle' class="uk-margin-remove">${result.title}</h3>
            <p id='apoidCopyWrite' class='uk-margin-remove'>${'copyright' in result ? result.copyright : 'public domain'}</p>
            <a class="uk-link-muted" href="${result.url}">View More</a>
          </div>
        </li>`
      )
    } catch(error) {
      console.log(error);
    }
  }

  function getHubbleImages() {
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
  }

  function getImageByID(imageID) {
    $.ajax({
      url: `https://hubblesite.org/api/v3/image/${imageID}`,
      type: "GET",
      dataType: "jsonp",
      success: function(result) {
        $(slideContainer).append(
          `<li>
          <img src="https:${
            result.image_files[0].file_url.includes("png")
              ? result.image_files[0].file_url
              : result.image_files[1].file_url
          }" alt="" uk-cover>
          <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
            <h3 class="uk-margin-remove">${result.name}</h3>
            <p class="uk-margin-remove">${result.mission}</p>
            ${result.credits}
          </div>
        </li>`
        );
      }
    });
  };

  async function initApoid() {
    await getApoid();
    getHubbleImages();
  } 
  
  initApoid();

});
