(function(){

  window.addEventListener("load", function(event) {
    var copyTextareaBtn = document.getElementsByClassName('prettyprinted');
    console.log(copyTextareaBtn);
    console.log(copyTextareaBtn.length);

    for(i=1; i<copyTextareaBtn.length; i++) {
      copyTextareaBtn[i].addEventListener('dblclick', copyToClipboard, true);
    }
  });
})();
