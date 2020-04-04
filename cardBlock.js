const template = document.createElement('template')
template.innerHTML = `
<style>
    .card-block {
        display: inline-block;
        border: 1px solid #ccc;
        padding: 1rem;

        transition: background-color 1s ease-out;
    }

    .card-block:hover {
        background: #ccccff;
    }
</style>
<div class="card-block">
    <slot />
</div>
`

class CardBlock extends HTMLElement {    

    constructor() {
        super()

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }


}

window.customElements.define('card-block', CardBlock)
