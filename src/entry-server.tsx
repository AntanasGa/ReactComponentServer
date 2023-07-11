import ReactDOMServer from 'react-dom/server'
import componetizer from './componetizer'
import React from 'react';

export function render(url: string, context: string) {
  if (url in componetizer) {
    const component = componetizer[url] as () =>JSX.Element;
    if (component) {
      return ReactDOMServer.renderToString(
          React.createElement(component)
      )
    } else {
      return "";
    }
  }
  return "";
}
