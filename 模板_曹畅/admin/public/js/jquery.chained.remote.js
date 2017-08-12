

(function($) {

    $.fn.remoteChained = function(parent_selector, url, options) { 
        
        return this.each(function() {
            
            var self   = this;
            var backup = $(self).clone();
                        
            $(parent_selector).each(function() {
                $(this).bind("change", function() {

                    var data = {};
                    $(parent_selector).each(function() {
                        var id = $(this).attr("id");
                        var value = $(":selected", this).val();
                        data[id] = value;
                    });
                    
                    $.getJSON(url, data, function(json) {

                        $("option", self).remove();

                        for (var key in json) {
                            if (!json.hasOwnProperty(key)) {
                                continue;
                            }
                            if ("selected" == key) {
                                continue;
                            }
                            var option = $("<option />").val(key).append(json[key]);
                            $(self).append(option);    
                        }
                        
                        $(self).children().each(function() {
                            if ($(this).val() == json["selected"]) {
                                $(this).attr("selected", "selected");
                            }
                        });

                        if (1 == $("option", self).size() && $(self).val() === "") {
                            $(self).attr("disabled", "disabled");
                        } else {
                            $(self).removeAttr("disabled");
                        }
                        
                        $(self).trigger("change");
                        
                    });
                });

                $(this).trigger("change");             

            });
        });
    };
    
    $.fn.remoteChainedTo = $.fn.remoteChained;
    
})(jQuery);
