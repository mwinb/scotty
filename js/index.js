const navButtonIDs = {
  slideShowBtn: "#showSlidesButton",
  spaceFlightBtn: "#showSpaceFlightButton",
  hubbleDropDown: "#hubbleDropDown",
  hubbleNewsBtn: "#showHubbleNewsButton",
  esaFeedBtn: "#showESAButton",
  jwtFeedBtn: "#showJWTButton",
  hubbleLiveFeedBtn: "#showHubbleLiveFeedButton",
  astroBinBtn: "#showAstroBinButton",
};

const containerIDs = {
  apoid: "#apoidContainer",
  spaceFlight: "#spaceFlightFeedContainer",
  hubbleNewsFeed: "#hubbleNewsFeedContainer",
  esaFeed: "#esaFeedContainer",
  jwtFeed: "#jwtFeedContainer",
  hubbleLiveFeed: "#hubbleLiveFeedContainer",
  astroBinGallery: "#astroBinGalleryContainer",
};

function showView(element) {
  hideAllViews();
  $(element).show();
};

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

function initPage() {
  hideAllViews();
  removeHighLight();
  setSelectedButtonColor(navButtonIDs["slideShowBtn"]);
  $(containerIDs["apoid"]).show();
};

$(document).ready(function() {
  initPage();
  scrollToBottom();

  $(navButtonIDs["esaFeedBtn"]).click(() => {
    removeHighLight();
    showView(containerIDs["esaFeed"]);
    setSelectedButtonColor(navButtonIDs["hubbleDropDown"]);
  });
  
  $(navButtonIDs["hubbleLiveFeedBtn"]).click(() => {
    removeHighLight();
    showView(containerIDs["hubbleLiveFeed"]);
    setSelectedButtonColor(navButtonIDs["hubbleDropDown"]);
  });
  
  $(navButtonIDs["jwtFeedBtn"]).click(() => {
    removeHighLight();
    showView(containerIDs["jwtFeed"]);
    setSelectedButtonColor(navButtonIDs["hubbleDropDown"]);
  });

  
  $(navButtonIDs["hubbleNewsBtn"]).click(() => {
    removeHighLight();
    showView(containerIDs["hubbleNewsFeed"]);
    setSelectedButtonColor(navButtonIDs["hubbleDropDown"]);
  });
  
  $(navButtonIDs["astroBinBtn"]).click(() => {
    removeHighLight();
    showView(containerIDs["astroBinGallery"]);
    setSelectedButtonColor(navButtonIDs["astroBinBtn"]);
  });
  
  $(navButtonIDs["slideShowBtn"]).click(() => {
    removeHighLight();
    showView(containerIDs["apoid"]);
    setSelectedButtonColor(navButtonIDs["slideShowBtn"]);
    scrollToBottom();
  });
  
  $(navButtonIDs["spaceFlightBtn"]).click(() => {
    removeHighLight();
    showView(containerIDs["spaceFlight"]);
    setSelectedButtonColor(navButtonIDs["spaceFlightBtn"]);
  });
  
});
