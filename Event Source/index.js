const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click',() => {
  const screenWidth = window.screen.width
  const screenHeight = window.screen.height
  
  alert(`Размер вашего экрана ${screenWidth}x${screenHeight}`)
})