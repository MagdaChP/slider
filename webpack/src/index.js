document.addEventListener("DOMContentLoaded", function () {

  const sliderImgArray = ['assets/img/img_mountains_wide.jpg', 'assets/img/img_nature_wide.jpg', 'assets/img/img_snow_wide.jpg'];
  const sliderBox = document.querySelector('.slider-box');
  const sliderImage = document.createElement('img');
  let index = 0;
  if (index === 0) {
    sliderImage.src = sliderImgArray[0];
  }
  
  setInterval(() => {
    index++;
    if (index >= sliderImgArray.length) { index = 0 };
    console.log('interval', index);
    sliderImage.src = sliderImgArray[index];
  }, 2000);

  document.body.appendChild(sliderBox.appendChild(sliderImage));



})
