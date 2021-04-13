function f(id) {
  return document.getElementById(id)
}

function getStyle(obj, attr){
  if(obj.currentStyle){
    return obj.currentStyle[attr];
  }else{
    return getComputedStyle(obj, false)[attr];
  }
}

function Animate(obj, json){
  if(obj.timer){
    clearInterval(obj.timer);
  }
  obj.timer = setInterval(function(){
    for(var attr in json){
      var iCur = parseInt(getStyle(obj, attr));
      iCur = iCur ? iCur : 0;
      var iSpeed = (json[attr] - iCur) / 5;
      iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
      obj.style[attr] = iCur + iSpeed + 'px';
      if(iCur == json[attr]){
        clearInterval(obj.timer);
      }
    }
  }, 30);
}

var appendFragment = function (e, a) {
  var parent = a || document.getElementsByTagName("body")[0] || "";
  if (e) {
    var df = document.createDocumentFragment() || "";
    if ("string" === typeof e) {
      e = document.createTextNode(e);
    }
    df.appendChild(e);
    parent.appendChild(df);
  }
};
