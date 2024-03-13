import { TOTAL } from "../../js/app.js";

export class disenioApp extends HTMLElement {
  constructor() {
    super();
    this.render()
  }

  render() {
    this.classList.add('justify-content-center', 'align-items-center', 'defaultDiv')
    this.innerHTML = /*html*/ `<div class="tittle">
        <p class="text-center display-4">Que disenio quieres que tenga tu App?</p>
      </div>
      <div class="iconsContent justify-content-center row">
        <div class="imgIcon text-center" data-set="500000">
          <img src="../../img/answer-3-1.png" class="img-fluid" alt="" />
          <p class="mt-2">Interfaz sencilla</p>
        </div>
        <div class="imgIcon text-center" data-set="1000000">
          <img src="../../img/answer-3-2.png" class="img-fluid" alt="" />
          <p class="mt-2">Interfaz personalizada</p>
        </div>
        <div class="imgIcon text-center" data-set="800000">
          <img src="../../img/answer-3-3.png" class="img-fluid" alt="" />
          <p class="mt-2">Interfaz replicada de la web</p>
        </div>
        <div class="imgIcon text-center" data-set="300000">
          <img src="../../img/answer-3-4.png" class="img-fluid" alt="" />
          <p class="mt-2">No necesito disenio</p>
        </div>
      </div>
    `
    this.querySelectorAll('div.imgIcon').forEach((icon) => {
      icon.addEventListener('click', () => {
        this.innerHTML = `<monetizar-app></monetizar-app>`
        TOTAL.push(Number(icon.dataset.set))
        console.log(TOTAL);
      })
    })
  }
}

customElements.define('disenio-app', disenioApp)