import { createStore, combineReducers, applyMiddleware } from "redux";
import { Campsites } from './campsites';
import { Partners } from './partners';
import { Promotions } from './promotions';
import { Comments } from './comments';
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      campsites: Campsites,
      comments: Comments,
      partners: Partners,
      promotions: Promotions,
      ...createForms({
        feedbackForm: InitialFeedback
      })
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
