function copyToClipboard() {
  var element = this;
  var $temp = $("<textarea>");
  $("body").append($temp);
  $temp.val(element.textContent);
  $temp.select();
  document.execCommand("copy");
  $temp.remove();

  //Display tooltip
  $(element).tooltip({
    trigger: 'manual',
    title: 'Code snipped copied'
  });
  $(element).tooltip('show');

  //Hide tooltip after 2sec
  setTimeout(function() {
    $(element).tooltip('hide');
  }, 2000);
}
