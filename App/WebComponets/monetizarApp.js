import { TOTAL } from "../../js/app.js";

export class monetizarApp extends HTMLElement {
  constructor() {
    super();
    this.render()
  }

  render() {
    this.classList.add('justify-content-center', 'align-items-center', 'defaultDiv')
    this.innerHTML = /*html*/ `<div class="tittle">
        <p class="text-center display-4">Como monetizar con tu app?</p>
      </div>
      <div class="iconsContent justify-content-center row">
        <div class="imgIcon text-center" data-set="600000">
          <img src="../../img/answer-4-1.png" class="img-fluid" alt="" />
          <p class="mt-2">Aplicacion gratuita con publicidad</p>
        </div>
        <div class="imgIcon text-center" data-set="1000000">
          <img src="../../img/answer-4-2.png" class="img-fluid" alt="" />
          <p class="mt-2">Aplicacion de pago</p>
        </div>
        <div class="imgIcon text-center" data-set="2000000">
          <img src="../../img/answer-4-3.png" class="img-fluid" alt="" />
          <p class="mt-2">Compras dentro de la app</p>
        </div>
        <div class="imgIcon text-center" data-set="3500000">
          <img src="../../img/answer-4-4.png" class="img-fluid" alt="" />
          <p class="mt-2">Otros / No lo se todavia</p>
        </div>
      </div>
    `
    this.querySelectorAll('div.imgIcon').forEach((icon) => {
      icon.addEventListener('click', () => {
        this.innerHTML = `<autenticacion-app></autenticacion-app>`
        TOTAL.push(Number(icon.dataset.set))
        console.log(TOTAL);
      })
    })
  }
}

customElements.define('monetizar-app', monetizarApp)