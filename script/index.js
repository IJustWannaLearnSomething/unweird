document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.menu').classList.add('active')
})

document.querySelector('.cancel-btn').addEventListener('click', () => {
  document.querySelector('.menu').classList.remove('active')
})

document.querySelector('.moon').addEventListener('click', () => {
  document.querySelector('body').classList.toggle('dark-mode')
  document.querySelector('.moon i.la-moon').classList.toggle('invisible')
  document.querySelector('.moon i.la-sun').classList.toggle('invisible')
})
