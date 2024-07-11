//----dynamic center function----
function dynamicCenter(obj){
var bottomObj = document.getElementById(obj);
   $(window).resize(function() {
      bottomObj.style.position = 'absolute';
      bottomObj.style.top = ($(window).height()- bottomObj.offsetHeight) / 2 + 'px';
      bottomObj.style.left = ($(window).width() - bottomObj.offsetWidth) / 2 + 'px'; 
   }).resize();
}
//------------------------------
//dynamicCenter('underCard');
//dynamicCenter('decor');