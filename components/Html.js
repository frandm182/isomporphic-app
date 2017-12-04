import React from 'react';
import PropTypes from 'prop-types';

const Html = props => (
  <html lang="es">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>{props.title || ''}</title>
      <meta name="description" content={props.description || ''} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script src="client.js" />
    </head>
    <body>
      <div id="app">{props.children} </div>
    </body>
  </html>
);

Html.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node
};

export default Html;
