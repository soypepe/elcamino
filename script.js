const contenedor = document.querySelector('.contenedor')

document.querySelector('.abrir-navbar-icono').
  addEventListener('click', () => {
    contenedor.classList.add('cambio')
  })

document.querySelector('.cerrar-navbar-icono').
  addEventListener('click', () => {
    contenedor.classList.remove('cambio')
  })

const colores = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee']

let i = 0

Array.from(document.querySelectorAll('.nav-link')).forEach((item) => {
  item.style.cssText = `background-color: ${colores[i++]}`
})

Array.from(document.querySelectorAll('.navegacion-btn'))
  .forEach((item) => {
    item.onclick = () => {
      item.parentElement.parentElement.classList.toggle('cambio')
    }
  })