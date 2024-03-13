export class mainContent extends HTMLElement {
  constructor() {
    super();
    this.render()
  }

  render() {
    this.classList.add('justify-content-center', 'align-items-center', 'defaultDiv')
    this.innerHTML = /*html*/ `
    <img src="../../img/answer-1-1.png" class="img-fluid" alt="" />
    <div class="tittle">
        <p class="text-center display-4">Cuanto cuesta desarrollar mi app GBP?</p>
    </div>
    <p>Calcula de forma rapida el costo para crear tu app, contestando estas sencillas preguntas</p>
    <button type="button" class="btn btn-primary btn-lg gradient-btn animated-btn">Empezar</button>
    `
    this.querySelector('button').addEventListener('click', () => {
      this.innerHTML = '<nivel-calidad></nivel-calidad>'
    })
  }
}

customElements.define('main-content', mainContent)