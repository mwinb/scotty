$(document).ready(function() {
    const containerID = "#launchLibraryContainer";
    const numLaunches = "50";
    const url = `https://launchlibrary.net/1.4/launch/next/`
    async function getLaunches() {
      let result;
      try {
        result = await $.ajax({
          url: `${url}${numLaunches}`,
          type: "GET",
          cache: true,
        });
        // console.log(result);
        populateLaunchContainer(result.launches);
      } catch (error) {
        console.log(error);
      }
    }
  
    function populateLaunchContainer(result) {
      const alignLeft = "articleImage uk-card-media-left uk-cover-container";
      result.forEach(element => {
        $(containerID).append(
          `<div class="spaceFlightCardContainer uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
        <div class="${alignLeft}">
        <img class='fitImage' src="${element.rocket.imageURL}" alt="" uk-cover>
        <canvas width="600px" height="600px"></canvas>
        </div>
        <div id='articleContent'>
        <div class="uk-card-body">
        <h3 class="articleTitle uk-card-title">${element.name}</h3>
        <p>Description: ${element.missions[0] ? element.missions[0].description : "no description available"}</p>
        <p>Start: ${element.windowstart}</p>
        <p>  End: ${element.windowend}</p>
        <a class="uk-link-muted" href="${getLaunchPadLocation(element)}">Location: ${element.location.name}</a>  
        <p>Rocket ID: ${element.rocket.id}</p>
        <p>Rocket Name: ${element.rocket.name}</p>
        <p>Rocket Configuration: ${element.rocket.configuration}</p>
        <a class="uk-link-muted" href="${getRocketWiki(element).wikiUrl}">${getRocketWiki(element).wikiString}</a>  
        </div>
        </div>
        </div>`
        );
      });
    }

    function getLaunchPadLocation(element) {
        let mapUrl = "";
        let launchPad = element.location.pads[0];

        if(launchPad && launchPad.location != "") 
            mapUrl = launchPad.mapURL;

        return mapUrl;
    };

    function getRocketWiki(element) {
        const rocketWiki = { wikiUrl: "#", wikiString: "" }

        if(element.rocket.wikiUrl != "") {
            rocketWiki.wikiUrl = element.rocket.wikiURL;
            rocketWiki.wikiString = "Wiki";
        }

        return rocketWiki;
    };
  
    getLaunches();
  });