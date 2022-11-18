function changeImg(n) {
  document.querySelector(".large-pic>img").src =
    "../image/F" + n + ".png";
}


$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

function myFunction2() {
  alert("Submitted");
}

function myFunction() {
  alert("Thank you for following us");
}

function myFunction2() {
  alert("Submitted");
}

function myFunction3() {
  alert("Order Confirmed");
}

function myFunction4() {
  alert("Successfully added to cart");
}

// hide the menus.
function showMenu(){
  // alert("123");
  document.querySelector(".flowerNav").classList.toggle("showMenuStyle");
}