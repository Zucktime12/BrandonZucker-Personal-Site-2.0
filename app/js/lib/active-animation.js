var activateAnimation = function() {
    var $easeElement = $(".js-line-animation, .js-ease, .js-from-left");
    $easeElement.each(function(){
        var $this = $(this);
        // $this.addClass('active');
        $this.bind('inview', function (event, visible) {
            var $that = $(this);
            if (visible === true && !$that.hasClass('active')) {
                $that.addClass('active');
            } else {
                return false;
            }
        });
    });
};

var scale = function() {
    var $easeElement = $(".js-scale");
    $easeElement.each(function(){
        var $this = $(this);
        //$this.addClass('active');
        $this.bind('inview', function (event, visible) {
            var $that = $(this);
            if (visible === true && !$that.hasClass('active')) {
                $that.addClass('active');
            } else {
                return false;
            }
        });
    });
};

jQuery(function($){
    $(function () {
        $(window).scroll();
    });
    activateAnimation();
    scale();
});