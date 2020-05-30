const actionCreator = (type) => (payload) => ({
  type,
  payload,
});

export default (baseName) => {
  const types = {
    REQUEST: `${baseName}_REQUEST`,
    SUCCESS: `${baseName}_SUCCESS`,
    FAILURE: `${baseName}_FAILURE`,
  };

  return {
    ...types,
    request: actionCreator(types.REQUEST),
    success: actionCreator(types.SUCCESS),
    failure: actionCreator(types.FAILURE),
  };
};
