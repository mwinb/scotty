$(document).ready(function() {
  const navButtonIDs = {slideShowBtn: "#showSlidesButton", spaceFlightBtn: "#showSpaceFlightButton", hubbleDropDown:"#hubbleDropDown", hubbleNewsBtn: "#showHubbleNewsButton", esaFeedBtn: '#showESAButton', jwtFeedBtn: '#showJWTButton'};
  const containerIDs = {apoid:"#apoidContainer", spaceFlight: "#spaceFlightFeedContainer", hubbleNewsFeed: "#hubbleNewsFeedContainer", esaFeed: '#esaFeedContainer', jwtFeed: '#jwtFeedContainer'};
  
  $(navButtonIDs['esaFeedBtn']).click(() => {
    removeHighLight();
    showView(containerIDs['esaFeed']);
    setSelectedButtonColor(navButtonIDs['hubbleDropDown']);
  });

  $(navButtonIDs['jwtFeedBtn']).click(() => {
    removeHighLight();
    showView(containerIDs['jwtFeed']);
    setSelectedButtonColor(navButtonIDs['hubbleDropDown']);
  });

  $(navButtonIDs['slideShowBtn']).click(() => {
    removeHighLight();
    showView(containerIDs['apoid']);
    setSelectedButtonColor(navButtonIDs['slideShowBtn']);
    scrollToBottom();

  });

  $(navButtonIDs['spaceFlightBtn']).click(() => {
    removeHighLight();
    showView(containerIDs['spaceFlight']);
    setSelectedButtonColor(navButtonIDs['spaceFlightBtn']);
  });

  $(navButtonIDs['hubbleNewsBtn']).click(() => {
    removeHighLight();
    showView(containerIDs['hubbleNewsFeed']);
    setSelectedButtonColor(navButtonIDs['hubbleDropDown']);
  });

  showView = (element) => {
    hideAllViews();
    $(element).show();
  }

  hideAllViews = () => {
    for (let element in containerIDs) {
      $(containerIDs[element]).hide();
    }
  };

  removeHighLight = () => {
      for(let element in navButtonIDs) {
        $(navButtonIDs[element]).css('background-color', 'inherit');
        $(navButtonIDs[element]).css('color', 'white');
      }
  }


  setSelectedButtonColor = (buttonID) => {
    $(buttonID).css('background-color', '#020124');
    $(buttonID).css('color', 'grey');
  };

  scrollToBottom = () => { 
    $('html, body').scrollTop( $(document).height() - $(window).height() );
  };


  initPage = () => {
    hideAllViews();
    removeHighLight();
    setSelectedButtonColor(navButtonIDs['slideShowBtn']);
    $(containerIDs['apoid']).show();
    scrollToBottom();
  }, initPage();



});
