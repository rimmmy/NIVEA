$(document).ready(function(){
    gnbAction();
    mainSlider();
    historyTicker();
    bestSlider();
    tipsEffect();
    carouselSlider();
    tipSlider();
    group2slider();
    slider1way();
    slider3wayContent();
    historySlider();
    panelControl(".tipsbackground > div > a");
    panelControl(".detailContainer> figure> figcaption> div:last-of-type> a");
    searchControl();
    fitVidsActivation();
    scrollEvent();
    historyEvent();
    ingAcc();
    muiFunc();
});

function muiFunc(){
    $(".mui").click(function(){
        $(this).toggleClass('active');
    });
}

function gnbAction(){
    var headerArea = $("header");
    var gnbBtn = $("header > div nav ul > li");
    var gnbPanel = $("header > div nav ul > li ol");
    var headerHeight = headerArea.height();
    var panelHeight = gnbPanel.height();
    var heightSet = headerHeight + panelHeight;

    if(matchMedia("screen and (max-width: 767px)").matches){
        gnbBtn.hover(function(){
            console.log(heightSet);
            gnbPanel.removeClass('active');
            $(this).children('ol').addClass('active');
            headerArea.one().height(heightSet);
        });
    }

    if(matchMedia("screen and (min-width: 768px)").matches){
        gnbBtn.hover(function(){
            console.log(heightSet);
            gnbPanel.removeClass('active');
            $(this).children('ol').addClass('active');
            headerArea.one().height(heightSet);
        });
        headerArea.mouseleave(function(){
            gnbPanel.removeClass('active');
            headerArea.height(headerHeight);
        });
    }
}
function mainSlider(){
    $(".mainHeadSlider").bxSlider({
        auto: true,
    });
}
function historyTicker(){
    $(".historyTicker").bxSlider({
        slideWidth: 291,
        maxSlides: 5,
        minSlides: 1,
        ticker: true,
        tickerHover: true,
        speed: 30000
    });
}
function bestSlider(){
    $(".bestSeller").bxSlider({
        maxSlides: 3,
        minSlides: 1,
        slideWidth: 400,
        pager: false,
        touchEnabled: false 
        
    });
}
function tipsEffect(){
    var canvas = $(".goodTipsBox ol");
    var menu = $(".goodTipsBox ol li");
    var path = "images/";
    var ext = ".png";

    $(menu).hover(function(){
        var currentImgName = $(this).attr("data-imgname");
        var totalName = path+currentImgName+ext;
        canvas.css("background-image",'url("' + totalName + '")');
    });
}
function carouselSlider(){
    $(".carouselSlider").bxSlider({
        maxSlides: 3,
        minSlides: 1,
        slideWidth: 393,
        pager: false,
        touchEnabled: false
    })
}
function tipSlider(){
    $(".tipSlider.2way").bxSlider({
        maxSlides: 2,
        minSlides: 1,
        slideWidth: 530,
        pager: false,
       
    })
}
function group2slider(){
    $(".group2.slider").bxSlider({
       
    })
}
function slider1way(){
    $(".slider1way").bxSlider({
            
    })
}
function slider3wayContent(){
    $(".slider3way").bxSlider({
        maxSlides: 3,
        minSlides: 1,
        slideWidth: 360,
        pager: false
    })
}
function historySlider(){
    $(".historySlider").bxSlider({
        slideWidth: 500,
    })
}

function panelControl(btnOpen){
    var panelName = null;
    $(btnOpen).click(function(){
        panelName = $(this).attr('data-panel');
        $('#' + panelName).addClass('active');
    });
    $('.btn_Close').click(function(){
        $('#' + panelName).removeClass('active');
    });
}

function searchControl(){
    $(".btn_searchOpen").click(function(){
        $("#searchPanel").toggleClass("active");
        $(this).toggleClass('active');
    });
}
function fitVidsActivation(){
    $('iframe[src*="youtube"]').parent().fitVids();
}
function scrollEvent(){
    $(window).on("scroll", function(){
        var scroll_top = $(this).scrollTop();
        if(matchMedia("screen and (min-width: 1280px)").matches){
            if(scroll_top > 2370){
                $('.contentsBox').addClass('active');
            }else{
                $('.contentsBox').removeClass('active');
            }
        }
        if(matchMedia("screen and (min-width: 768px) and (max-width: 1279px)").matches){
            console.log(scroll_top);
            if(scroll_top > 2000){
                $('.contentsBox').addClass('active');
            }else{
                $('.contentsBox').removeClass('active');
            }
        }
        if(matchMedia("screen and (max-width: 767px)").matches){
            console.log(scroll_top);
            if(scroll_top > 850){
                $('.contentsBox').addClass('active');
            }else{
                $('.contentsBox').removeClass('active');
            }
        }
    });
}
// .attr("background-image","image경로랑이름");
function historyEvent(){
    $(window).on("scroll", function(){
        var scroll_top = $(this).scrollTop();
         console.log(scroll_top);
        
       if(matchMedia("screen and (min-width: 1280px)").matches){
        if(scroll_top > 790 && scroll_top < 1750){
            $('.historyContent aside').addClass('active');
            $('.historyContent aside').css('background-image','url("images/history_asdie_01.png")');
        }
        else if(scroll_top > 1750 && scroll_top < 2963){
            $('.historyContent aside').css('background-image','url("images/history_asdie_02.png")');
        }
        else if(scroll_top > 2963 && scroll_top < 3955){
            $('.historyContent aside').css('background-image','url("images/history_asdie_03.png")');
        }
        else if(scroll_top > 3955 && scroll_top < 4804){
            $('.historyContent aside').css('background-image','url("images/history_asdie_04.png")');
        }
        else if(scroll_top > 4804 && scroll_top < 6050){
            $('.historyContent aside').css('background-image','url("images/history_asdie_05.png")');
        }
        else if(scroll_top > 6050 ){
            $('.historyContent aside').removeClass('active');
        }
       }
       if(matchMedia("screen and (min-width: 768px) and (max-width: 1279px)").matches){
        if(scroll_top > 662 && scroll_top < 2018){
            $('.historyContent aside').addClass('active');
            $('.historyContent aside').css('background-image','url("images/history_asdie_01.png")');
        }
        else if(scroll_top > 2018 && scroll_top < 3630){
            $('.historyContent aside').css('background-image','url("images/history_asdie_02.png")');
        }
        else if(scroll_top > 3630 && scroll_top < 5105){
            $('.historyContent aside').css('background-image','url("images/history_asdie_03.png")');
        }
        else if(scroll_top > 5105 && scroll_top < 6415){
            $('.historyContent aside').css('background-image','url("images/history_asdie_04.png")');
        }
        else if(scroll_top > 6415 && scroll_top < 7600){
            $('.historyContent aside').css('background-image','url("images/history_asdie_05.png")');
        }
        else if(scroll_top > 7600){
            $('.historyContent aside').removeClass('active');
        }
       }
    });
    
}

function ingAcc(){
    $("#ingredient ul li:nth-child(1)").click(function(){
        $(this).toggleClass("active");
    });
}