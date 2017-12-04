/* global document window */
/* eslint no-undef: "error" */
/* eslint-disable react/react-in-jsx-scope */
import ReactDOM from 'react-dom';
import App from './components/App';

const run = () => ReactDOM.hydrate(<App />, document.getElementById('app'));
const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}
