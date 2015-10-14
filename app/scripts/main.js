/*jshint strict: true */
"use strict";
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['home', 'legacy', 'teams', 'board', 'sponsor', 'contact'],
        menu: '#menu',
        scrollingSpeed: 1000,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'Legacy', 'Teams', 'Board', 'Sponsor', 'Contact'],
        afterLoad: function(anchorLink){
            //using anchorLink
            if(anchorLink === 'board'){
                $('#boardImg').addClass('animated flipInY');
            }
        },
        onLeave: function(index, nextIndex, direction){
            if(index == 1) {
                $('#bgvid').get(0).pause();
            }
        }
    });

    var isPaused = true;
    $('#bgvid').get(0).pause();

});


function toggleVideo() {
    if (isPaused) {
        $('#bgvid').get(0).play();
        isPaused = false;
    } else {
        $('#bgvid').get(0).pause();
        isPaused = true;
    }
}
