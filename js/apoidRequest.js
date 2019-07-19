$(document).ready(function() {
  const nasaImageOfDayUrl =
    "https://api.nasa.gov/planetary/apod?api_key=x6vBGH5z5njOqWKVMz5pcXKnBPCYDDgGMeQaGcPl";

  const nasaLiveStreamUrl = `https://www.youtube.com/embed/21X5lGlDOfg"`
  const liveStreamIFrame = 
  `<iframe src="${nasaLiveStreamUrl}?cc_load_policy=1&autoplay=1&mute=1" width="100%" height="100%" frameborder="0" uk-video="automute: true"></iframe>`;

  const nasaContainer = "#nasaContainer";

  async function getApoid() {
    let result;
    try {
      result = await $.ajax({
        url: nasaImageOfDayUrl,
        type: "GET",
        cache: true,
        timeout: 3000,
      });

      const iFrame = `<iframe id="apoidVideo" src="${
        result.url
      }?autoplay=1&mute=1" type="text/html" width="auto" height="auto" frameborder="0" loop allow='autoplay' uk-video="autoplay: inview" ></iframe>`;
      const image = `<img id="apoidImage" src="${result.url}" alt="" uk-cover>`;
      

      $(nasaContainer).append(
        `<li class='nasaVideo uk-active '>
        <div>
        ${result.media_type === "video" ? iFrame : image}
        </div>
        <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
        <h3 id='apoidTitle' class="uk-margin-remove">${result.title}</h3>
        <p id='apoidCopyWrite' class='uk-margin-remove'>${
          "copyright" in result ? result.copyright : "public domain"
        }</p>
        <a class="uk-link-muted" href="${result.url}">View More</a>
        </div>
        </li>`
      );
    } catch (error) {
      console.log(error);
    }
  }

  function appendLiveStream() {
    $(nasaContainer).append(
      `<li>
      ${liveStreamIFrame}
      </li>`
    );
  }

  async function initNasa() {
    appendLiveStream();
    await getApoid();
  }

  initNasa();
});
