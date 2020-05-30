import { createReducer, createRequestActions, debounce } from '../utils';
import { api } from '../services';

const MAX_SUGGESTIONS = 5;
const REQUEST_DELAY = 1500;

const CHANGE_QUERY = 'suggestions/CHANGE_QUERY';
const SET_QUERY = 'suggestions/SET_QUERY';
const GET_SUGGESTIONS = 'suggestions/GET_SUGGESTIONS';

const suggestions = createRequestActions(GET_SUGGESTIONS);

const initState = {
  query: '',
  loading: false,
  items: [],
};

const actionHandlers = {
  [CHANGE_QUERY]: (state, { payload: query }) => ({ ...state, query }),
  [SET_QUERY]: (state, { payload: query }) => ({ ...state, query, items: [] }),
  [suggestions.REQUEST]: (state) => ({ ...state, loading: true }),
  [suggestions.SUCCESS]: (state, { payload: items }) => ({ ...state, loading: false, items }),
  [suggestions.FAILURE]: (state) => ({ ...state, loading: false, items: [] }),
};

const requestDebounced = debounce(async (query, dispatch) => {
  dispatch(suggestions.request());

  try {
    const {
      data: { items },
    } = await api.getSuggestions(query);
    const suggestionItems = items.slice(0, MAX_SUGGESTIONS).map((item) => ({ id: item.id, name: item.name }));
    dispatch(suggestions.success(suggestionItems));
  } catch (err) {
    dispatch(suggestions.failure());
  }
}, REQUEST_DELAY);

export const changeQuery = (query) => (dispatch) => {
  dispatch({ type: CHANGE_QUERY, payload: query });
  if (query.length < 1) {
    requestDebounced.cancel();
    dispatch(suggestions.success([]));
    return;
  }
  requestDebounced(query, dispatch);
};

export const setQuery = (query) => ({
  type: SET_QUERY,
  payload: query,
});

export const reducer = createReducer(initState, actionHandlers);
