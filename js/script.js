$(document).ready(function(){
  let nav = $(".header");
  let introH = 920 ; // из-за слика так бы написал  $(".container--header").innerHeight()
	let scrollOffset = $(window).scrollTop();
/*fixed header*/
	checkScroll(scrollOffset);
	$(window).on("scroll", function(){
			scrollOffset = $(this).scrollTop();
			checkScroll(scrollOffset);
	});
	function checkScroll(scrollOffset) {
		scrollOffset = $(this).scrollTop();
			if(scrollOffset >= introH){
        nav.addClass("header--fixed");
			}else{
				nav.removeClass("header--fixed");
			}
  }




  $('.slider--header').slick({
    dots: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        arrows:  false  
      }
    }
  ]
  });
  
  $('.slider--partners').slick({
    dots: true,
  	slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false	
  });
  
  
  
  
  
  


  $('.nav-burger').on('click',function(){
    $('.nav').toggleClass('nav--close').toggleClass('nav--open');
  });
  $('.button-choose--toggle').on('click',function(){ //portfolio
    $('.button-choose--toggle').not(this).removeClass('button-choose--active');
    $(this).toggleClass('button-choose--active');
  });
  $('.post__link').on('click',function(){ //post
    $('.post__link').not(this).removeClass('post__link--active');
    $(this).toggleClass('post__link--active');
  });
  $('.button-choose--grey').on('click',function(){ //tags
    $(this).toggleClass('button-choose--active');
  });
  

  let tab = document.querySelectorAll('.post__link'),
      info = document.querySelector('.post__wrapper'),
      tabContent = document.querySelectorAll('.post__article');  

  
  function hideTabContent(a){

      for (let i = a; i < tabContent.length; i++){
          tabContent[i].classList.remove('post__article--show');
          tabContent[i].classList.add('post__article--hide');
      }
  }

  hideTabContent(1);

  function showTabContent(b){

      if (tabContent[b].classList.contains('post__article--hide')){
          tabContent[b].classList.remove('post__article--hide');
          tabContent[b].classList.add('post__article--show');
      }
  }

  info.addEventListener('click', function(event){
      let target = event.target;

      if (target && target.classList.contains('post__link')){
          for(let i = 0; i < tab.length; i++){
              if(target == tab[i]){
                  hideTabContent(0);
                  showTabContent(i);
                  break;
              }
          }
      }
  });
});