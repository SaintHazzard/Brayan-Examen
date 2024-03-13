export class autenticacionApp extends HTMLElement {
  constructor() {
    super();
    this.render()
  }

  render() {
    this.classList.add('justify-content-center', 'align-items-center', 'defaultDiv')
    this.innerHTML = /*html*/ `<div class="tittle">
        <p class="text-center display-4">Tu app necesita sistema de autenticacion?</p>
      </div>
      <div class="iconsContent justify-content-center"  data-set="2000">
        <div class="imgIcon text-center">
          <img src="../../img/answer-5-1.png" class="img-fluid" alt="" />
          <p class="mt-2">Si, con redes sociales y email</p>
        </div>
        <div class="imgIcon text-center" data-set="1500">
          <img src="../../img/answer-5-2.png" class="img-fluid" alt="" />
          <p class="mt-2">Si, con email</p>
        </div>
        <div class="imgIcon text-center" data-set="0">
          <img src="../../img/answer-5-3.png" class="img-fluid" alt="" />
          <p class="mt-2">No</p>
        </div>
        <div class="imgIcon text-center" data-set="3500">
          <img src="../../img/answer-5-4.png" class="img-fluid" alt="" />
          <p class="mt-2">No lo se todavia</p>
        </div>
      </div>
    `

  }
}

customElements.define('autenticacion-app', autenticacionApp)