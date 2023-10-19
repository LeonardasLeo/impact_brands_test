class ingredient extends HTMLElement {
    constructor() {
        super();
        this.image = this.getAttribute('image');
        this.message = this.getAttribute('message');
    }
    connectedCallback() {
        this.innerHTML =
            `<div class="single__ingredient">
                <img src="${this.image}" alt="" loading="lazy">
                <div>${this.message}</div>`;
    }
}

customElements.define('single-ingredient', ingredient);