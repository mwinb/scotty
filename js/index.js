const navButtonIDs = {
  nasaBtn: "#showNasaButton",
  spaceFlightBtn: "#showSpaceFlightButton",
  hubbleDropDown: "#hubbleDropDown",
  hubbleNewsBtn: "#showHubbleNewsButton",
  esaFeedBtn: "#showESAButton",
  jwtFeedBtn: "#showJWTButton",
  hubbleLiveFeedBtn: "#showHubbleLiveFeedButton",
  astroBinBtn: "#showAstroBinButton",
  launchLibBtn: "#showLaunchLibraryButton",
};

const containerIDs = {
  nasa: "#nasaContainer",
  spaceFlight: "#spaceFlightFeedContainer",
  hubbleNewsFeed: "#hubbleNewsFeedContainer",
  esaFeed: "#esaFeedContainer",
  jwtFeed: "#jwtFeedContainer",
  hubbleLiveFeed: "#hubbleLiveFeedContainer",
  astroBinGallery: "#astroBinGalleryContainer",
  launchLibrary: "#launchLibraryContainer",
};

function showView(element) {
  $(element).show();
};

function removeOldSelection() {
  hideAllViews();
  removeHighLight();
}

function hideAllViews() {
  for (let element in containerIDs) {
    $(containerIDs[element]).hide();
  }
};

function removeHighLight() {
  for (let element in navButtonIDs) {
    $(navButtonIDs[element]).css("background-color", "inherit");
    $(navButtonIDs[element]).css("color", "white");
  }
};

function setSelectedButtonColor(buttonID) {
  $(buttonID).css("background-color", "#020124");
  $(buttonID).css("color", "grey");
};

function scrollToBottom() {
  $("html, body").scrollTop($(document).height() - $(window).height());
};

function startWithNasa() {
  setSelectedButtonColor(navButtonIDs.nasaBtn);
  $(containerIDs.nasa).show();
}

function initPage() {
  hideAllViews();
  removeHighLight();
  startWithNasa();
};

$(document).ready(function() {
  initPage();
  scrollToBottom();
  
  $(navButtonIDs.nasaBtn).click(() => {
    removeOldSelection()
    showView(containerIDs.nasa);
    setSelectedButtonColor(navButtonIDs.nasaBtn);
    scrollToBottom();
  });

  $(navButtonIDs.astroBinBtn).click(() => {
    removeOldSelection();
    showView(containerIDs.astroBinGallery);
    setSelectedButtonColor(navButtonIDs.astroBinBtn);
  });
  
  $(navButtonIDs.spaceFlightBtn).click(() => {
    removeOldSelection();
    showView(containerIDs.spaceFlight);
    setSelectedButtonColor(navButtonIDs.spaceFlightBtn);
  });

  $(navButtonIDs.launchLibBtn).click(() => {
    removeOldSelection();
    showView(containerIDs.launchLibrary);
    setSelectedButtonColor(navButtonIDs.launchLibBtn);
  });
  
  $(navButtonIDs.hubbleLiveFeedBtn).click(() => {
    removeOldSelection();
    showView(containerIDs.hubbleLiveFeed);
    setSelectedButtonColor(navButtonIDs.hubbleDropDown);
  });
  
  $(navButtonIDs.esaFeedBtn).click(() => {
    removeOldSelection();
    showView(containerIDs.esaFeed);
    setSelectedButtonColor(navButtonIDs.hubbleDropDown);
  });

  $(navButtonIDs.jwtFeedBtn).click(() => {
    removeOldSelection();
    showView(containerIDs.jwtFeed);
    setSelectedButtonColor(navButtonIDs.hubbleDropDown);
  });
  
  
  $(navButtonIDs.hubbleNewsBtn).click(() => {
    removeOldSelection();
    showView(containerIDs.hubbleNewsFeed);
    setSelectedButtonColor(navButtonIDs.hubbleDropDown);
  });
});
