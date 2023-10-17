class BoxComponent extends HTMLElement {
    constructor() {
        super();
        this.icon = this.getAttribute('icon');
        this.message = this.getAttribute('message')
    }
    connectedCallback() {
        this.innerHTML =
            `<div class="box">
                <img src="${this.icon}" alt="">
                <div>${this.message}</div>
            </div>`;
    }
}

customElements.define('custom-box', BoxComponent);