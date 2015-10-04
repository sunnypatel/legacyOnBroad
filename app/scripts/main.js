$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['home', 'legacy', 'teams', 'board', 'sponsor', 'contact'],
        menu: '#menu',
        scrollingSpeed: 1000,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'Legacy', 'Teams', 'Board', 'Sponsor', 'Contact'],
    });

    $('#bgvid').get(0).play();

});
var isPaused = false;


function toggleVideo() {
    if (isPaused) {
        $('#bgvid').get(0).play();
        isPaused = false;
    } else {
        $('#bgvid').get(0).pause();
        isPaused = true;
    }
}
