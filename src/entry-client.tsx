import ReactDOM from 'react-dom/client'
import './index.css'
import React, { FunctionComponent } from 'react';
import componetizer from './componetizer';

window.createComponent = (element, name) => {
  let instance: Element | undefined | null;
  if (typeof element === 'string') {
    instance = document.querySelector(element)
  } else if (element instanceof HTMLElement) {
    instance = element;
  }
  if (!instance || !(name in componetizer)) {
    return;
  }
  const reactEl = React.createElement(componetizer[name] as FunctionComponent);
  ReactDOM.hydrateRoot(instance, reactEl);
  console.log(`hydrated ${name}`)
}
