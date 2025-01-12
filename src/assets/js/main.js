// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
// lenis.on('scroll', (e) => {
//   console.log(e);
// });

// const $lazyImgs = document.querySelector('img.js-lazy');
// $lazyImgs.forEach(function(el) {
//   // https://png-pixel.com/
//   el.setAttribute(
//     'src',
//     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAQAAAAe/WZNAAAADklEQVR42mNkgAJGDAYAAFEABCaLYqoAAAAASUVORK5CYII='
//   );
// });

const lazyLoad = new LazyLoad({
  elements_selector: '.js-lazy',
   // 設定距離可視區(視窗)底部多遠觸發
  threshold: 500,
  callback_loaded: function() {
    // 避免圖片載入之後，aos 進場動畫偵測跑掉
    // 因為有可能圖片載入前載入後的佔位不同高
    AOS.refresh();
  }
});
