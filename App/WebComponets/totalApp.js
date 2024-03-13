import { TOTAL, duckFetch, separadorMiles } from "../../js/app.js";
export class totalApp extends HTMLElement {
  constructor() {
    super();
    this.render()
  }

  render() {
    // let totalizado = TOTAL.reduce((a, b) => a + b, 0)
    // let formatTotal = separadorMiles(totalizado)
    this.classList.add('justify-content-center', 'align-items-center', 'defaultDiv')
    this.innerHTML = /*html*/ `
    <div class="iconsContent justify-content-center flex-column text-center">
        <p>Bien! hemos terminado!</p>
        <p>Compartenos si te ha gustado!</p>
        <div class="redes">
        <img src="" alt="" class="icon">
        <img src="" alt="" class="icon">
        <img src="" alt="" class="icon">
        <img src="" alt="" class="icon">
        </div>
        <p class="estimado">El costo estimado de tu app es </p>
        <p id="priceTotal" class="display-4 poppins-bold">${"CAMBIAR"} COP</p >
        <p>En GBP contamos con los mejores <strong>desarrolladores de apps y webs</strong> para tu proyecto. Publica tu proyeco en GBP</p>
        <button type="button" class="btn btn-primary btn-lg gradient-btn animated-btn">Terminar</button>
    </div>
        `
    this.querySelector('button').addEventListener('click', async () => {
      await duckFetch('priceF', null, "POST", { nombre: `${prompt('Nombre del cliente: ')}`, "priceTotalizado": totalizado, numerocontacto: `${prompt('Numero de contacto:')}`, email: `${prompt('Correo electronico:')}` })
      location.reload()
    })
  }
}


customElements.define('total-app', totalApp)