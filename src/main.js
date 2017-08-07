(function(){
  window.addEventListener("load", function(event) {
    var copyTextareaBtn = document.getElementsByClassName('prettyprinted');
    for(i=0; i<=copyTextareaBtn.length; i++) {
      copyTextareaBtn[i].addEventListener('dblclick', copyToClipboard, true);
    }
  });
})();
