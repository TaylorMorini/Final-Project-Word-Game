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
        wordLength: {type: Number, reflect:true },
    
      }
    }
        constructor() {
          super();
          this.wordLength = '5';
          this.endpoint ='/api/wordGenerate';
          this.word = '';
        }
    
      updated(changedProperties) {
        
        changedProperties.forEach((oldValue, propName) => {
      
          if (propName === 'word' && this[propName]) {
          
            const evt = new CustomEvent('word-changed', {
           
              bubbles: true,
          
              composed: true,
              
              cancelable: true,
             
              detail: {
                value: this.ip,
              },
            });
    
            this.dispatchEvent(evt);
          }
        });
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
        return fetch(this.wordLookUp)
          .then(resp => {
            if (resp.ok) {
              return resp.json();
            }
            return false;
          })
          .then(data => {
            this.word = data.word;
            this.wordLength = data.wordLength;
    
    
            return data;
          });
      }
  
      static get styles() {
        return [
          css`
            :host {
              display: block;
            }
          
            ul {
              margin: 0 8px;
              list-style-type: square;
              font-size: 20px;
            }
         
            li {
              margin: 0;
              padding: 0;
            }
            .ipaddress {
              font-style: var(--user-ip-ipaddress-font-style, italic);
            }
          `,
        ];
      }
    
      render() {
        return html` <ul>
          <li><strong class="word">Word Length:  </strong> ${this.wordLength}</li>
          <li><strong class="word">Word :  </strong> ${this.word}</li>

       
    
          <li></li>
        </ul>`;
      }
    }
    
    customElements.define('woord-le', woordle);
    