
// 图片全屏 / 图片充满整个父级
	// 默认box自带loading背景图
	// 默认obj hide
function FullBg(box, obj){
	box.css("background", "none")
	obj.eq(0).stop().fadeIn(1000)
	function resizeBg() {
		obj.removeClass("w-f").removeClass("h-f").css("margin", 0)
		var boxR = box.width() / box.height(),
			objR = obj.width() / obj.height();
		if ( objR < boxR ) {
		    obj.addClass('w-f').css("margin-top", -(obj.height() - box.height()) / 2);
		} else {
		    obj.addClass('h-f').css("margin-left", -(obj.width() - box.width()) / 2);
		}	
	}
	$(window).resize(resizeBg).trigger("resize");
}

function _PreLoadImg(b,e){var c=0,a={},d=0;for(src in b){d++}for(src in b){a[src]=new Image();a[src].onload=function(){if(++c>=d){e(a)}};a[src].src=b[src]}};

