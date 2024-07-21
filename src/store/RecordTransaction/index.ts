import { Module } from 'vuex';
import { RecordTransactionState, RootState } from '../types';
import actions from './actions';
import mutations from './mutations';

const state: RecordTransactionState = {
  recordTransactions: [],
};

export const recordTransactions: Module<RecordTransactionState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
}