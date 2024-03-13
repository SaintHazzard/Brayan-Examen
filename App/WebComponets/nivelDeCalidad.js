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
      <div class="iconsContent justify-content-center">
        <div class="imgIcon text-center">
          <img src="../../img/answer-1-1.png" class="img-fluid" alt="" />
          <p class="mt-2">Calidad optima</p>
        </div>
        <div class="imgIcon text-center">
          <img src="../../img/answer-1-2.png" class="img-fluid" alt="" />
          <p class="mt-2">Buena relacion calidad/precio</p>
        </div>
        <div class="imgIcon text-center">
          <img src="../../img/answer-1-3.png" class="img-fluid" alt="" />
          <p class="mt-2">No me importa tanto la calidad</p>
        </div>
      </div>
    `
    this.querySelectorAll('div.imgIcon').forEach((icon) => {
      icon.addEventListener('click', () => {
        this.innerHTML = '<tipo-app></tipo-app>'
      })
    })
  }
}

customElements.define('nivel-calidad', nivelCalidad)