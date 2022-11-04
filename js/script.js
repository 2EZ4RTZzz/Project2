function changeImg(n) {
  document.querySelector(".large-pic>img").src =
    "image/F" + n + ".png";
}


$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});




