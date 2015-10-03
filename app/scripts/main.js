$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['home', 'legacy', 'teams', 'board', 'sponsor', 'contact'],
        menu: '#menu',
        scrollingSpeed: 1000,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'Legacy', 'Teams', 'Board', 'Sponsor', 'Contact'],
    });
});
