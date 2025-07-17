const slides = [
{ left: './images/Image.png?text=Left+1', right: './images/Image-2.png?text=Right+1' },
{ left: './images/Image-3.png?text=Left+2', right: './images/Image-4.png?text=Right+2' },
{ left: './images/Image-5.png?text=Left+3', right: './images/Image-6.png?text=Right+3' },
{ left: './images/Image-7.png?text=Left+4', right: './images/Image-7.png?text=Right+4' },
// { left: './images/Image-9.png?text=Left+5', right: './images/Image-10.png?text=Right+5' },
];
let currentIndex = 0;

function setImages(index) {
currentIndex = index - 1;
document.getElementById('leftImage').src = slides[currentIndex].left;
document.getElementById('rightImage').src = slides[currentIndex].right;
}

function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
setImages(currentIndex + 1);
}

function prevSlide() {
currentIndex = (currentIndex - 1 + slides.length) % slides.length;
setImages(currentIndex + 1);
}