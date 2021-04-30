function upDate_img(img) {
    var x = document.getElementById('bimg')
    x.style.backgroundImage = 'url(' + img.src + ')'
  }
  function upDate_color(color) {
    var x = document.getElementById('btext')
    x.style.color = color
  }
  
  function upDate_size(num) {
    var x = document.getElementById('btext')
    x.style.fontSize = num + 'px'
  }
  
  function changePosition(position) {
    var x = document.getElementById('imgContainer')
    if (position == 'left') {
      x.style.justifyContent = 'flex-start'
    } else if (position == 'right') {
      x.style.justifyContent = 'flex-end'
    } else {
      x.style.justifyContent = 'center'
    }
  }