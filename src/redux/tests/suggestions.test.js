import { reducer, setQuery } from '../suggestions';

describe('reducer', () => {
  beforeEach(() => {
    reducer(undefined, { type: 'TEST' });
  });

  it('should return valid initial state', () => {
    expect(reducer(undefined, { type: 'TEST' })).toEqual({
      query: '',
      loading: false,
      items: [],
    });
  });

  it('should return valid state on change query', () => {
    const newState = reducer(undefined, { type: 'suggestions/CHANGE_QUERY', payload: 'test' });
    expect(newState).toEqual({
      query: 'test',
      loading: false,
      items: [],
    });
  });

  it('should return valid state on set query', () => {
    const newState = reducer(
      { query: '123', items: [{ a: 1 }], loading: false },
      { type: 'suggestions/SET_QUERY', payload: 'test' }
    );
    expect(newState).toEqual({
      query: 'test',
      loading: false,
      items: [],
    });
  });

  it('should return valid state on get suggestions request', () => {
    const newState = reducer(
      { query: '123', items: [{ a: 1 }], loading: false },
      { type: 'suggestions/GET_SUGGESTIONS_REQUEST' }
    );
    expect(newState).toEqual({
      query: '123',
      loading: true,
      items: [{ a: 1 }],
    });
  });

  it('should return valid state on get suggestions success', () => {
    const newState = reducer(
      { query: '123', items: [], loading: false },
      { type: 'suggestions/GET_SUGGESTIONS_SUCCESS', payload: [{ a: 1 }] }
    );
    expect(newState).toEqual({
      query: '123',
      loading: false,
      items: [{ a: 1 }],
    });
  });

  it('should return valid state on get suggestions failure', () => {
    const newState = reducer(
      { query: '123', items: [{ a: 1 }], loading: false },
      { type: 'suggestions/GET_SUGGESTIONS_FAILURE' }
    );
    expect(newState).toEqual({
      query: '123',
      loading: false,
      items: [],
    });
  });
});

it('should set query return valid action', () => {
  const action = setQuery('test');
  expect(action).toEqual({ type: 'suggestions/SET_QUERY', payload: 'test' });
});
