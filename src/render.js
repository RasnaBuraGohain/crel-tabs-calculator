import crel from 'crel';

import renderHome from './pages/home.js';
import renderAbout from './pages/about.js';
import renderCalculator from './pages/calculator.js';


export default function (state, dispatch) {
  function renderTabs(selectedTab) {
    return crel('div', { class: 'tabs' },
      renderTab('Home', 'home', selectedTab),
      renderTab('About', 'about', selectedTab),
      renderTab('Calculator', 'calculator', selectedTab));
  }
  function renderTab(title, key, selectedTab) {
    const className = key === selectedTab ? 'active' : 'not-active';
    const button = crel('button1', { class: className }, title);
    button.addEventListener('click', () => {
      dispatch({ type: 'SELECT_TAB', payload: key });
    });
    return button;
  }

  function renderContent(selectedTab) {
    switch (selectedTab) {
      case 'home': return renderHome(state, dispatch);
      case 'about': return renderAbout(state, dispatch);
      case 'calculator': return renderCalculator(state.calculator, dispatch);
      default: return state;
    }
  }

  return crel('main',
    renderTabs(state.selectedTab),
    renderContent(state.selectedTab)
  );
}
