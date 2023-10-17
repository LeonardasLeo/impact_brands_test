class processStepComponent extends HTMLElement {
    constructor() {
        super();
        this.icon = this.getAttribute('icon');
        this.title = this.getAttribute('title');
        this.message = this.getAttribute('message');
        this.right = this.getAttribute('right')

    }
    connectedCallback() {
        const position = this.right === 'true'
        this.innerHTML =
            `<div class="process__step ${position && 'process__step--right'}">
                 <img class="process__step__icon" src="${this.icon}" alt="">
                 <div class="process__step__wrapper ${position && 'process__step__wrapper--right'}">
                    <div class="process__step__text ${position && 'process__step__text--right'}">
                        <div><b>${this.title}</b></div>
                        <div>
                            ${this.message}
                        </div>
                    </div>
                </div>
            </div>`;
    }
}

customElements.define('process-step', processStepComponent);