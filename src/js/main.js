/* ===================================================================================
 *  Project: Test Project
 *  Author: Andrzej Kałowski
 *  $id: main.js
 *  Last updated: @@timestamp
 *  ================================================================================== */

(function($) {

    'use strict';

    var App = {

    /**
     * Automated Colorbox
     */
    viewSlides: function() {

        var $pictures = $('.cbox a');

        /* Hide border */
        $("#cboxTopLeft").hide();
        $("#cboxTopRight").hide();
        $("#cboxBottomLeft").hide();
        $("#cboxBottomRight").hide();
        $("#cboxMiddleLeft").hide();
        $("#cboxMiddleRight").hide();
        $("#cboxTopCenter").hide();
        $("#cboxBottomCenter").hide();

        function Slider() {
            this.key = 1;
            this.colorboxInit();
        }

        /* Initiate colorbox */
        Slider.prototype.colorboxInit = function() {
            try {
                $pictures.colorbox({rel:'gallery', open:true, opacity:0.5, speed:500, current:false});
                this.colorboxFollow();
            }
            catch (e) {
                    window.alert("Unable to run the Colorbox");
            }

        };

        /* Triggers when the transition has completed */
        Slider.prototype.colorboxFollow = function() {
            try {
                $(document).on('cbox_complete', this.timeDelay);
            }
            catch (e) {
                      window.alert(e);
            }
        };

        /* nextPicture runs after two seconds */
        Slider.prototype.timeDelay = function() {
            slider.key++;
            setTimeout($.proxy(slider.nextPicture, slider), 2000);
        };

       /* Disabling the slider after you seeing four pictures */
        Slider.prototype.nextPicture = function() {
            try {
                    if (slider.key < 5) {
                        $.colorbox.next();
                    } else {
                        $.colorbox.remove();
                    } 
            }
            catch (e) {
                window.alert("Unable to run the slider");
            }
        };

        var slider = new Slider();
       
    }

    };

    $(function() {
    App.viewSlides();
    });

})(jQuery);