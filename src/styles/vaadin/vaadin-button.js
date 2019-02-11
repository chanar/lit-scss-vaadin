import scss from './vaadin-button.scss';

const $template = document.createElement('template');

let styles = scss;

// Webpack is adding :export {meta: '{"e":":host","f":[]}'; } to the end of the file
// Need to remove it
styles = styles.replace(':export {', '');
styles = styles.replace('meta: \'{"e":":host","f":[]}\'; }', '');

$template.innerHTML = `
<dom-module id="lumo-button-edit" theme-for="vaadin-button">
  <template>
    <style>
      ${styles}
    </style>
  </template>
</dom-module>`;

document.head.appendChild($template.content);
