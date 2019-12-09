import { Migration } from './Migration';

export default new Migration(
  '0.0.1',
  '*',
  state => {
    return {
      changed: true,
      migratedState: {
        version: '0.0.1',
        data: state,
      },
    };
  },
  state => {
    if (Array.isArray(state) || !state.version) {
      return true;
    }
    return false;
  }
);
