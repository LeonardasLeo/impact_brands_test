class CustomQuestion extends HTMLElement {
    constructor() {
        super();
        this.icon = this.getAttribute('icon');
        this.message = this.getAttribute('message');
    }
    connectedCallback() {
        this.innerHTML =
            `<div class="question">
                <div>
                    ${this.message}
                </div>
                <i class="${this.icon} icon--smallest"></i>
            </div>`;
    }
}

customElements.define('custom-question', CustomQuestion);