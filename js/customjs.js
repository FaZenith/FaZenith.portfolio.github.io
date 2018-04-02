function openSbcNav() {
    document.getElementById("sbc-nav").style.height = "100%";
}

function closeSbcNav() {
    document.getElementById("sbc-nav").style.height = "0%";
}

$(document).ready(function() {

  var wrapper = $(".page"),
      pages = $(".article").length,
      currentPage = 1,
      scrolling = false;

  $(".article").each(function(index) {
    $("div.items").append("<div class='item"+(index+1)+" visited'><span class='vsb'>"+$(this).find('h1').text()+"</span><a href='#' class='vab'></a></div>")

    updateNav(currentPage);
  });

  function navigateUp() {
    if (currentPage > 1) {
      currentPage--;
      toPage(currentPage);
    }
  }

  function navigateDown() {
    if (currentPage < pages) {
      currentPage++;
      toPage(currentPage);
    }
  }

  function toPage(page)
  {
    	scrolling = true;
      wrapper.animate({"top": "-" + ( (page - 1) * 100) + "%"}, 1000);

      var percent;
      percent = page *-100+100;

      if (percent == '-200') {
        $('#bar01').addClass('barMain90U');
        $('#bar02').addClass('barMain70U');
        $('#bar03').addClass('barMain30U');
        $('#bar04').addClass('barMain90U');
        $('#bar05').addClass('barMain70U');
        $('#bar06').addClass('barMain70U');
        $('#bar07').addClass('barMain90U');
        $('#bar08').addClass('barMain80U');
        $('#bar09').addClass('barMain80U');
        $('#bar10').addClass('barMain60U');
        $('#bar11').addClass('barMain80U');
        $('#bar12').addClass('barMain90U');
        $('#bar13').addClass('barMain70U');
      }
      else {
        $('#bar01').removeClass('barMain90U');
        $('#bar02').removeClass('barMain70U');
        $('#bar03').removeClass('barMain30U');
        $('#bar04').removeClass('barMain90U');
        $('#bar05').removeClass('barMain50U');
        $('#bar06').removeClass('barMain70U');
        $('#bar07').removeClass('barMain90U');
        $('#bar08').removeClass('barMain80U');
        $('#bar09').removeClass('barMain80U');
        $('#bar10').removeClass('barMain60U');
        $('#bar11').removeClass('barMain80U');
        $('#bar12').removeClass('barMain90U');
        $('#bar13').removeClass('barMain70U');
      }

      if (percent == '0') {
        $('#p1h1').addClass('p-active');
        $('#p1h3').addClass('p-active');
        $('#p1h5').addClass('p-active');
      }
      else {
        $('#p1h1').removeClass('p-active');
        $('#p1h3').removeClass('p-active');
        $('#p1h5').removeClass('p-active');
      }

      if (percent == '0') {
        updateColorB()
        $("a.prev span.glyphicon").removeClass("glyphicon-menu-up");
      }else if (percent == '-100') {
        updateColorW()
      }else if (percent == '-200') {
        updateColorB()
      }else if (percent == '-300') {
        updateColorW()
      }else if (percent == '-400') {
        updateColorW()
      }else if (percent == '-500') {
        updateColorW()
      }else if (percent == '-600') {
        updateColorW()
      }else if (percent == '-600') {
        updateColorB()
      }else if (percent == '-700') {
        updateColorB()
      }

      updateNav(page);

    if (currentPage == pages) {
    	$('.bottom').addClass('show');
      $("a.next span.glyphicon").removeClass("glyphicon-menu-down gliph-mod");

    } else {
      $('.bottom').removeClass('show');
      $("a.next span.glyphicon").addClass("glyphicon-menu-down gliph-mod");
    }

      setTimeout(function() {
        scrolling = false;
      }, 1500);
  }

  function updateNav(page)
  {
    $(".nav div.active").addClass("");
    $(".nav div").removeClass("active");

    $(".item"+page).addClass("active");
  }
  function updateColorB()
  {
    $("a.prev span.glyphicon").addClass("glyphicon-menu-up");
    $("a.prev span.glyphicon").addClass("navib");
    $("a.next span.glyphicon").addClass("navib");
    $("a.prev span.glyphicon").removeClass("naviw");
    $("a.next span.glyphicon").removeClass("naviw");

    $("span.burger").addClass("burger-colorB");
    $("span.burger").removeClass("burger-colorW");

    $(".nav div.visited span").addClass("vsb");
    $(".nav div.visited span").removeClass("vsw");

    $(".nav div.visited a").addClass("vab");
    $(".nav div.visited a").removeClass("vaw");
  }
  function updateColorW()
  {
    $("a.prev span.glyphicon").addClass("glyphicon-menu-up");
    $("a.prev span.glyphicon").addClass("naviw");
    $("a.next span.glyphicon").addClass("naviw");
    $("a.prev span.glyphicon").removeClass("navib");
    $("a.next span.glyphicon").removeClass("navib");

    $("span.burger").addClass("burger-colorW");
    $("span.burger").removeClass("burger-colorB");

    $(".nav div.visited span").addClass("vsw");
    $(".nav div.visited span").removeClass("vsb");

    $(".nav div.visited a").removeClass("vab");
    $(".nav div.visited a").addClass("vaw");
  }


	$(document).on("mousewheel DOMMouseScroll", function(e) {
    if (!scrolling) {
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        navigateUp();
      } else {
        navigateDown();
      }
    }
  });

  $(".nav div").on('click',function() {
		currentPage = $(this).index()+1;

    toPage(currentPage);

    return false;
  });

  $(".prev").on("click",function(){
    navigateUp();
  });

  $(".next").on("click",function(){
    navigateDown();
  });
});
