import { actions as a } from './constants';
import { typelessActions, typeSafeActions } from './actions';

const testActions = () => {
  typeSafeActions.hello();                        // ERROR: Type 'Action<EndUserState, {}>' has no compatible call signatures

  const commit = () => {};                        // Or: commit = jest.fn()
  typelessActions.hello();                        // OK! But it doesn't have access to 'commit'
  typelessActions[a.CREATE_USER]({ commit }, {}); // NOT GOOD! I have to pass 'commit' manually
};
