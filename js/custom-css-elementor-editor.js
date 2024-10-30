!(function (e) {
    e(window).on("elementor:init", function () {
        elementor.hooks.addFilter("editor/style/styleText", function (e, t) {
            if (t) {
                var n = t.model,
                    o = n.get("settings").get("custom_css_elementor_code"),
                    r = ".elementor-element.elementor-element-" + n.get("id");
                return "document" === n.get("elType") && (r = elementor.config.document.settings.cssWrapperSelector), o && (e += o.replace(/selector/g, r)), e;
            }
        })
    });
})(jQuery);
