import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store'
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let store
    if (window.currentUser) {
        const preloadedState = {session: {currentUser: window.currentUser}};
        store = configureStore(preloadedState);
        // delete window.currentUser;
    } else {
        store = configureStore();
    }
    ReactDOM.render(<Root store={store}/>, root)
})
