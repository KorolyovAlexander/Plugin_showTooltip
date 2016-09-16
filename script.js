/**
 * Created by Samsung on 16.09.2016.
 */
(function($){

    $.fn.showTooltip = function(){
        $(this)
            .on('mouseover', onMouseOver)
            .on('mouseout', onMouseOut);
    }
    function onMouseOver(e){

        var activeElement = $(this);

        $("<div id='tooltip'></div>")
            .appendTo($('body'))
            .offset({
                left: activeElement.offset().left,
                top: activeElement.offset().top + activeElement.outerHeight()
            })
            .text(activeElement.data().tooltip);
    }

    function onMouseOut(){
        $('#tooltip').remove();
    }

}(jQuery));