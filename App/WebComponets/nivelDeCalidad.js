import { autoIncrementalId, duckFetch } from "../../js/app.js"
export class nivelCalidad extends HTMLElement {
  constructor() {
    super();
    this.render()
  }

  render() {
    this.classList.add('justify-content-center', 'align-items-center', 'defaultDiv')
    this.innerHTML = /*html*/ `<div class="tittle">
        <p class="text-center display-4">Que nivel de calidad estas buscando?</p>
      </div>
      <div class="iconsContent justify-content-center row">
        <div class="imgIcon text-center" data-set="300000">
          <img src="../../img/answer-1-1.png" class="img-fluid" alt="" />
          <p class="mt-2">Calidad optima</p>
        </div>
        <div class="imgIcon text-center" data-set="380000">
          <img src="../../img/answer-1-2.png" class="img-fluid" alt="" />
          <p class="mt-2">Buena relacion calidad/precio</p>
        </div>
        <div class="imgIcon text-center" data-set="200000">
          <img src="../../img/answer-1-3.png" class="img-fluid" alt="" />
          <p class="mt-2">No me importa tanto la calidad</p>
        </div>
      </div>
    `
    this.querySelectorAll('div.imgIcon').forEach((icon) => {
      icon.addEventListener('click', async () => {
        this.innerHTML = '<tipo-app></tipo-app>'
        let id = await autoIncrementalId('priceF')
        const newData = {
          id,
          precios: [icon.getAttribute('data-set')]
        }
        duckFetch('priceF', id, 'POST', newData)
      })
    })
  }
}

customElements.define('nivel-calidad', nivelCalidad)