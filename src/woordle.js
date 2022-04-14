	// dependencies / things imported
    import { LitElement, html, css } from 'lit';



 
    export class woordle extends LitElement {
      static get tag() {
        return 'woord-le';
      }
     constructor() {
          super();
    
          this.endpoint = 'https://random-word-api.herokuapp.com/word?number=1&length=5';
          this.word = '';
          
        }
      static get properties() {
      return{
        endpoint: {type: String},
        word: {type: String, reflect: true},
    
      }
    }
    firstUpdated(changedProperties) {
      if (super.firstUpdated) {
        super.firstUpdated(changedProperties);
      }
      this.getWordData();
    }
  
    async getWordData() {
    
      return fetch(this.endpoint)
        .then(resp => {
          if (resp.ok) {
            return resp.json();
          }
          return false;
        })
        .then(data => {
          console.log(data);
         
          this.word = data.word;
  
          return data;
        });}
  

      render() {
        return html  `
      
        <iframe title="Word" src = ${this.endpoint}></iframe> 
        
        `;
      }}
      
      
    customElements.define(woordle.tag, woordle);
    