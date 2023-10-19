class ProcessStep extends HTMLElement {
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
                    <div class="process__step__text__wrapper ${position && 'process__step__text--right'}">
                        <div><b>${this.title}</b></div>
                        <div class="process__step__text">
                            <div>${this.message}</div>
                            <div class="underline" style="left: ${position && '0'}; right: ${!position && '0'}">
                                <img src="../assets/underline.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    }
}

customElements.define('process-step', ProcessStep);