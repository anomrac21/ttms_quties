    var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
document.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   var footerBtns = document.getElementById("footerBtns");
   var accessibility = document.getElementById("accessibility");
   var adSpot1 = document.getElementById("adSpot1");
   var adSpot2 = document.getElementById("adSpot2");
   if (st > lastScrollTop) {
      footerBtns.classList.add('bigfont');
      footerBtns.classList.remove('smallfont');
      footerBtns.classList.add('grad1');
      footerBtns.classList.remove('grad2');
   } else if (st < lastScrollTop && accessibility.classList.contains('hide') && adSpot1.classList.contains('hide') && adSpot2.classList.contains('hide')) {
      footerBtns.classList.add('smallfont');
      footerBtns.classList.remove('bigfont');
      footerBtns.classList.add('grad2');
      footerBtns.classList.remove('grad1');
   } // else was horizontal scroll
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

  function toggleSound(){
    var soundoff = document.getElementById("btn_soundoff");
    var soundon = document.getElementById("btn_soundon");
    if(soundoff.classList.contains('hide')){
        soundoff.classList.remove('hide');
        soundon.classList.add('hide');
    }else{
        soundoff.classList.add('hide');
        soundon.classList.remove('hide');
        playContact()
    }
  }

  function playClick() {
    var soundoff = document.getElementById("btn_soundoff");
    if(soundoff.classList.contains('hide')){
      var sfx = document.getElementById("click");
      sfx.autoplay = true;
      sfx.load();
    }
  }

  function playContact() {
    var soundoff = document.getElementById("btn_soundoff");
    if(soundoff.classList.contains('hide')){
      var sfx = document.getElementById("rate");
      sfx.autoplay = true;
      sfx.load();
    }
  }

  function playRateLow() {
    window.open("https://forms.gle/RighWCG1YfATE3fo9", "_blank" );
    playContact();
  }

  function playRateHigh() {
    window.open("https://www.ttmenus.com", "_blank" );
    playContact();
  }

  function expandAppMenu() {
    playClick();
    
    var subInfoBtn = document.getElementById("SubInfoBtn");
    var subBtnItems = document.getElementById("SubBtnItems");
    if(subBtnItems.classList.contains('hide')){
      subBtnItems.classList.remove('hide');
      
    }else{
      subBtnItems.classList.add('hide');
    }
    
  }

  function showAppleMsg(x) {
    playClick();
    var msg = document.getElementsByClassName("msg");
    for (var i = msg.length - 1; i >= 0; i--) {
      if(x==i){
        msg[i].classList.remove('hide');
      }else{
        msg[i].classList.add('hide');
      }
      
    }
  }

  function toggleFooterAccessibility(){
    playContact();
    var accessibility = document.getElementById("accessibility");
    if(accessibility.classList.contains('hide')){
      accessibility.classList.remove('hide');
      footerBtns.classList.add('bigfont');
      footerBtns.classList.remove('smallfont');
      footerBtns.classList.add('grad1');
      footerBtns.classList.remove('grad2');
    }else{
      accessibility.classList.add('hide');
    }
  }
function toggleFooterAdSpot1(){
    playContact();
    var adSpot1 = document.getElementById("adSpot1");
    if(adSpot1.classList.contains('hide')){
      adSpot1.classList.remove('hide');
      footerBtns.classList.add('bigfont');
      footerBtns.classList.remove('smallfont');
      footerBtns.classList.add('grad1');
      footerBtns.classList.remove('grad2');
    }else{
      adSpot1.classList.add('hide');
    }
  }
function toggleFooterAdSpot2(){
    playContact();
    var adSpot2 = document.getElementById("adSpot2");
    if(adSpot2.classList.contains('hide')){
      adSpot2.classList.remove('hide');
      footerBtns.classList.add('bigfont');
      footerBtns.classList.remove('smallfont');
      footerBtns.classList.add('grad1');
      footerBtns.classList.remove('grad2');
    }else{
      adSpot2.classList.add('hide');
    }
  }