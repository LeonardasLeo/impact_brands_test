class arrowComponent extends HTMLElement {
    constructor() {
        super();
        this.left = this.getAttribute('left');
    }
    connectedCallback() {
        const left = this.left === 'true'
        this.innerHTML =
            `<div style="position: relative">
                <span class="arrow ${left && 'arrow--left'}">
                    <img src="https://clipart-library.com/img1/1143305.png" alt="">
                </span>
            </div>`;
    }
}

customElements.define('custom-arrow', arrowComponent);