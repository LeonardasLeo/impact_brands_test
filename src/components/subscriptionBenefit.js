class subscriptionBenefitElement extends HTMLElement {
    constructor() {
        super();
        this.icon = this.getAttribute('icon');
        this.message = this.getAttribute('message')

    }
    connectedCallback() {
        this.innerHTML =
            `<div class="subscription__benefits">
                <img src="${this.icon}" alt="">
                <div>${this.message}</div>
            </div>`;
    }
}

customElements.define('subscription-benefit', subscriptionBenefitElement);