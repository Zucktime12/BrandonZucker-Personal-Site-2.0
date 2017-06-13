var scale = function() {
    var $easeElement = $(".js-scale");
    $easeElement.each(function(){
        var $this = $(this);
        $this.bind('inview', function (event, visible) {
            var $that = $(this);
            if (visible === true && !$that.hasClass('active')) {
                window.setTimeout(function(){
                    $that.addClass('active');
                }, 600);
                
            } else {
                return false;
            }
        });
    });
};
jQuery(function($){
    scale();
});