import createReducer, { emptyAction } from '../createReducer';

it('emptyAction should return state without changes', () => {
  expect(
    emptyAction({
      a: 1,
      b: 2,
    })
  ).toEqual({ a: 1, b: 2 });
});

it('should create valid reducer', () => {
  const action = { type: 'TEST', payload: 2 };
  const action2 = { type: 'TEST2', payload: 3 };
  const reducer = createReducer({ a: 1 }, { TEST: (state, { payload }) => ({ ...state, a: payload }) });

  expect(reducer(undefined, action2)).toEqual({ a: 1 });
  expect(reducer({ a: 1 }, action2)).toEqual({ a: 1 });
  expect(reducer({ a: 1 }, action)).toEqual({ a: 2 });
});
