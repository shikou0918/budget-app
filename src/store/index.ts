import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { recordTransactions } from './RecordTransaction';

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    recordTransactions,
  },
};

export default new Vuex.Store<RootState>(store);
