	// dependencies / things imported
    import { LitElement, html, css } from 'lit';

 
    export class woordle extends LitElement {
     
      static get properties() {
     
      return{
        endpoint: {type: String},
        word: {type: String, reflect: true},
    
      }
    }
        constructor() {
          super();
          this.endpoint ='/api/wordGenerate';
          this.word = null;
        }
       
        firstUpdated(changedProperties) {
       
          if (super.firstUpdated) {
            super.firstUpdated(changedProperties);
          }
    
          if (this.word === null) {
            this.updateWord();
          }
        }
        async updateWord() {
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
      
       const url = `https://random-word-api.herokuapp.com/word?number=1&swear=0&length=5`;
      
    
        return html  `<li>${this.word}</li> 
        <li>${this.endpoint}</li>
        <iframe title="Word" src = ${url}></iframe> 
        `;
      }}
      
      
    customElements.define('woord-le', woordle);
    