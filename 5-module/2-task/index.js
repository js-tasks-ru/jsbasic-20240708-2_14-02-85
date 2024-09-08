function toggleText() {
  let btn = document.querySelector('.toggle-text-button')
  let txt = document.getElementById('text')
  function hideText(){
    txt.toggleAttribute('hidden')
  }
 btn.addEventListener('click', hideText)
}
