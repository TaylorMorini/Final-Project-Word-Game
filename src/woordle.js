	// dependencies / things imported
    import { LitElement, html, css } from 'lit';

    // EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
    // which has the magic life-cycles and developer experience below added
    
    /**
     * @todo For lab 2 see homework for week two of class
     */
 
    export class woordle extends LitElement {
      // a convention I enjoy so you can change the tag name in 1 place
      static get properties() {
     
      return{
        endpoint: {type: String},
        word: {type: String}
    
      }
    }
        constructor() {
          super();
          this.endpoint ='/api/wordGenerate';
          this.word = [];
        }
        async getData() {
          return fetch(`${this.endpoint}?myDay=${this.date}`)
            .then(resp => resp.json())
            .then(responseData => {
              this.word = responseData.word;
            });
  
  

        }
      render() {
        // this function runs every time a properties() declared variable changes
        // this means you can make new variables and then bind them this way if you like
    
       
       // word = await fetch(url).then(res => res.json());
        // filter array to just 5 letter words
        //word = wordList.filter(item => item.length === 5);
       
    //return html`word:${this.word} `;
       return html  `<iframe> word:${this.word} </iframe> `;
      }}
      
      
    customElements.define('woord-le', woordle);
    