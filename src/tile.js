import { LitElement, css, html } from 'lit';

export class tile extends LitElement {
  static get tag() {
    return 'cur-tile';
  }

  constructor() {
    super();
    this.letter = '';
    this.index = 0;
  }

  static get properties() {
    return {
      letter: { type: String, reflect: true, },
      index: { type: Number, reflect: true, },
    };
  }
  static get styles() {
    return [
      css`
      :host {
        display: inline-flex;
      }
      .tile{

    font-size: 2.5rem;
    font-weight: 700;
    text-transform: uppercase;
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid gray;
    border-radius: 3px;
} 
      `,
    ];
  }
  create(){
      return html`
      <input type = "text" @input ="${this.valueChanged}" value="${this.letter}" class="tile" maxlength="1"  />
  
  `;  }
      valueChanged(e) {
    this.letter = this.shadowRoot.querySelector("input").value.toUpperCase();
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'letter') {
        this.dispatchEvent(new CustomEvent('letter-changed', {
          detail: this
        }))
      }
    });
  }
  render() {
    return html`${this.createTile()}`;
  }
}
customElements.define(tile.tag, tile);
  