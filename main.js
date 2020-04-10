function closead(){
    var closead= document.cookie.replace(/(?:(?:^|.*;\s*)closead\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
    if(closead== '0'){
        document.getElementById('ad').style.display = 'none';
        document.cookie = "closead=1;path=/"
    }else{
        document.getElementById('ad').style.display = 'block';
        document.cookie = "closead=0;path=/"
    }
};
function chaad(){
	var closead= document.cookie.replace(/(?:(?:^|.*;\s*)closead\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
    if(closead== '1'){
        document.getElementById('ad').style.display = 'none';
    }else{
        document.getElementById('ad').style.display = 'block';
    }
};
window.onload = chaad;
$(function() {
	AOS.init({
		easing: 'ease-out-back',
		duration: 1000
	});

    var
   	    NICE = {},
    	$header = $('header'),
        $sticky = $header.find('.sticky'),
        $btns_group_demo = $('main'),
        $slider = $('.slider'),
        $isotope = $('.isotope'),
        addResizeCarousels_timeout;

    //sticky
    function toggle_sticky() {
        var btns_t = $btns_group_demo.get(0).getBoundingClientRect().top;

        if(btns_t < 0){
        	$sticky.addClass('active');
        }else{
        	$sticky.removeClass('active');
        }
    };





	/* ---------------------------------------------- /*
	 * Header Fixed
	/* ---------------------------------------------- */
	NICE.HeaderFixd = function() {
		var HscrollTop  = $(window).scrollTop();
	    if (HscrollTop >= 100) {
	       $('header').addClass('fixed-header');
	    }
	    else {
	       $('header').removeClass('fixed-header');
	    }
	}

	// Document on Ready
	$(document).on("ready", function(){
		NICE.HeaderFixd();
	});

	// Document on Scrool
	$(window).on("scroll", function(){
		NICE.HeaderFixd();
	});




    //slider
    function addResizeCarousels(selector, breakpoint, options) {
        if(!selector) return false;

        var $carousels = $(selector),
            breakpoint = breakpoint || 768,
            options = options || null;

        var windW = window.innerWidth || $(window).width();

        if (windW < breakpoint) {
            $carousels.each(function() {
                var $this = $(this);

                $this.not('.slick-initialized').slick(options);

                var $slick_track = $this.find('.slick-track'),
                    $slick_slides = $slick_track.find('.slick-slide'),
                    slick_h = $slick_track.height();

                $slick_slides.each(function () {
                    var $this = $(this);

                    $this.css({ marginTop: '0'});

                    var slide_h = $this.height();

                    if(slide_h < slick_h) {
                        $this.css({ marginTop: (slick_h - slide_h)/2 + 'px'});
                    }
                });
            });
        } else {
            $carousels.each(function() {
                var $this = $(this);

                if ($this.hasClass('slick-initialized'))
                    $this.slick('unslick');

                $this.find('.slick-slide').removeAttr('style');
            });
        }
    };

    //change payment
    var $payment_method = $('.payment-method');
    if($payment_method.length) {
        $payment_method.find('> div').on('click', function () {
            $payment_method.find('> div').removeClass('active');
            $(this).addClass('active');
        });
    }

    //slider
    if($slider.length) {
        $slider.slick({
            dots: false,
            infinite: false,
            autoplay: true,
            speed: 600,
            slidesToShow: 1,
            arrows: true,
            infinite: true,
            centerMode: true,
            pauseOnHover: true,
            variableWidth: true,
            centerPadding: '0',
            focusOnSelect: true,
            prevArrow:'<button class="prev"><i class="icons icon-arrow-left"></i></button>',
            nextArrow:'<button class="next"><i class="icons icon-arrow-right"></i></button>',
            responsive: [
                {
                    breakpoint: 780,
                    settings: {
                        centerMode: false,
                        variableWidth: false,
                        adaptiveHeight: true,
                        autoplay: false
                    }
                }
            ]
        });
    }

    if( site_url.single == 1 ){
        $('.sidebar').theiaStickySidebar({
            additionalMarginTop: 20
        });
    }

    if( site_url.store ){
        $(window).on('scroll', function () {
            toggle_sticky();
            if($sticky.length && $btns_group_demo.length) {
                toggle_sticky();
            }
        });

    }

	//isotope
	function isotopeInit() {
	    var $navigation = $('.navigation-isotope');

	    $navigation.find('.button').on('click', function (e) {
	        var $this = $(this);

	        $this.parent().children().removeClass('is-checked');
	        $this.addClass('is-checked');

	        var selector = $this.attr('data-filter');

	        $isotope.isotope({
	            itemSelector: '.item-isotope',
	            layoutMode: 'packery',
	            filter: selector
	        });

	        e.stopPropagation();
	        e.preventDefault();
	        return false;
	    });
	    $navigation.find('.button').first().trigger('click');
	};

	$(window).on('load', function () {
	    if($isotope.length) {
	        isotopeInit();
	    }
	});

});
function particles_custom() {
    jQuery(".particles-js").each(function() {
        var e, t = jQuery(this).attr("id"),
        a = jQuery(this).data("particles-type"),
        i = jQuery(this).data("particles-colors-type"),
        n = jQuery(this).data("particles-color"),
        s = jQuery(this).data("particles-color"),
        o = jQuery(this).data("particles-number"),
        r = jQuery(this).data("particles-line"),
        l = jQuery(this).data("particles-size"),
        c = jQuery(this).data("particles-speed"),
        u = jQuery(this).data("particles-hover"),
        d = jQuery(this).data("particles-hover-mode");
        switch (a) {
        case "particles":
            a = "circle";
            break;
        case "hexagons":
            a = "polygon";
            break;
        default:
            a = "circle"
        }
        "random_colors" == i && (s = (n = n.split(","))[0]),
        particlesJS(t, {
            particles: {
                number: {
                    value: o,
                    density: {
                        enable: !0,
                        value_area: 800
                    }
                },
                color: {
                    value: n
                },
                shape: {
                    type: a,
                    polygon: {
                        nb_sides: 6
                    }
                },
                opacity: {
                    value: 1,
                    random: !0,
                    anim: {
                        enable: !1,
                        speed: 1,
                        opacity_min: .1,
                        sync: !1
                    }
                },
                size: {
                    value: l,
                    random: !0,
                    anim: {
                        enable: !1,
                        speed: 30,
                        size_min: 1,
                        sync: !1
                    }
                },
                line_linked: {
                    enable: r,
                    distance: 150,
                    color: s,
                    opacity: .4,
                    width: 1
                },
                move: {
                    enable: !0,
                    speed: c,
                    direction: "none",
                    random: !1,
                    straight: !1,
                    out_mode: "out",
                    bounce: !1,
                    attract: {
                        enable: !1,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: u,
                        mode: d
                    },
                    onclick: {
                        enable: !0,
                        mode: "push"
                    },
                    resize: !0
                },
                modes: {
                    grab: {
                        distance: 150,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 200,
                        size: 1.6 * l,
                        duration: 20,
                        opacity: 1,
                        speed: 30
                    },
                    repulse: {
                        distance: 80,
                        duration: .4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: !0
        }),
        e = function() {
            requestAnimationFrame(e)
        },
        requestAnimationFrame(e)
    })
}
jQuery(window).load(function() {
	particles_custom ();
});
jQuery(document).ready(function($)  {
    // Clipboard
    var clipboard = new ClipboardJS('.copyBtn');
    clipboard.on('success', function(e) {
       alert("已复制成功")
    });
    clipboard.on('error', function(e) {
        alert("您的浏览器可能不支持，请手动复制~")
    });

});

jQuery(document).ready(function($) {
	
	if( typeof $(".night-view-mb")[0] == 'undefined' ){
		return;
	}
	
    var t = $(".night-view-mb")[0].getBoundingClientRect().left + document.documentElement.scrollLeft;
    var n = $(".night-view-mb")[0].clientWidth;
    $(".night-view-mb").on("mouseenter",
    function() {
        $(".night-view-mb-inner").removeClass("leave")
    }),
    $(".night-view-mb").on("mousemove",
    function(e) { !
        function(e) {
            var a = e.pageX - t;
            a > 0 && a <= n && $(".night-view-mb-inner").css("width", a + "px")
        } (e)
    }),
    $(".night-view-mb").on("mouseleave",
    function() {
        $(".night-view-mb-inner").addClass("leave").css("width", "50%")
    })
});
function site_tips( type, msg ){
	var ico = type ? '<span class="text-xl mb-2"><i class="iconfont icon-success_fill"></i></span>' : '<span class="text-danger text-xl mb-2"><i class="iconfont icon-warning-circle-fill"></i></span>';
	var c = type ? 'tips-success' : 'tips-error';
	var html = '<section id="sitetips" class="site-tips '+c+' tips-open">'+
                    '<div class="tips_overlay"></div>'+
                    '<div class="tips_content text-center">'+ico+
                        '<p class="text-sm">'+msg+'</p>'+
                    '</div>'+
                '</section>';
    $('body').append(html);

    $(document).on('click', '.site-tips', function(event) {
    	event.preventDefault();
    	var t = $(this);
    	t.removeClass('tips-open').addClass('tips-close');
    	window.setTimeout(function(){
    		t.remove();
    	},500);
    });
}

function site_popup( close_btn, title, content, id ){

	var close_btn_html = close_btn ? '<a href="javascript:;" class="btn-close-model popup-close"><i class="iconfont icon-guanbi1"></i></a>' : '';
	var title_html = title ? '<div class="title">'+title+'</div>' : '';
	var id = id ? id : '';
	var html = '<section id="'+id+'" class="popup popup-open">'+
    '<div class="popup_overlay"></div>'+
    '<div class="popup-item">'+title_html+content+close_btn_html+
    '</div>'+
    '</section>';
    $('body').append(html);

    if( close_btn ){
    	$(document).on('click', '.btn-close-model', function(event) {
    		event.preventDefault();
    		var t = $(this)
    		t.parents('.popup').addClass('popup-close').removeClass('popup-open');
    		window.setTimeout(function(){
	    		t.parents('.popup').remove();
	    	},500);
    	});
    }

}

function site_confirm( content, btn, yesCallback, noCallback){

	//window.c = 0;
	var id = 'm-' + Math.floor( Math.random() * 10000 );

	var html = '<section id="'+id+'" class="popup popup-open">'+
    '<div class="popup_overlay"></div>'+
    '<div class="popup-item">'+
    '<div class="text-center">'+
    '<div class="content">'+
    content+
    '</div>'+
    '<div class="footer row">'+
	'<div class="col-12 col-md-6"><a href="javascript:;" class="btn btn-dark btn-lg btn-block no-confirm">'+btn[0]+'</a></div>'+
	'<div class="col-12 col-md-6 mt-3 mt-md-0"><a href="javascript:;" class="btn btn-primary btn-lg btn-block  yes-confirm">'+btn[1]+'</a></div>'+
	'</div>'+
    '</div></div>'+
    '</section>';
    $('body').append(html);


    $(document).on('click', '#'+id+' .no-confirm', function(event) {
    	event.preventDefault();
    	var t = $(this);

		t.parents('.popup').addClass('popup-close').removeClass('popup-open');
		window.setTimeout(function(){
    		t.parents('.popup').remove();
    	},500);

		try{
            if(typeof yesCallback === "function") {
                noCallback();
            }
        }catch(e){

        }

    });

     $(document).on('click', '#'+id+' .yes-confirm', function(event) {
    	event.preventDefault();
    	var t = $(this);

		t.parents('.popup').addClass('popup-close').removeClass('popup-open');
		window.setTimeout(function(){
    		t.parents('.popup').remove();
    	},500);


		try{
            if(typeof yesCallback === "function") {
                yesCallback();
            }
        }catch(e){

        }

    });

}

function validatemobile( mobile ){

	var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(19[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;

	if( myreg.test( mobile ) ){
		return true;
	}else{
		return false;
	}
}

function timeStamp( second_time ){

	var time = parseInt(second_time) + "秒";
	if( parseInt(second_time ) > 60){

	    var second = parseInt(second_time) % 60;
	    var min = parseInt(second_time / 60);
	    time = min + "分";

	    if( min > 60 ){
	        min = parseInt(second_time / 60) % 60;
	        var hour = parseInt( parseInt(second_time / 60) /60 );
	        time = hour + "小时" + min + "分";
	    }


	}

	return time;
}

function open_social_login_window(url) {
	var iWidth=772;
	var iHeight=671;
	var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
	var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
	window.open(url, '_blank', 'height=' + iHeight + ',innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no');
}

$(document).on('click', '#dopay_form button', function(event) {
})

$(document).on('click', '#payment', function(event) {
	event.preventDefault();

	var t = $(this);
	var msg = '';

	if( t.attr('disabled') ){
		return false;
	}

	$('.required').each(function(index, el) {

		if( $(this).val().length <= 0 ){
			msg += $(this).attr('placeholder') + '<br>';
		}

	});

	if( msg.length > 0 ){
		site_tips( 0, msg);
		return false;
	}
	t.html('<span class="loading"></span>').attr( 'disabled','disabled' );
	$.ajax({
		url: site_url.url_ajax,
		type: 'POST',
		dataType: 'json',
		data: $('#new_order').serializeArray(),
	})
	.done(function( data ) {
		if( data.s == 200 ){
			var order_id = data.order_id, nonce = data.nonce;

			$.ajax({
				url: site_url.url_ajax,
				type: 'POST',
				dataType: 'json',
				data: {action: 'mjpay', order_id: order_id, nonce: nonce},
			})
			.done(function( mjpay ) {
				if( mjpay.s == 200 ){

					if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
						try{
							if(/Android|Windows Phone|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){
								window.location.href=mjpay.url;
							}
						}catch(e){

						}
					}

					site_popup( 1, '<p class="text-center pt-4 text-primary"><i class="display-4 iconfont icon-zhifubao"></i></p>', '<div class="content">'+
						'<p class="text-center">打开支付宝手机APP，扫码支付。</p><p class="text-center">支持花呗和信用卡哟！😏</p>'+
						'<p class="text-center">'+
						'<img src="'+mjpay.qr_code+'"></p></div><div class="footer">'+
						'<form id="dopay_form" target="_blank" method="post" action="'+site_url.url_theme+'/paycenter/alipay/pagepay/pagepay.php">'+
						'<input type="hidden" name="order_id" value="'+order_id+'">'+
						'<input type="hidden" name="nonce" value="'+nonce+'">'+
						'<button type="submit" class="btn btn-dark btn-lg btn-block btn-arrow"><span>支付宝网页支付<i class="iconfont icon-arrowright"></i></span></button></form></div>', 'mjpay' );

					var get_pay_status = window.setInterval(function(){

						$.ajax({
							url: site_url.url_ajax,
							type: 'POST',
							dataType: 'json',
							data: {action: 'get_pay_status', order_id: order_id, nonce: nonce },
						})
						.done(function( s ) {
							if( s.s == 200 ){
								window.location.href = s.url;
							}
						});


					},2000);


				}else{
					jQuery("body").after('<form id="dopay_form" method="post" action="'+site_url.url_theme+'/paycenter/alipay/pagepay/pagepay.php" class="hide"><input type="hidden" name="order_id" value="'+order_id+'"><input type="hidden" name="nonce" value="'+nonce+'"></form>')
	        		jQuery('#dopay_form')[0].submit();
				}
			});

		}else{
			site_tips( 0, data.m);
			t.html('确认支付').removeAttr('disabled');
		}
	})
	.fail(function() {
		site_tips( 0, '网络错误，请稍后再试！');
		t.html('确认支付').removeAttr('disabled');
	});


});

$(document).on('click', '.use_coupon', function(event) {
	event.preventDefault();
	var t = $('.get_coupon'),
	btn = $(this)
	coupon = t.val(),
	id = t.data('id'),
	nonce = t.data('nonce'),
	type = t.data('type');
	if( coupon.replace(/\s+/g, "").length <= 0 ){
		site_tips( 0, '请输入优惠码');
		return false;
	}

	if( btn.attr('disabled') ){
		return false;
	}
	btn.html('<span class="loading"></span>').attr( 'disabled','disabled' );
	$.ajax({
		url: site_url.url_ajax,
		type: 'POST',
		dataType: 'json',
		data: { id: id, coupon: coupon, nonce: nonce, type: type, action: 'get_coupon' },
	})
	.done(function( data ) {
		if( data.s == 200 ){
			$('.coupon_total').text('-'+data.coupon_total);
			$('.price').text('¥'+data.new_price);
			$('.mi_coupon').val(coupon);
			btn.html('确认使用').removeAttr('disabled');


			$('.bg-vip').hide();
			hb_fq( data.new_price );
			$('input[name="amount"]').val( data.new_price );

		}else{
			site_tips( 0, data.m);
			btn.html('确认使用').removeAttr('disabled');
		}
	})
	.fail(function() {
		site_tips( 0, '网络错误，请稍后再试！');
		btn.html('确认使用').removeAttr('disabled');
	});

});

$(function(){
	if( $('.get_coupon').val() ){
		$('.use_coupon').click();
	}
});

$(document).on('click', '.bind_domain', function(event) {
	event.preventDefault();
	site_popup( true, '绑定域名', $('#bind-domain-form-html').html() );
	$('.popup input.id').val($(this).data('id'));
});

$(document).on('click', '.bind-domain-submit', function(event) {
	event.preventDefault();

	var btn = $(this);
	var domain = $('.popup input.domain').val();

	if( domain.replace(/\s+/g, "").length <= 0 ){
		site_tips( 0, '请输入要绑定的域名！');
		return false;
	}

	btn.parents('.popup').addClass('popup-close').removeClass('popup-open');

	site_confirm( '<p class="text-sm mt-5 text-center">即将绑定域名为<b class="text-xl text-primary mt-3 d-block">'+domain+'</b></p>', ['再想想','确认绑定'], function(){


		btn.parents('.popup').addClass('popup-open').removeClass('popup-close');
		btn.html('<span class="loading"></span>').attr( 'disabled','disabled' );

		$.ajax({
			url: site_url.url_ajax,
			type: 'POST',
			dataType: 'json',
			data: btn.parents('form').serializeArray(),
		})
		.done(function( data ) {
			if( data.s == 200 ){
				site_tips( 1, data.m);
				setTimeout(function(){
				window.location.reload();
				},2000);
				//btn.parents('.popup').addClass('popup-close').removeClass('popup-open');
				//window.setTimeout(function(){
		    	//	btn.parents('.popup').remove();
		    	//},500);
			}else{
				site_tips( 0, data.m);
				btn.html('确认绑定').removeAttr('disabled');
			}
		})
		.fail(function() {
			site_tips( 0, '网络错误，请稍后再试！');
			btn.html('确认绑定').removeAttr('disabled');
		});


	}, function(){
		btn.parents('.popup').addClass('popup-open').removeClass('popup-close');
	});

});

$(document).on('click', '.page-order-bind-domain-submit', function(event) {
	event.preventDefault();

	var btn = $(this);
	var domain = $('#domain').val();

	if( domain.replace(/\s+/g, "").length <= 0 ){
		site_tips( 0, '请输入要绑定的域名！');
		return false;
	}

	site_confirm( '<p class="text-sm mt-5 text-center">即将绑定域名为<b class="text-xl text-primary mt-3 d-block">'+domain+'</b></p>', ['再想想','确认绑定'], function(){

		$.ajax({
			url: site_url.url_ajax,
			type: 'POST',
			dataType: 'json',
			data: btn.parents('form').serializeArray(),
		})
		.done(function( data ) {
			if( data.s == 200 ){
				site_tips(1, data.m);
				setTimeout(function(){
				    window.location.href = window.location.href;
				}, 2000);
			} else {
				site_tips(0, data.m);
			}
		})
		.fail(function() {
			site_tips( 0, '网络错误，请稍后再试！');
		});


	});
});

$(document).on('click', '.update_domain', function(event) {
	event.preventDefault();
	site_popup( true, '改绑域名', $('#update-domain-form-html').html() );
	$('.popup input.id').val($(this).data('id'));
	$('.popup input[name="old_domain"]').val($(this).data('domain'));
});

$(document).on('click', '.update-domain-submit', function(event) {
	event.preventDefault();

	var btn = $(this);
	var domain = $('.popup input.domain').val();
	var old_domain = $('.popup input[name="old_domain"]').val();

	if( domain.replace(/\s+/g, "").length <= 0 ){
		site_tips( 0, '请输入要绑定的域名！');
		return false;
	}

	btn.parents('.popup').addClass('popup-close').removeClass('popup-open');

	site_confirm( '<p class="text-sm mt-3">'+old_domain+'</p><p class="text-sm mt-3">即将改绑为</p><p class="text-sm mt-3">'+domain+'</p><p class="text-sm mt-3">一经修改，将消耗您1次改绑次数，请谨慎修改</p>', ['再想想','确认修改'], function(){


		btn.parents('.popup').addClass('popup-open').removeClass('popup-close');
		btn.html('<span class="loading"></span>').attr( 'disabled','disabled' );

		$.ajax({
			url: site_url.url_ajax,
			type: 'POST',
			dataType: 'json',
			data: btn.parents('form').serializeArray(),
		})
		.done(function( data ) {
			if( data.s == 200 ){
				site_tips( 1, data.m);
				btn.parents('.popup').addClass('popup-close').removeClass('popup-open');
				window.setTimeout(function(){
		    		btn.parents('.popup').remove();
		    	},500);
			}else{
				site_tips( 0, data.m);
				btn.html('确认绑定').removeAttr('disabled');
			}
		})
		.fail(function() {
			site_tips( 0, '网络错误，请稍后再试！');
			btn.html('确认绑定').removeAttr('disabled');
		});


	}, function(){
		btn.parents('.popup').addClass('popup-open').removeClass('popup-close');
	});
});

$(document).on('click', '.down-service', function(event) {
	event.preventDefault();

	var btn = $(this);

	if( btn.attr('disabled') ){
		return false;
	}
	btn.html('<span class="loading"></span>').attr( 'disabled','disabled' );

	$.ajax({
		url: site_url.url_ajax,
		type: 'POST',
		dataType: 'json',
		data: btn.data(),
	})
	.done(function( data ) {
		if( data.s == 200 ){
			if( $('#down-box').length > 0 ){
				$('#down-box').remove();
			}
			$('body').append('<div id="down-box"><iframe name="downloadFrame" style="display: none;" frameborder="0"></iframe>'+
				'<form id="downForm" action="'+site_url.url_ajax+'" method="post">'+
        		'<input type="hidden" name="action" value="down-service">'+
        		'<input type="hidden" name="nonce" value="'+btn.data('nonce')+'">'+
        		'<input type="hidden" name="id" value="'+btn.data('id')+'">'+
        		'<input type="hidden" name="order_id" value="'+btn.data('order_id')+'">'+
            	'</form></div>');
			$('#downForm').attr("target","downloadFrame");
			$('#downForm')[0].submit();

			btn.html('下载').removeAttr('disabled');
		}else{
			site_tips( 0, data.m);
			btn.html('下载').removeAttr('disabled');
		}
	})
	.fail(function() {
		site_tips( 0, '网络错误，请稍后再试！');
		btn.html('下载').removeAttr('disabled');
	});


});

$(document).on('click', '.pc_send_code', function(event) {
	event.preventDefault();

    var btn = $(this);
    var data = btn.data();

	if( btn.attr('disabled') ){
		return false;
	}
	btn.html('<span class="loading"></span>').attr( 'disabled','disabled' );

	$.ajax({
		url: site_url.url_ajax,
		type: 'POST',
		dataType: 'json',
		data: data,
	})
	.done(function( data ) {
		if( data.s == 200 ) {
            site_tips( 1, data.m);
            $('.send-ready-message').removeClass('sr-only')
			var num = 61;
			var sms_t = window.setInterval( function(){
				num = num - 1;
				if( num > 0 ){
					btn.html(num);
				}else{
					btn.html('发送').removeAttr('disabled');
					window.clearInterval(sms_t);
				}
			}, 1000 );
		} else {
            $('.send-failed-message').removeClass('sr-only')
			site_tips( 0, data.m);
			btn.html('发送').removeAttr('disabled');
		}
	})
	.fail(function() {
		site_tips( 0, '网络错误，请稍后再试！');
		btn.html('发送').removeAttr('disabled');
	});

});

$(document).on('click', '.send_code', function(event) {
	event.preventDefault();

	var btn = $(this);
	var mobile = $('.phone').val();

	if( mobile.replace(/\s+/g, "").length <= 0  ){
		site_tips( 0, '请输入手机号');
		return false
	}

	if( !validatemobile( mobile ) ){
		site_tips( 0, '请输入正确的手机号');
		return false
	}

	if( btn.attr('disabled') ){
		return false;
	}
	btn.html('<span class="loading"></span>').attr( 'disabled','disabled' );

	$.ajax({
		url: site_url.url_ajax,
		type: 'POST',
		dataType: 'json',
		data: {action: 'sms-send', nonce: btn.data('nonce'), phone: mobile},
	})
	.done(function( data ) {

		if( data.s == 200 ){
			site_tips( 1, data.m);
			var num = 61;
			var sms_t = window.setInterval( function(){
				num = num - 1;
				if( num > 0 ){
					btn.html(num);
				}else{
					btn.html('发送').removeAttr('disabled');
					window.clearInterval(sms_t);
				}

			}, 1000 );

		}else{
			site_tips( 0, data.m);
			btn.html('发送').removeAttr('disabled');
		}

	})
	.fail(function() {
		site_tips( 0, '网络错误，请稍后再试！');
		btn.html('发送').removeAttr('disabled');
	});

});

$(document).on('click', '.order-del', function(event) {
	event.preventDefault();
	var btn = $(this);

	if( btn.hasClass('disabled') ){
		return false;
	}

	site_confirm( '<p class="text-sm mt-3">确认删除订单：'+btn.data('id')+'</p>', ['再想想','确认删除'], function(){
		btn.addClass('disabled');
		$.ajax({
			url: site_url.url_ajax,
			type: 'POST',
			dataType: 'json',
			data: btn.data(),
		})
		.done(function( data ) {
			if( data.s == 200 ){
				btn.parents('.order-item').fadeOut(300, function() {
					btn.parents('.order-item').remove();
				});
			}else{
				site_tips( 0, data.m);
			}
			btn.removeClass('disabled');
		})
		.fail(function() {
			btn.removeClass('disabled');
			site_tips( 0, '网络错误，请稍后再试！');
		});



	});

});

$(function(){

	if( $('.countdown').length > 0 ){

		var countdown = window.setInterval( function(){
			if( $('.countdown').length > 0 ){

				$('.countdown').each(function(index, el) {
					var t = $(this);
					var this_time = t.data('countdown') * 1 - 60;
					if( this_time > 0 ){
						t.data('countdown', this_time);
						t.text(timeStamp(this_time));
					}else{
						t.removeClass('countdown');
						t.data('countdown', 0);
						t.text('锟斤拷');
					}

				});

			}else{
				window.clearInterval(countdown);
			}

		},60000);
	}

});

$(document).on('click', '.update-avatar', function(event) {
	var btn = $(this);
	var slim;
	site_confirm( '<div id="slim"><input type="file" name="slim"/></div>', ['再想想','确认修改'], function(){
		$('span.update-avatar').html('<span class="loading"></span>');
		$.ajax({
			url: site_url.url_ajax,
			type: 'POST',
			dataType: 'json',
			data: {action: 'update_avatar', nonce: btn.data('nonce'), data: slim.dataBase64},
		})
		.done(function( data ) {
			if( data.s == 200 ){
				$('img.avatar').attr('src',data.src);
			}else{
				site_tips( 0, data.m);
			}
			$('span.update-avatar').html('修改');
		})
		.fail(function() {
			$('span.update-avatar').html('修改');
			site_tips( 0, '网络错误，请稍后再试！');
		});

	});
	slim = new Slim(document.getElementById('slim'), {
	    ratio: '1:1',
	    instantEdit: true,
	    label: '上传头像',
	    buttonCancelLabel: '取消',
	    buttonConfirmLabel: '裁切'
	});
});

$(document).on('click', '#dopay_form button[type=submit]', function(event) {
    site_confirm('<p class="text-sm mt-5 text-center">请至跳转的支付宝页面完成其后的付款操作<b class="text-xl text-primary mt-3 d-block">支付成功了吗？</b></p>', ['支付失败...','成功，下一步'],
    function() {
        window.location.href = site_url.pages.page_bind
	}, function(){
        window.location.href = site_url.pages.page_checkout
	});
})

$(document).on('click', '.m-submit-p', function(event) {
	event.preventDefault();
	$(this).parents('form')[0].submit();
});

$(document).on('click', '.m-submit', function(event) {
	event.preventDefault();
	var t = jQuery(this);

	var order_id = t.siblings(".order-id").val(), nonce = t.siblings(".nonce").val();
	$.ajax({
		url: site_url.url_ajax,
		type: 'POST',
		dataType: 'json',
		data: {action: 'mjpay', order_id: order_id, nonce: nonce},
	})
	.done(function( mjpay ) {
		if( mjpay.s == 200 ){

			if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
				try{
					if(/Android|Windows Phone|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){
						window.location.href=mjpay.url;
					}
				}catch(e){

				}
			}

			site_popup( 1, '<p class="text-center pt-4 text-primary"><i class="display-4 iconfont icon-zhifubao"></i></p>', '<div class="content">'+
				'<p class="text-center">打开支付宝手机APP，扫码支付。</p><p class="text-center">支持花呗和信用卡哟！😏</p>'+
				'<p class="text-center">'+
				'<img src="'+mjpay.qr_code+'"></p></div><div class="footer">'+
				'<form id="dopay_form" target="_blank" method="post" action="'+site_url.url_theme+'/paycenter/alipay/pagepay/pagepay.php">'+
				'<input type="hidden" name="order_id" value="'+order_id+'">'+
				'<input type="hidden" name="nonce" value="'+nonce+'">'+
				'<button type="submit" class="btn btn-dark btn-lg btn-block btn-arrow"><span>支付宝网页支付<i class="iconfont icon-arrowright"></i></span></button></form></div>', 'mjpay' );

			var get_pay_status = window.setInterval(function(){

				$.ajax({
					url: site_url.url_ajax,
					type: 'POST',
					dataType: 'json',
					data: {action: 'get_pay_status', order_id: order_id, nonce: nonce },
				})
				.done(function( s ) {
					if( s.s == 200 ){
						window.location.href = s.url;
					}
				});


			},2000);


		}else{
			t.parents('form')[0].submit();
		}
	});


});

$(document).on('submit', '.modify-email-form', function(event) {
	event.preventDefault();

	var btn = $(this).find('button.submit-form');
	var btn_html = btn.html();
	if( btn.attr('disabled') ){
		return false;
	}
	btn.html('<span class="loading"></span>').attr( 'disabled','disabled' );

	$.ajax({
		url: site_url.url_ajax,
		type: 'POST',
		dataType: 'json',
		data: $(this).serializeArray(),
	})
	.done(function( data ) {
		if( data.s == 200 ){
			if( data.step == 2 ){
				$('.checkid').html($('#modify-email-step-2').html());
			}else{
				site_tips( 1, data.m);
				window.setTimeout(function(){
					window.location.href = window.location.href;
				},3000);
			}
		}else{
			btn.removeAttr('disabled').html(btn_html);
			site_tips( 0, data.m);
		}
	})
	.fail(function() {
		btn.removeAttr('disabled').html(btn_html);
		site_tips( 0, '网络错误，请稍后再试！');
	});


});


$(document).on('click', '.send_mail_code', function(event) {
	event.preventDefault();

	var btn = $(this);
	var email = $('.newemail').val();
	var regemail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

	if( email.replace(/\s+/g, "").length <= 0  ){
		site_tips( 0, '请输入新邮箱');
		return false
	}

	if( !regemail.test(email)  ){
		site_tips( 0, '请输入正确的邮箱');
		return false
	}

	if( btn.attr('disabled') ){
		return false;
	}
	btn.html('<span class="loading"></span>').attr( 'disabled','disabled' );

	$.ajax({
		url: site_url.url_ajax,
		type: 'POST',
		dataType: 'json',
		data: {action: 'send-mail-code', nonce: btn.data('nonce'), email: email},
	})
	.done(function( data ) {

		if( data.s == 200 ){
			site_tips( 1, data.m);
			var num = 61;
			var sms_t = window.setInterval( function(){
				num = num - 1;
				if( num > 0 ){
					btn.html(num);
				}else{
					btn.html('发送').removeAttr('disabled');
					window.clearInterval(sms_t);
				}

			}, 1000 );

		}else{
			site_tips( 0, data.m);
			btn.html('发送').removeAttr('disabled');
		}

	})
	.fail(function() {
		site_tips( 0, '网络错误，请稍后再试！');
		btn.html('发送').removeAttr('disabled');
	});

});

$(document).on('click', '.btn-sign-social', function(event) {
	event.preventDefault();
	var btn = $(this),
		html = btn.html(),
		who = btn.data('who');

	if( btn.attr('disabled') ){
		return false;
	}
	btn.html('<span class="loading"></span>').attr( 'disabled','disabled' );
	$.ajax({
		url: site_url.url_ajax,
		type: 'POST',
		dataType: 'json',
		async: false,
		data: {action: who},
	})
	.done(function( data ) {

		if( data.s == 200 ){
			open_social_login_window( data.url );
		}else{
			site_tips( 0, '网络错误，请稍后再试！');
			btn.html(html).removeAttr('disabled');
		}
	})
	.fail(function() {
		site_tips( 0, '网络错误，请稍后再试！');
		btn.html(html).removeAttr('disabled');
	});

});

$(document).on('click', '.delete-social-login', function(event) {
	event.preventDefault();
	var btn = $(this),
		html = btn.html(),
		who = btn.data('who');

	if( btn.attr('disabled') ){
		return false;
	}

    site_confirm('要解除绑定吗？', ['取消', '确定'],
        function () {
            btn.html('<span class="loading"></span>').attr('disabled', 'disabled');
            $.ajax({
                url: site_url.url_ajax,
                type: 'POST',
                dataType: 'json',
                async: false,
                data: {action: 'delete-social-login', who: who},
            })
            .done(function( data ) {
        
                if( data.s == 200 ){
                    site_tips( 1, '解绑成功');
                }else{
                    site_tips( 0, '网络错误，请稍后再试！');               
                }
                btn.html(html).removeAttr('disabled');
            })
            .fail(function() {
                site_tips( 0, '网络错误，请稍后再试！');
                btn.html(html).removeAttr('disabled');
            });
        }
    );

	

});

$(document).on('click', 'a[data-action="like"]', function(event) {
	event.preventDefault();
	var btn = $(this),
        html = btn.html();

	if( btn.attr('disabled') ){
		return false;
	}
	btn.html('<span class="loading"></span>').attr( 'disabled','disabled' );

	$.ajax({
		url: site_url.url_ajax,
		type: 'POST',
		dataType: 'html',
		data: { action: 'suxing_like', id: btn.data('id')},
	})
	.done(function( data ) {
		if( data != 'false' ) {
            btn.addClass('current');
			btn.html('<span>Get 到了<small> ('+data+')</small><i class="text-lg iconfont icon-like-fill"></i></span>').removeAttr('disabled');
            btn.attr('data-action', 'unlike');
        }
	})
	.fail(function() {
		site_tips( 0, '网络错误，请稍后再试！');
		btn.html(html).removeAttr('disabled');
	})
});

$(document).on('click', 'a[data-action="unlike"]', function(event) {
	event.preventDefault();
	var btn = $(this),
        html = btn.html();

	if( btn.attr('disabled') ){
		return false;
	}
	btn.html('<span class="loading"></span>').attr( 'disabled','disabled' );

	$.ajax({
		url: site_url.url_ajax,
		type: 'POST',
		dataType: 'html',
		data: { action: 'suxing_unlike', id: btn.data('id')},
	})
	.done(function( data ) {
		if( data != 'false' ) {
            btn.removeClass('current');
			btn.html('<span>Get 到了<small> ('+data+')</small><i class="text-lg iconfont icon-like-fill"></i></span>').removeAttr('disabled');
            btn.attr('data-action', 'like');
        }
	})
	.fail(function() {
		site_tips( 0, '网络错误，请稍后再试！');
		btn.html(html).removeAttr('disabled');
	})
});

$(document).on('click', '.hd-btn', function(event) {
	event.preventDefault();
	site_popup( 1, '11.11 买买买买', '<div class="content"><p class="text-sm" style="text-align: center;">双十一关注微信公众号回复，低至优惠，仅限1天</p></div>', 'm1111' );

});

$(document).on('click', '.product_qqgroup_qrcode', function(event) {
	event.preventDefault();
	site_popup( 1, '专属QQ群', '<div class="content text-center">'+
               			'<p class="text-md">群仅供用户交流，不设客服。售后、主题使用咨询请在官方发工单</p>'+
						'<p class="mb-3"><img src="'+$(this).data('qrcode')+'"></p>'+
						'<p class="text-sm">扫描或通过群号 '+$(this).data('group')+' 加入。加群时，请附上您的订单号哟。进群后，请先看<b class="color-dark">群公告</b>。</p></div>', 'gaojia' );
});

$(document).on('click', '.vip_qqgroup_qrcode', function(event) {
	event.preventDefault();
	site_popup( 1, '专属QQ群', '<div class="content text-center">'+
               			'<p class="text-md">群仅供用户交流，不设客服。售后、主题使用咨询请在官方发工单</p>'+
						'<p class="mb-3"><img src="'+$(this).data('qrcode')+'" width="222"></p>'+
						'<p class="text-sm">扫描或通过群号 '+$(this).data('group')+' 加入。<br>加群时，请附上您的订单号哟。进群后，请先看<b class="color-dark">群公告</b>。</p></div>', 'gaojia' );
});

jQuery(document).on("click", "#nice-reg", function($) {
    var display_name = jQuery("#nice-display-name").val(),
        email = jQuery("#nice-email").val(),
        passwd = jQuery("#nice-pwd").val(),
        repasswd = jQuery("#nice-repwd").val(),
        nonce = jQuery(this).data("nonce"),
        $this = jQuery(this);

    var re = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
    var regemail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

    if( display_name == ""  ){
        site_tips(0,'请填写昵称');
        return false;
    }


    if( email == '' || !regemail.test(email) ){
        site_tips(0,'请填写正确的邮箱');
        return false;
    }

    if( passwd == "" || passwd.length < 6 || !re.test(passwd) ){
        site_tips(0,'请填写正确的密码，使用字母与数字的组合');
        return false;
    }

    if( passwd != repasswd ){
        site_tips(0,'输入密码不一致');
        return false;
    }

    jQuery.ajax({
        url: site_url.url_ajax,
        type: 'POST',
        data:{
            action : 'nice_reg',
            email : email,
            nonce : nonce,
        },
        dataType: 'json',
        success : function(data){
            if( data.code == 200 ){
                jQuery('#nice-ver').removeClass("popup-close").addClass("popup-open");
                var count = 60;
                var countdown = setInterval(CountDown, 1000);
                function CountDown() {
                    jQuery("#nice-remail").attr("disabled", true);
                    jQuery("#nice-remail").val( count + " 秒重发邮件");
                    if (count == 0) {
                        jQuery("#nice-remail").html("重发邮件").removeAttr("disabled");
                        clearInterval(countdown);
                    }
                    count--;
                }
            } else {
                site_tips(0,data.msg);
            }
        },
    });
    return false;
});


//发送邮件
jQuery(document).on("click", "#nice-remail", function($) {

    var nonce = jQuery(this).data('nonce'),
        email = jQuery("#nice-email").val();
    jQuery.ajax({
        url: site_url.url_ajax,
        type: "POST",
        data: {
            action: 'nice_send_mail',
            email:email,
            nonce:nonce
        },
        dataType: 'json',
        success: function(data) {
            if( data.code == 200 ){
                site_tips(1,data.msg);
                var count = 60;
                var countdown = setInterval(CountDown, 1000);
                function CountDown() {
                    jQuery("#nice-remail").attr("disabled", true);
                    jQuery("#nice-remail").val( count + " 秒重发邮件");
                    if (count == 0) {
                        jQuery("#nice-remail").html("重发邮件").removeAttr("disabled");
                        clearInterval(countdown);
                    }
                    count--;
                }
            } else {
                site_tips(0,data.msg);
            }
        },
    });

    return false;
});

jQuery(document).on("click", "#nice-do-reg", function($) {
    var display_name = jQuery("#nice-display-name").val(),
        email = jQuery("#nice-email").val(),
        passwd = jQuery("#nice-pwd").val(),
        repasswd = jQuery("#nice-repwd").val(),
        nonce = jQuery(this).data("nonce"),
        code = jQuery("#nice-code").val(),
        $this = jQuery(this);

    var re = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
    var regemail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

    if( display_name == ""  ){
        site_tips(0,'请填写昵称');
        return false;
    }


    if( email == '' || !regemail.test(email) ){
        site_tips(0,'请填写正确的邮箱');
        return false;
    }



    if( passwd == "" || passwd.length < 6 || !re.test(passwd) ){
        site_tips(0,'请填写正确的密码，使用字母与数字的组合');
        return false;
    }

    if( passwd != repasswd ){
        site_tips(0,'输入密码不一致');
        return false;
    }


    jQuery.ajax({
        url: site_url.url_ajax,
        type: 'POST',
        data:{
			action : 'ajax_reg',
			display_name : display_name,
			email : email,
			passwd : passwd,
			repasswd : repasswd,
            code : code,
			nonce : nonce,
        },
        dataType: 'json',
        success : function(data){
            console.log(data);
            if( data.code == 200 ){
                location.reload();
            } else {
                site_tips(0,data.info);
            }
        },
    });
    return false;
});

jQuery(document).on("click", "#nice-do-login",function() {
    var code = jQuery("#code").val(),
        user_login = jQuery("#user-login").val(),
        password = jQuery("#password").val(),
        nonce = jQuery(this).data("nonce"),
        $this = jQuery(this);

    if( user_login == '' ){
        site_tips(0,'请输入邮箱或用户名');
        return false;
    }

    if( password == '' ){
        site_tips(0,'请输入密码');
        return false;
    }
    jQuery.ajax({
        url: site_url.url_ajax,
        type: "POST",
        data:{
            action:"ajax_login",
            user_login:user_login,
            password:password,
            nonce:nonce,
        },
        dataType: 'json',
        success: function(data) {
            if(data.status == "200"){
            	location.reload();
            }
            else{
                site_tips(0,data.msg);

            }
        },
    });
    return false;
});


jQuery(document).on("click", "#update-getcode",function() {

    var nonce = jQuery(this).data('nonce'),
        email = jQuery("#email").val();

    var regemail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

    if( email == '' || !regemail.test(email) ){
        site_tips(0,'请填写正确的邮箱');
        return false;
    }

    jQuery.ajax({
        url: site_url.url_ajax,
        type: "POST",
        data: {
            action: 'nice_send_update_mail',
            email:email,
            nonce:nonce
        },
        dataType: 'json',
        success: function(data) {
            console.log(data);
            if( data.code == 200 ){
                site_tips(1,data.msg);
                var count = 60;
                var countdown = setInterval(CountDown, 1000);
                function CountDown() {
                    jQuery("#update-getcode").attr("disabled", true);
                    jQuery("#update-getcode").val( count + " 秒重发邮件");
                    if (count == 0) {
                        jQuery("#update-getcode").val("重发邮件").removeAttr("disabled");
                        clearInterval(countdown);
                    }
                    count--;
                }
            } else {
                site_tips(0,data.msg);
            }
        },
    });

    return false;
});


jQuery(document).on("click", "#nice-do-update",function() {
    var email = jQuery("#email").val(),
        url = jQuery(this).data("url"),
        display_name = jQuery("#display-name").val(),
        vcode = jQuery("#vcode").val(),
        nonce = jQuery(this).data("nonce"),
        $this = jQuery(this);

    if( display_name == '' ){
        site_tips(0,'你需要一个棒棒的昵称');
        return false;
    }

    if( email == '' ){
        site_tips(0,'邮箱是找回密码的重要方式哦');
        return false;
    }

    if( vcode == '' ){
        site_tips(0,'不填验证码可不行！');
        return false;
    }

    $this.html('<span class="loading"></span>').attr( 'disabled','disabled' );
    jQuery.ajax({
        url: site_url.url_ajax,
        type: "POST",
        dataType: 'json',
        data:{
            action:"ajax_updates",
            email:email,
            url:url,
            display_name:display_name,
            vcode:vcode,
            nonce:nonce,
        },
        success: function(data) {
            if(data.status == 1){
                location.replace(site_url.url_member);
            }
            else{
                $this.find('loading').removeAttr( "disabled" );
                site_tips(0,data.msg);
            }
        },
    });
    return false;
});

jQuery(document).ready(function(){
    if( jQuery('#upavimg').length > 0 ){
        jQuery("#upavimg").wrap("<form id='imguploadavatar' action='"+site_url.url_ajax+"'  method='post' enctype='multipart/form-data'></form>");
        jQuery("#upavimg").change(function(){
            if( jQuery("#upavimg").val() != ''){
                jQuery("#imguploadavatar").ajaxSubmit({
                    data:{action:'do_upavimg', nonce:jQuery('#nonce').val()},
                    dataType:  'json',
                    success: function(data) {
                        console.log(data);
                        if( data.status == 1){
                            location.replace(location.href);
                        } else {
                            site_tips(0,data.info);
                        }

                    },
                    error:function(xhr){
                        alert('网络错误，请稍后再试！');
                    }
                });
            }
        });
    }
});

jQuery(document).on("click", "#nice-modify-profile",function() {
    var display_name = jQuery("#name").val(),
        description = jQuery("#description").val(),
        nonce = jQuery(this).data("nonce"),
        $this = jQuery(this);
        text = jQuery(this).text();

    if( display_name == '' ){
        site_tips(0,'你需要一个棒棒的昵称');
        return false;
    }

    if( description == '' ){
        site_tips(0,'自我介绍未填写');
        return false;
    }

    $this.html('<span class="loading"></span>').attr( 'disabled','disabled' );
    jQuery.ajax({
        url: site_url.url_ajax,
        type: "POST",
        dataType: 'json',
        data:{
            action:"modefy_profile",
            display_name:display_name,
            description:description,
            nonce:nonce,
        },
        success: function(data) {
            if(data.code == 200){
                site_tips(1,data.msg);
            }
            else{
                $this.removeAttr( "disabled" );
                site_tips(0,data.msg);
            }
            $this.text(text).removeAttr( "disabled" );
        },
    });
    return false;
});

jQuery(document).on("click", ".nice-mpwd-chose",function() {
    jQuery("#nice-mpwd-chose").removeClass('popup-close').addClass('popup-open');
});

$(document).on('submit', '.modify-pwd-form', function(event) {
    event.preventDefault();

    var btn = $(this).find('button.submit-form');
    var btn_html = btn.html();
    if( btn.attr('disabled') ){
        return false;
    }

    var data = $(this).serializeArray();

    if( data.step == 2 ){
        if( data.newpwd == '' || data.newpwd2 == '' || data.newpwd != data.newpwd2){
            site_tips( 0, '请确保密码输入且一致');
            return false
        }
    }


    btn.html('<span class="loading"></span>').attr( 'disabled','disabled' );

    $.ajax({
        url: site_url.url_ajax,
        type: 'POST',
        dataType: 'json',
        data:data,
    })
    .done(function( data ) {
        if( data.s == 200 ){
            if( data.step == 2 ){
                $('.checkid').html($('#modify-pwd-step-2').html());
            }else{
                site_tips( 1, data.m);
                window.setTimeout(function(){
                    window.location.href = window.location.href;
                },3000);
            }
        }else{
            btn.removeAttr('disabled').html(btn_html);
            site_tips( 0, data.m);
        }
    })
    .fail(function() {
        btn.removeAttr('disabled').html(btn_html);
        site_tips( 0, '网络错误，请稍后再试！');
    });


});


jQuery(document).on("click", "#repass-getcode",function() {

    var nonce = jQuery(this).data('nonce'),
        email = jQuery("#email").val();

    var regemail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

    if( email == '' || !regemail.test(email) ){
        site_tips(0,'请填写正确的邮箱');
        return false;
    }

    jQuery.ajax({
        url: site_url.url_ajax,
        type: "POST",
        data: {
            action: 'nice_send_repass_mail',
            email:email,
            nonce:nonce
        },
        dataType: 'json',
        success: function(data) {
            if( data.code == 200 ){
                site_tips(1, data.msg);
                var count = 60;
                var countdown = setInterval(CountDown, 1000);
                function CountDown() {
                    jQuery("#repass-getcode").attr("disabled", true);
                    jQuery("#repass-getcode").val( count + " 秒重发邮件");
                    if (count == 0) {
                        jQuery("#repass-getcode").val("重发邮件").removeAttr("disabled");
                        clearInterval(countdown);
                    }
                    count--;
                }
            } else {
                site_tips(0,data.msg);
            }
        },
    });

    return false;
});


$(document).on('submit', '.repass-form', function(event) {
    event.preventDefault();

    var btn = $(this).find('button.submit-form');
    var btn_html = btn.html();
    if( btn.attr('disabled') ){
        return false;
    }

    var data = $(this).serializeArray();
    console.log(data);
    if( data.step == 1 ){
        if( data.email == ''){
            site_tips(0,'请填写正确的邮箱');
            return false;
        }

        if( data.checkcode == '' ){
            site_tips(0,'请填写验证码');
            return false;
        }
    }

    if( data.step == 2 ){
        if( data.newpwd == '' || data.newpwd2 == '' || data.newpwd != data.newpwd2){
            site_tips( 0, '请确保密码输入且一致');
            return false
        }
    }

    btn.html('<span class="loading"></span>').attr( 'disabled','disabled' );

    $.ajax({
        url: site_url.url_ajax,
        type: 'POST',
        dataType: 'json',
        data:data,
    })
    .done(function( data ) {
        if( data.s == 200 ){
            if( data.step == 2 ){
                $('.checkid').html($('#repass-step-2').html());
            }else{
                site_tips( 1, data.m);
                window.setTimeout(function(){
                    window.location.href = window.location.href;
                },3000);
            }
        }else{
            btn.removeAttr('disabled').html(btn_html);
            site_tips( 0, data.m);
        }
    })
    .fail(function() {
        btn.removeAttr('disabled').html(btn_html);
        site_tips( 0, '网络错误，请稍后再试！');
    });


});


//loadmore index
jQuery(document).on("click", "#nice-loadmore-category", function($) {
    var _self = jQuery(this),
        _postlistWrap = jQuery(".posts-list"),
        _data = _self.data();
    if (_self.hasClass('is-loading')) {
        return false
    } else {
        _self.html('加载中...');
        _self.addClass('is-loading');
        jQuery.ajax({
            url: site_url.url_ajax,
            data: _data,
            type: 'post',
            dataType: 'json',
            success: function(data) {
                console.log(data);
                if (data.code == 500) {
                    _self.data("paged", data.next).html('加载更多');
                    alert('服务器正在努力找回自我  o(∩_∩)o')
                } else if (data.code == 200) {

                    _postlistWrap.append(data.postlist);

                    if (data.next) {
                        _self.data("paged", data.next).html('加载更多')
                    } else {
                        _self.hide()
                    }
                }
                _self.removeClass('is-loading')
            },
            error:function(data){
                console.log(data.responseText);
                console.log(data);
            }
        })
    }
});

$(document).on('click', '#do-aff', function(event) {
    jQuery("#aff-window").removeClass('popup-close').addClass('popup-open');
});

$(document).on('click', '.aff-close', function(event) {
    jQuery("#aff-window").removeClass('popup-open').addClass('popup-close');
});

$(document).on('click', '#nice-do-aff', function(event) {
    var nonce = jQuery(this).data('nonce'),
        affmoney = jQuery("#affmoney").val(),
        affname = jQuery("#affname").val(),
        affalipay = jQuery("#affalipay").val();



    if( affmoney == '' || affname == '' || affalipay == '' ){
        site_tips(0,'请填写所有选项');
        return false;
    }

    jQuery.ajax({
        url: site_url.url_ajax,
        type: "POST",
        data: {
            action: 'aff_apply',
            affmoney:affmoney,
            affname:affname,
            affalipay:affalipay,
            nonce:nonce
        },
        dataType: 'json',
        success: function(data) {
            console.log(data);
            if( data.error == 1 ){
                site_tips(1,data.msg);
            } else {
                site_tips(0,data.msg);
            }
        },
    });

    return false;
});


$(document).on('click', '.show-aff-page', function(event) {
    var paged = jQuery(this).data('paged'),
        type = jQuery(this).data('type'),
        $this = jQuery(this);

    $this.html('<span class="loading"></span>').attr( 'disabled','disabled' );

    jQuery.ajax({
        url: site_url.url_ajax,
        type: "POST",
        data: {
            action: 'show_aff_page',
            paged:paged,
            type:type,
        },
        dataType: 'json',
        success: function(data) {
            console.log(data);
            if( type == 'prev' ){
                $this.removeAttr('disabled').find("i").removeClass("loading").addClass("dripicons-chevron-left");
            } else {

            }
            if( data.s == 200 ){
                jQuery(".aff-wrap").html( '<ul class="line-title text-light text-sm"><div class="row"><li class="col-md-3">申请时间</li><li class="col-md-3">支付宝账号</li><li class="col-md-2">支付宝姓名</li><li class="col-md-2 text-right">提现金额</li><li class="col-md-2 text-right">提现状态</li></div></ul>'
                    + data.html);
                jQuery(".show-aff-page.prev").data("paged",data.prev_page);
                jQuery(".show-aff-page.next").data("paged",data.next_page);
            } else {
                site_tips(0,data.msg);
            }
        },
    });

    return false;
});

$(document).on('click', '.show-aff-order', function(event) {
    var paged = jQuery(this).data('paged'),
        type = jQuery(this).data('type'),
        $this = jQuery(this);

    $this.html('<span class="loading"></span>').attr( 'disabled','disabled' );

    jQuery.ajax({
        url: site_url.url_ajax,
        type: "POST",
        data: {
            action: 'show_aff_order',
            paged:paged,
            type:type,
        },
        dataType: 'json',
        success: function(data) {
            console.log(data);
            if( type == 'prev' ){
                $this.removeAttr('disabled').find("i").removeClass("loading").addClass("dripicons-chevron-left");
            } else {
                $this.removeAttr('disabled').find("i").removeClass("loading").addClass("dripicons-chevron-right");
            }
            if( data.s == 200 ){
                jQuery(".aff-order-wrap").html( '<ul class="line-title text-light text-sm"><div class="row"><li class="col-md-3">时间</li><li class="col-md-3">订单号</li><li class="col-md-2">名称</li><li class="col-md-2 text-right">订单金额</li><li class="col-md-2 text-right">订单佣金</li></div></ul>'
                    + data.html);
                jQuery(".show-aff-order.prev").data("paged",data.prev_page);
                jQuery(".show-aff-order.next").data("paged",data.next_page);
            } else {
                site_tips(0,data.msg);
            }
        },
    });

    return false;
});

$(document).on('click', '.close-mpwd', function(event) {
    jQuery("#nice-mpwd-chose").removeClass('popup-open').addClass('popup-close');
});


function popupGallery( gclass, aclass ) {
    var gclass = gclass ? gclass : '.suxing-popup-gallery',
        aclass = aclass ? aclass : 'a.suxing-popup-gallery-item';
    $(gclass).each(function() {
        $(this).magnificPopup({
            delegate: aclass,
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                arrowMarkup: '<button title="%title%" type="button" class="suxing-mfp-arrow suxing-mfp-arrow-%dir%"></button>',
                tPrev: 'Previous',
                tNext: 'Next',
                tCounter: '<span>%curr% / %total%</span>'
            },
            image: {
                titleSrc: function(item) {
                    return  item.el.find('img').attr('alt');
                    //return  item.el.find('img').attr('alt') + item.el.attr('title');
                }
            },
            closeMarkup: '<button title="%title%" type="button" class="mfp-close suxing-mfp-close-button"></button>',
            fixedContentPos: true,
            fixedBgPos: true,
            overflowY: 'auto',
            removalDelay: 300,
            mainClass: 'suxing-popup-slide-in',
            callbacks: {
                beforeOpen: function() {
                    this.container.data('scrollTop', parseInt($(window).scrollTop()));
                },
                afterClose: function(){
                    $('html, body').scrollTop(this.container.data('scrollTop'));
                },
            }
        });
    });
}


jQuery(document).ready(function($){


    if( site_url.image_popup !== 'null' && site_url.image_popup !== 'disable' ){

        if( site_url.image_popup == 'image' ){
            var aclass = 'suxing-popup-image';
        }else if( site_url.image_popup == 'gallery' ){
            var aclass = 'suxing-popup-gallery-item';
        }
        var matching = new RegExp("\[.](?:gif|png|jpg|jpeg|webp)$"),
            image_popup;
        $(".suxing-popup-gallery a").each(function(){

            if( matching.test( $(this).attr('href') ) && $(this).children('img').length == 1 ){
                $(this).addClass(aclass);
                image_popup = true;
            }

        });

        if( image_popup ){
            if( site_url.image_popup == 'image' ){
                popupImage();
            }else if( site_url.image_popup == 'gallery'  ){
                popupGallery();
            }
            //popupIframe();
        }

    }
});

//关闭公告
jQuery(document).on("click", ".btn-close-strip", function($) {

    jQuery.ajax({
        url: site_url.url_ajax,
        type: "POST",
        data: {
            action: 'gg_click',
        },
        dataType: 'json',
        success: function(data) {
            console.log(data);
            jQuery(".header-strip").toggle();
        },
        error:function(data){
            console.log(data);
        }
    });

    return false;
});

//改绑域名弹窗
jQuery(document).on("click", ".open_add_domain",function() {
    jQuery("#add-domain-times").removeClass('popup-close').addClass('popup-open');
    jQuery("#old-order-id").val(jQuery(this).data("id"));
});

jQuery(document).on('click', '.close-add-domain-times', function() {
    jQuery("#add-domain-times").removeClass('popup-open').addClass('popup-close');
    jQuery("#old-order-id").val("");
});

// 配合 2019 新版
$(document).on('click', '#new-payment', function(event) {
	event.preventDefault();

	var t = $(this);
	var msg = '';

	if( t.attr('disabled') ){
		return false;
	}

	$('.required').each(function(index, el) {

		if( $(this).val().length <= 0 ){
			msg += $(this).attr('placeholder') + '<br>';
		}

	});

	if( msg.length > 0 ){
		site_tips( 0, msg);
		return false;
	}
	t.html('<span class="loading"></span>').attr( 'disabled','disabled' );

	$.ajax({
		url: site_url.url_ajax,
		type: 'POST',
		dataType: 'json',
		data: $('#new_order').serializeArray(),
	})
	.done(function( data ) {
		if( data.s == 200 ){
			var order_id = data.order_id, nonce = data.nonce;

			var hb_fq = $('.hb_fq:checked').val();

			if( typeof hb_fq === 'undefined' ){
				hb_fq = 0;
			}

			if( data.pay_status == 1 ){
				window.location.href = window.location.href;
				return false;
			}


			$.ajax({
				url: site_url.url_ajax,
				type: 'POST',
				dataType: 'json',
				data: {action: 'mjpay', order_id: order_id, hb_fq: hb_fq, nonce: nonce},
			})
			.done(function( mjpay ) {
				if( mjpay.s == 200 ){

					if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
						try{
							if(/Android|Windows Phone|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){
								window.location.href=mjpay.url;
							}
						}catch(e){

						}
					}
					if( hb_fq != 0 ){

						site_popup( 1, '<p class="text-center pt-4 text-primary"><i class="display-4 iconfont icon-zhifubao"></i></p>', '<div class="content">'+
						'<p class="text-center">打开支付宝手机APP，扫码完成支付。</p>'+
						'<p class="text-center">'+
						'<img src="'+mjpay.qr_code+'"></p></div><div class="footer">'+
						'</div>', 'mjpay' );

					}else{
						site_popup( 1, '<p class="text-center pt-4 text-primary"><i class="display-4 iconfont icon-zhifubao"></i></p>', '<div class="content">'+
						'<p class="text-center">打开支付宝手机APP，扫码支付。</p><p class="text-center">支持花呗和信用卡哟！😏</p>'+
						'<p class="text-center">'+
						'<img src="'+mjpay.qr_code+'"></p></div><div class="footer">'+
						'<form id="dopay_form" target="_blank" method="post" action="'+site_url.url_theme+'/paycenter/alipay/pagepay/pagepay.php">'+
						'<input type="hidden" name="order_id" value="'+order_id+'">'+
						'<input type="hidden" name="nonce" value="'+nonce+'">'+
						'<button type="submit" class="btn btn-dark btn-lg btn-block btn-arrow"><span>支付宝网页支付<i class="iconfont icon-arrowright"></i></span></button></form></div>', 'mjpay' );
					}
					var get_pay_status = window.setInterval(function(){

						$.ajax({
							url: site_url.url_ajax,
							type: 'POST',
							dataType: 'json',
							data: {action: 'get_pay_status', order_id: order_id, nonce: nonce },
						})
						.done(function( s ) {
							if( s.s == 200 ){
								window.location.href = window.location.href;
							}
						});


					},2000);


				}else{
					jQuery("body").after('<form id="dopay_form" method="post" action="'+site_url.url_theme+'/paycenter/alipay/pagepay/pagepay.php" class="hide"><input type="hidden" name="order_id" value="'+order_id+'"><input type="hidden" name="nonce" value="'+nonce+'"></form>')
	        		jQuery('#dopay_form')[0].submit();
				}
			});

		}else{
			site_tips( 0, data.m);
			t.html('确认支付').removeAttr('disabled');
		}
	})
	.fail(function() {
		site_tips( 0, '网络错误，请稍后再试！');
		t.html('确认支付').removeAttr('disabled');
	});


});

$(document).on('click', '#mjpay .btn-close-model', function(event) {
	event.preventDefault();
	site_confirm( '<p class="tips-image text-danger mb-2"><i class="text-64 iconfont icon-smile"></i></p><h6 class="text-sm">确定要离开收银台？</h6><p>您的订单在2小时内未支付将被取消，请尽快完成支付。</p>', ['确认离开','继续支付'],function(){
		$('#new-payment').removeAttr('disabled').text('继续支付');
		window.location.href = window.location.href;
	},function(){
		window.location.href = site_url.url_member;
	} );
});

$(document).on('click', '.new-m-submit', function(event) {
	event.preventDefault();
	var t = jQuery(this);

	var order_id = t.siblings(".order-id").val(), nonce = t.siblings(".nonce").val();

	var hb_fq = $('.hb_fq:checked').val();

	if( typeof hb_fq === 'undefined' ){
		hb_fq = 0;
	}

	$.ajax({
		url: site_url.url_ajax,
		type: 'POST',
		dataType: 'json',
		data: {action: 'mjpay', order_id: order_id, hb_fq: hb_fq, nonce: nonce},
	})
	.done(function( mjpay ) {
		if( mjpay.s == 200 ){

			if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
				try{
					if(/Android|Windows Phone|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){
						window.location.href=mjpay.url;
					}
				}catch(e){

				}
			}

			if( hb_fq != 0 ){

				site_popup( 1, '<p class="text-center pt-4 text-primary"><i class="display-4 iconfont icon-zhifubao"></i></p>', '<div class="content">'+
				'<p class="text-center">打开支付宝手机APP，扫码完成支付。</p>'+
				'<p class="text-center">'+
				'<img src="'+mjpay.qr_code+'"></p></div><div class="footer">'+
				'</div>', 'mjpay' );

			}else{

				site_popup( 1, '<p class="text-center pt-4 text-primary"><i class="display-4 iconfont icon-zhifubao"></i></p>', '<div class="content">'+
					'<p class="text-center">打开支付宝手机APP，扫码支付。</p><p class="text-center">支持花呗和信用卡哟！😏</p>'+
					'<p class="text-center">'+
					'<img src="'+mjpay.qr_code+'"></p></div><div class="footer">'+
					'<form id="dopay_form" target="_blank" method="post" action="'+site_url.url_theme+'/paycenter/alipay/pagepay/pagepay.php">'+
					'<input type="hidden" name="order_id" value="'+order_id+'">'+
					'<input type="hidden" name="nonce" value="'+nonce+'">'+
					'<button type="submit" class="btn btn-dark btn-lg btn-block btn-arrow"><span>支付宝网页支付<i class="iconfont icon-arrowright"></i></span></button></form></div>', 'mjpay' );

			}

			var get_pay_status = window.setInterval(function(){

				$.ajax({
					url: site_url.url_ajax,
					type: 'POST',
					dataType: 'json',
					data: {action: 'get_pay_status', order_id: order_id, nonce: nonce },
				})
				.done(function( s ) {
					if( s.s == 200 ){
						window.location.href = window.location.href;
					}
				});


			},2000);


		}else{
			t.parents('form')[0].submit();
		}
	});

});

$(document).on('change', '.hb_fq', function(event) {
	event.preventDefault();
	if( $(this).is(":checked") && typeof $(this).data('sum') !== 'undefined' ){
		$('.price').text( '￥'+ $(this).data('sum') );
	}else{
		$('.price').text( '￥'+ $('input[name="amount"]').val() );
	}

});

jQuery(document).on("click", "#nice-get-email-code", function($) {
    var email = jQuery("#reset-email input[name=email]").val(),
        nonce = jQuery(this).data("nonce"),
        $this = jQuery(this);

    var emailRe = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

    if( email === '' || (!emailRe.test(email)) ){
        site_tips( 0, '请填写正确的邮箱' );
        return false;
    }

    jQuery.ajax({
        url: globals.ajax_url,
        type: 'POST',
        data:{
            action : 'nice_get_email_code',
            email: email,
            nonce : nonce,
        },
        dataType: 'json',
        success : function(data) {
            console.log(data);
            if( data.code == 200 ){
                site_tips( 1, data.msg );
                var count = 60;
                var countdown = setInterval(CountDown, 1000);
                function CountDown() {
                    $this.attr("disabled", true);
                    $this.html( count + " 秒重发邮件");
                    if (count == 0) {
                        $this.html("重发邮件").removeAttr("disabled");
                        clearInterval(countdown);
                    }
                    count--;
                }
            } else {
                site_tips( 0, data.msg );
            }
        },
        error: function(error) {
            console.log(error)
        }
    });
    return false;
});

// 重置密码
jQuery(document).on("click", "#nice-do-repass", function($) {
    $.preventDefault();
    var user_login = jQuery("#user_login").val(),
        passwd = jQuery("#password").val(),
        code = jQuery("#code").val(),
        password_confirmation = jQuery("#password_confirmation").val(),
        nonce = jQuery(this).data("nonce"),
        $this = jQuery(this);

    var re = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;

    if( user_login === '' ){
        site_tips( 0, '请填写正确的邮箱' );
        return false;
    }

    if( passwd !== password_confirmation ){
        site_tips( 0, '密码填写不一致' );
        return false;
    }


    if( code === ""  ){
        site_tips( 0, '请填写验证码' );
        return false;
    }

    if( passwd === "" || passwd.length < 6 || !re.test(passwd) ){
        site_tips( 0, '请填写正确的密码，使用字母与数字的组合' );
        return false;
    }

    jQuery.ajax({
        url: globals.ajax_url,
        type: 'POST',
        data:{
            action : 'nice_do_repass',
            user_login : user_login,
            pwd : passwd,
            code : code,
            nonce : nonce,
        },
        dataType: 'json',
        success : function(data){
            // console.log(data);
            if( data.code == 200 ) {
                site_tips( 1, data.msg );
                setTimeout(function() {
                    location.href = '/';
                }, 2000)
            } else {
            	site_tips( 0, data.msg );
            }
        },
    });
    return false;
});

function get_bind_nicetheme_offiaccount_status(){

	$.ajax({
		url: site_url.url_ajax,
		type: 'GET',
		dataType: 'json',
		data: {action: 'get-bind-nicetheme-offiaccount-status'},
	})
	.done(function( data ) {
		
		if( data.status == 200 ){

			$('.get-bind-wechat-qrcode').after(data.msg).remove();
			$('img.bind-nicetheme-offiaccount').remove();

		}else if( data.status == 201 ){

			if( $('img.bind-nicetheme-offiaccount').length < 1 ){
				$('.get-bind-wechat-qrcode').after('<img class="bind-nicetheme-offiaccount" src="">').hide();
			}

			if( $('img.bind-nicetheme-offiaccount').attr('src') != data.url ){

				$('img.bind-nicetheme-offiaccount').attr('src', data.url);
			
			}
			setTimeout(function(){
				get_bind_nicetheme_offiaccount_status();
			}, 1000);
			

		}else{
			$('.get-bind-wechat-qrcode').removeAttr('disabled').text('获取失败，请重试！');
		}
	
	});
	

}

$(document).on('click', '.get-bind-wechat-qrcode', function(event) {
	event.preventDefault();

	if( typeof $(this).attr('disabled') == 'undefined' ){
		$(this).attr('disabled', true).text('获取中...');
		get_bind_nicetheme_offiaccount_status();
	}
	
});

$(document).on('click', '.ms-bonuses', function(event) {
	event.preventDefault();
	if( typeof $(this).data('img') != 'undefined' ){
		var img = '<br><img src="'+$(this).data('img')+'">';
	}else{
		var img = '';
	}
	site_popup( 1, '秒杀奖励', '<div class="content"><p class="text-center">'+$(this).data('text')+img+'</p></div>', 'ms');
});

$(document).on('click','body',function(event){if($('body').hasClass('m-click')===false){$.ajax({url:site_url.url_ajax,type:'POST',dataType:'html',data:{action:'m-click'},}).done(function(){$('body').addClass('m-click')})}});
