$.each($(".navbar-nav").children(), function (index, item) {
        if ($(item).hasClass("dropdown")) {
            $.each($(item).children("div").children("a"), function (index, subItem) {
                if ($(subItem).prop("href") === (window.location.origin + window.location.pathname)) {
                    $(subItem).addClass("active");
                    $(item).addClass("active");
                    return false;
                }
            });
        } else if ($(item).children("a").prop("href") === (window.location.origin + window.location.pathname)) {
            $(item).addClass("active");
            return false;
        }
    });