document.addEventListener('touchstart',function(ev){
  ev = ev || event;
  ev.preventDefault();  //取消系统默认行为
});

//rem适配
/*(function(){
  var styleNode = document.createElement('style');
  var width = document.documentElement.clientWidth/16;
  styleNode.innerHTML = "html{font-size:"+ width +"px!important}";
  document.body.appendChild(styleNode);
})();*/

(function(){
  var width = document.documentElement.clientWidth;  //375
  var targetW = 640;
  var scale = width / targetW;
  var $metaN = $('meta[name="viewport"]');
  $metaN.attr('content','initial-scale='+scale);
  // console.log(width,scale);
})();


$(function (){
  var oc = document.querySelector('canvas');
  // var $liChildren = $('.wrap .list .listChild>li');
  var $liEven = $('.wrap .list .listChild>li:even');
  var $liOdd = $('.wrap .list .listChild>li:odd');
  var $music = $('.music');
  var $audio = $('.music audio');
  var audio = document.querySelector('.wrap .music audio');
  var $list = $('.wrap .list>li');

  var startY=0;
  var distance=0;
  var flag = 0;
  var oldFlag = 0;
  var isMove = true;
  var height = document.documentElement.clientHeight;


  //滑屏逻辑
  function move(){
    $(document).on('touchstart',function(ev){
      ev = ev || event;
      startY = ev.originalEvent.changedTouches[0].clientY;
    });

    $(document).on('touchmove',function(ev){
      ev = ev || event;
      var endY = ev.originalEvent.changedTouches[0].clientY;
      distance = endY - startY;

      if(distance>0){
        $list.eq(oldFlag).css({
          transform: "translateY("+ distance*0.000001 +"px)" + "scale("+ (1-(distance/height)*0.2) +")"
        });
        if(isMove){
          flag--;
          $list.eq(oldFlag).addClass('toBottomOrigin');
          $list.eq(oldFlag).addClass('preCurrent');
          isMove=false;
        }
        (flag>4)&&(flag=0);
        $list.eq(flag).removeClass('isHide');
        $list.eq(flag).addClass('current');
        $list.eq(flag).css({
          transform: "translateY("+ (-height+distance) +"px)"
        });
      }else if(distance<0){
        $list.eq(oldFlag).css({
          transform: "translateY("+ distance*0.000001 +"px)" + "scale("+ (1+(distance/height)*0.2) +")"
        });
        if(isMove){
          flag++;
          $list.eq(oldFlag).addClass('toTopOrigin');
          $list.eq(oldFlag).addClass('preCurrent');
          isMove=false;
        }
        (flag>4)&&(flag=0);
        $list.eq(flag).removeClass('isHide');
        $list.eq(flag).addClass('current');
        $list.eq(flag).css({
          transform: "translateY("+ (height+distance) +"px)"
        });
      }


    });
    $(document).on('touchend',function(){
      if(distance>0){
        $list.eq(flag).addClass('moveToBottom');
        $list.eq(oldFlag).addClass('noveFromTOp');
        $list.eq(flag).removeClass('current');
        $list.eq(oldFlag).css({
          transform: "translateY(0)"+"scale(1)"
        });
        $list.eq(oldFlag).removeClass('toBottomOrigin');
        $list.eq(flag).css({
          transform: "translateY(0)"
        });
        $list.eq(oldFlag).removeClass('preCurrent');
        $list.eq(oldFlag).addClass('isHide');
        $list.eq(flag).removeClass('current');
        $list.eq(flag).addClass('preCurrent');
        oldFlag = flag;
        isMove = true;
      }else if(distance<0){
        $list.eq(oldFlag).css({
          transform: "translateY(0)"+" scale(1)"   //此处需要对页面还原处理，否则去除含义动画的类(class)，页面会回到手指滑动的地方；
        });
        $list.eq(oldFlag).removeClass('toTopOrigin');
        $list.eq(flag).css({
          transform: "translateY(0)"
        });
        $list.eq(oldFlag).addClass('isHide');
        $list.eq(oldFlag).removeClass('preCurrent');
        $list.eq(flag).removeClass('current');
        $list.eq(flag).addClass('preCurrent');
        oldFlag = flag;
        isMove = true;
      }

    });
  }




  //music点击事件
  $music.click(function (){
    if($audio[0].paused){
      $audio[0].play();
      $music.prop('animation', '');
      console.log($music)
    }else{
      $audio[0].pause();
    }
    console.log($audio[0]);

  });
  /*if($audio.paused){
    $audio.play();
  }*/


  if(oc.getContext){
    oc.width = document.documentElement.clientWidth;
    oc.height = document.documentElement.clientHeight;
    var ctx = oc.getContext('2d');
    var img = new Image();
    img.src = "./img/a.png";
    img.onload = function (){
      draw();
    };
    function draw(){
      /*var p = ctx.createPattern(img,'no-repeat');
       ctx.fillStyle = p;
       ctx.fillRect(0,0,oc.width,oc.height);*/
      ctx.drawImage(img,0,0,oc.width,oc.height);

      oc.addEventListener('touchstart',function(ev){
        ev = ev || event;
        var touchC = ev.changedTouches[0];
        var x = touchC.clientX;
        var y = touchC.clientY;
//						console.log(x,y);

        ctx.globalCompositeOperation = "destination-out";
        ctx.lineWidth = 200;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.moveTo(x,y);
        ctx.lineTo(x+1,y+1);
        ctx.stroke()
      });

      oc.addEventListener('touchmove',function(ev){
        ev = ev || event;
        var touchC = ev.changedTouches[0];
        var x = touchC.clientX;
        var y = touchC.clientY;

        ctx.lineTo(x,y);
        ctx.stroke()
      });

      oc.addEventListener('touchend', function (ev){
        ev = ev || event;
        var touchC = ev.changedTouches[0];

        var imgData = ctx.getImageData(0,0,oc.width,oc.height)
        var allPx = imgData.width * imgData.height;

        var count = 0;
        for(var i=0; i<allPx; i++){
          if(imgData.data[4*i+3] === 0){
            count++
          }
        }
//						console.log(count,allPx);
        if(count>=allPx/2){
          this.style.opacity = 0;
//							console.log(count,allPx);
        }
        oc.addEventListener('transitionend',function(){
          this.remove();
          $liEven.css({'opacity': '1','transform':'translateX(0)'});
          $liOdd.css({'opacity': '1','transform':'translateX(0)'});
          // $liEven.css({'background': 'red', 'opacity': '1'});
          move();
        })
      });

    }
  }
});

