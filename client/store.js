import { applyMiddleware, createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';


// import the root reducers
import rootReducer from './reducers/index';

// default data
import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
	posts,
	comments
};


// support to redux devTools
const enhancers = compose(
	window.devToolsExtension? window.devToolsExtension() : f => f
);

// apply redux middleware
const finalCreateStore = compose(
	applyMiddleware(thunk)
)(createStore);

const store = finalCreateStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

// reducer hot reload
if (module.hot) {
	module.hot.accept('./reducers', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;