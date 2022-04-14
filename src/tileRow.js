import { LitElement, css, html } from 'lit';
import './tile';
import './script';
import { initLayout } from './script';


export class tileRow extends LitElement{
    static get tag() {
        return 'cur-row';
      }
    
      constructor() {
        super();
        this.word = '';
        this.guess = initLayout;
        this.ihavenoidea = initBoard;
      }
    
      static get properties() {
        return {
          word: { type: String, reflect: true, },
          guess: { type: String, reflect: true, },
        };
      }
      render() {
      return html`<li> ${this.word}</li>
      <li>${this.guess}</li>
      <li>${this.ihavenoidea}</li>
      <li>${initLayout}</li> 
      <li>Hi from tile row</li>`
      
       }}
       
       
     customElements.define(tileRow.tag, tileRow);
