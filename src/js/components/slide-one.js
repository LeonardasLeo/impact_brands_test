class SlideOne extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =
            `<div class="slide__wrapper">
                <div class="swiper__text">
                    <div class="product__blend__header--second">Metabolism boosting</div>
                    <div class="product__blend__text">
                        Metabolism Boosting These powerful superfoods ignite your metabolism and reduce bloating. They improve
                        digestion
                        and deliver the energy you need to get things done. Main Organic Ingiridents:
                    </div>
                    <div class="ingredients__text">Main Organic ingredients:</div>
                </div>
                <div class="container__ingredients">
                    <single-ingredient
                        image="https://cdn.shopify.com/s/files/1/0566/8624/8051/files/acai_berry.png?v=1669613777"
                        message="organic acai berry"></single-ingredient>
                    <single-ingredient
                        image="https://afyaa.com/images/afyaa-arafit/Acacia-Gum-3.png"
                        message="organic acacia gum"></single-ingredient>
                    <single-ingredient
                        image="https://www.cylonies.com/storage/cinnamon/177891-cinnamon-hq-image-free-800x800-540x600.png"
                        message="organic ceylon cinnamon bark"></single-ingredient>
                    <single-ingredient
                        image="https://mlqsu18d2ibo.i.optimole.com/cb:y1Qw~4e43b/w:auto/h:auto/q:mauto/f:best/https://www.9amtea.in/wp-content/uploads/2020/02/Loose-Tea-Subhero-1.png"
                        message="organic green tea"></single-ingredient>
                </div>
            </div>`;
    }
}

customElements.define('slide-one', SlideOne);