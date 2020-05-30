import createRequestActions from '../createRequestActions';

it('should create valid action types', () => {
  const prefix = 'PREFIX';
  const requests = createRequestActions(prefix);

  expect(requests.REQUEST).toEqual('PREFIX_REQUEST');
  expect(requests.SUCCESS).toEqual('PREFIX_SUCCESS');
  expect(requests.FAILURE).toEqual('PREFIX_FAILURE');
});

it('should create valid action creators', () => {
  const prefix = 'PREFIX';
  const requests = createRequestActions(prefix);

  expect(requests.request(1)).toEqual({ type: 'PREFIX_REQUEST', payload: 1 });
  expect(requests.success(2)).toEqual({ type: 'PREFIX_SUCCESS', payload: 2 });
  expect(requests.failure(3)).toEqual({ type: 'PREFIX_FAILURE', payload: 3 });
});
