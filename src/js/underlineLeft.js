export class underlineLeft extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =
            `
            <div>
                <img src="../../assets/dot.svg" alt="">
                <img src="../../assets/underline_left.svg" alt="">
            </div>
            `;
    }
}

customElements.define('underline-left', underlineLeft);