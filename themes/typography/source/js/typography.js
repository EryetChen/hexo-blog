var stage;
var siteNavShown = true;

function triggerSiteNav() {
    return;
    if (siteNavShown) {
        $('#site-nav').hide(300);
        siteNavShown = false;
    } else {
        $('#site-nav').show(300);
        siteNavShown = true;
    }
}
function updateSidebar() {
    if (window.innerWidth <= 768 || window.innerHeight <= 600) {
        $('#side-bar').innerWidth($('#stage').width());
        $('#main-container').removeClass('col-sm-9');
        //$('#site-nav').hide();
        //siteNavShown = false;
    } else {
        //$('#site-nav').show();
        //siteNavShown = true;
        var sidebarW =
            stage.width() - $('#main-container').outerWidth() + (window.innerWidth - stage.innerWidth()) / 2;
        $('#side-bar').outerWidth(sidebarW);
        console.log("sidebarW=" + sidebarW);
        $('#main-container').addClass('col-sm-9');
    }
}
$(document).ready(function () {
    stage = $('#stage');
    $(window).resize(function () {
        updateSidebar();
    });
    updateSidebar();
    $('#main-container').removeClass('invisible');
    $('#main-container').addClass('fadeInTop');
    if (window.innerWidth <= 768) {
        $('#side-bar').removeClass('invisible');
        $('#side-bar').addClass('fadeInTop');
    }else{
        $('#side-bar').removeClass('invisible');
        $('#side-bar').addClass('fadeInRight');
    }
    $('.site-title').click(function () {
        $('.site-title a')[0].click();
    })
});

/*ImageBox*/

let imageBox = ()=>{
    $("p img").addClass("ImageBox");
    $(".ImageBox").click(function () {
        $("body").append(`<div class="image-box-plugin"><div class="image-box-container"><div class="spinner" id="image-box-loading" style="display: none;"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div><img id="image-box-img"><img id="image-box-fake" onload="$('#image-box-img').attr('src',this.src);$('#image-box-loading').hide();$('#image-box-img').show();" onerror="this.src='https://img.imjad.cn/images/2016/12/23/404.jpg';" src="${($(this).attr("data-src") || $(this).attr("src"))}" style="display: none;"></div></div>`);
        var imgW = $(this).width(), imgH = $(this).height(), scrW = document.body.clientWidth, scrH = window.screen.availHeight;
        var newW = $(this).width(), newH = $(this).height(), scale = imgW / imgH;
        if (imgW > scrW) {
            newW = scrW;
            newH = newW / scale;
            console.log(newH);
            console.log(scrH);
            $(".image-box-plugin img").css({ "height": "" });
            $(".image-box-plugin img").css({ "width": newW });
            if (newH > scrH) {
                newH = scrH;
                newW = newH * scale;
                console.log("2333");
                $(".image-box-plugin img").css({ "width": "" });
                $(".image-box-plugin img").css({ "height": newH })
            }
        } else {
            if (imgH > scrH) {
                newH = scrH;
                newW = newH * scale;
                $(".image-box-plugin img").css({ "width": "" });
                $(".image-box-plugin img").css({ "height": newH });
                if (newW > scrW) {
                    newW = scrW;
                    newH = newW / scale;
                    $(".image-box-plugin img").css({ "height": "" });
                    $(".image-box-plugin img").css({ "width": newW })
                }
            }
        };
        $(".image-box-plugin").fadeIn(500, function () {
            $(".image-box-plugin").css({ "display": "table" })
        });
        $(".image-box-plugin img, .image-box-plugin, .image-box-container").bind("click", function () {
            $(".image-box-plugin").fadeOut(500, function () {
                $(".image-box-plugin").remove()
            })
        })
    });
    }
    
    imageBox()
    
    module.exports = imageBox

/*ImageTitle*/
let imageTitle = ()=>{
    (function () {
      function addTitle(img) {
          var text = (img.title || img.alt || img.src.split("/").pop()) + '|' + img.naturalWidth + 'x' + img.naturalHeight;
          var span = document.createElement('span');
          span.classList.add('image-title');
          span.innerText = text;
          img.parentNode.insertBefore(span, img.nextSibling);
      }
      document.querySelectorAll('p img').forEach(function (img, i) {
          if(img.nextSibling && img.nextSibling.classList && img.nextSibling.classList.contains('image-title')) return
    
          if (img.complete && img.naturalHeight !== 0) {
              addTitle(img);
          } else {
              img.onload = e => {addTitle(e.target)}
          }
      });
    })();
    
    }
    
    imageTitle()
    
    module.exports = imageTitle