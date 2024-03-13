export class totalApp extends HTMLElement {
  constructor() {
    super();
    this.render()
  }

  render() {
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
        <p>El costo estimado de tu app es </p>
        <p class="display-4">${"55.500.500"}COP</p >
        <p>En GBP contamos con los mejores <strong>desarrolladores de apps y webs</strong> para tu proyecto. Publica tu proyeco en GBP</p>
    </div>
        `
  }
}


customElements.define('total-app', totalApp)