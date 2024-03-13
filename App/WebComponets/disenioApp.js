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
      <div class="iconsContent justify-content-center">
        <div class="imgIcon text-center">
          <img src="../../img/answer-3-1.png" class="img-fluid" alt="" />
          <p class="mt-2">Interfaz sencilla</p>
        </div>
        <div class="imgIcon text-center">
          <img src="../../img/answer-3-2.png" class="img-fluid" alt="" />
          <p class="mt-2">Interfaz personalizada</p>
        </div>
        <div class="imgIcon text-center">
          <img src="../../img/answer-3-3.png" class="img-fluid" alt="" />
          <p class="mt-2">Interfaz replicada de la web</p>
        </div>
        <div class="imgIcon text-center">
          <img src="../../img/answer-3-4.png" class="img-fluid" alt="" />
          <p class="mt-2">No necesito disenio</p>
        </div>
      </div>
    `
    this.querySelectorAll('div.imgIcon').forEach((icon) => {
      icon.addEventListener('click', () => {
        this.innerHTML = `<monetizar-app></monetizar-app>`
      })
    })
  }
}

customElements.define('disenio-app', disenioApp)