import { actions as a, mutations as m } from './constants';
import { ActionTree, Commit } from 'vuex';
import { EndUserState, User } from './types';
import { userService } from './services';

export const typeSafeActions: ActionTree<EndUserState, {}> = {
  hello() {
  },

  [a.CREATE_USER]: async ({ commit }, user: User) => {
    commit(m.CREATE_USER_START);

    try {
      await userService.createUser(user);
      commit(m.CREATE_USER_SUCCESS);
    } catch (err) {
      commit(m.CREATE_USER_FAILURE, err);
    }
  }
};

export const typelessActions = {
  hello() {
  },

  [a.CREATE_USER]: async ({ commit }: { commit: Commit }, user: User) => {
    commit(m.CREATE_USER_START);

    try {
      await userService.createUser(user);
      commit(m.CREATE_USER_SUCCESS);
    } catch (err) {
      commit(m.CREATE_USER_FAILURE, err);
    }
  }
};
