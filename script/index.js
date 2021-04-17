document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.menu').classList.add('active')
})

document.querySelector('.cancel-btn').addEventListener('click', () => {
  document.querySelector('.menu').classList.remove('active')
})
