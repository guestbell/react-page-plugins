import { Migration } from './Migration';

export default new Migration(
  1,
  0,
  0,
  (state, version) => {
    return {
      changed: true,
      migratedState: state,
      finalVersion: version,
    };
  },
  state => {
    if (Array.isArray(state)) {
      return true;
    }
    return false;
  }
);
