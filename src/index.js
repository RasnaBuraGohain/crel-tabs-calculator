import './index.css';
import render from './render.js';
import store from './store.js';

const viewport = document.getElementById('viewport');
const update = () => {
  console.log('state:', store.getState());
  const view = render(store.getState(), store.dispatch);
  viewport.replaceChild(view, viewport.firstChild);
};

store.subscribe(update);
update();

