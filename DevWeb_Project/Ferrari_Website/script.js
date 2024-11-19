var img = ['bn1.jpg', 'bn2.jpg', 'bn3.jpg', 'bn4.jpg', 'bn5.jpg', 'bn6.jpg'];
var page1 = document.querySelector(".page1");
var i = 0;
document.querySelector('.next').addEventListener('click', function() {
i = (i + 1) % img.length ;
page1.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + img[i] + ')';
});