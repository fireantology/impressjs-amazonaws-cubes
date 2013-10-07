/**
 * Impress.js Amazon AWS cubes
 * by Mauro Rocco (@fireantology)
 * https://github.com/fireantology/impressjs-amazonaws-cubes
 */
 
var slideNavigator={
    steps: [],
    index: 0,
    
    init:function(){
        var realSteps = $('.real-step');
        $('.real-step').each(function(index, el) {
            slideNavigator.steps.push(el.id);
        });
        slideNavigator.index = Math.max(0, slideNavigator.steps.indexOf(document.location.hash.replace('#/','')));
        slideNavigator.overrideNavigation();
    },
    moveToNext:function() {
            slideNavigator.index++;
            if(slideNavigator.index >= slideNavigator.steps.length) slideNavigator.index = 0;
            document.location.href = '#/' + slideNavigator.steps[slideNavigator.index];
    },

    moveToPrevious:function(){
            slideNavigator.index--;
            if(slideNavigator.index < 0) {
                slideNavigator.index = slideNavigator.steps.length-1;
            }
            document.location.href = '#/' + slideNavigator.steps[slideNavigator.index];
    },
    overrideNavigation: function () {
        $(document).keyup(function(e) { 
            if(e.which == 39 || e.which == 32 || e.which == 40) {
                e.preventDefault();
                slideNavigator.moveToNext();
            }

            if(e.which == 8 || e.which == 37 || e.which == 38) {
                e.preventDefault();
                slideNavigator.moveToPrevious();
            }
        });
    }
}