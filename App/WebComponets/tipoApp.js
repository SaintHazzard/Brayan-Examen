import { TOTAL, duckFetch } from "../../js/app.js"
export class tipoApp extends HTMLElement {
  constructor() {
    super();
    this.render()
  }

  render() {
    this.classList.add('justify-content-center', 'align-items-center', 'defaultDiv')
    this.innerHTML = /*html*/ `<div class="tittle">
        <p class="text-center display-4">Que tipo de app necesitas?</p>
      </div>
      <div class="iconsContent justify-content-center row">
        <div class="imgIcon text-center"  data-set="2000000">
          <img src="../../img/answer-2-1.png" class="img-fluid" alt="" />
          <p class="mt-2">Aplicacion android</p>
        </div>
        <div class="imgIcon text-center" data-set="3000000">
          <img src="../../img/answer-2-2.png" class="img-fluid" alt="" />
          <p class="mt-2">Aplicacion iOS</p>
        </div>
        <div class="imgIcon text-center" data-set="800000">
          <img src="../../img/answer-2-3.png" class="img-fluid" alt="" />
          <p class="mt-2">Aplicacion windows phone</p>
        </div>
        <div class="imgIcon text-center" data-set="3500000">
          <img src="../../img/answer-2-4.png" class="img-fluid" alt="" />
          <p class="mt-2">Aplicacion Android+iOS</p>
        </div>
      </div>
    `
    this.querySelectorAll('div.imgIcon').forEach((icon) => {
      icon.addEventListener('click', () => {
        this.innerHTML = `<disenio-app></disenio-app>`
        TOTAL.push(Number(icon.dataset.set))
        console.log(TOTAL);
      })
    })
  }
}

customElements.define('tipo-app', tipoApp)