function revslider_showDoubleJqueryError(a) {
    var b = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    b += "<br> This includes make eliminates the revolution slider libraries, and make it not work.", b += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.", b += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.", b = "<span style='font-size:16px;color:#BC0C06;'>" + b + "</span>", jQuery(a).show().html(b)
}! function(a, b) {
    function c(c, f) {
        if (("preview1" == f.navigationStyle || "preview3" == f.navigationStyle || "preview4" == f.navigationStyle) && (f.soloArrowLeftHalign = "left", f.soloArrowLeftValign = "center", f.soloArrowLeftHOffset = 0, f.soloArrowLeftVOffset = 0, f.soloArrowRightHalign = "right", f.soloArrowRightValign = "center", f.soloArrowRightHOffset = 0, f.soloArrowRightVOffset = 0, f.navigationArrows = "solo"), f.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), "on" != f.fullWidth && "on" != f.fullScreen && (f.autoHeight = "off"), "on" == f.fullScreen && (f.autoHeight = "on"), "on" != f.fullWidth && "on" != f.fullScreen && (forceFulWidth = "off"), "on" == f.fullWidth && "off" == f.autoHeight && c.css({
                maxHeight: f.startheight + "px"
            }), V() && "on" == f.hideThumbsOnMobile && "thumb" == f.navigationType && (f.navigationType = "none"), V() && "on" == f.hideBulletsOnMobile && "bullet" == f.navigationType && (f.navigationType = "none"), V() && "on" == f.hideBulletsOnMobile && "both" == f.navigationType && (f.navigationType = "none"), V() && "on" == f.hideArrowsOnMobile && (f.navigationArrows = "none"), "on" == f.forceFullWidth && 0 == c.closest(".forcefullwidth_wrapper_tp_banner").length) {
            var g = c.parent().offset().left,
                i = c.parent().css("marginBottom"),
                n = c.parent().css("marginTop");
            i == b && (i = 0), n == b && (n = 0), c.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:' + n + ";margin-bottom:" + i + '" class="forcefullwidth_wrapper_tp_banner"></div>'), c.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + c.height() + 'px"></div>'), c.css({
                backgroundColor: c.parent().css("backgroundColor"),
                backgroundImage: c.parent().css("backgroundImage")
            }), c.parent().css({
                left: 0 - g + "px",
                position: "absolute",
                width: a(window).width()
            }), f.width = a(window).width()
        }
        try {
            c.parent().find(".tp-bullets.tp-thumbs").css(f.hideThumbsUnderResolution > a(window).width() && 0 != f.hideThumbsUnderResolution ? {
                display: "none"
            } : {
                display: "block"
            })
        } catch (o) {}
        if (!c.hasClass("revslider-initialised")) {
            c.addClass("revslider-initialised"), c.attr("id") == b && c.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), f.firefox13 = !1, f.ie = !a.support.opacity, f.ie9 = 9 == document.documentMode, f.origcd = f.delay; {
                var p = a.fn.jquery.split("."),
                    r = parseFloat(p[0]),
                    s = parseFloat(p[1]);
                parseFloat(p[2] || "0")
            }
            1 == r && s < 7 && c.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + p + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), r > 1 && (f.ie = !1), a.support.transition || (a.fn.transition = a.fn.animate), c.find(".caption").each(function() {
                a(this).addClass("tp-caption")
            }), V() && c.find(".tp-caption").each(function() {
                1 == a(this).data("autoplay") && a(this).data("autoplay", !1)
            });
            var u = 0,
                v = 0,
                x = "http";
            if ("https:" === location.protocol && (x = "https"), c.find(".tp-caption iframe").each(function() {
                    try {
                        if (a(this).attr("src").indexOf("you") > 0 && 0 == u) {
                            u = 1;
                            var c = document.createElement("script"),
                                d = "https";
                            c.src = d + "://www.youtube.com/iframe_api";
                            var e = document.getElementsByTagName("script")[0],
                                f = !0;
                            a("head").find("*").each(function() {
                                a(this).attr("src") == d + "://www.youtube.com/iframe_api" && (f = !1)
                            }), f && e.parentNode.insertBefore(c, e)
                        }
                    } catch (g) {}
                }), c.find(".tp-caption iframe").each(function() {
                    try {
                        if (a(this).attr("src").indexOf("vim") > 0 && 0 == v) {
                            v = 1;
                            var c = document.createElement("script");
                            c.src = x + "://a.vimeocdn.com/js/froogaloop2.min.js";
                            var d = document.getElementsByTagName("script")[0],
                                e = !0;
                            a("head").find("*").each(function() {
                                a(this).attr("src") == x + "://a.vimeocdn.com/js/froogaloop2.min.js" && (e = !1)
                            }), e && d.parentNode.insertBefore(c, d)
                        }
                    } catch (f) {}
                }), c.find(".tp-caption video").each(function() {
                    a(this).removeClass("video-js").removeClass("vjs-default-skin"), a(this).attr("preload", ""), a(this).css({
                        display: "none"
                    })
                }), "on" == f.shuffle)
                for (var z = 0; z < c.find(">ul:first-child >li").length; z++) {
                    var A = Math.round(Math.random() * c.find(">ul:first-child >li").length);
                    c.find(">ul:first-child >li:eq(" + A + ")").prependTo(c.find(">ul:first-child"))
                }
            f.slots = 4, f.act = -1, f.next = 0, f.startWithSlide != b && (f.next = f.startWithSlide);
            var B = d("#")[0];
            if (B.length < 9 && B.split("slide").length > 1) {
                var C = parseInt(B.split("slide")[1], 0);
                C < 1 && (C = 1), C > c.find(">ul:first >li").length && (C = c.find(">ul:first >li").length), f.next = C - 1
            }
            f.firststart = 1, f.navigationHOffset == b && (f.navOffsetHorizontal = 0), f.navigationVOffset == b && (f.navOffsetVertical = 0), c.append('<div class="tp-loader ' + f.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), 0 == c.find(".tp-bannertimer").length && c.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
            var D = c.find(".tp-bannertimer");
            if (D.length > 0 && D.css({
                    width: "0%"
                }), c.addClass("tp-simpleresponsive"), f.container = c, f.slideamount = c.find(">ul:first >li").length, 0 == c.height() && c.height(f.startheight), (f.startwidth == b || 0 == f.startwidth) && (f.startwidth = c.width()), (f.startheight == b || 0 == f.startheight) && (f.startheight = c.height()), f.width = c.width(), f.height = c.height(), f.bw = f.startwidth / c.width(), f.bh = f.startheight / c.height(), f.width != f.startwidth && (f.height = Math.round(f.startheight * (f.width / f.startwidth)), c.height(f.height)), 0 != f.shadow) {
                c.parent().append('<div class="tp-bannershadow tp-shadow' + f.shadow + '"></div>');
                var g = 0;
                "on" == f.forceFullWidth && (g = 0 - f.container.parent().offset().left), c.parent().find(".tp-bannershadow").css({
                    width: f.width,
                    left: g
                })
            }
            c.find("ul").css({
                display: "none"
            });
            c.find("ul").css({
                display: "block"
            }), q(c, f), "off" != f.parallax && _(c, f), f.slideamount > 1 && h(c, f), f.slideamount > 1 && "thumb" == f.navigationType && bb(c, f), f.slideamount > 1 && j(c, f), "on" == f.keyboardNavigation && k(c, f);
            try {
                l(c, f)
            } catch (o) {}
            f.hideThumbs > 0 && m(c, f), y(c, f), f.slideamount > 1 && U(c, f), setTimeout(function() {
                c.trigger("revolution.slide.onloaded")
            }, 500), a("body").data("rs-fullScreenMode", !1), a(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function() {
                a("body").data("rs-fullScreenMode", !a("body").data("rs-fullScreenMode")), a("body").data("rs-fullScreenMode") && setTimeout(function() {
                    a(window).trigger("resize")
                }, 200)
            }), a(window).resize(function() {
                if (0 != a("body").find(c) && "on" == f.forceFullWidth) {
                    var b = f.container.closest(".forcefullwidth_wrapper_tp_banner").offset().left;
                    f.container.parent().css({
                        left: 0 - b + "px",
                        width: a(window).width()
                    })
                }(c.outerWidth(!0) != f.width || c.is(":hidden")) && e(c, f)
            });
            try {
                0 != f.hideThumbsUnderResoluition && "thumb" == f.navigationType && a(".tp-bullets").css(f.hideThumbsUnderResoluition > a(window).width() ? {
                    display: "none"
                } : {
                    display: "block"
                })
            } catch (o) {}
            c.find(".tp-scrollbelowslider").on("click", function() {
                var b = 0;
                try {
                    b = a("body").find(f.fullScreenOffsetContainer).height()
                } catch (d) {}
                try {
                    b -= a(this).data("scrolloffset")
                } catch (d) {}
                a("body,html").animate({
                    scrollTop: c.offset().top + c.find(">ul >li").height() - b + "px"
                }, {
                    duration: 400
                })
            });
            var F = c.parent();
            a(window).width() < f.hideSliderAtLimit && (c.trigger("stoptimer"), "none" != F.css("display") && F.data("olddisplay", F.css("display")), F.css({
                display: "none"
            }))
        }
    }
    a.fn.extend({
        revolution: function(b) {
            return defaults = {
                delay: 9e3,
                startheight: 500,
                startwidth: 960,
                fullScreenAlignForce: "off",
                autoHeight: "off",
                hideTimerBar: "off",
                hideThumbs: 200,
                hideNavDelayOnMobile: 1500,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 3,
                navigationType: "bullet",
                navigationArrows: "solo",
                navigationInGrid: "off",
                hideThumbsOnMobile: "off",
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResoluition: 0,
                navigationStyle: "round",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                keyboardNavigation: "on",
                touchenabled: "on",
                onHoverStop: "on",
                stopAtSlide: -1,
                stopAfterLoops: -1,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLimit: 0,
                hideSliderAtLimit: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "off",
                minFullScreenHeight: 0,
                fullScreenOffsetContainer: "",
                dottedOverlay: "none",
                forceFullWidth: "off",
                spinner: "spinner0",
                swipe_velocity: .4,
                swipe_max_touches: 1,
                swipe_min_touches: 1,
                drag_block_vertical: !1,
                isJoomla: !1,
                parallax: "off",
                parallaxLevels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                parallaxBgFreeze: "off",
                parallaxOpacity: "on"
            }, b = a.extend({}, defaults, b), this.each(function() {
                c(a(this), b)
            })
        },
        revscroll: function(b) {
            return this.each(function() {
                var c = a(this);
                a("body,html").animate({
                    scrollTop: c.offset().top + c.find(">ul >li").height() - b + "px"
                }, {
                    duration: 400
                })
            })
        },
        revredraw: function() {
            return this.each(function() {
                var b = a(this),
                    c = b.parent().find(".tp-bannertimer"),
                    d = c.data("opt");
                e(b, d)
            })
        },
        revpause: function() {
            return this.each(function() {
                var b = a(this);
                b.data("conthover", 1), b.data("conthover-changed", 1), b.trigger("revolution.slide.onpause");
                var c = b.parent().find(".tp-bannertimer"),
                    d = c.data("opt");
                d.bannertimeronpause = !0, b.trigger("stoptimer")
            })
        },
        revresume: function() {
            return this.each(function() {
                var b = a(this);
                b.data("conthover", 0), b.data("conthover-changed", 1), b.trigger("revolution.slide.onresume");
                var c = b.parent().find(".tp-bannertimer"),
                    d = c.data("opt");
                d.bannertimeronpause = !1, b.trigger("starttimer")
            })
        },
        revnext: function() {
            return this.each(function() {
                var b = a(this);
                b.parent().find(".tp-rightarrow").click()
            })
        },
        revprev: function() {
            return this.each(function() {
                var b = a(this);
                b.parent().find(".tp-leftarrow").click()
            })
        },
        revmaxslide: function() {
            return a(this).find(">ul:first-child >li").length
        },
        revcurrentslide: function() {
            var c = a(this),
                d = c.parent().find(".tp-bannertimer"),
                e = d.data("opt");
            return e.act
        },
        revlastslide: function() {
            var c = a(this),
                d = c.parent().find(".tp-bannertimer"),
                e = d.data("opt");
            return e.lastslide
        },
        revshowslide: function(b) {
            return this.each(function() {
                var c = a(this);
                c.data("showus", b), c.parent().find(".tp-rightarrow").click()
            })
        }
    });
    var d = function(a) {
            for (var c, b = [], d = window.location.href.slice(window.location.href.indexOf(a) + 1).split("_"), e = 0; e < d.length; e++) d[e] = d[e].replace("%3D", "="), c = d[e].split("="), b.push(c[0]), b[c[0]] = c[1];
            return b
        },
        e = function(c, d) {
            try {
                0 != d.hideThumbsUnderResoluition && "thumb" == d.navigationType && a(".tp-bullets").css(d.hideThumbsUnderResoluition > a(window).width() ? {
                    display: "none"
                } : {
                    display: "block"
                })
            } catch (f) {}
            c.find(".defaultimg").each(function() {
                p(a(this), d)
            });
            var g = c.parent();
            a(window).width() < d.hideSliderAtLimit ? (c.trigger("stoptimer"), "none" != g.css("display") && g.data("olddisplay", g.css("display")), g.css({
                display: "none"
            })) : c.is(":hidden") && (g.css(g.data("olddisplay") != b && "undefined" != g.data("olddisplay") && "none" != g.data("olddisplay") ? {
                display: g.data("olddisplay")
            } : {
                display: "block"
            }), c.trigger("restarttimer"), setTimeout(function() {
                e(c, d)
            }, 150));
            var h = 0;
            "on" == d.forceFullWidth && (h = 0 - d.container.parent().offset().left);
            try {
                c.parent().find(".tp-bannershadow").css({
                    width: d.width,
                    left: h
                })
            } catch (f) {}
            var i = c.find(">ul >li:eq(" + d.act + ") .slotholder"),
                j = c.find(">ul >li:eq(" + d.next + ") .slotholder");
            u(c, d), j.find(".defaultimg").css({
                opacity: 0
            }), i.find(".defaultimg").css({
                opacity: 1
            }), j.find(".defaultimg").each(function() {
                var e = a(this);
                e.data("kenburn") != b && (e.data("kenburn").restart(), X(c, d, !0))
            });
            var k = c.find(">ul >li:eq(" + d.next + ")"),
                l = c.parent().find(".tparrows");
            l.hasClass("preview2") && l.css({
                width: parseInt(l.css("minWidth"), 0)
            }), K(k, d, !0), n(c, d)
        },
        f = function(b, c) {
            var d = a('<div style="display:none;"/>').appendTo(a("body"));
            d.html("<!--[if " + (c || "") + " IE " + (b || "") + "]><a>&nbsp;</a><![endif]-->");
            var e = d.find("a").length;
            return d.remove(), e
        },
        g = function(a, b) {
            y(b, a)
        },
        h = function(b, c) {
            var d = "hidebullets";
            0 == c.hideThumbs && (d = ""), ("bullet" == c.navigationType || "both" == c.navigationType) && b.parent().append('<div class="tp-bullets ' + d + " simplebullets " + c.navigationStyle + '"></div>');
            var e = b.parent().find(".tp-bullets");
            b.find(">ul:first >li").each(function(a) {
                b.find(">ul:first >li:eq(" + a + ") img:first").attr("src");
                e.append('<div class="bullet"></div>');
                e.find(".bullet:first")
            }), e.find(".bullet").each(function(d) {
                var e = a(this);
                d == c.slideamount - 1 && e.addClass("last"), 0 == d && e.addClass("first"), e.click(function() {
                    var a = !1;
                    "withbullet" == c.navigationArrows || "nexttobullets" == c.navigationArrows ? e.index() - 1 == c.act && (a = !0) : e.index() == c.act && (a = !0), 0 != c.transition || a || (c.next = "withbullet" == c.navigationArrows || "nexttobullets" == c.navigationArrows ? e.index() - 1 : e.index(), g(c, b))
                })
            }), e.append('<div class="tpclear"></div>'), n(b, c)
        },
        j = function(a, c) {
            var e = (a.find(".tp-bullets"), ""),
                f = "hidearrows";
            0 == c.hideThumbs && (f = "");
            var h = c.navigationStyle;
            "none" == c.navigationArrows && (e = "visibility:hidden;display:none"), c.soloArrowStyle = "default " + c.navigationStyle, "none" != c.navigationArrows && "nexttobullets" != c.navigationArrows && (h = c.soloArrowStyle), a.parent().append('<div style="' + e + '" class="tp-leftarrow ' + f + " tparrows " + h + '"><div class="tp-arr-allwrapper"><div class="tp-arr-iwrapper"><div class="tp-arr-imgholder"></div><div class="tp-arr-imgholder2"></div><div class="tp-arr-titleholder"></div><div class="tp-arr-subtitleholder"></div></div></div></div>'), a.parent().append('<div style="' + e + '" class="tp-rightarrow ' + f + " tparrows " + h + '"><div class="tp-arr-allwrapper"><div class="tp-arr-iwrapper"><div class="tp-arr-imgholder"></div><div class="tp-arr-imgholder2"></div><div class="tp-arr-titleholder"></div><div class="tp-arr-subtitleholder"></div></div></div></div>'), a.parent().find(".tp-rightarrow").click(function() {
                0 == c.transition && (c.next = a.data("showus") != b && -1 != a.data("showus") ? a.data("showus") - 1 : c.next + 1, a.data("showus", -1), c.next >= c.slideamount && (c.next = 0), c.next < 0 && (c.next = 0), c.act != c.next && g(c, a))
            }), a.parent().find(".tp-leftarrow").click(function() {
                0 == c.transition && (c.next = c.next - 1, c.leftarrowpressed = 1, c.next < 0 && (c.next = c.slideamount - 1), g(c, a))
            }), n(a, c)
        },
        k = function(c, d) {
            a(document).keydown(function(a) {
                0 == d.transition && 39 == a.keyCode && (d.next = c.data("showus") != b && -1 != c.data("showus") ? c.data("showus") - 1 : d.next + 1, c.data("showus", -1), d.next >= d.slideamount && (d.next = 0), d.next < 0 && (d.next = 0), d.act != d.next && g(d, c)), 0 == d.transition && 37 == a.keyCode && (d.next = d.next - 1, d.leftarrowpressed = 1, d.next < 0 && (d.next = d.slideamount - 1), g(d, c))
            }), n(c, d)
        },
        l = function(b, c) {
            if ("on" == c.touchenabled) {
                var d = Hammer(b, {
                    drag_block_vertical: c.drag_block_vertical,
                    drag_lock_to_axis: !0,
                    swipe_velocity: c.swipe_velocity,
                    swipe_max_touches: c.swipe_max_touches,
                    swipe_min_touches: c.swipe_min_touches,
                    prevent_default: !1
                });
                d.on("swipeleft", function() {
                    0 == c.transition && (c.next = c.next + 1, c.next == c.slideamount && (c.next = 0), g(c, b))
                }), d.on("swiperight", function() {
                    0 == c.transition && (c.next = c.next - 1, c.leftarrowpressed = 1, c.next < 0 && (c.next = c.slideamount - 1), g(c, b))
                }), d.on("swipeup", function() {
                    a("html, body").animate({
                        scrollTop: b.offset().top + b.height() + "px"
                    })
                }), d.on("swipedown", function() {
                    a("html, body").animate({
                        scrollTop: b.offset().top - a(window).height() + "px"
                    })
                })
            }
        },
        m = function(a, b) {
            var c = a.parent().find(".tp-bullets"),
                d = a.parent().find(".tparrows");
            if (null == c) {
                a.append('<div class=".tp-bullets"></div>');
                var c = a.parent().find(".tp-bullets")
            }
            if (null == d) {
                a.append('<div class=".tparrows"></div>');
                var d = a.parent().find(".tparrows")
            }
            a.data("hideThumbs", b.hideThumbs), c.addClass("hidebullets"), d.addClass("hidearrows"), V() ? (a.hammer().on("touch", function() {
                a.addClass("hovered"), "on" == b.onHoverStop && a.trigger("stoptimer"), clearTimeout(a.data("hideThumbs")), c.removeClass("hidebullets"), d.removeClass("hidearrows")
            }), a.hammer().on("release", function() {
                a.removeClass("hovered"), a.trigger("playtimer"), a.hasClass("hovered") || c.hasClass("hovered") || a.data("hideThumbs", setTimeout(function() {
                    c.addClass("hidebullets"), d.addClass("hidearrows"), a.trigger("playtimer")
                }, b.hideNavDelayOnMobile))
            })) : (c.hover(function() {
                b.overnav = !0, "on" == b.onHoverStop && a.trigger("stoptimer"), c.addClass("hovered"), clearTimeout(a.data("hideThumbs")), c.removeClass("hidebullets"), d.removeClass("hidearrows")
            }, function() {
                b.overnav = !1, a.trigger("playtimer"), c.removeClass("hovered"), a.hasClass("hovered") || c.hasClass("hovered") || a.data("hideThumbs", setTimeout(function() {
                    c.addClass("hidebullets"), d.addClass("hidearrows")
                }, b.hideThumbs))
            }), d.hover(function() {
                b.overnav = !0, "on" == b.onHoverStop && a.trigger("stoptimer"), c.addClass("hovered"), clearTimeout(a.data("hideThumbs")), c.removeClass("hidebullets"), d.removeClass("hidearrows")
            }, function() {
                b.overnav = !1, a.trigger("playtimer"), c.removeClass("hovered")
            }), a.on("mouseenter", function() {
                a.addClass("hovered"), "on" == b.onHoverStop && a.trigger("stoptimer"), clearTimeout(a.data("hideThumbs")), c.removeClass("hidebullets"), d.removeClass("hidearrows")
            }), a.on("mouseleave", function() {
                a.removeClass("hovered"), a.trigger("playtimer"), a.hasClass("hovered") || c.hasClass("hovered") || a.data("hideThumbs", setTimeout(function() {
                    c.addClass("hidebullets"), d.addClass("hidearrows")
                }, b.hideThumbs))
            }))
        },
        n = function(b, c) {
            var d = b.parent(),
                e = d.find(".tp-bullets");
            if ("thumb" == c.navigationType) {
                e.find(".thumb").each(function() {
                    var d = a(this);
                    d.css({
                        width: c.thumbWidth * c.bw + "px",
                        height: c.thumbHeight * c.bh + "px"
                    })
                });
                var f = e.find(".tp-mask");
                f.width(c.thumbWidth * c.thumbAmount * c.bw), f.height(c.thumbHeight * c.bh), f.parent().width(c.thumbWidth * c.thumbAmount * c.bw), f.parent().height(c.thumbHeight * c.bh)
            }
            var g = d.find(".tp-leftarrow"),
                h = d.find(".tp-rightarrow");
            "thumb" == c.navigationType && "nexttobullets" == c.navigationArrows && (c.navigationArrows = "solo"), "nexttobullets" == c.navigationArrows && (g.prependTo(e).css({
                "float": "left"
            }), h.insertBefore(e.find(".tpclear")).css({
                "float": "left"
            }));
            var i = 0;
            "on" == c.forceFullWidth && (i = 0 - c.container.parent().offset().left);
            var j = 0,
                k = 0;
            "on" == c.navigationInGrid && (j = b.width() > c.startwidth ? (b.width() - c.startwidth) / 2 : 0, k = b.height() > c.startheight ? (b.height() - c.startheight) / 2 : 0), "none" != c.navigationArrows && "nexttobullets" != c.navigationArrows && (g.css({
                position: "absolute"
            }), h.css({
                position: "absolute"
            }), "center" == c.soloArrowLeftValign && g.css({
                top: "50%",
                marginTop: c.soloArrowLeftVOffset - Math.round(g.innerHeight() / 2) + "px"
            }), "bottom" == c.soloArrowLeftValign && g.css({
                top: "auto",
                bottom: 0 + c.soloArrowLeftVOffset + "px"
            }), "top" == c.soloArrowLeftValign && g.css({
                bottom: "auto",
                top: 0 + c.soloArrowLeftVOffset + "px"
            }), "center" == c.soloArrowLeftHalign && g.css({
                left: "50%",
                marginLeft: i + c.soloArrowLeftHOffset - Math.round(g.innerWidth() / 2) + "px"
            }), "left" == c.soloArrowLeftHalign && g.css({
                left: j + c.soloArrowLeftHOffset + i + "px"
            }), "right" == c.soloArrowLeftHalign && g.css({
                right: j + c.soloArrowLeftHOffset - i + "px"
            }), "center" == c.soloArrowRightValign && h.css({
                top: "50%",
                marginTop: c.soloArrowRightVOffset - Math.round(h.innerHeight() / 2) + "px"
            }), "bottom" == c.soloArrowRightValign && h.css({
                top: "auto",
                bottom: 0 + c.soloArrowRightVOffset + "px"
            }), "top" == c.soloArrowRightValign && h.css({
                bottom: "auto",
                top: 0 + c.soloArrowRightVOffset + "px"
            }), "center" == c.soloArrowRightHalign && h.css({
                left: "50%",
                marginLeft: i + c.soloArrowRightHOffset - Math.round(h.innerWidth() / 2) + "px"
            }), "left" == c.soloArrowRightHalign && h.css({
                left: j + c.soloArrowRightHOffset + i + "px"
            }), "right" == c.soloArrowRightHalign && h.css({
                right: j + c.soloArrowRightHOffset - i + "px"
            }), null != g.position() && g.css({
                top: Math.round(parseInt(g.position().top, 0)) + "px"
            }), null != h.position() && h.css({
                top: Math.round(parseInt(h.position().top, 0)) + "px"
            })), "none" == c.navigationArrows && (g.css({
                visibility: "hidden"
            }), h.css({
                visibility: "hidden"
            })), "center" == c.navigationVAlign && e.css({
                top: "50%",
                marginTop: c.navigationVOffset - Math.round(e.innerHeight() / 2) + "px"
            }), "bottom" == c.navigationVAlign && e.css({
                bottom: 0 + c.navigationVOffset + "px"
            }), "top" == c.navigationVAlign && e.css({
                top: 0 + c.navigationVOffset + "px"
            }), "center" == c.navigationHAlign && e.css({
                left: "50%",
                marginLeft: i + c.navigationHOffset - Math.round(e.innerWidth() / 2) + "px"
            }), "left" == c.navigationHAlign && e.css({
                left: 0 + c.navigationHOffset + i + "px"
            }), "right" == c.navigationHAlign && e.css({
                right: 0 + c.navigationHOffset - i + "px"
            })
        },
        o = function(c) {
            var d = c.container;
            c.beforli = c.next - 1, c.comingli = c.next + 1, c.beforli < 0 && (c.beforli = c.slideamount - 1), c.comingli >= c.slideamount && (c.comingli = 0);
            var e = d.find(">ul:first-child >li:eq(" + c.comingli + ")"),
                f = d.find(">ul:first-child >li:eq(" + c.beforli + ")"),
                g = f.find(".defaultimg").attr("src"),
                h = e.find(".defaultimg").attr("src");
            c.arr == b && (c.arr = d.parent().find(".tparrows"), c.rar = d.parent().find(".tp-rightarrow"), c.lar = d.parent().find(".tp-leftarrow"), c.raimg = c.rar.find(".tp-arr-imgholder"), c.laimg = c.lar.find(".tp-arr-imgholder"), c.raimg_b = c.rar.find(".tp-arr-imgholder2"), c.laimg_b = c.lar.find(".tp-arr-imgholder2"), c.ratit = c.rar.find(".tp-arr-titleholder"), c.latit = c.lar.find(".tp-arr-titleholder"));
            var i = c.arr,
                j = c.rar,
                k = c.lar,
                l = c.raimg,
                m = c.laimg,
                n = c.raimg_b,
                o = c.laimg_b,
                p = c.ratit,
                q = c.latit;
            e.data("title") != b && p.html(e.data("title")), f.data("title") != b && q.html(f.data("title")), j.hasClass("itishovered") && j.width(p.outerWidth(!0) + parseInt(j.css("minWidth"), 0)), k.hasClass("itishovered") && k.width(q.outerWidth(!0) + parseInt(k.css("minWidth"), 0)), i.hasClass("preview2") && !i.hasClass("hashoveralready") && (i.addClass("hashoveralready"), i.hover(function() {
                var b = a(this),
                    c = b.find(".tp-arr-titleholder");
                b.width(c.outerWidth(!0) + parseInt(b.css("minWidth"), 0)), b.addClass("itishovered")
            }, function() {
                {
                    var b = a(this);
                    b.find(".tp-arr-titleholder")
                }
                b.css({
                    width: parseInt(b.css("minWidth"), 0)
                }), b.removeClass("itishovered")
            })), f.data("thumb") != b && (g = f.data("thumb")), e.data("thumb") != b && (h = e.data("thumb")), i.hasClass("preview4") ? (n.css({
                backgroundImage: "url(" + h + ")"
            }), o.css({
                backgroundImage: "url(" + g + ")"
            }), TweenLite.fromTo(n, .8, {
                force3D: !0,
                x: 0
            }, {
                x: -l.width(),
                ease: Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    l.css({
                        backgroundImage: "url(" + h + ")"
                    }), TweenLite.set(n, {
                        x: 0
                    })
                }
            }), TweenLite.fromTo(o, .8, {
                force3D: !0,
                x: 0
            }, {
                x: l.width(),
                ease: Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    m.css({
                        backgroundImage: "url(" + g + ")"
                    }), TweenLite.set(o, {
                        x: 0
                    })
                }
            }), TweenLite.fromTo(l, .8, {
                x: 0
            }, {
                force3D: !0,
                x: -l.width(),
                ease: Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    TweenLite.set(l, {
                        x: 0
                    })
                }
            }), TweenLite.fromTo(m, .8, {
                x: 0
            }, {
                force3D: !0,
                x: l.width(),
                ease: Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    TweenLite.set(m, {
                        x: 0
                    })
                }
            })) : (TweenLite.to(l, .5, {
                autoAlpha: 0,
                onComplete: function() {
                    l.css({
                        backgroundImage: "url(" + h + ")"
                    }), m.css({
                        backgroundImage: "url(" + g + ")"
                    })
                }
            }), TweenLite.to(m, .5, {
                autoAlpha: 0,
                onComplete: function() {
                    TweenLite.to(l, .5, {
                        autoAlpha: 1,
                        delay: .2
                    }), TweenLite.to(m, .5, {
                        autoAlpha: 1,
                        delay: .2
                    })
                }
            })), j.hasClass("preview4") && !j.hasClass("hashoveralready") && (j.addClass("hashoveralready"), j.hover(function() {
                var b = a(this).find(".tp-arr-iwrapper"),
                    c = a(this).find(".tp-arr-allwrapper");
                TweenLite.fromTo(b, .4, {
                    x: b.width()
                }, {
                    x: 0,
                    delay: .3,
                    ease: Power3.easeOut,
                    overwrite: "all"
                }), TweenLite.to(c, .2, {
                    autoAlpha: 1,
                    overwrite: "all"
                })
            }, function() {
                var b = a(this).find(".tp-arr-iwrapper"),
                    c = a(this).find(".tp-arr-allwrapper");
                TweenLite.to(b, .4, {
                    x: b.width(),
                    ease: Power3.easeOut,
                    delay: .2,
                    overwrite: "all"
                }), TweenLite.to(c, .2, {
                    delay: .6,
                    autoAlpha: 0,
                    overwrite: "all"
                })
            }), k.hover(function() {
                var b = a(this).find(".tp-arr-iwrapper"),
                    c = a(this).find(".tp-arr-allwrapper");
                TweenLite.fromTo(b, .4, {
                    x: 0 - b.width()
                }, {
                    x: 0,
                    delay: .3,
                    ease: Power3.easeOut,
                    overwrite: "all"
                }), TweenLite.to(c, .2, {
                    autoAlpha: 1,
                    overwrite: "all"
                })
            }, function() {
                var b = a(this).find(".tp-arr-iwrapper"),
                    c = a(this).find(".tp-arr-allwrapper");
                TweenLite.to(b, .4, {
                    x: 0 - b.width(),
                    ease: Power3.easeOut,
                    delay: .2,
                    overwrite: "all"
                }), TweenLite.to(c, .2, {
                    delay: .6,
                    autoAlpha: 0,
                    overwrite: "all"
                })
            }))
        },
        p = function(c, d) {
            if (d.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css({
                    height: d.container.height()
                }), d.container.closest(".rev_slider_wrapper").css({
                    height: d.container.height()
                }), d.width = parseInt(d.container.width(), 0), d.height = parseInt(d.container.height(), 0), d.bw = d.width / d.startwidth, d.bh = d.height / d.startheight, d.bh > d.bw && (d.bh = d.bw), d.bh < d.bw && (d.bw = d.bh), d.bw < d.bh && (d.bh = d.bw), d.bh > 1 && (d.bw = 1, d.bh = 1), d.bw > 1 && (d.bw = 1, d.bh = 1), d.height = Math.round(d.startheight * (d.width / d.startwidth)), d.height > d.startheight && "on" != d.autoHeight && (d.height = d.startheight), "on" == d.fullScreen) {
                d.height = d.bw * d.startheight;
                var f = (d.container.parent().width(), a(window).height());
                if (d.fullScreenOffsetContainer != b) try {
                    var g = d.fullScreenOffsetContainer.split(",");
                    a.each(g, function(b, c) {
                        f -= a(c).outerHeight(!0), f < d.minFullScreenHeight && (f = d.minFullScreenHeight)
                    })
                } catch (h) {}
                d.container.parent().height(f), d.container.css({
                    height: "100%"
                }), d.height = f
            } else d.container.height(d.height);
            d.slotw = Math.ceil(d.width / d.slots), d.sloth = Math.ceil("on" == d.fullSreen ? a(window).height() / d.slots : d.height / d.slots), "on" == d.autoHeight && (d.sloth = Math.ceil(c.height() / d.slots))
        },
        q = function(c, d) {
            c.find(".tp-caption").each(function() {
                a(this).addClass(a(this).data("transition")), a(this).addClass("start")
            }), c.find(">ul:first").css({
                overflow: "hidden",
                width: "100%",
                height: "100%",
                maxHeight: c.parent().css("maxHeight")
            }), "on" == d.autoHeight && (c.find(">ul:first").css({
                overflow: "hidden",
                width: "100%",
                height: "100%",
                maxHeight: "none"
            }), c.css({
                maxHeight: "none"
            }), c.parent().css({
                maxHeight: "none"
            })), c.find(">ul:first >li").each(function() {
                var d = a(this);
                if (d.css({
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    }), d.data("link") != b) {
                    var e = d.data("link"),
                        f = "_self",
                        g = 60;
                    "back" == d.data("slideindex") && (g = 0);
                    var h = d.data("linktoslide");
                    d.data("target") != b && (f = d.data("target")), "slide" == e ? d.append('<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' + g + ';" data-x="0" data-y="0" data-linktoslide="' + h + '" data-start="0"><a style="width:100%;height:100%;display:block"><span style="width:100%;height:100%;display:block"></span></a></div>') : (h = "no", d.append('<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' + g + ';" data-x="0" data-y="0" data-linktoslide="' + h + '" data-start="0"><a style="width:100%;height:100%;display:block" target="' + f + '" href="' + e + '"><span style="width:100%;height:100%;display:block"></span></a></div>'))
                }
            }), c.parent().css({
                overflow: "visible"
            }), c.find(">ul:first >li >img").each(function(c) {
                var e = a(this);
                e.addClass("defaultimg"), e.data("lazyload") != b && 1 != e.data("lazydone") || p(e, d), e.wrap('<div class="slotholder" style="width:100%;height:100%;"data-duration="' + e.data("duration") + '"data-zoomstart="' + e.data("zoomstart") + '"data-zoomend="' + e.data("zoomend") + '"data-rotationstart="' + e.data("rotationstart") + '"data-rotationend="' + e.data("rotationend") + '"data-ease="' + e.data("ease") + '"data-duration="' + e.data("duration") + '"data-bgpositionend="' + e.data("bgpositionend") + '"data-bgposition="' + e.data("bgposition") + '"data-duration="' + e.data("duration") + '"data-kenburns="' + e.data("kenburns") + '"data-easeme="' + e.data("ease") + '"data-bgfit="' + e.data("bgfit") + '"data-bgfitend="' + e.data("bgfitend") + '"data-owidth="' + e.data("owidth") + '"data-oheight="' + e.data("oheight") + '"></div>'), "none" != d.dottedOverlay && d.dottedOverlay != b && e.closest(".slotholder").append('<div class="tp-dottedoverlay ' + d.dottedOverlay + '"></div>');
                var g = e.attr("src"),
                    i = (e.data("lazyload"), e.data("bgfit")),
                    j = e.data("bgrepeat"),
                    k = e.data("bgposition");
                i == b && (i = "cover"), j == b && (j = "no-repeat"), k == b && (k = "center center");
                var l = e.closest(".slotholder");
                e.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="' + e.data("lazyload") + '" data-bgfit="' + i + '"data-bgposition="' + k + '" data-bgrepeat="' + j + '" data-lazydone="' + e.data("lazydone") + '" src="' + g + '" data-src="' + g + '" style="background-color:' + e.css("backgroundColor") + ";background-repeat:" + j + ";background-image:url(" + g + ");background-size:" + i + ";background-position:" + k + ';width:100%;height:100%;"></div>'), f(8) && (l.find(".tp-bgimg").css({
                    backgroundImage: "none",
                    "background-image": "none"
                }), l.find(".tp-bgimg").append('<img class="ieeightfallbackimage defaultimg" src="' + g + '" style="width:100%">')), e.css({
                    opacity: 0
                }), e.data("li-id", c)
            })
        },
        r = function(a, c, d, e) {
            var g = a,
                h = g.find(".defaultimg"),
                i = g.data("zoomstart"),
                j = g.data("rotationstart");
            h.data("currotate") != b && (j = h.data("currotate")), h.data("curscale") != b && (i = h.data("curscale")), p(h, c);
            var k = h.data("src"),
                l = h.css("background-color"),
                m = c.width,
                n = c.height;
            "on" == c.autoHeight && (n = c.container.height());
            var o = h.data("fxof");
            o == b && (o = 0), fullyoff = 0;
            var q = 0,
                r = h.data("bgfit"),
                s = h.data("bgrepeat"),
                u = h.data("bgposition");
            if (r == b && (r = "cover"), s == b && (s = "no-repeat"), u == b && (u = "center center"), f(8) && g.data("kenburns", "off"), "on" == g.data("kenburns") && (r = i, r.toString().length < 4 && (r = W(r, g, c))), f(8)) {
                var v = k;
                k = ""
            }
            if ("horizontal" == e) {
                if (!d) var q = 0 - c.slotw;
                for (var w = 0; w < c.slots; w++) g.append('<div class="slot" style="position:absolute;top:' + (0 + fullyoff) + "px;left:" + (o + w * c.slotw) + "px;overflow:hidden;width:" + (c.slotw + .6) + "px;height:" + n + 'px"><div class="slotslide" style="position:absolute;top:0px;left:' + q + "px;width:" + (c.slotw + .6) + "px;height:" + n + 'px;overflow:hidden;"><div style="background-color:' + l + ";position:absolute;top:0px;left:" + (0 - w * c.slotw) + "px;width:" + m + "px;height:" + n + "px;background-image:url(" + k + ");background-repeat:" + s + ";background-size:" + r + ";background-position:" + u + ';"></div></div></div>'), i != b && j != b && TweenLite.set(g.find(".slot").last(), {
                    rotationZ: j
                }), f(8) && (g.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + v + '" style="width:100%;height:auto">'), t(g, c))
            } else {
                if (!d) var q = 0 - c.sloth;
                for (var w = 0; w < c.slots + 2; w++) g.append('<div class="slot" style="position:absolute;top:' + (fullyoff + w * c.sloth) + "px;left:" + o + "px;overflow:hidden;width:" + m + "px;height:" + c.sloth + 'px"><div class="slotslide" style="position:absolute;top:' + q + "px;left:0px;width:" + m + "px;height:" + c.sloth + 'px;overflow:hidden;"><div style="background-color:' + l + ";position:absolute;top:" + (0 - w * c.sloth) + "px;left:0px;width:" + m + "px;height:" + n + "px;background-image:url(" + k + ");background-repeat:" + s + ";background-size:" + r + ";background-position:" + u + ';"></div></div></div>'), i != b && j != b && TweenLite.set(g.find(".slot").last(), {
                    rotationZ: j
                }), f(8) && (g.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + v + '" style="width:100%;height:auto;">'), t(g, c))
            }
        },
        s = function(a, c, d) {
            var e = a,
                g = e.find(".defaultimg"),
                h = e.data("zoomstart"),
                i = e.data("rotationstart");
            g.data("currotate") != b && (i = g.data("currotate")), g.data("curscale") != b && (h = 100 * g.data("curscale")), p(g, c);
            var j = g.data("src"),
                k = g.css("backgroundColor"),
                l = c.width,
                m = c.height;
            "on" == c.autoHeight && (m = c.container.height());
            var n = g.data("fxof");
            n == b && (n = 0), fullyoff = 0;
            if (f(8)) {
                var q = j;
                j = ""
            }
            var r = 0;
            if (r = c.sloth > c.slotw ? c.sloth : c.slotw, !d);
            c.slotw = r, c.sloth = r;
            var s = 0,
                u = 0,
                v = g.data("bgfit"),
                w = g.data("bgrepeat"),
                x = g.data("bgposition");
            v == b && (v = "cover"), w == b && (w = "no-repeat"), x == b && (x = "center center"), "on" == e.data("kenburns") && (v = h, v.toString().length < 4 && (v = W(v, e, c)));
            for (var y = 0; y < c.slots; y++) {
                u = 0;
                for (var z = 0; z < c.slots; z++) e.append('<div class="slot" style="position:absolute;top:' + (fullyoff + u) + "px;left:" + (n + s) + "px;width:" + r + "px;height:" + r + 'px;overflow:hidden;"><div class="slotslide" data-x="' + s + '" data-y="' + u + '" style="position:absolute;top:0px;left:0px;width:' + r + "px;height:" + r + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - u) + "px;left:" + (0 - s) + "px;width:" + l + "px;height:" + m + "px;background-color:" + k + ";background-image:url(" + j + ");background-repeat:" + w + ";background-size:" + v + ";background-position:" + x + ';"></div></div></div>'), u += r, f(8) && (e.find(".slot ").last().find(".slotslide").append('<img src="' + q + '">'), t(e, c)), h != b && i != b && TweenLite.set(e.find(".slot").last(), {
                    rotationZ: i
                });
                s += r
            }
        },
        t = function(a, b) {
            if (f(8)) {
                {
                    var c = a.find(".ieeightfallbackimage");
                    c.width(), c.height()
                }
                c.css(b.startwidth / b.startheight < a.data("owidth") / a.data("oheight") ? {
                    width: "auto",
                    height: "100%"
                } : {
                    width: "100%",
                    height: "auto"
                }), setTimeout(function() {
                    var d = c.width(),
                        e = c.height();
                    "center center" == a.data("bgposition") && c.css({
                        position: "absolute",
                        top: b.height / 2 - e / 2 + "px",
                        left: b.width / 2 - d / 2 + "px"
                    }), ("center top" == a.data("bgposition") || "top center" == a.data("bgposition")) && c.css({
                        position: "absolute",
                        top: "0px",
                        left: b.width / 2 - d / 2 + "px"
                    }), ("center bottom" == a.data("bgposition") || "bottom center" == a.data("bgposition")) && c.css({
                        position: "absolute",
                        bottom: "0px",
                        left: b.width / 2 - d / 2 + "px"
                    }), ("right top" == a.data("bgposition") || "top right" == a.data("bgposition")) && c.css({
                        position: "absolute",
                        top: "0px",
                        right: "0px"
                    }), ("right bottom" == a.data("bgposition") || "bottom right" == a.data("bgposition")) && c.css({
                        position: "absolute",
                        bottom: "0px",
                        right: "0px"
                    }), ("right center" == a.data("bgposition") || "center right" == a.data("bgposition")) && c.css({
                        position: "absolute",
                        top: b.height / 2 - e / 2 + "px",
                        right: "0px"
                    }), ("left bottom" == a.data("bgposition") || "bottom left" == a.data("bgposition")) && c.css({
                        position: "absolute",
                        bottom: "0px",
                        left: "0px"
                    }), ("left center" == a.data("bgposition") || "center left" == a.data("bgposition")) && c.css({
                        position: "absolute",
                        top: b.height / 2 - e / 2 + "px",
                        left: "0px"
                    })
                }, 20)
            }
        },
        u = function(c, d, e) {
            setTimeout(function() {
                c.find(".slotholder .slot").each(function() {
                    clearTimeout(a(this).data("tout")), a(this).remove()
                }), d.transition = 0
            }, e)
        },
        v = function(c, d) {
            c.find("img, .defaultimg").each(function() {
                var e = a(this);
                if (e.data("lazyload") != e.attr("src") && d < 3 && e.data("lazyload") != b && "undefined" != e.data("lazyload")) {
                    if (e.data("lazyload") != b && "undefined" != e.data("lazyload")) {
                        e.attr("src", e.data("lazyload"));
                        var f = new Image;
                        f.onload = function() {
                            e.data("lazydone", 1), e.hasClass("defaultimg") && w(e, f)
                        }, f.error = function() {
                            e.data("lazydone", 1)
                        }, f.src = e.attr("src"), f.complete && (e.hasClass("defaultimg") && w(e, f), e.data("lazydone", 1))
                    }
                } else if ((e.data("lazyload") === b || "undefined" === e.data("lazyload")) && 1 != e.data("lazydone")) {
                    var f = new Image;
                    f.onload = function() {
                        e.hasClass("defaultimg") && w(e, f), e.data("lazydone", 1)
                    }, f.error = function() {
                        e.data("lazydone", 1)
                    }, f.src = e.attr("src") != b && "undefined" != e.attr("src") ? e.attr("src") : e.data("src"), f.complete && (e.hasClass("defaultimg") && w(e, f), e.data("lazydone", 1))
                }
            })
        },
        w = function(a, b) {
            var c = a.closest("li"),
                d = b.width,
                e = b.height;
            c.data("owidth", d), c.data("oheight", e), c.find(".slotholder").data("owidth", d), c.find(".slotholder").data("oheight", e), c.data("loadeddone", 1)
        },
        x = function(c, d, e) {
            v(c, 0);
            var f = setInterval(function() {
                e.bannertimeronpause = !0, e.container.trigger("stoptimer"), e.cd = 0;
                var g = 0;
                c.find("img, .defaultimg").each(function() {
                    1 != a(this).data("lazydone") && g++
                }), g > 0 ? v(c, g) : (clearInterval(f), d != b && d())
            }, 100)
        },
        y = function(a, c) {
            try {
                {
                    a.find(">ul:first-child >li:eq(" + c.act + ")")
                }
            } catch (e) {
                {
                    a.find(">ul:first-child >li:eq(1)")
                }
            }
            c.lastslide = c.act;
            var g = a.find(">ul:first-child >li:eq(" + c.next + ")"),
                h = g.find(".defaultimg");
            c.bannertimeronpause = !0, a.trigger("stoptimer"), c.cd = 0, h.data("lazyload") != b && "undefined" != h.data("lazyload") && 1 != h.data("lazydone") ? (f(8) ? h.attr("src", g.find(".defaultimg").data("lazyload")) : h.css({
                backgroundImage: 'url("' + g.find(".defaultimg").data("lazyload") + '")'
            }), h.data("src", g.find(".defaultimg").data("lazyload")), h.data("lazydone", 1), h.data("orgw", 0), g.data("loadeddone", 1), a.find(".tp-loader").css({
                display: "block"
            }), x(g, function() {
                var b = g.find(".slotholder");
                if ("on" == b.data("kenburns")) var d = setInterval(function() {
                    var e = b.data("owidth");
                    e >= 0 && (clearInterval(d), z(c, h, a))
                }, 10);
                else z(c, h, a)
            }, c)) : g.data("loadeddone") === b ? (g.data("loadeddone", 1), x(g, function() {
                z(c, h, a)
            }, c)) : z(c, h, a)
        },
        z = function(a, b, c) {
            a.bannertimeronpause = !1, a.cd = 0, c.trigger("nulltimer"), c.find(".tp-loader").css({
                display: "none"
            }), p(b, a), n(c, a), p(b, a), A(c, a)
        },
        A = function(c, d) {
            c.trigger("revolution.slide.onbeforeswap"), d.transition = 1, d.videoplaying = !1;
            try {
                var e = c.find(">ul:first-child >li:eq(" + d.act + ")")
            } catch (f) {
                var e = c.find(">ul:first-child >li:eq(1)")
            }
            d.lastslide = d.act;
            var g = c.find(">ul:first-child >li:eq(" + d.next + ")");
            setTimeout(function() {
                o(d)
            }, 200);
            var h = e.find(".slotholder"),
                i = g.find(".slotholder");
            e.css({
                visibility: "visible"
            }), g.css({
                visibility: "visible"
            }), ("on" == i.data("kenburns") || "on" == h.data("kenburns")) && ($(c, d), c.find(".kenburnimg").remove()), g.data("delay") != b ? (d.cd = 0, d.delay = g.data("delay")) : d.delay = d.origcd, e.css({
                left: "0px",
                top: "0px"
            }), g.css({
                left: "0px",
                top: "0px"
            }), c.find(">li").each(function() {
                var b = a(this);
                b.index != d.act && b.index != d.next && TweenLite.set(b, {
                    zIndex: 16
                })
            }), 1 == d.firststart && TweenLite.set(e, {
                autoAlpha: 0
            }), TweenLite.set(e, {
                zIndex: 18
            }), TweenLite.set(g, {
                opacity: 0,
                zIndex: 20
            });
            var j = 0;
            e.index() != g.index() && 1 != d.firststart && (j = Q(e, d)), "on" != e.data("saveperformance") && (j = 0), setTimeout(function() {
                c.trigger("restarttimer"), B(c, d, g, e, h, i)
            }, j)
        },
        B = function(c, d, e, g, h, i) {
            function w() {
                a.each(o, function(a, b) {
                    (b[0] == m || b[8] == m) && (j = b[1], n = b[2], t = u), u += 1
                })
            }
            "prepared" == e.data("differentissplayed") && (e.data("differentissplayed", "done"), e.data("transition", e.data("savedtransition")), e.data("slotamount", e.data("savedslotamount")), e.data("masterspeed", e.data("savedmasterspeed"))), e.data("fstransition") != b && "done" != e.data("differentissplayed") && (e.data("savedtransition", e.data("transition")), e.data("savedslotamount", e.data("slotamount")), e.data("savedmasterspeed", e.data("masterspeed")), e.data("transition", e.data("fstransition")), e.data("slotamount", e.data("fsslotamount")), e.data("masterspeed", e.data("fsmasterspeed")), e.data("differentissplayed", "prepared"));
            var j = 0;
            e.css({
                visibility: "visible"
            });
            var k = e.data("transition").split(","),
                l = e.data("nexttransid");
            l == b ? (l = 0, e.data("nexttransid", l)) : (l += 1, l == k.length && (l = 0), e.data("nexttransid", l));
            var m = k[l];
            d.ie && ("boxfade" == m && (m = "boxslide"), "slotfade-vertical" == m && (m = "slotzoom-vertical"), "slotfade-horizontal" == m && (m = "slotzoom-horizontal"));
            var n = 0;
            "scroll" == d.parallax && d.parallaxFirstGo == b && (d.parallaxFirstGo = !0, ab(c, d), setTimeout(function() {
                ab(c, d)
            }, 210), setTimeout(function() {
                ab(c, d)
            }, 420)), "slidehorizontal" == m && (m = "slideleft", 1 == d.leftarrowpressed && (m = "slideright")), "slidevertical" == m && (m = "slideup", 1 == d.leftarrowpressed && (m = "slidedown"));
            var o = [
                    ["boxslide", 0, 1, 10, 0, "box", !1, null, 0],
                    ["boxfade", 1, 0, 10, 0, "box", !1, null, 1],
                    ["slotslide-horizontal", 2, 0, 0, 200, "horizontal", !0, !1, 2],
                    ["slotslide-vertical", 3, 0, 0, 200, "vertical", !0, !1, 3],
                    ["curtain-1", 4, 3, 0, 0, "horizontal", !0, !0, 4],
                    ["curtain-2", 5, 3, 0, 0, "horizontal", !0, !0, 5],
                    ["curtain-3", 6, 3, 25, 0, "horizontal", !0, !0, 6],
                    ["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", !0, !0, 7],
                    ["slotzoom-vertical", 8, 0, 0, 0, "vertical", !0, !0, 8],
                    ["slotfade-horizontal", 9, 0, 0, 500, "horizontal", !0, null, 9],
                    ["slotfade-vertical", 10, 0, 0, 500, "vertical", !0, null, 10],
                    ["fade", 11, 0, 1, 300, "horizontal", !0, null, 11],
                    ["slideleft", 12, 0, 1, 0, "horizontal", !0, !0, 12],
                    ["slideup", 13, 0, 1, 0, "horizontal", !0, !0, 13],
                    ["slidedown", 14, 0, 1, 0, "horizontal", !0, !0, 14],
                    ["slideright", 15, 0, 1, 0, "horizontal", !0, !0, 15],
                    ["papercut", 16, 0, 0, 600, "", null, null, 16],
                    ["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", !1, !0, 17],
                    ["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", !1, !0, 18],
                    ["cubic", 19, 0, 20, 600, "horizontal", !1, !0, 19],
                    ["cube", 19, 0, 20, 600, "horizontal", !1, !0, 20],
                    ["flyin", 20, 0, 4, 600, "vertical", !1, !0, 21],
                    ["turnoff", 21, 0, 1, 1600, "horizontal", !1, !0, 22],
                    ["incube", 22, 0, 20, 600, "horizontal", !1, !0, 23],
                    ["cubic-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 24],
                    ["cube-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 25],
                    ["incube-horizontal", 24, 0, 20, 500, "vertical", !1, !0, 26],
                    ["turnoff-vertical", 25, 0, 1, 1600, "horizontal", !1, !0, 27],
                    ["fadefromright", 12, 1, 1, 0, "horizontal", !0, !0, 28],
                    ["fadefromleft", 15, 1, 1, 0, "horizontal", !0, !0, 29],
                    ["fadefromtop", 14, 1, 1, 0, "horizontal", !0, !0, 30],
                    ["fadefrombottom", 13, 1, 1, 0, "horizontal", !0, !0, 31],
                    ["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", !0, !0, 32],
                    ["fadetorightfadetoleft", 15, 2, 1, 0, "horizontal", !0, !0, 33],
                    ["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", !0, !0, 34],
                    ["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", !0, !0, 35],
                    ["parallaxtoright", 12, 3, 1, 0, "horizontal", !0, !0, 36],
                    ["parallaxtoleft", 15, 3, 1, 0, "horizontal", !0, !0, 37],
                    ["parallaxtotop", 14, 3, 1, 0, "horizontal", !0, !0, 38],
                    ["parallaxtobottom", 13, 3, 1, 0, "horizontal", !0, !0, 39],
                    ["scaledownfromright", 12, 4, 1, 0, "horizontal", !0, !0, 40],
                    ["scaledownfromleft", 15, 4, 1, 0, "horizontal", !0, !0, 41],
                    ["scaledownfromtop", 14, 4, 1, 0, "horizontal", !0, !0, 42],
                    ["scaledownfrombottom", 13, 4, 1, 0, "horizontal", !0, !0, 43],
                    ["zoomout", 13, 5, 1, 0, "horizontal", !0, !0, 44],
                    ["zoomin", 13, 6, 1, 0, "horizontal", !0, !0, 45],
                    ["notransition", 26, 0, 1, 0, "horizontal", !0, null, 46]
                ],
                p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
                q = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                j = 0,
                n = 1,
                t = 0,
                u = 0,
                v = new Array;
            "on" == i.data("kenburns") && X(c, d, !0, !0), "random" == m && (m = Math.round(Math.random() * o.length - 1), m > o.length - 1 && (m = o.length - 1)), "random-static" == m && (m = Math.round(Math.random() * p.length - 1), m > p.length - 1 && (m = p.length - 1), m = p[m]), "random-premium" == m && (m = Math.round(Math.random() * q.length - 1), m > q.length - 1 && (m = q.length - 1), m = q[m]), 1 == d.isJoomla && 16 == m && (m = Math.round(Math.random() * q.length - 2) + 1, m > q.length - 1 && (m = q.length - 1), m = q[m]), w(), f(8) && j > 15 && j < 28 && (m = Math.round(Math.random() * p.length - 1), m > p.length - 1 && (m = p.length - 1), m = p[m], u = 0, w());
            var x = -1;
            (1 == d.leftarrowpressed || d.act > d.next) && (x = 1), d.leftarrowpressed = 0, j > 26 && (j = 26), j < 0 && (j = 0);
            var y = 300;
            if (e.data("masterspeed") != b && e.data("masterspeed") > 99 && e.data("masterspeed") < 4001 && (y = e.data("masterspeed")), v = o[t], c.parent().find(".bullet").each(function() {
                    var b = a(this);
                    b.removeClass("selected"), "withbullet" == d.navigationArrows || "nexttobullets" == d.navigationArrows ? b.index() - 1 == d.next && b.addClass("selected") : b.index() == d.next && b.addClass("selected")
                }), K(e, d), e.data("slotamount") == b || e.data("slotamount") < 1 ? (d.slots = Math.round(12 * Math.random() + 4), "boxslide" == m ? d.slots = Math.round(6 * Math.random() + 3) : "flyin" == m && (d.slots = Math.round(4 * Math.random() + 1))) : d.slots = e.data("slotamount"), d.rotate = e.data("rotate") == b ? 0 : 999 == e.data("rotate") ? Math.round(360 * Math.random()) : e.data("rotate"), (!a.support.transition || d.ie || d.ie9) && (d.rotate = 0), 1 == d.firststart && (g.css({
                    opacity: 0
                }), d.firststart = 0), y += v[4], (4 == j || 5 == j || 6 == j) && d.slots < 3 && (d.slots = 3), 0 != v[3] && (d.slots = Math.min(d.slots, v[3])), 9 == j && (d.slots = d.width / 20), 10 == j && (d.slots = d.height / 20), "box" == v[5] ? (null != v[7] && s(h, d, v[7]), null != v[6] && s(i, d, v[6])) : ("vertical" == v[5] || "horizontal" == v[5]) && (null != v[7] && r(h, d, v[7], v[5]), null != v[6] && r(i, d, v[6], v[5])), (j < 12 || j > 16) && e.css({
                    opacity: 1
                }), 0 == j) {
                i.find(".defaultimg").css({
                    opacity: 0
                });
                var z = Math.ceil(d.height / d.sloth),
                    A = 0;
                i.find(".slotslide").each(function(b) {
                    var f = a(this);
                    A += 1, A == z && (A = 0), TweenLite.fromTo(f, y / 600, {
                        opacity: 0,
                        top: 0 - d.sloth,
                        left: 0 - d.slotw,
                        rotation: d.rotate
                    }, {
                        opacity: 1,
                        transformPerspective: 600,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        delay: (15 * b + 30 * A) / 1500,
                        ease: Power2.easeOut,
                        onComplete: function() {
                            b == d.slots * d.slots - 1 && C(c, d, i, h, e, g)
                        }
                    })
                })
            }
            if (1 == j) {
                i.find(".defaultimg").css({
                    opacity: 0
                });
                var B;
                i.find(".slotslide").each(function() {
                    var c = a(this);
                    rand = Math.random() * y + 300, rand2 = 500 * Math.random() + 200, rand + rand2 > B && (B = rand2 + rand2), TweenLite.fromTo(c, rand / 1e3, {
                        opacity: 0,
                        transformPerspective: 600,
                        rotation: d.rotate
                    }, {
                        opacity: 1,
                        ease: Power2.easeInOut,
                        rotation: 0,
                        delay: rand2 / 1e3
                    })
                }), setTimeout(function() {
                    C(c, d, i, h, e, g)
                }, y + 300)
            }
            if (2 == j && (i.find(".defaultimg").css({
                    opacity: 0
                }), h.find(".slotslide").each(function() {
                    var b = a(this);
                    TweenLite.to(b, y / 1e3, {
                        left: d.slotw,
                        rotation: 0 - d.rotate,
                        onComplete: function() {
                            C(c, d, i, h, e, g)
                        }
                    })
                }), i.find(".slotslide").each(function() {
                    var b = a(this);
                    TweenLite.fromTo(b, y / 1e3, {
                        left: 0 - d.slotw,
                        rotation: d.rotate,
                        transformPerspective: 600
                    }, {
                        left: 0,
                        rotation: 0,
                        ease: Power2.easeOut,
                        onComplete: function() {
                            C(c, d, i, h, e, g)
                        }
                    })
                })), 3 == j && (i.find(".defaultimg").css({
                    opacity: 0
                }), h.find(".slotslide").each(function() {
                    var b = a(this);
                    TweenLite.to(b, y / 1e3, {
                        top: d.sloth,
                        rotation: d.rotate,
                        transformPerspective: 600,
                        onComplete: function() {
                            C(c, d, i, h, e, g)
                        }
                    })
                }), i.find(".slotslide").each(function() {
                    var b = a(this);
                    TweenLite.fromTo(b, y / 1e3, {
                        top: 0 - d.sloth,
                        rotation: d.rotate,
                        transformPerspective: 600
                    }, {
                        top: 0,
                        rotation: 0,
                        ease: Power2.easeOut,
                        onComplete: function() {
                            C(c, d, i, h, e, g)
                        }
                    })
                })), 4 == j || 5 == j) {
                i.find(".defaultimg").css({
                    opacity: 0
                }), setTimeout(function() {
                    h.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var D = y / 1e3;
                h.find(".slotslide").each(function(b) {
                    var c = a(this),
                        e = b * D / d.slots;
                    5 == j && (e = (d.slots - b - 1) * D / d.slots / 1.5), TweenLite.to(c, 3 * D, {
                        transformPerspective: 600,
                        top: 0 + d.height,
                        opacity: .5,
                        rotation: d.rotate,
                        ease: Power2.easeInOut,
                        delay: e
                    })
                }), i.find(".slotslide").each(function(b) {
                    var f = a(this),
                        k = b * D / d.slots;
                    5 == j && (k = (d.slots - b - 1) * D / d.slots / 1.5), TweenLite.fromTo(f, 3 * D, {
                        top: 0 - d.height,
                        opacity: .5,
                        rotation: d.rotate,
                        transformPerspective: 600
                    }, {
                        top: 0,
                        opacity: 1,
                        rotation: 0,
                        ease: Power2.easeInOut,
                        delay: k,
                        onComplete: function() {
                            b == d.slots - 1 && C(c, d, i, h, e, g)
                        }
                    })
                })
            }
            if (6 == j && (d.slots < 2 && (d.slots = 2), i.find(".defaultimg").css({
                    opacity: 0
                }), setTimeout(function() {
                    h.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), h.find(".slotslide").each(function(b) {
                    var c = a(this);
                    if (b < d.slots / 2) var e = 60 * (b + 2);
                    else var e = 60 * (2 + d.slots - b);
                    TweenLite.to(c, (y + e) / 1e3, {
                        top: 0 + d.height,
                        opacity: 1,
                        rotation: d.rotate,
                        transformPerspective: 600,
                        ease: Power2.easeInOut
                    })
                }), i.find(".slotslide").each(function(b) {
                    var f = a(this);
                    if (b < d.slots / 2) var j = 60 * (b + 2);
                    else var j = 60 * (2 + d.slots - b);
                    TweenLite.fromTo(f, (y + j) / 1e3, {
                        top: 0 - d.height,
                        opacity: 1,
                        rotation: d.rotate,
                        transformPerspective: 600
                    }, {
                        top: 0,
                        opacity: 1,
                        rotation: 0,
                        ease: Power2.easeInOut,
                        onComplete: function() {
                            b == Math.round(d.slots / 2) && C(c, d, i, h, e, g)
                        }
                    })
                })), 7 == j && (y = 2 * y, i.find(".defaultimg").css({
                    opacity: 0
                }), setTimeout(function() {
                    h.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), h.find(".slotslide").each(function() {
                    var b = a(this).find("div");
                    TweenLite.to(b, y / 1e3, {
                        left: 0 - d.slotw / 2 + "px",
                        top: 0 - d.height / 2 + "px",
                        width: 2 * d.slotw + "px",
                        height: 2 * d.height + "px",
                        opacity: 0,
                        rotation: d.rotate,
                        transformPerspective: 600,
                        ease: Power2.easeOut
                    })
                }), i.find(".slotslide").each(function(b) {
                    var f = a(this).find("div");
                    TweenLite.fromTo(f, y / 1e3, {
                        left: 0,
                        top: 0,
                        opacity: 0,
                        transformPerspective: 600
                    }, {
                        left: 0 - b * d.slotw + "px",
                        ease: Power2.easeOut,
                        top: "0px",
                        width: d.width,
                        height: d.height,
                        opacity: 1,
                        rotation: 0,
                        delay: .1,
                        onComplete: function() {
                            C(c, d, i, h, e, g)
                        }
                    })
                })), 8 == j && (y = 3 * y, i.find(".defaultimg").css({
                    opacity: 0
                }), h.find(".slotslide").each(function() {
                    var b = a(this).find("div");
                    TweenLite.to(b, y / 1e3, {
                        left: 0 - d.width / 2 + "px",
                        top: 0 - d.sloth / 2 + "px",
                        width: 2 * d.width + "px",
                        height: 2 * d.sloth + "px",
                        transformPerspective: 600,
                        opacity: 0,
                        rotation: d.rotate
                    })
                }), i.find(".slotslide").each(function(b) {
                    var f = a(this).find("div");
                    TweenLite.fromTo(f, y / 1e3, {
                        left: 0,
                        top: 0,
                        opacity: 0,
                        transformPerspective: 600
                    }, {
                        left: "0px",
                        top: 0 - b * d.sloth + "px",
                        width: i.find(".defaultimg").data("neww") + "px",
                        height: i.find(".defaultimg").data("newh") + "px",
                        opacity: 1,
                        rotation: 0,
                        onComplete: function() {
                            C(c, d, i, h, e, g)
                        }
                    })
                })), 9 == j || 10 == j) {
                i.find(".defaultimg").css({
                    opacity: 0
                });
                var F = 0;
                i.find(".slotslide").each(function(b) {
                    var c = a(this);
                    F++, TweenLite.fromTo(c, y / 1e3, {
                        opacity: 0,
                        transformPerspective: 600,
                        left: 0,
                        top: 0
                    }, {
                        opacity: 1,
                        ease: Power2.easeInOut,
                        delay: 4 * b / 1e3
                    })
                }), setTimeout(function() {
                    C(c, d, i, h, e, g)
                }, y + 4 * F)
            }
            if (11 == j || 26 == j) {
                i.find(".defaultimg").css({
                    opacity: 0,
                    position: "relative"
                });
                var F = 0;
                26 == j && (y = 0), i.find(".slotslide").each(function() {
                    var c = a(this);
                    TweenLite.fromTo(c, y / 1e3, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        ease: Power2.easeInOut
                    })
                }), setTimeout(function() {
                    C(c, d, i, h, e, g)
                }, y + 15)
            }
            if (12 == j || 13 == j || 14 == j || 15 == j) {
                setTimeout(function() {
                    h.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), i.find(".defaultimg").css({
                    opacity: 0
                });
                var G = d.width,
                    H = d.height,
                    I = i.find(".slotslide");
                ("on" == d.fullWidth || "on" == d.fullSreen) && (G = I.width(), H = I.height());
                var J = 0,
                    L = 0;
                12 == j ? J = G : 15 == j ? J = 0 - G : 13 == j ? L = H : 14 == j && (L = 0 - H);
                var M = 1,
                    N = 1,
                    O = 1,
                    P = Power2.easeInOut,
                    Q = Power2.easeInOut,
                    R = y / 1e3,
                    S = R;
                1 == n && (M = 0), 2 == n && (M = 0), 3 == n && (P = Power2.easeInOut, Q = Power1.easeInOut, g.css({
                    position: "absolute",
                    "z-index": 20
                }), e.css({
                    position: "absolute",
                    "z-index": 15
                }), R = y / 1200), (4 == n || 5 == n) && (N = .6), 6 == n && (N = 1.4), (5 == n || 6 == n) && (O = 1.4, M = 0, G = 0, H = 0, J = 0, L = 0), 6 == n && (O = .6), TweenLite.fromTo(I, R, {
                    left: J,
                    top: L,
                    scale: O,
                    opacity: M,
                    rotation: d.rotate
                }, {
                    opacity: 1,
                    rotation: 0,
                    left: 0,
                    top: 0,
                    scale: 1,
                    ease: Q,
                    onComplete: function() {
                        C(c, d, i, h, e, g), g.css({
                            position: "absolute",
                            "z-index": 18
                        }), e.css({
                            position: "absolute",
                            "z-index": 20
                        })
                    }
                });
                var T = h.find(".slotslide");
                (4 == n || 5 == n) && (G = 0, H = 0), 1 != n && (12 == j ? TweenLite.to(T, S, {
                    left: 0 - G + "px",
                    scale: N,
                    opacity: M,
                    rotation: d.rotate,
                    ease: P
                }) : 15 == j ? TweenLite.to(T, S, {
                    left: G + "px",
                    scale: N,
                    opacity: M,
                    rotation: d.rotate,
                    ease: P
                }) : 13 == j ? TweenLite.to(T, S, {
                    top: 0 - H + "px",
                    scale: N,
                    opacity: M,
                    rotation: d.rotate,
                    ease: P
                }) : 14 == j && TweenLite.to(T, S, {
                    top: H + "px",
                    scale: N,
                    opacity: M,
                    rotation: d.rotate,
                    ease: P
                })), e.css({
                    opacity: 1
                })
            }
            if (16 == j) {
                g.css({
                    position: "absolute",
                    "z-index": 20
                }), e.css({
                    position: "absolute",
                    "z-index": 15
                }), g.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'), g.find(".tp-half-one").clone(!0).appendTo(g).addClass("tp-half-two"), g.find(".tp-half-two").removeClass("tp-half-one");
                var G = d.width,
                    H = d.height;
                "on" == d.autoHeight && (H = c.height()), g.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + G + "px;height:" + H + 'px;"></div>'), g.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + G + "px;height:" + H + 'px;"></div>'), g.find(".tp-half-two .defaultimg").css({
                    position: "absolute",
                    top: "-50%"
                }), g.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px"></div>'), TweenLite.set(g.find(".tp-half-two"), {
                    width: G,
                    height: H,
                    overflow: "hidden",
                    zIndex: 15,
                    position: "absolute",
                    top: H / 2,
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center bottom"
                }), TweenLite.set(g.find(".tp-half-one"), {
                    width: G,
                    height: H / 2,
                    overflow: "visible",
                    zIndex: 10,
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center top"
                });
                var V = (g.find(".defaultimg"), Math.round(20 * Math.random() - 10)),
                    W = Math.round(20 * Math.random() - 10),
                    Y = Math.round(20 * Math.random() - 10),
                    Z = .4 * Math.random() - .2,
                    $ = .4 * Math.random() - .2,
                    _ = 1 * Math.random() + 1,
                    bb = 1 * Math.random() + 1;
                TweenLite.fromTo(g.find(".tp-half-one"), y / 1e3, {
                    width: G,
                    height: H / 2,
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center top"
                }, {
                    scale: _,
                    rotation: V,
                    y: 0 - H - H / 4,
                    ease: Power2.easeInOut
                }), setTimeout(function() {
                    TweenLite.set(g.find(".tp-half-one"), {
                        overflow: "hidden"
                    })
                }, 50), TweenLite.fromTo(g.find(".tp-half-one"), y / 2e3, {
                    opacity: 1,
                    transformPerspective: 600,
                    transformOrigin: "center center"
                }, {
                    opacity: 0,
                    delay: y / 2e3
                }), TweenLite.fromTo(g.find(".tp-half-two"), y / 1e3, {
                    width: G,
                    height: H,
                    overflow: "hidden",
                    position: "absolute",
                    top: H / 2,
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center bottom"
                }, {
                    scale: bb,
                    rotation: W,
                    y: H + H / 4,
                    ease: Power2.easeInOut
                }), TweenLite.fromTo(g.find(".tp-half-two"), y / 2e3, {
                    opacity: 1,
                    transformPerspective: 600,
                    transformOrigin: "center center"
                }, {
                    opacity: 0,
                    delay: y / 2e3
                }), null != g.html() && TweenLite.fromTo(e, (y - 200) / 1e3, {
                    opacity: 0,
                    scale: .8,
                    x: d.width * Z,
                    y: H * $,
                    rotation: Y,
                    transformPerspective: 600,
                    transformOrigin: "center center"
                }, {
                    rotation: 0,
                    scale: 1,
                    x: 0,
                    y: 0,
                    opacity: 1,
                    ease: Power2.easeInOut
                }), i.find(".defaultimg").css({
                    opacity: 1
                }), setTimeout(function() {
                    g.css({
                        position: "absolute",
                        "z-index": 18
                    }), e.css({
                        position: "absolute",
                        "z-index": 20
                    }), i.find(".defaultimg").css({
                        opacity: 1
                    }), h.find(".defaultimg").css({
                        opacity: 0
                    }), g.find(".tp-half-one").length > 0 && (g.find(".tp-half-one .defaultimg").unwrap(), g.find(".tp-half-one .slotholder").unwrap()), g.find(".tp-half-two").remove(), d.transition = 0, d.act = d.next
                }, y), e.css({
                    opacity: 1
                })
            }
            if (17 == j && (i.find(".defaultimg").css({
                    opacity: 0
                }), i.find(".slotslide").each(function(b) {
                    var f = a(this);
                    TweenLite.fromTo(f, y / 800, {
                        opacity: 0,
                        rotationY: 0,
                        scale: .9,
                        rotationX: -110,
                        transformPerspective: 600,
                        transformOrigin: "center center"
                    }, {
                        opacity: 1,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        rotationX: 0,
                        rotationY: 0,
                        ease: Power3.easeOut,
                        delay: .06 * b,
                        onComplete: function() {
                            b == d.slots - 1 && C(c, d, i, h, e, g)
                        }
                    })
                })), 18 == j && (i.find(".defaultimg").css({
                    opacity: 0
                }), i.find(".slotslide").each(function(b) {
                    var f = a(this);
                    TweenLite.fromTo(f, y / 500, {
                        opacity: 0,
                        rotationY: 310,
                        scale: .9,
                        rotationX: 10,
                        transformPerspective: 600,
                        transformOrigin: "center center"
                    }, {
                        opacity: 1,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        rotationX: 0,
                        rotationY: 0,
                        ease: Power3.easeOut,
                        delay: .06 * b,
                        onComplete: function() {
                            b == d.slots - 1 && C(c, d, i, h, e, g)
                        }
                    })
                })), 19 == j || 22 == j) {
                i.find(".defaultimg").css({
                    opacity: 0
                }), setTimeout(function() {
                    h.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var eb = (e.css("z-index"), g.css("z-index"), 90),
                    M = 1;
                if (1 == x && (eb = -90), 19 == j) {
                    var fb = "center center -" + d.height / 2;
                    M = 0
                } else var fb = "center center " + d.height / 2;
                TweenLite.fromTo(i, y / 2e3, {
                    transformPerspective: 600,
                    z: 0,
                    x: 0,
                    rotationY: 0
                }, {
                    rotationY: 1,
                    ease: Power1.easeInOut,
                    z: -40
                }), TweenLite.fromTo(i, y / 2e3, {
                    transformPerspective: 600,
                    z: -40,
                    rotationY: 1
                }, {
                    rotationY: 0,
                    z: 0,
                    ease: Power1.easeInOut,
                    x: 0,
                    delay: 3 * (y / 4e3)
                }), TweenLite.fromTo(h, y / 2e3, {
                    transformPerspective: 600,
                    z: 0,
                    x: 0,
                    rotationY: 0
                }, {
                    rotationY: 1,
                    x: 0,
                    ease: Power1.easeInOut,
                    z: -40
                }), TweenLite.fromTo(h, y / 2e3, {
                    transformPerspective: 600,
                    z: -40,
                    x: 0,
                    rotationY: 1
                }, {
                    rotationY: 0,
                    z: 0,
                    x: 0,
                    ease: Power1.easeInOut,
                    delay: 3 * (y / 4e3)
                }), i.find(".slotslide").each(function(b) {
                    var f = a(this);
                    TweenLite.fromTo(f, y / 1e3, {
                        left: 0,
                        rotationY: d.rotate,
                        opacity: M,
                        top: 0,
                        scale: .8,
                        transformPerspective: 600,
                        transformOrigin: fb,
                        rotationX: eb
                    }, {
                        left: 0,
                        rotationY: 0,
                        opacity: 1,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationX: 0,
                        delay: 50 * b / 1e3,
                        ease: Power2.easeInOut,
                        onComplete: function() {
                            b == d.slots - 1 && C(c, d, i, h, e, g)
                        }
                    }), TweenLite.to(f, .1, {
                        opacity: 1,
                        delay: 50 * b / 1e3 + y / 3e3
                    })
                }), h.find(".slotslide").each(function(b) {
                    var f = a(this),
                        j = -90;
                    1 == x && (j = 90), TweenLite.fromTo(f, y / 1e3, {
                        opacity: 1,
                        rotationY: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        transformPerspective: 600,
                        transformOrigin: fb,
                        rotationX: 0
                    }, {
                        opacity: 1,
                        rotationY: d.rotate,
                        top: 0,
                        scale: .8,
                        rotationX: j,
                        delay: 50 * b / 1e3,
                        ease: Power2.easeInOut,
                        onComplete: function() {
                            b == d.slots - 1 && C(c, d, i, h, e, g)
                        }
                    }), TweenLite.to(f, .1, {
                        opacity: 0,
                        delay: 50 * b / 1e3 + (y / 1e3 - y / 1e4)
                    })
                })
            }
            if (20 == j) {
                i.find(".defaultimg").css({
                    opacity: 0
                }), setTimeout(function() {
                    h.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100); {
                    e.css("z-index"), g.css("z-index")
                }
                if (1 == x) var gb = -d.width,
                    eb = 70,
                    fb = "left center -" + d.height / 2;
                else var gb = d.width,
                    eb = -70,
                    fb = "right center -" + d.height / 2;
                i.find(".slotslide").each(function(b) {
                    var f = a(this);
                    TweenLite.fromTo(f, y / 1500, {
                        left: gb,
                        rotationX: 40,
                        z: -600,
                        opacity: M,
                        top: 0,
                        transformPerspective: 600,
                        transformOrigin: fb,
                        rotationY: eb
                    }, {
                        left: 0,
                        delay: 50 * b / 1e3,
                        ease: Power2.easeInOut
                    }), TweenLite.fromTo(f, y / 1e3, {
                        rotationX: 40,
                        z: -600,
                        opacity: M,
                        top: 0,
                        scale: 1,
                        transformPerspective: 600,
                        transformOrigin: fb,
                        rotationY: eb
                    }, {
                        rotationX: 0,
                        opacity: 1,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationY: 0,
                        delay: 50 * b / 1e3,
                        ease: Power2.easeInOut,
                        onComplete: function() {
                            b == d.slots - 1 && C(c, d, i, h, e, g)
                        }
                    }), TweenLite.to(f, .1, {
                        opacity: 1,
                        delay: 50 * b / 1e3 + y / 2e3
                    })
                }), h.find(".slotslide").each(function(b) {
                    var f = a(this);
                    if (1 != x) var j = -d.width,
                        k = 70,
                        l = "left center -" + d.height / 2;
                    else var j = d.width,
                        k = -70,
                        l = "right center -" + d.height / 2;
                    TweenLite.fromTo(f, y / 1e3, {
                        opacity: 1,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        left: 0,
                        transformPerspective: 600,
                        transformOrigin: l,
                        rotationY: 0
                    }, {
                        opacity: 1,
                        rotationX: 40,
                        top: 0,
                        z: -600,
                        left: j,
                        scale: .8,
                        rotationY: k,
                        delay: 50 * b / 1e3,
                        ease: Power2.easeInOut,
                        onComplete: function() {
                            b == d.slots - 1 && C(c, d, i, h, e, g)
                        }
                    }), TweenLite.to(f, .1, {
                        opacity: 0,
                        delay: 50 * b / 1e3 + (y / 1e3 - y / 1e4)
                    })
                })
            }
            if (21 == j || 25 == j) {
                i.find(".defaultimg").css({
                    opacity: 0
                }), setTimeout(function() {
                    h.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100); {
                    e.css("z-index"), g.css("z-index")
                }
                if (1 == x) {
                    var gb = -d.width,
                        eb = 110;
                    if (25 == j) {
                        var fb = "center top 0";
                        rot2 = -eb, eb = d.rotate
                    } else {
                        var fb = "left center 0";
                        rot2 = d.rotate
                    }
                } else {
                    var gb = d.width,
                        eb = -110;
                    if (25 == j) {
                        var fb = "center bottom 0";
                        rot2 = -eb, eb = d.rotate
                    } else {
                        var fb = "right center 0";
                        rot2 = d.rotate
                    }
                }
                if (i.find(".slotslide").each(function(b) {
                        var f = a(this);
                        TweenLite.fromTo(f, y / 1500, {
                            left: 0,
                            rotationX: rot2,
                            z: 0,
                            opacity: 0,
                            top: 0,
                            scale: 1,
                            transformPerspective: 600,
                            transformOrigin: fb,
                            rotationY: eb
                        }, {
                            left: 0,
                            rotationX: 0,
                            top: 0,
                            z: 0,
                            scale: 1,
                            rotationY: 0,
                            delay: 100 * b / 1e3 + y / 1e4,
                            ease: Power2.easeInOut,
                            onComplete: function() {
                                b == d.slots - 1 && C(c, d, i, h, e, g)
                            }
                        }), TweenLite.to(f, .3, {
                            opacity: 1,
                            delay: 100 * b / 1e3 + .2 * y / 2e3 + y / 1e4
                        })
                    }), 1 != x) {
                    var gb = -d.width,
                        eb = 90;
                    if (25 == j) {
                        var fb = "center top 0";
                        rot2 = -eb, eb = d.rotate
                    } else {
                        var fb = "left center 0";
                        rot2 = d.rotate
                    }
                } else {
                    var gb = d.width,
                        eb = -90;
                    if (25 == j) {
                        var fb = "center bottom 0";
                        rot2 = -eb, eb = d.rotate
                    } else {
                        var fb = "right center 0";
                        rot2 = d.rotate
                    }
                }
                h.find(".slotslide").each(function(b) {
                    var c = a(this);
                    TweenLite.fromTo(c, y / 3e3, {
                        left: 0,
                        rotationX: 0,
                        z: 0,
                        opacity: 1,
                        top: 0,
                        scale: 1,
                        transformPerspective: 600,
                        transformOrigin: fb,
                        rotationY: 0
                    }, {
                        left: 0,
                        rotationX: rot2,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationY: eb,
                        delay: 100 * b / 1e3,
                        ease: Power1.easeInOut
                    }), TweenLite.to(c, .2, {
                        opacity: 0,
                        delay: 50 * b / 1e3 + (y / 3e3 - y / 1e4)
                    })
                })
            }
            if (23 == j || 24 == j) {
                i.find(".defaultimg").css({
                    opacity: 0
                }), setTimeout(function() {
                    h.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var eb = (e.css("z-index"), g.css("z-index"), -90);
                1 == x && (eb = 90);
                var M = 1;
                if (23 == j) {
                    var fb = "center center -" + d.width / 2;
                    M = 0
                } else var fb = "center center " + d.width / 2;
                var hb = 0;
                TweenLite.fromTo(i, y / 2e3, {
                    transformPerspective: 600,
                    z: 0,
                    x: 0,
                    rotationY: 0
                }, {
                    rotationY: 1,
                    ease: Power1.easeInOut,
                    z: -90
                }), TweenLite.fromTo(i, y / 2e3, {
                    transformPerspective: 600,
                    z: -90,
                    rotationY: 1
                }, {
                    rotationY: 0,
                    z: 0,
                    ease: Power1.easeInOut,
                    x: 0,
                    delay: 3 * (y / 4e3)
                }), TweenLite.fromTo(h, y / 2e3, {
                    transformPerspective: 600,
                    z: 0,
                    x: 0,
                    rotationY: 0
                }, {
                    rotationY: 1,
                    x: 0,
                    ease: Power1.easeInOut,
                    z: -90
                }), TweenLite.fromTo(h, y / 2e3, {
                    transformPerspective: 600,
                    z: -90,
                    x: 0,
                    rotationY: 1
                }, {
                    rotationY: 0,
                    z: 0,
                    x: 0,
                    ease: Power1.easeInOut,
                    delay: 3 * (y / 4e3)
                }), i.find(".slotslide").each(function(b) {
                    var f = a(this);
                    TweenLite.fromTo(f, y / 1e3, {
                        left: hb,
                        rotationX: d.rotate,
                        opacity: M,
                        top: 0,
                        scale: 1,
                        transformPerspective: 600,
                        transformOrigin: fb,
                        rotationY: eb
                    }, {
                        left: 0,
                        rotationX: 0,
                        opacity: 1,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationY: 0,
                        delay: 50 * b / 1e3,
                        ease: Power2.easeInOut,
                        onComplete: function() {
                            b == d.slots - 1 && C(c, d, i, h, e, g)
                        }
                    }), TweenLite.to(f, .1, {
                        opacity: 1,
                        delay: 50 * b / 1e3 + y / 3e3
                    })
                }), eb = 90, 1 == x && (eb = -90), h.find(".slotslide").each(function(b) {
                    var f = a(this);
                    TweenLite.fromTo(f, y / 1e3, {
                        left: 0,
                        opacity: 1,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        transformPerspective: 600,
                        transformOrigin: fb,
                        rotationY: 0
                    }, {
                        left: hb,
                        opacity: 1,
                        rotationX: d.rotate,
                        top: 0,
                        scale: 1,
                        rotationY: eb,
                        delay: 50 * b / 1e3,
                        ease: Power2.easeInOut,
                        onComplete: function() {
                            b == d.slots - 1 && C(c, d, i, h, e, g)
                        }
                    }), TweenLite.to(f, .1, {
                        opacity: 0,
                        delay: 50 * b / 1e3 + (y / 1e3 - y / 1e4)
                    })
                })
            }
            var ib = {};
            ib.slideIndex = d.next + 1, c.trigger("revolution.slide.onchange", ib), setTimeout(function() {
                c.trigger("revolution.slide.onafterswap")
            }, y), c.trigger("revolution.slide.onvideostop")
        },
        C = function(a, b, c, d, e, f) {
            u(a, b), c.find(".defaultimg").css({
                opacity: 1
            }), e.index() != f.index() && d.find(".defaultimg").css({
                opacity: 0
            }), b.act = b.next, "thumb" == b.navigationType && cb(a), "on" == c.data("kenburns") && X(a, b), a.find(".current-sr-slide-visible").removeClass("current-sr-slide-visible"), e.addClass("current-sr-slide-visible"), ("scroll" == b.parallax || "scroll+mouse" == b.parallax || "mouse+scroll" == b.parallax) && ab(a, b)
        },
        D = function(b) {
            var c = b.target.getVideoEmbedCode(),
                d = a("#" + c.split('id="')[1].split('"')[0]),
                e = d.closest(".tp-simpleresponsive"),
                f = d.parent().data("player");
            if (b.data == YT.PlayerState.PLAYING) {
                var g = e.find(".tp-bannertimer"),
                    h = g.data("opt");
                "mute" == d.closest(".tp-caption").data("volume") && f.mute(), h.videoplaying = !0, e.trigger("stoptimer"), e.trigger("revolution.slide.onvideoplay")
            } else {
                var g = e.find(".tp-bannertimer"),
                    h = g.data("opt"); - 1 != b.data && (h.videoplaying = !1, e.trigger("playtimer"), e.trigger("revolution.slide.onvideostop"))
            }
            0 == b.data && 1 == h.nextslideatend && h.container.revnext()
        },
        F = function(b, c) {
            var d = $f(b),
                e = a("#" + b),
                f = e.closest(".tp-simpleresponsive");
            d.addEvent("ready", function() {
                c && d.api("play"), d.addEvent("play", function() {
                    var b = f.find(".tp-bannertimer"),
                        c = b.data("opt");
                    c.videoplaying = !0, f.trigger("stoptimer"), "mute" == e.closest(".tp-caption").data("volume") && d.api("setVolume", "0")
                }), d.addEvent("finish", function() {
                    var b = f.find(".tp-bannertimer"),
                        c = b.data("opt");
                    c.videoplaying = !1, f.trigger("playtimer"), f.trigger("revolution.slide.onvideoplay"), 1 == c.nextslideatend && c.container.revnext()
                }), d.addEvent("pause", function() {
                    var b = f.find(".tp-bannertimer"),
                        c = b.data("opt");
                    c.videoplaying = !1, f.trigger("playtimer"), f.trigger("revolution.slide.onvideostop")
                })
            })
        },
        G = function(a, b) {
            var c = b.width(),
                d = b.height(),
                e = a.data("mediaAspect"),
                f = c / d;
            a.css({
                position: "absolute"
            });
            a.find("video");
            f < e ? (a.width(d * e).height(d), a.css("top", 0).css("left", -(d * e - c) / 2).css("height", d)) : (a.width(c).height(c / e), a.css("top", -(c / e - d) / 2).css("left", 0).css("height", c / e))
        },
        H = function() {
            var a = new Object;
            return a.x = 0, a.y = 0, a.rotationX = 0, a.rotationY = 0, a.rotationZ = 0, a.scale = 1, a.scaleX = 1, a.scaleY = 1, a.skewX = 0, a.skewY = 0, a.opacity = 0, a.transformOrigin = "center, center", a.transformPerspective = 400, a.rotation = 0, a
        },
        I = function(b, c) {
            var d = c.split(";");
            return a.each(d, function(a, c) {
                c = c.split(":");
                var d = c[0],
                    e = c[1];
                "rotationX" == d && (b.rotationX = parseInt(e, 0)), "rotationY" == d && (b.rotationY = parseInt(e, 0)), "rotationZ" == d && (b.rotationZ = parseInt(e, 0)), "rotationZ" == d && (b.rotation = parseInt(e, 0)), "scaleX" == d && (b.scaleX = parseFloat(e)), "scaleY" == d && (b.scaleY = parseFloat(e)), "opacity" == d && (b.opacity = parseFloat(e)), "skewX" == d && (b.skewX = parseInt(e, 0)), "skewY" == d && (b.skewY = parseInt(e, 0)), "x" == d && (b.x = parseInt(e, 0)), "y" == d && (b.y = parseInt(e, 0)), "z" == d && (b.z = parseInt(e, 0)), "transformOrigin" == d && (b.transformOrigin = e.toString()), "transformPerspective" == d && (b.transformPerspective = parseInt(e, 0))
            }), b
        },
        J = function(b) {
            var c = b.split("animation:"),
                d = new Object;
            d.animation = I(H(), c[1]);
            var e = c[0].split(";");
            return a.each(e, function(a, b) {
                b = b.split(":");
                var c = b[0],
                    e = b[1];
                "typ" == c && (d.typ = e), "speed" == c && (d.speed = parseInt(e, 0) / 1e3), "start" == c && (d.start = parseInt(e, 0) / 1e3), "elementdelay" == c && (d.elementdelay = parseFloat(e)), "ease" == c && (d.ease = e)
            }), d
        },
        K = function(c, d, e) {
            var f = 0,
                g = 0,
                h = c.find(".tp-caption"),
                i = d.container.find(".tp-static-layers").find(".tp-caption");
            a.each(i, function(a, b) {
                h.push(b)
            }), h.each(function(c) {
                function Y() {
                    setTimeout(function() {
                        j.css({
                            transform: "none",
                            "-moz-transform": "none",
                            "-webkit-transform": "none"
                        })
                    }, 100)
                }

                function Z() {
                    j.data("timer", setTimeout(function() {
                        j.hasClass("fullscreenvideo") && j.css({
                            display: "block"
                        })
                    }, j.data("start")))
                }
                var h = e,
                    i = -1,
                    j = a(this);
                j.hasClass("tp-static-layer") && (j.hasClass("tp-is-shown") ? i = j.data("endslide") == d.next || j.data("startslide") > d.next || j.data("endslide") < d.next ? 2 : 0 : j.data("startslide") <= d.next && j.data("endslide") >= d.next || j.data("startslide") == d.next || j.data("endslide") == d.next ? (j.addClass("tp-is-shown"), i = 1) : i = 0), f = d.width / 2 - d.startwidth * d.bw / 2; {
                    var k = d.bw;
                    d.bh
                }
                "on" == d.fullScreen && (g = d.height / 2 - d.startheight * d.bh / 2), "on" == d.autoHeight && (g = d.container.height() / 2 - d.startheight * d.bh / 2), g < 0 && (g = 0);
                var m = 0;
                if (d.width < d.hideCaptionAtLimit && "on" == j.data("captionhidden") ? (j.addClass("tp-hidden-caption"), m = 1) : d.width < d.hideAllCaptionAtLimit || d.width < d.hideAllCaptionAtLilmit ? (j.addClass("tp-hidden-caption"), m = 1) : j.removeClass("tp-hidden-caption"), 0 == m) {
                    j.data("linktoslide") == b || j.hasClass("hasclicklistener") || (j.addClass("hasclicklistener"), j.css({
                        cursor: "pointer"
                    }), "no" != j.data("linktoslide") && j.click(function() {
                        var b = a(this),
                            c = b.data("linktoslide");
                        "next" != c && "prev" != c ? (d.container.data("showus", c), d.container.parent().find(".tp-rightarrow").click()) : "next" == c ? d.container.parent().find(".tp-rightarrow").click() : "prev" == c && d.container.parent().find(".tp-leftarrow").click()
                    })), f < 0 && (f = 0);
                    var n = "iframe" + Math.round(1e3 * Math.random() + 1);
                    if (j.find("iframe").length > 0 || j.find("video").length > 0) {
                        var o = !1;
                        if ((1 == j.data("autoplayonlyfirsttime") || "true" == j.data("autoplayonlyfirsttime")) && (j.data("autoplay", !0), o = !0), j.find("iframe").each(function() {
                                var c = a(this);
                                if (V()) {
                                    var e = c.attr("src");
                                    c.attr("src", ""), c.attr("src", e)
                                }
                                if (d.nextslideatend = j.data("nextslideatend"), j.data("thumbimage") != b && j.data("thumbimage").length > 2 && 1 != j.data("autoplay") && !h && (j.find(".tp-thumb-image").remove(), j.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url(' + j.data("thumbimage") + '); background-size:cover"></div>')), c.attr("src").toLowerCase().indexOf("youtube") >= 0) {
                                    if (c.hasClass("HasListener")) {
                                        if (1 == j.data("autoplay") || o) {
                                            var f = j.data("player");
                                            j.data("timerplay", setTimeout(function() {
                                                "on" == j.data("forcerewind") && f.seekTo(0), f.playVideo()
                                            }, j.data("start")))
                                        }
                                    } else try {
                                        c.attr("id", n);
                                        var f, g = setInterval(function() {
                                            YT != b && typeof YT.Player != b && "undefined" != typeof YT.Player && (f = 1 == j.data("autoplay") || o ? new YT.Player(n, {
                                                events: {
                                                    onStateChange: D,
                                                    onReady: function(a) {
                                                        a.target.playVideo()
                                                    }
                                                }
                                            }) : new YT.Player(n, {
                                                events: {
                                                    onStateChange: D
                                                }
                                            }), c.addClass("HasListener"), j.data("player", f), clearInterval(g))
                                        }, 100)
                                    } catch (i) {}
                                    j.find(".tp-thumb-image").click(function() {
                                        TweenLite.to(a(this), .3, {
                                            opacity: 0,
                                            ease: Power3.easeInOut,
                                            onComplete: function() {
                                                j.find(".tp-thumb-image").remove()
                                            }
                                        });
                                        var b = j.data("player");
                                        b.playVideo()
                                    })
                                } else if (c.attr("src").toLowerCase().indexOf("vimeo") >= 0) {
                                    if (c.hasClass("HasListener")) {
                                        if (1 == j.data("autoplay")) var c = j.find("iframe"),
                                            s = c.attr("id"),
                                            r = setInterval(function() {
                                                if ($f != b && typeof $f(s).api != b && "undefined" != typeof $f(s).api) {
                                                    var a = $f(s);
                                                    j.data("timerplay", setTimeout(function() {
                                                        "on" == j.data("forcerewind") && a.api("seekTo", 0), a.api("play")
                                                    }, j.data("start"))), clearInterval(r)
                                                }
                                            }, 100)
                                    } else {
                                        c.addClass("HasListener"), c.attr("id", n);
                                        for (var q, k = c.attr("src"), l = {}, m = k, p = /([^&=]+)=([^&]*)/g; q = p.exec(m);) l[decodeURIComponent(q[1])] = decodeURIComponent(q[2]);
                                        k = l.player_id != b ? k.replace(l.player_id, n) : k + "&player_id=" + n;
                                        try {
                                            k = k.replace("api=0", "api=1")
                                        } catch (i) {}
                                        k += "&api=1", c.attr("src", k);
                                        var f = j.find("iframe")[0],
                                            r = setInterval(function() {
                                                $f != b && typeof $f(n).api != b && "undefined" != typeof $f(n).api && ($f(f).addEvent("ready", function() {
                                                    F(n, j.data("autoplay"))
                                                }), clearInterval(r))
                                            }, 100)
                                    }
                                    j.find(".tp-thumb-image").click(function() {
                                        TweenLite.to(a(this), .3, {
                                            opacity: 0,
                                            ease: Power3.easeInOut,
                                            onComplete: function() {
                                                j.find(".tp-thumb-image").remove()
                                            }
                                        });
                                        var c = j.find("iframe"),
                                            d = c.attr("id"),
                                            e = setInterval(function() {
                                                if ($f != b && typeof $f(d).api != b && "undefined" != typeof $f(d).api) {
                                                    var a = $f(d);
                                                    a.api("play"), clearInterval(e)
                                                }
                                            }, 100)
                                    })
                                }
                            }), j.find("video").length > 0 && j.find("video").each(function() {
                                var e = a(this),
                                    f = this;
                                e.parent().hasClass("html5vid") || e.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:auto;height:auto"></div>');
                                var g = a(this).parent();
                                f.addEventListener ? f.addEventListener("loadedmetadata", function() {
                                    g.data("metaloaded", 1)
                                }) : f.attachEvent("loadedmetadata", function() {
                                    g.data("metaloaded", 1)
                                }), e.hasClass("HasListener") || (e.addClass("HasListener"), f.addEventListener("play", function() {
                                    g.addClass("videoisplaying"), g.find(".tp-poster").remove(), "mute" == j.data("volume") && (f.muted = !0), d.container.trigger("revolution.slide.onvideoplay"), d.videoplaying = !0, d.container.trigger("stoptimer")
                                }), f.addEventListener("pause", function() {
                                    g.removeClass("videoisplaying"), d.videoplaying = !1, d.container.trigger("playtimer"), d.container.trigger("revolution.slide.onvideostop")
                                }), f.addEventListener("ended", function() {
                                    g.removeClass("videoisplaying"), d.videoplaying = !1, d.container.trigger("playtimer"), d.container.trigger("revolution.slide.onvideostop"), 1 == d.nextslideatend && d.container.revnext()
                                })), e.attr("poster") != b && 0 == g.find(".tp-poster").length && g.append('<div class="tp-poster" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;background:url(' + e.attr("poster") + '); background-position:center center;background-size:100%;background-repeat:no-repeat;"></div>'), e.attr("control") == b && 0 == g.find(".tp-video-play-button").length && (g.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><div class="tp-revstop"></div></div>'), g.find(".tp-video-play-button").click(function() {
                                    g.hasClass("videoisplaying") ? f.pause() : f.play()
                                })), e.attr("control") == b && g.find("video, .tp-poster").click(function() {
                                    g.hasClass("videoisplaying") ? f.pause() : f.play()
                                }), 1 == j.data("forcecover") && (G(g, d.container), g.addClass("fullcoveredvideo"), j.addClass("fullcoveredvideo")), (1 == j.data("forcecover") || j.hasClass("fullscreenvideo")) && g.css({
                                    width: "100%",
                                    height: "100%"
                                });
                                var h = !1;
                                (1 == j.data("autoplayonlyfirsttime") || "true" == j.data("autoplayonlyfirsttime")) && (h = !0), clearInterval(g.data("interval")), g.data("interval", setInterval(function() {
                                    if (1 == g.data("metaloaded") || 0 / 0 != f.duration) {
                                        clearInterval(g.data("interval")), "none" != j.data("dottedoverlay") && j.data("dottedoverlay") != b && 1 != j.find(".tp-dottedoverlay").length && g.append('<div class="tp-dottedoverlay ' + j.data("dottedoverlay") + '"></div>');
                                        var c = 16 / 9;
                                        if ("4:3" == j.data("aspectratio") && (c = 4 / 3), g.data("mediaAspect", c), 1 == g.closest(".tp-caption").data("forcecover") && (G(g, d.container), g.addClass("fullcoveredvideo")), e.css({
                                                display: "block"
                                            }), d.nextslideatend = j.data("nextslideatend"), 1 == j.data("autoplay") || 1 == h) {
                                            {
                                                a("body").find("#" + d.container.attr("id")).find(".tp-bannertimer")
                                            }
                                            setTimeout(function() {
                                                d.videoplaying = !0, d.container.trigger("stoptimer")
                                            }, 200), "on" != j.data("forcerewind") || g.hasClass("videoisplaying") || f.currentTime > 0 && (f.currentTime = 0), "mute" == j.data("volume") && (f.muted = !0), g.data("timerplay", setTimeout(function() {
                                                "on" != j.data("forcerewind") || g.hasClass("videoisplaying") || f.currentTime > 0 && (f.currentTime = 0), "mute" == j.data("volume") && (f.muted = !0), setTimeout(function() {
                                                    f.play()
                                                }, 500)
                                            }, 10 + j.data("start")))
                                        }
                                        if (g.data("ww") == b && g.data("ww", e.attr("width")), g.data("hh") == b && g.data("hh", e.attr("height")), !j.hasClass("fullscreenvideo") && 1 == j.data("forcecover")) try {
                                            g.width(g.data("ww") * d.bw), g.height(g.data("hh") * d.bh)
                                        } catch (k) {}
                                        clearInterval(g.data("interval"))
                                    }
                                }), 100)
                            }), 1 == j.data("autoplay")) {
                            {
                                a("body").find("#" + d.container.attr("id")).find(".tp-bannertimer")
                            }
                            setTimeout(function() {
                                d.videoplaying = !0, d.container.trigger("stoptimer")
                            }, 200), d.videoplaying = !0, d.container.trigger("stoptimer"), (1 == j.data("autoplayonlyfirsttime") || "true" == j.data("autoplayonlyfirsttime")) && (j.data("autoplay", !1), j.data("autoplayonlyfirsttime", !1))
                        }
                    }
                    var q = 0,
                        r = 0;
                    if (j.find("img").length > 0) {
                        var s = j.find("img");
                        s.data("ww") == b && s.data("ww", s.width()), s.data("hh") == b && s.data("hh", s.height());
                        var t = s.data("ww"),
                            u = s.data("hh");
                        s.width(t * d.bw), s.height(u * d.bh), q = s.width(), r = s.height()
                    } else if (j.find("iframe").length > 0 || j.find("video").length > 0) {
                        var v = !1,
                            s = j.find("iframe");
                        0 == s.length && (s = j.find("video"), v = !0), s.css({
                            display: "block"
                        }), j.data("ww") == b && j.data("ww", s.width()), j.data("hh") == b && j.data("hh", s.height());
                        var t = j.data("ww"),
                            u = j.data("hh"),
                            w = j;
                        w.data("fsize") == b && w.data("fsize", parseInt(w.css("font-size"), 0) || 0), w.data("pt") == b && w.data("pt", parseInt(w.css("paddingTop"), 0) || 0), w.data("pb") == b && w.data("pb", parseInt(w.css("paddingBottom"), 0) || 0), w.data("pl") == b && w.data("pl", parseInt(w.css("paddingLeft"), 0) || 0), w.data("pr") == b && w.data("pr", parseInt(w.css("paddingRight"), 0) || 0), w.data("mt") == b && w.data("mt", parseInt(w.css("marginTop"), 0) || 0), w.data("mb") == b && w.data("mb", parseInt(w.css("marginBottom"), 0) || 0), w.data("ml") == b && w.data("ml", parseInt(w.css("marginLeft"), 0) || 0), w.data("mr") == b && w.data("mr", parseInt(w.css("marginRight"), 0) || 0), w.data("bt") == b && w.data("bt", parseInt(w.css("borderTop"), 0) || 0), w.data("bb") == b && w.data("bb", parseInt(w.css("borderBottom"), 0) || 0), w.data("bl") == b && w.data("bl", parseInt(w.css("borderLeft"), 0) || 0), w.data("br") == b && w.data("br", parseInt(w.css("borderRight"), 0) || 0), w.data("lh") == b && w.data("lh", parseInt(w.css("lineHeight"), 0) || 0);
                        var x = d.width,
                            y = d.height;
                        if (x > d.startwidth && (x = d.startwidth), y > d.startheight && (y = d.startheight), j.hasClass("fullscreenvideo")) {
                            f = 0, g = 0, j.data("x", 0), j.data("y", 0);
                            var z = d.height;
                            "on" == d.autoHeight && (z = d.container.height()), j.css({
                                width: d.width,
                                height: z
                            })
                        } else j.css({
                            "font-size": w.data("fsize") * d.bw + "px",
                            "padding-top": w.data("pt") * d.bh + "px",
                            "padding-bottom": w.data("pb") * d.bh + "px",
                            "padding-left": w.data("pl") * d.bw + "px",
                            "padding-right": w.data("pr") * d.bw + "px",
                            "margin-top": w.data("mt") * d.bh + "px",
                            "margin-bottom": w.data("mb") * d.bh + "px",
                            "margin-left": w.data("ml") * d.bw + "px",
                            "margin-right": w.data("mr") * d.bw + "px",
                            "border-top": w.data("bt") * d.bh + "px",
                            "border-bottom": w.data("bb") * d.bh + "px",
                            "border-left": w.data("bl") * d.bw + "px",
                            "border-right": w.data("br") * d.bw + "px",
                            "line-height": w.data("lh") * d.bh + "px",
                            height: u * d.bh + "px"
                        });
                        0 == v ? (s.width(t * d.bw), s.height(u * d.bh)) : 1 == j.data("forcecover") || j.hasClass("fullscreenvideo") || (s.width(t * d.bw), s.height(u * d.bh)), q = s.width(), r = s.height()
                    } else {
                        j.find(".tp-resizeme, .tp-resizeme *").each(function() {
                            N(a(this), d)
                        }), j.hasClass("tp-resizeme") && j.find("*").each(function() {
                            N(a(this), d)
                        }), N(j, d), r = j.outerHeight(!0), q = j.outerWidth(!0);
                        var A = j.outerHeight(),
                            B = j.css("backgroundColor");
                        j.find(".frontcorner").css({
                            borderWidth: A + "px",
                            left: 0 - A + "px",
                            borderRight: "0px solid transparent",
                            borderTopColor: B
                        }), j.find(".frontcornertop").css({
                            borderWidth: A + "px",
                            left: 0 - A + "px",
                            borderRight: "0px solid transparent",
                            borderBottomColor: B
                        }), j.find(".backcorner").css({
                            borderWidth: A + "px",
                            right: 0 - A + "px",
                            borderLeft: "0px solid transparent",
                            borderBottomColor: B
                        }), j.find(".backcornertop").css({
                            borderWidth: A + "px",
                            right: 0 - A + "px",
                            borderLeft: "0px solid transparent",
                            borderTopColor: B
                        })
                    }
                    "on" == d.fullScreenAlignForce && (f = 0, g = 0), j.data("voffset") == b && j.data("voffset", 0), j.data("hoffset") == b && j.data("hoffset", 0);
                    var C = j.data("voffset") * k,
                        E = j.data("hoffset") * k,
                        K = d.startwidth * k,
                        M = d.startheight * k;
                    "on" == d.fullScreenAlignForce && (K = d.container.width(), M = d.container.height()), ("center" == j.data("x") || "center" == j.data("xcenter")) && (j.data("xcenter", "center"), j.data("x", K / 2 - j.outerWidth(!0) / 2 + E)), ("left" == j.data("x") || "left" == j.data("xleft")) && (j.data("xleft", "left"), j.data("x", 0 / k + E)), ("right" == j.data("x") || "right" == j.data("xright")) && (j.data("xright", "right"), j.data("x", (K - j.outerWidth(!0) + E) / k)), ("center" == j.data("y") || "center" == j.data("ycenter")) && (j.data("ycenter", "center"), j.data("y", M / 2 - j.outerHeight(!0) / 2 + C)), ("top" == j.data("y") || "top" == j.data("ytop")) && (j.data("ytop", "top"), j.data("y", 0 / d.bh + C)), ("bottom" == j.data("y") || "bottom" == j.data("ybottom")) && (j.data("ybottom", "bottom"), j.data("y", (M - j.outerHeight(!0) + C) / k)), j.data("start") == b && j.data("start", 1e3);
                    var Q = j.data("easing");
                    Q == b && (Q = "Power1.easeOut");
                    var T = j.data("start") / 1e3,
                        U = j.data("speed") / 1e3;
                    if ("center" == j.data("x") || "center" == j.data("xcenter")) var W = j.data("x") + f;
                    else var W = k * j.data("x") + f;
                    if ("center" == j.data("y") || "center" == j.data("ycenter")) var X = j.data("y") + g;
                    else var X = d.bh * j.data("y") + g;
                    if (TweenLite.set(j, {
                            top: X,
                            left: W,
                            overwrite: "auto"
                        }), 0 == i && (h = !0), !h) {
                        j.data("timeline") != b && j.data("timeline").clear();
                        var $ = new TimelineLite({
                            smoothChildTiming: !0,
                            onStart: Z
                        });
                        "on" == d.fullScreenAlignForce;
                        var _ = j;
                        j.data("mySplitText") != b && j.data("mySplitText").revert(), ("chars" == j.data("splitin") || "words" == j.data("splitin") || "lines" == j.data("splitin") || "chars" == j.data("splitout") || "words" == j.data("splitout") || "lines" == j.data("splitout")) && (j.find("a").length > 0 ? j.data("mySplitText", new SplitText(j.find("a"), {
                            type: "lines,words,chars",
                            charsClass: "tp-splitted",
                            wordsClass: "tp-splitted",
                            linesClass: "tp-splitted"
                        })) : j.data("mySplitText", new SplitText(j, {
                            type: "lines,words,chars",
                            charsClass: "tp-splitted",
                            wordsClass: "tp-splitted",
                            linesClass: "tp-splitted"
                        })), j.addClass("splitted")), "chars" == j.data("splitin") && (_ = j.data("mySplitText").chars), "words" == j.data("splitin") && (_ = j.data("mySplitText").words), "lines" == j.data("splitin") && (_ = j.data("mySplitText").lines);
                        var ab = H(),
                            bb = H();
                        j.data("repeat") != b && (repeatV = j.data("repeat")), j.data("yoyo") != b && (yoyoV = j.data("yoyo")), j.data("repeatdelay") != b && (repeatdelayV = j.data("repeatdelay")), j.hasClass("customin") ? ab = I(ab, j.data("customin")) : j.hasClass("randomrotate") ? (ab.scale = 3 * Math.random() + 1, ab.rotation = Math.round(200 * Math.random() - 100), ab.x = Math.round(200 * Math.random() - 100), ab.y = Math.round(200 * Math.random() - 100)) : j.hasClass("lfr") || j.hasClass("skewfromright") ? ab.x = 15 + d.width : j.hasClass("lfl") || j.hasClass("skewfromleft") ? ab.x = -15 - q : j.hasClass("sfl") || j.hasClass("skewfromleftshort") ? ab.x = -50 : j.hasClass("sfr") || j.hasClass("skewfromrightshort") ? ab.x = 50 : j.hasClass("lft") ? ab.y = -25 - r : j.hasClass("lfb") ? ab.y = 25 + d.height : j.hasClass("sft") ? ab.y = -50 : j.hasClass("sfb") && (ab.y = 50), j.hasClass("skewfromright") || j.hasClass("skewfromrightshort") ? ab.skewX = -85 : (j.hasClass("skewfromleft") || j.hasClass("skewfromleftshort")) && (ab.skewX = 85), (j.hasClass("fade") || j.hasClass("sft") || j.hasClass("sfl") || j.hasClass("sfb") || j.hasClass("skewfromleftshort") || j.hasClass("sfr") || j.hasClass("skewfromrightshort")) && (ab.opacity = 0), "safari" == L().toLowerCase() && (ab.rotationX = 0, ab.rotationY = 0);
                        var cb = j.data("elementdelay") == b ? 0 : j.data("elementdelay");
                        bb.ease = ab.ease = j.data("easing") == b ? Power1.easeInOut : j.data("easing"), ab.data = new Object, ab.data.oldx = ab.x, ab.data.oldy = ab.y, bb.data = new Object, bb.data.oldx = bb.x, bb.data.oldy = bb.y, ab.x = ab.x * k, ab.y = ab.y * k;
                        var db = new TimelineLite;
                        if (2 != i)
                            if (j.hasClass("customin")) _ != j && $.add(TweenLite.set(j, {
                                opacity: 1,
                                scaleX: 1,
                                scaleY: 1,
                                rotationX: 0,
                                rotationY: 0,
                                rotationZ: 0,
                                skewX: 0,
                                skewY: 0,
                                z: 0,
                                x: 0,
                                y: 0,
                                visibility: "visible",
                                opacity: 1,
                                delay: 0,
                                overwrite: "all"
                            })), ab.visibility = "hidden", bb.visibility = "visible", bb.overwrite = "all", bb.opacity = 1, bb.onComplete = Y(), bb.delay = T, $.add(db.staggerFromTo(_, U, ab, bb, cb), "frame0");
                            else if (ab.visibility = "visible", ab.transformPerspective = 600, _ != j && $.add(TweenLite.set(j, {
                                opacity: 1,
                                scaleX: 1,
                                scaleY: 1,
                                rotationX: 0,
                                rotationY: 0,
                                rotationZ: 0,
                                skewX: 0,
                                skewY: 0,
                                z: 0,
                                x: 0,
                                y: 0,
                                visibility: "visible",
                                opacity: 1,
                                delay: 0,
                                overwrite: "all"
                            })), bb.visibility = "visible", bb.delay = T, bb.onComplete = Y(), bb.opacity = 1, j.hasClass("randomrotate") && _ != j)
                            for (var c = 0; c < _.length; c++) {
                                var eb = new Object,
                                    fb = new Object;
                                a.extend(eb, ab), a.extend(fb, bb), ab.scale = 3 * Math.random() + 1, ab.rotation = Math.round(200 * Math.random() - 100), ab.x = Math.round(200 * Math.random() - 100), ab.y = Math.round(200 * Math.random() - 100), 0 != c && (fb.delay = T + c * cb), $.append(TweenLite.fromTo(_[c], U, eb, fb), "frame0")
                            } else $.add(db.staggerFromTo(_, U, ab, bb, cb), "frame0");
                        j.data("timeline", $); {
                            new Array
                        }
                        if (j.data("frames") != b) {
                            var hb = j.data("frames");
                            hb = hb.replace(/\s+/g, ""), hb = hb.replace("{", "");
                            var ib = hb.split("}");
                            a.each(ib, function(a, b) {
                                if (b.length > 0) {
                                    var c = J(b);
                                    R(j, d, c, "frame" + (a + 10), k)
                                }
                            })
                        }
                        $ = j.data("timeline"), j.data("end") == b || -1 != i && 2 != i ? -1 == i || 2 == i ? S(j, d, 999999, ab, "frame99", k) : S(j, d, 200, ab, "frame99", k) : S(j, d, j.data("end") / 1e3, ab, "frame99", k), $ = j.data("timeline"), j.data("timeline", $), O(j, k)
                    }
                }
                if (h && (P(j), O(j, k), j.data("timeline") != b)) {
                    var jb = j.data("timeline").getTweensOf();
                    a.each(jb, function(a, c) {
                        if (c.vars.data != b) {
                            var d = c.vars.data.oldx * k,
                                e = c.vars.data.oldy * k;
                            if (1 != c.progress() && 0 != c.progress()) try {
                                c.vars.x = d, c.vary.y = e
                            } catch (f) {} else 1 == c.progress() && TweenLite.set(c.target, {
                                x: d,
                                y: e
                            })
                        }
                    })
                }
            });
            var j = a("body").find("#" + d.container.attr("id")).find(".tp-bannertimer");
            j.data("opt", d)
        },
        L = function() {
            var c, a = navigator.appName,
                b = navigator.userAgent,
                d = b.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return d && null != (c = b.match(/version\/([\.\d]+)/i)) && (d[2] = c[1]), d = d ? [d[1], d[2]] : [a, navigator.appVersion, "-?"], d[0]
        },
        N = function(a, c) {
            a.data("fsize") == b && a.data("fsize", parseInt(a.css("font-size"), 0) || 0), a.data("pt") == b && a.data("pt", parseInt(a.css("paddingTop"), 0) || 0), a.data("pb") == b && a.data("pb", parseInt(a.css("paddingBottom"), 0) || 0), a.data("pl") == b && a.data("pl", parseInt(a.css("paddingLeft"), 0) || 0), a.data("pr") == b && a.data("pr", parseInt(a.css("paddingRight"), 0) || 0), a.data("mt") == b && a.data("mt", parseInt(a.css("marginTop"), 0) || 0), a.data("mb") == b && a.data("mb", parseInt(a.css("marginBottom"), 0) || 0), a.data("ml") == b && a.data("ml", parseInt(a.css("marginLeft"), 0) || 0), a.data("mr") == b && a.data("mr", parseInt(a.css("marginRight"), 0) || 0), a.data("bt") == b && a.data("bt", parseInt(a.css("borderTopWidth"), 0) || 0), a.data("bb") == b && a.data("bb", parseInt(a.css("borderBottomWidth"), 0) || 0), a.data("bl") == b && a.data("bl", parseInt(a.css("borderLeftWidth"), 0) || 0), a.data("br") == b && a.data("br", parseInt(a.css("borderRightWidth"), 0) || 0), a.data("ls") == b && a.data("ls", parseInt(a.css("letterSpacing"), 0) || 0), a.data("lh") == b && a.data("lh", parseInt(a.css("lineHeight"), 0) || 0), a.data("minwidth") == b && a.data("minwidth", parseInt(a.css("minWidth"), 0) || 0), a.data("minheight") == b && a.data("minheight", parseInt(a.css("minHeight"), 0) || 0), a.data("maxwidth") == b && a.data("maxwidth", parseInt(a.css("maxWidth"), 0) || "none"), a.data("maxheight") == b && a.data("maxheight", parseInt(a.css("maxHeight"), 0) || "none"), a.data("wii") == b && a.data("wii", parseInt(a.css("width"), 0) || 0), a.data("hii") == b && a.data("hii", parseInt(a.css("height"), 0) || 0), a.data("wan") == b && a.data("wan", a.css("-webkit-transition")), a.data("moan") == b && a.data("moan", a.css("-moz-animation-transition")), a.data("man") == b && a.data("man", a.css("-ms-animation-transition")), a.data("ani") == b && a.data("ani", a.css("transition")), a.hasClass("tp-splitted") || (a.css("-webkit-transition", "none"), a.css("-moz-transition", "none"), a.css("-ms-transition", "none"), a.css("transition", "none"), TweenLite.set(a, {
                fontSize: Math.round(a.data("fsize") * c.bw) + "px",
                letterSpacing: Math.floor(a.data("ls") * c.bw) + "px",
                paddingTop: Math.round(a.data("pt") * c.bh) + "px",
                paddingBottom: Math.round(a.data("pb") * c.bh) + "px",
                paddingLeft: Math.round(a.data("pl") * c.bw) + "px",
                paddingRight: Math.round(a.data("pr") * c.bw) + "px",
                marginTop: a.data("mt") * c.bh + "px",
                marginBottom: a.data("mb") * c.bh + "px",
                marginLeft: a.data("ml") * c.bw + "px",
                marginRight: a.data("mr") * c.bw + "px",
                borderTopWidth: Math.round(a.data("bt") * c.bh) + "px",
                borderBottomWidth: Math.round(a.data("bb") * c.bh) + "px",
                borderLeftWidth: Math.round(a.data("bl") * c.bw) + "px",
                borderRightWidth: Math.round(a.data("br") * c.bw) + "px",
                lineHeight: Math.round(a.data("lh") * c.bh) + "px",
                minWidth: a.data("minwidth") * c.bw + "px",
                minHeight: a.data("minheight") * c.bh + "px",
                overwrite: "auto"
            }), setTimeout(function() {
                a.css("-webkit-transition", a.data("wan")), a.css("-moz-transition", a.data("moan")), a.css("-ms-transition", a.data("man")), a.css("transition", a.data("ani"))
            }, 30), "none" != a.data("maxheight") && a.css({
                maxHeight: a.data("maxheight") * c.bh + "px"
            }), "none" != a.data("maxwidth") && a.css({
                maxWidth: a.data("maxwidth") * c.bw + "px"
            }))
        },
        O = function(c, d) {
            c.find(".rs-pendulum").each(function() {
                var c = a(this);
                if (c.data("timeline") == b) {
                    c.data("timeline", new TimelineLite);
                    var e = c.data("startdeg") == b ? -20 : c.data("startdeg"),
                        f = c.data("enddeg") == b ? 20 : c.data("enddeg");
                    speed = c.data("speed") == b ? 2 : c.data("speed"), origin = c.data("origin") == b ? "50% 50%" : c.data("origin"), easing = c.data("ease") == b ? Power2.easeInOut : c.data("ease"), e *= d, f *= d, c.data("timeline").append(new TweenLite.fromTo(c, speed, {
                        rotation: e,
                        transformOrigin: origin
                    }, {
                        rotation: f,
                        ease: easing
                    })), c.data("timeline").append(new TweenLite.fromTo(c, speed, {
                        rotation: f,
                        transformOrigin: origin
                    }, {
                        rotation: e,
                        ease: easing,
                        onComplete: function() {
                            c.data("timeline").restart()
                        }
                    }))
                }
            }), c.find(".rs-slideloop").each(function() {
                var c = a(this);
                if (c.data("timeline") == b) {
                    c.data("timeline", new TimelineLite);
                    var e = c.data("xs") == b ? 0 : c.data("xs"),
                        f = c.data("ys") == b ? 0 : c.data("ys");
                    xe = c.data("xe") == b ? 0 : c.data("xe"), ye = c.data("ye") == b ? 0 : c.data("ye"), speed = c.data("speed") == b ? 2 : c.data("speed"), easing = c.data("ease") == b ? Power2.easeInOut : c.data("ease"), e *= d, f *= d, xe *= d, ye *= d, c.data("timeline").append(new TweenLite.fromTo(c, speed, {
                        x: e,
                        y: f
                    }, {
                        x: xe,
                        y: ye,
                        ease: easing
                    })), c.data("timeline").append(new TweenLite.fromTo(c, speed, {
                        x: xe,
                        y: ye
                    }, {
                        x: e,
                        y: f,
                        onComplete: function() {
                            c.data("timeline").restart()
                        }
                    }))
                }
            }), c.find(".rs-pulse").each(function() {
                var c = a(this);
                if (c.data("timeline") == b) {
                    c.data("timeline", new TimelineLite);
                    var d = c.data("zoomstart") == b ? 0 : c.data("zoomstart"),
                        e = c.data("zoomend") == b ? 0 : c.data("zoomend");
                    speed = c.data("speed") == b ? 2 : c.data("speed"), easing = c.data("ease") == b ? Power2.easeInOut : c.data("ease"), c.data("timeline").append(new TweenLite.fromTo(c, speed, {
                        scale: d
                    }, {
                        scale: e,
                        ease: easing
                    })), c.data("timeline").append(new TweenLite.fromTo(c, speed, {
                        scale: e
                    }, {
                        scale: d,
                        onComplete: function() {
                            c.data("timeline").restart()
                        }
                    }))
                }
            }), c.find(".rs-wave").each(function() {
                var c = a(this);
                if (c.data("timeline") == b) {
                    c.data("timeline", new TimelineLite); {
                        var e = c.data("angle") == b ? 10 : c.data("angle"),
                            f = c.data("radius") == b ? 10 : c.data("radius"),
                            g = c.data("speed") == b ? -20 : c.data("speed");
                        c.data("origin") == b ? -20 : c.data("origin")
                    }
                    e *= d, f *= d;
                    var i = {
                        a: 0,
                        ang: e,
                        element: c,
                        unit: f
                    };
                    c.data("timeline").append(new TweenLite.fromTo(i, g, {
                        a: 360
                    }, {
                        a: 0,
                        ease: Linear.easeNone,
                        onUpdate: function() {
                            var a = i.a * (Math.PI / 180);
                            TweenLite.to(i.element, .1, {
                                x: Math.cos(a) * i.unit,
                                y: i.unit * (1 - Math.sin(a))
                            })
                        },
                        onComplete: function() {
                            c.data("timeline").restart()
                        }
                    }))
                }
            })
        },
        P = function(c) {
            c.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function() {
                var c = a(this);
                c.data("timeline") != b && (c.data("timeline").pause(), c.data("timeline", null))
            })
        },
        Q = function(c, d) {
            var e = 0,
                f = c.find(".tp-caption"),
                g = d.container.find(".tp-static-layers").find(".tp-caption");
            return a.each(g, function(a, b) {
                f.push(b)
            }), f.each(function() {
                var f = -1,
                    g = a(this);
                if (g.hasClass("tp-static-layer") && (g.hasClass("tp-is-shown") ? g.data("startslide") > d.next || g.data("endslide") < d.next ? (f = 2, g.removeClass("tp-is-shown")) : f = 0 : f = 2), 0 != f) {
                    if (P(g), g.find("iframe").length > 0) {
                        try {
                            var h = g.find("iframe"),
                                i = h.attr("id"),
                                j = $f(i);
                            j.api("pause"), clearTimeout(g.data("timerplay"))
                        } catch (k) {}
                        try {
                            var l = g.data("player");
                            l.stopVideo(), clearTimeout(g.data("timerplay"))
                        } catch (k) {}
                    }
                    if (g.find("video").length > 0) try {
                        g.find("video").each(function() {
                            {
                                var c = a(this).parent();
                                c.attr("id")
                            }
                            clearTimeout(c.data("timerplay"));
                            var e = this;
                            e.pause()
                        })
                    } catch (k) {}
                    try {
                        var m = g.data("timeline"),
                            n = m.getLabelTime("frame99"),
                            o = m.time();
                        if (n > o) {
                            var p = m.getTweensOf(g);
                            if (a.each(p, function(a, b) {
                                    0 != a && b.pause()
                                }), 0 != g.css("opacity")) {
                                var q = g.data(g.data("endspeed") == b ? "speed" : "endspeed");
                                q > e && (e = q), m.play("frame99")
                            } else m.progress(1, !1)
                        }
                    } catch (k) {}
                }
            }), e
        },
        R = function(a, c, d, e, f) {
            var g = a.data("timeline"),
                h = new TimelineLite,
                i = a;
            "chars" == d.typ ? i = a.data("mySplitText").chars : "words" == d.typ ? i = a.data("mySplitText").words : "lines" == d.typ && (i = a.data("mySplitText").lines), d.animation.ease = d.ease, d.animation.rotationZ != b && (d.animation.rotation = d.animation.rotationZ), d.animation.data = new Object, d.animation.data.oldx = d.animation.x, d.animation.data.oldy = d.animation.y, d.animation.x = d.animation.x * f, d.animation.y = d.animation.y * f, g.add(h.staggerTo(i, d.speed, d.animation, d.elementdelay), d.start), g.addLabel(e, d.start), a.data("timeline", g)
        },
        S = function(a, c, d, e, f, g) {
            var h = a.data("timeline"),
                i = new TimelineLite,
                j = H(),
                k = a.data(a.data("endspeed") == b ? "speed" : "endspeed");
            if (j.ease = a.data("endeasing") == b ? Power1.easeInOut : a.data("endeasing"), k /= 1e3, a.hasClass("ltr") || a.hasClass("ltl") || a.hasClass("str") || a.hasClass("stl") || a.hasClass("ltt") || a.hasClass("ltb") || a.hasClass("stt") || a.hasClass("stb") || a.hasClass("skewtoright") || a.hasClass("skewtorightshort") || a.hasClass("skewtoleft") || a.hasClass("skewtoleftshort") || a.hasClass("fadeout") || a.hasClass("randomrotateout")) {
                a.hasClass("skewtoright") || a.hasClass("skewtorightshort") ? j.skewX = 35 : (a.hasClass("skewtoleft") || a.hasClass("skewtoleftshort")) && (j.skewX = -35), a.hasClass("ltr") || a.hasClass("skewtoright") ? j.x = c.width + 60 : a.hasClass("ltl") || a.hasClass("skewtoleft") ? j.x = 0 - (c.width + 60) : a.hasClass("ltt") ? j.y = 0 - (c.height + 60) : a.hasClass("ltb") ? j.y = c.height + 60 : a.hasClass("str") || a.hasClass("skewtorightshort") ? (j.x = 50, j.opacity = 0) : a.hasClass("stl") || a.hasClass("skewtoleftshort") ? (j.x = -50, j.opacity = 0) : a.hasClass("stt") ? (j.y = -50, j.opacity = 0) : a.hasClass("stb") ? (j.y = 50, j.opacity = 0) : a.hasClass("randomrotateout") ? (j.x = Math.random() * c.width, j.y = Math.random() * c.height, j.scale = 2 * Math.random() + .3, j.rotation = 360 * Math.random() - 180, j.opacity = 0) : a.hasClass("fadeout") && (j.opacity = 0), a.hasClass("skewtorightshort") ? j.x = 270 : a.hasClass("skewtoleftshort") && (j.x = -270), j.data = new Object, j.data.oldx = j.x, j.data.oldy = j.y, j.x = j.x * g, j.y = j.y * g, j.overwrite = "auto";
                var l = a,
                    l = a;
                "chars" == a.data("splitout") ? l = a.data("mySplitText").chars : "words" == a.data("splitout") ? l = a.data("mySplitText").words : "lines" == a.data("splitout") && (l = a.data("mySplitText").lines);
                var m = a.data("endelementdelay") == b ? 0 : a.data("endelementdelay");
                h.add(i.staggerTo(l, k, j, m), d)
            } else if (a.hasClass("customout")) {
                j = I(j, a.data("customout"));
                var l = a;
                "chars" == a.data("splitout") ? l = a.data("mySplitText").chars : "words" == a.data("splitout") ? l = a.data("mySplitText").words : "lines" == a.data("splitout") && (l = a.data("mySplitText").lines);
                var m = a.data("endelementdelay") == b ? 0 : a.data("endelementdelay");
                j.onStart = function() {
                    TweenLite.set(a, {
                        transformPerspective: j.transformPerspective,
                        transformOrigin: j.transformOrigin,
                        overwrite: "auto"
                    })
                }, j.data = new Object, j.data.oldx = j.x, j.data.oldy = j.y, j.x = j.x * g, j.y = j.y * g, h.add(i.staggerTo(l, k, j, m), d)
            } else e.delay = 0, h.add(TweenLite.to(a, k, e), d);
            h.addLabel(f, d), a.data("timeline", h)
        },
        T = function(b, c) {
            b.children().each(function() {
                try {
                    a(this).die("click")
                } catch (b) {}
                try {
                    a(this).die("mouseenter")
                } catch (b) {}
                try {
                    a(this).die("mouseleave")
                } catch (b) {}
                try {
                    a(this).unbind("hover")
                } catch (b) {}
            });
            try {
                b.die("click", "mouseenter", "mouseleave")
            } catch (d) {}
            clearInterval(c.cdint), b = null
        },
        U = function(c, d) {
            if (d.cd = 0, d.loop = 0, d.looptogo = d.stopAfterLoops != b && d.stopAfterLoops > -1 ? d.stopAfterLoops : 9999999, d.lastslidetoshow = d.stopAtSlide != b && d.stopAtSlide > -1 ? d.stopAtSlide : 999, d.stopLoop = "off", 0 == d.looptogo && (d.stopLoop = "on"), d.slideamount > 1 && (0 != d.stopAfterLoops || 1 != d.stopAtSlide)) {
                var e = c.find(".tp-bannertimer");
                c.on("stoptimer", function() {
                    e.data("tween").pause(), "on" == d.hideTimerBar && e.css({
                        visibility: "hidden"
                    })
                }), c.on("starttimer", function() {
                    1 != d.conthover && 1 != d.videoplaying && d.width > d.hideSliderAtLimit && 1 != d.bannertimeronpause && 1 != d.overnav && ("on" == d.stopLoop && d.next == d.lastslidetoshow - 1 || (e.css({
                        visibility: "visible"
                    }), e.data("tween").play())), "on" == d.hideTimerBar && e.css({
                        visibility: "hidden"
                    })
                }), c.on("restarttimer", function() {
                    "on" == d.stopLoop && d.next == d.lastslidetoshow - 1 || (e.css({
                        visibility: "visible"
                    }), e.data("tween", TweenLite.fromTo(e, d.delay / 1e3, {
                        width: "0%"
                    }, {
                        width: "100%",
                        ease: Linear.easeNone,
                        onComplete: f,
                        delay: 1
                    }))), "on" == d.hideTimerBar && e.css({
                        visibility: "hidden"
                    })
                }), c.on("nulltimer", function() {
                    e.data("tween").pause(0), "on" == d.hideTimerBar && e.css({
                        visibility: "hidden"
                    })
                });
                var f = function() {
                    0 == a("body").find(c).length && (T(c, d), clearInterval(d.cdint)), 1 == c.data("conthover-changed") && (d.conthover = c.data("conthover"), c.data("conthover-changed", 0)), d.act = d.next, d.next = d.next + 1, d.next > c.find(">ul >li").length - 1 && (d.next = 0, d.looptogo = d.looptogo - 1, d.looptogo <= 0 && (d.stopLoop = "on")), "on" == d.stopLoop && d.next == d.lastslidetoshow - 1 ? (c.find(".tp-bannertimer").css({
                        visibility: "hidden"
                    }), c.trigger("revolution.slide.onstop")) : e.data("tween").restart(), y(c, d)
                };
                e.data("tween", TweenLite.fromTo(e, d.delay / 1e3, {
                    width: "0%"
                }, {
                    width: "100%",
                    ease: Linear.easeNone,
                    onComplete: f,
                    delay: 1
                })), e.data("opt", d), c.hover(function() {
                    if ("on" == d.onHoverStop && !V()) {
                        c.trigger("stoptimer"), c.trigger("revolution.slide.onpause");
                        var e = c.find(">ul >li:eq(" + d.next + ") .slotholder");
                        e.find(".defaultimg").each(function() {
                            var c = a(this);
                            c.data("kenburn") != b && c.data("kenburn").pause()
                        })
                    }
                }, function() {
                    if (1 != c.data("conthover")) {
                        c.trigger("revolution.slide.onresume"), c.trigger("starttimer");
                        var e = c.find(">ul >li:eq(" + d.next + ") .slotholder");
                        e.find(".defaultimg").each(function() {
                            var c = a(this);
                            c.data("kenburn") != b && c.data("kenburn").play()
                        })
                    }
                })
            }
        },
        V = function() {
            var a = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                b = !1;
            for (i in a) navigator.userAgent.split(a[i]).length > 1 && (b = !0);
            return b
        },
        W = function(a, b, c) {
            var d = b.data("owidth"),
                e = b.data("oheight");
            if (d / e > c.width / c.height) {
                var f = c.container.width() / d,
                    g = e * f,
                    h = g / c.container.height() * a;
                return a *= 100 / h, h = 100, a = a, a + "% " + h + "% 1"
            }
            var f = c.container.width() / d,
                g = e * f,
                h = g / c.container.height() * a;
            return a + "% " + h + "%"
        },
        X = function(c, d, e, g) {
            try {
                {
                    c.find(">ul:first-child >li:eq(" + d.act + ")")
                }
            } catch (i) {
                {
                    c.find(">ul:first-child >li:eq(1)")
                }
            }
            d.lastslide = d.act;
            var j = c.find(">ul:first-child >li:eq(" + d.next + ")"),
                k = j.find(".slotholder"),
                l = k.data("bgposition"),
                m = k.data("bgpositionend"),
                n = k.data("zoomstart") / 100,
                o = k.data("zoomend") / 100,
                p = k.data("rotationstart"),
                q = k.data("rotationend"),
                r = k.data("bgfit"),
                s = k.data("bgfitend"),
                t = k.data("easeme"),
                u = k.data("duration") / 1e3,
                v = 100;
            r == b && (r = 100), s == b && (s = 100);
            var w = r,
                x = s;
            r = W(r, k, d), s = W(s, k, d), v = W(100, k, d), n == b && (n = 1), o == b && (o = 1), p == b && (p = 0), q == b && (q = 0), n < 1 && (n = 1), o < 1 && (o = 1);
            var y = new Object;
            y.w = parseInt(v.split(" ")[0], 0), y.h = parseInt(v.split(" ")[1], 0);
            var z = !1;
            "1" == v.split(" ")[2] && (z = !0), k.find(".defaultimg").each(function() {
                var b = a(this);
                0 == k.find(".kenburnimg").length ? k.append('<div class="kenburnimg" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;"><img src="' + b.attr("src") + '" style="-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;position:absolute;width:' + y.w + "%;height:" + y.h + '%;"></div>') : k.find(".kenburnimg img").css({
                    width: y.w + "%",
                    height: y.h + "%"
                });
                var c = k.find(".kenburnimg img"),
                    e = Y(d, l, r, c, z),
                    h = Y(d, m, s, c, z);
                if (z && (e.w = w / 100, h.w = x / 100), g) {
                    TweenLite.set(c, {
                        autoAlpha: 0,
                        transformPerspective: 1200,
                        transformOrigin: "0% 0%",
                        top: 0,
                        left: 0,
                        scale: e.w,
                        x: e.x,
                        y: e.y
                    });
                    var i = e.w,
                        j = i * c.width() - d.width,
                        n = i * c.height() - d.height,
                        o = Math.abs(e.x / j * 100),
                        p = Math.abs(e.y / n * 100);
                    0 == n && (p = 0), 0 == j && (o = 0), b.data("bgposition", o + "% " + p + "%"), f(8) || b.data("currotate", Z(c)), f(8) || b.data("curscale", y.w * i + "%  " + (y.h * i + "%")), k.find(".kenburnimg").remove()
                } else b.data("kenburn", TweenLite.fromTo(c, u, {
                    autoAlpha: 1,
                    force3D: !0,
                    transformOrigin: "0% 0%",
                    top: 0,
                    left: 0,
                    scale: e.w,
                    x: e.x,
                    y: e.y
                }, {
                    autoAlpha: 1,
                    rotationZ: q,
                    ease: t,
                    x: h.x,
                    y: h.y,
                    scale: h.w,
                    onUpdate: function() {
                        var a = c[0]._gsTransform.scaleX,
                            e = a * c.width() - d.width,
                            g = a * c.height() - d.height,
                            h = Math.abs(c[0]._gsTransform.x / e * 100),
                            i = Math.abs(c[0]._gsTransform.y / g * 100);
                        0 == g && (i = 0), 0 == e && (h = 0), b.data("bgposition", h + "% " + i + "%"), f(8) || b.data("currotate", Z(c)), f(8) || b.data("curscale", y.w * a + "%  " + (y.h * a + "%"))
                    }
                }))
            })
        },
        Y = function(a, b, c, d, e) {
            var f = new Object;
            switch (f.w = e ? parseInt(c.split(" ")[1], 0) / 100 : parseInt(c.split(" ")[0], 0) / 100, b) {
                case "left top":
                case "top left":
                    f.x = 0, f.y = 0;
                    break;
                case "center top":
                case "top center":
                    f.x = ((0 - d.width()) * f.w + parseInt(a.width, 0)) / 2, f.y = 0;
                    break;
                case "top right":
                case "right top":
                    f.x = (0 - d.width()) * f.w + parseInt(a.width, 0), f.y = 0;
                    break;
                case "center left":
                case "left center":
                    f.x = 0, f.y = ((0 - d.height()) * f.w + parseInt(a.height, 0)) / 2;
                    break;
                case "center center":
                    f.x = ((0 - d.width()) * f.w + parseInt(a.width, 0)) / 2, f.y = ((0 - d.height()) * f.w + parseInt(a.height, 0)) / 2;
                    break;
                case "center right":
                case "right center":
                    f.x = (0 - d.width()) * f.w + parseInt(a.width, 0), f.y = ((0 - d.height()) * f.w + parseInt(a.height, 0)) / 2;
                    break;
                case "bottom left":
                case "left bottom":
                    f.x = 0, f.y = (0 - d.height()) * f.w + parseInt(a.height, 0);
                    break;
                case "bottom center":
                case "center bottom":
                    f.x = ((0 - d.width()) * f.w + parseInt(a.width, 0)) / 2, f.y = (0 - d.height()) * f.w + parseInt(a.height, 0);
                    break;
                case "bottom right":
                case "right bottom":
                    f.x = (0 - d.width()) * f.w + parseInt(a.width, 0), f.y = (0 - d.height()) * f.w + parseInt(a.height, 0)
            }
            return f
        },
        Z = function(a) {
            var b = a.css("-webkit-transform") || a.css("-moz-transform") || a.css("-ms-transform") || a.css("-o-transform") || a.css("transform");
            if ("none" !== b) var c = b.split("(")[1].split(")")[0].split(","),
                d = c[0],
                e = c[1],
                f = Math.round(Math.atan2(e, d) * (180 / Math.PI));
            else var f = 0;
            return f < 0 ? f += 360 : f
        },
        $ = function(c, d) {
            try {
                var e = c.find(">ul:first-child >li:eq(" + d.act + ")")
            } catch (f) {
                var e = c.find(">ul:first-child >li:eq(1)")
            }
            d.lastslide = d.act; {
                var g = c.find(">ul:first-child >li:eq(" + d.next + ")");
                e.find(".slotholder"), g.find(".slotholder")
            }
            c.find(".defaultimg").each(function() {
                var c = a(this);
                TweenLite.killTweensOf(c, !1), TweenLite.set(c, {
                    scale: 1,
                    rotationZ: 0
                }), TweenLite.killTweensOf(c.data("kenburn img"), !1), c.data("kenburn") != b && c.data("kenburn").pause(), c.data("currotate") != b && c.data("bgposition") != b && c.data("curscale") != b && TweenLite.set(c, {
                    rotation: c.data("currotate"),
                    backgroundPosition: c.data("bgposition"),
                    backgroundSize: c.data("curscale")
                }), c != b && c.data("kenburn img") != b && c.data("kenburn img").length > 0 && TweenLite.set(c.data("kenburn img"), {
                    autoAlpha: 0
                })
            })
        },
        _ = function(b, c) {
            b.find(">ul:first-child >li").each(function() {
                for (var b = a(this), d = 1; d <= 10; d++) b.find(".rs-parallaxlevel-" + d).each(function() {
                    var b = a(this);
                    b.wrap('<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:' + b.css("zIndex") + '" class="tp-parallax-container" data-parallaxlevel="' + c.parallaxLevels[d - 1] + '"></div>')
                })
            }), ("mouse" == c.parallax || "scroll+mouse" == c.parallax || "mouse+scroll" == c.parallax) && (b.mouseenter(function(a) {
                var c = b.find(".current-sr-slide-visible"),
                    d = b.offset().top,
                    e = b.offset().left,
                    f = a.pageX - e,
                    g = a.pageY - d;
                c.data("enterx", f), c.data("entery", g)
            }), b.on("mousemove.hoverdir, mouseleave.hoverdir", function(c) {
                var d = b.find(".current-sr-slide-visible");
                switch (c.type) {
                    case "mousemove":
                        var e = b.offset().top,
                            f = b.offset().left,
                            g = d.data("enterx"),
                            h = d.data("entery"),
                            i = g - (c.pageX - f),
                            j = h - (c.pageY - e);
                        d.find(".tp-parallax-container").each(function() {
                            var b = a(this),
                                c = parseInt(b.data("parallaxlevel"), 0) / 100,
                                d = i * c,
                                e = j * c;
                            TweenLite.to(b, .4, {
                                x: d,
                                y: e,
                                ease: Power3.easeOut,
                                overwrite: "all"
                            })
                        });
                        break;
                    case "mouseleave":
                        d.find(".tp-parallax-container").each(function() {
                            var b = a(this);
                            TweenLite.to(b, 1.5, {
                                x: 0,
                                y: 0,
                                ease: Power3.easeOut
                            })
                        })
                }
            }), V() && (window.ondeviceorientation = function(c) {
                var d = Math.round(c.beta || 0),
                    e = Math.round(c.gamma || 0),
                    f = b.find(".current-sr-slide-visible");
                if (a(window).width() > a(window).height()) {
                    var g = e;
                    e = d, d = g
                }
                var h = 360 / b.width() * e,
                    i = 180 / b.height() * d;
                f.find(".tp-parallax-container").each(function() {
                    var b = a(this),
                        c = parseInt(b.data("parallaxlevel"), 0) / 100,
                        d = h * c,
                        e = i * c;
                    TweenLite.to(b, .2, {
                        x: d,
                        y: e,
                        ease: Power3.easeOut
                    })
                })
            })), ("scroll" == c.parallax || "scroll+mouse" == c.parallax || "mouse+scroll" == c.parallax) && a(window).on("scroll", function() {
                ab(b, c)
            })
        },
        ab = function(b, c) {
            var d = b.offset().top,
                e = a(window).scrollTop(),
                f = d + b.height() / 2,
                g = d + b.height() / 2 - e,
                h = a(window).height() / 2,
                i = h - g;
            f < h && (i -= h - f);
            b.find(".current-sr-slide-visible");
            if (b.find(".tp-parallax-container").each(function() {
                    var c = a(this),
                        d = parseInt(c.data("parallaxlevel"), 0) / 100,
                        e = i * d;
                    c.data("parallaxoffset", e), TweenLite.to(c, .2, {
                        y: e,
                        ease: Power3.easeOut
                    })
                }), "on" != c.parallaxBgFreeze) {
                var k = c.parallaxLevels[0] / 100,
                    l = i * k;
                TweenLite.to(b, .2, {
                    y: l,
                    ease: Power3.easeOut
                })
            }
        },
        bb = function(c, d) {
            var e = c.parent();
            ("thumb" == d.navigationType || "both" == d.navsecond) && e.append('<div class="tp-bullets tp-thumbs ' + d.navigationStyle + '"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>');
            var f = e.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),
                h = f.parent();
            h.width(d.thumbWidth * d.thumbAmount), h.height(d.thumbHeight), h.parent().width(d.thumbWidth * d.thumbAmount), h.parent().height(d.thumbHeight), c.find(">ul:first >li").each(function(a) {
                var e = c.find(">ul:first >li:eq(" + a + ")"),
                    g = e.find(".defaultimg").css("backgroundColor");
                if (e.data("thumb") != b) var h = e.data("thumb");
                else var h = e.find("img:first").attr("src");
                f.append('<div class="bullet thumb" style="background-color:' + g + ";position:relative;width:" + d.thumbWidth + "px;height:" + d.thumbHeight + "px;background-image:url(" + h + ') !important;background-size:cover;background-position:center center;"></div>');
                f.find(".bullet:first")
            });
            var i = 10;
            f.find(".bullet").each(function(b) {
                var e = a(this);
                b == d.slideamount - 1 && e.addClass("last"), 0 == b && e.addClass("first"), e.width(d.thumbWidth), e.height(d.thumbHeight), i < e.outerWidth(!0) && (i = e.outerWidth(!0)), e.click(function() {
                    0 == d.transition && e.index() != d.act && (d.next = e.index(), g(d, c))
                })
            });
            var j = i * c.find(">ul:first >li").length,
                k = f.parent().width();
            d.thumbWidth = i, k < j && (a(document).mousemove(function(b) {
                a("body").data("mousex", b.pageX)
            }), f.parent().mouseenter(function() {
                var b = a(this);
                b.addClass("over");
                var d = b.offset(),
                    e = a("body").data("mousex") - d.left,
                    f = b.width(),
                    g = b.find(".bullet:first").outerWidth(!0),
                    h = g * c.find(">ul:first >li").length,
                    i = h - f + 15,
                    j = i / f;
                e -= 30;
                var k = 0 - e * j;
                k > 0 && (k = 0), k < 0 - h + f && (k = 0 - h + f), db(b, k, 200)
            }), f.parent().mousemove(function() {
                var b = a(this),
                    d = b.offset(),
                    e = a("body").data("mousex") - d.left,
                    f = b.width(),
                    g = b.find(".bullet:first").outerWidth(!0),
                    h = g * c.find(">ul:first >li").length - 1,
                    i = h - f + 15,
                    j = i / f;
                e -= 3, e < 6 && (e = 0), e + 3 > f - 6 && (e = f);
                var k = 0 - e * j;
                k > 0 && (k = 0), k < 0 - h + f && (k = 0 - h + f), db(b, k, 0)
            }), f.parent().mouseleave(function() {
                var b = a(this);
                b.removeClass("over"), cb(c)
            }))
        },
        cb = function(a) {
            var b = a.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),
                c = b.parent(),
                e = (c.offset(), c.find(".bullet:first").outerWidth(!0)),
                f = c.find(".bullet.selected").index() * e,
                g = c.width(),
                e = c.find(".bullet:first").outerWidth(!0),
                h = e * a.find(">ul:first >li").length,
                k = 0 - f;
            k > 0 && (k = 0), k < 0 - h + g && (k = 0 - h + g), c.hasClass("over") || db(c, k, 200)
        },
        db = function(a, b) {
            TweenLite.to(a.find(".tp-thumbcontainer"), .2, {
                left: b,
                ease: Power3.easeOut,
                overwrite: "auto"
            })
        }
}(jQuery),
function(a) {
    "use strict";
    var b = a.GreenSockGlobals || a,
        c = function(a) {
            var c, d = a.split("."),
                e = b;
            for (c = 0; d.length > c; c++) e[d[c]] = e = e[d[c]] || {};
            return e
        },
        d = c("com.greensock.utils"),
        e = function(a) {
            var b = a.nodeType,
                c = "";
            if (1 === b || 9 === b || 11 === b) {
                if ("string" == typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
            } else if (3 === b || 4 === b) return a.nodeValue;
            return c
        },
        f = document,
        g = f.defaultView ? f.defaultView.getComputedStyle : function() {},
        h = /([A-Z])/g,
        i = function(a, b, c, d) {
            var e;
            return (c = c || g(a, null)) ? (a = c.getPropertyValue(b.replace(h, "-$1").toLowerCase()), e = a || c.length ? a : c[b]) : a.currentStyle && (c = a.currentStyle, e = c[b]), d ? e : parseInt(e, 10) || 0
        },
        j = function(a) {
            return a.length && a[0] && (a[0].nodeType && a[0].style && !a.nodeType || a[0].length && a[0][0]) ? !0 : !1
        },
        k = function(a) {
            var b, c, d, e = [],
                f = a.length;
            for (b = 0; f > b; b++)
                if (c = a[b], j(c))
                    for (d = c.length, d = 0; c.length > d; d++) e.push(c[d]);
                else e.push(c);
            return e
        },
        l = ")eefec303079ad17405c",
        m = /(?:<br>|<br\/>|<br \/>)/gi,
        n = f.all && !f.addEventListener,
        o = "<div style='position:relative;display:inline-block;" + (n ? "*display:inline;*zoom:1;'" : "'"),
        p = function(a) {
            a = a || "";
            var b = -1 !== a.indexOf("++"),
                c = 1;
            return b && (a = a.split("++").join("")),
                function() {
                    return o + (a ? " class='" + a + (b ? c++ : "") + "'>" : ">")
                }
        },
        q = d.SplitText = b.SplitText = function(a, b) {
            if ("string" == typeof a && (a = q.selector(a)), !a) throw "cannot split a null element.";
            this.elements = j(a) ? k(a) : [a], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = b || {}, this.split(b)
        },
        r = function(a, b, c, d, h) {
            m.test(a.innerHTML) && (a.innerHTML = a.innerHTML.replace(m, l));
            var j, k, n, o, q, r, s, t, u, v, w, x, y, z = e(a),
                A = b.type || b.split || "chars,words,lines",
                B = -1 !== A.indexOf("lines") ? [] : null,
                C = -1 !== A.indexOf("words"),
                D = -1 !== A.indexOf("chars"),
                E = "absolute" === b.position || b.absolute === !0,
                F = E ? "&#173; " : " ",
                G = -999,
                H = g(a),
                I = i(a, "paddingLeft", H),
                J = i(a, "borderBottomWidth", H) + i(a, "borderTopWidth", H),
                K = i(a, "borderLeftWidth", H) + i(a, "borderRightWidth", H),
                L = i(a, "paddingTop", H) + i(a, "paddingBottom", H),
                M = i(a, "paddingLeft", H) + i(a, "paddingRight", H),
                N = i(a, "textAlign", H, !0),
                O = a.clientHeight,
                P = a.clientWidth,
                Q = z.length,
                R = "</div>",
                S = p(b.wordsClass),
                T = p(b.charsClass),
                U = -1 !== (b.linesClass || "").indexOf("++"),
                V = b.linesClass;
            for (U && (V = V.split("++").join("")), n = S(), o = 0; Q > o; o++) r = z.charAt(o), ")" === r && z.substr(o, 20) === l ? (n += R + "<BR/>", o !== Q - 1 && (n += " " + S()), o += 19) : " " === r && " " !== z.charAt(o - 1) && o !== Q - 1 ? (n += R, o !== Q - 1 && (n += F + S())) : n += D && " " !== r ? T() + r + "</div>" : r;
            for (a.innerHTML = n + R, q = a.getElementsByTagName("*"), Q = q.length, s = [], o = 0; Q > o; o++) s[o] = q[o];
            if (B || E)
                for (o = 0; Q > o; o++) t = s[o], k = t.parentNode === a, (k || E || D && !C) && (u = t.offsetTop, B && k && u !== G && "BR" !== t.nodeName && (j = [], B.push(j), G = u), E && (t._x = t.offsetLeft, t._y = u, t._w = t.offsetWidth, t._h = t.offsetHeight), B && (C !== k && D || (j.push(t), t._x -= I), k && o && (s[o - 1]._wordEnd = !0)));
            for (o = 0; Q > o; o++) t = s[o], k = t.parentNode === a, "BR" !== t.nodeName ? (E && (w = t.style, C || k || (t._x += t.parentNode._x, t._y += t.parentNode._y), w.left = t._x + "px", w.top = t._y + "px", w.position = "absolute", w.display = "block", w.width = t._w + 1 + "px", w.height = t._h + "px"), C ? k ? d.push(t) : D && c.push(t) : k ? (a.removeChild(t), s.splice(o--, 1), Q--) : !k && D && (u = !B && !E && t.nextSibling, a.appendChild(t), u || a.appendChild(f.createTextNode(" ")), c.push(t))) : B || E ? (a.removeChild(t), s.splice(o--, 1), Q--) : C || a.appendChild(t);
            if (B) {
                for (E && (v = f.createElement("div"), a.appendChild(v), x = v.offsetWidth + "px", u = v.offsetParent === a ? 0 : a.offsetLeft, a.removeChild(v)), w = a.style.cssText, a.style.cssText = "display:none;"; a.firstChild;) a.removeChild(a.firstChild);
                for (y = !E || !C && !D, o = 0; B.length > o; o++) {
                    for (j = B[o], v = f.createElement("div"), v.style.cssText = "display:block;text-align:" + N + ";position:" + (E ? "absolute;" : "relative;"), V && (v.className = V + (U ? o + 1 : "")), h.push(v), Q = j.length, q = 0; Q > q; q++) "BR" !== j[q].nodeName && (t = j[q], v.appendChild(t), y && (t._wordEnd || C) && v.appendChild(f.createTextNode(" ")), E && (0 === q && (v.style.top = t._y + "px", v.style.left = I + u + "px"), t.style.top = "0px", u && (t.style.left = t._x - u + "px")));
                    C || D || (v.innerHTML = e(v).split(String.fromCharCode(160)).join(" ")), E && (v.style.width = x, v.style.height = t._h + "px"), a.appendChild(v)
                }
                a.style.cssText = w
            }
            E && (O > a.clientHeight && (a.style.height = O - L + "px", O > a.clientHeight && (a.style.height = O + J + "px")), P > a.clientWidth && (a.style.width = P - M + "px", P > a.clientWidth && (a.style.width = P + K + "px")))
        },
        s = q.prototype;
    s.split = function(a) {
        this.isSplit && this.revert(), this.vars = a || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var b = 0; this.elements.length > b; b++) this._originals[b] = this.elements[b].innerHTML, r(this.elements[b], this.vars, this.chars, this.words, this.lines);
        return this.isSplit = !0, this
    }, s.revert = function() {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var a = this._originals.length; --a > -1;) this.elements[a].innerHTML = this._originals[a];
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, q.selector = a.$ || a.jQuery || function(b) {
        return a.$ ? (q.selector = a.$, a.$(b)) : f ? f.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b
    }
}(window || {});