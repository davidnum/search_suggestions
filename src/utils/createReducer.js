export const emptyAction = (state) => state;

export default (initState = {}, actionHandlers = {}) => (state, action) => {
  const handler = actionHandlers[action.type] || emptyAction;
  return handler(state || initState, action);
};
