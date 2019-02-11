// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import '@vaadin/vaadin-button/vaadin-button.js';

import styles from './my-element.scss';

// Extend the LitElement base class
class MyElement extends LitElement {
  static get properties() {
    return {
      prop1: { type: String }
    };
  }

  render() {
    return html`
      <style>
        ${styles}
      </style>

      <div class="button-container">
        <vaadin-button theme="primary your-custom-overwrite" @click="${this.fireClickEvent}">
          <slot></slot>
        </vaadin-button>
      </div>
    `;
  }

  fireClickEvent() {
    alert('Yesss!!');

    this.prop1 = 'prop1 now has a value';
  }
}

// Register the new element with the browser.
customElements.define('my-element', MyElement);
