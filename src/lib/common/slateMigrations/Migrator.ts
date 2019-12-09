import { SlateValue } from '../types/slate/SlateValue';
import { Migration, MigrationResult } from './Migration';
import semver from 'semver';

export const Migrator = {
  migrateState(state: SlateValue, migrations?: Migration[]): MigrationResult {
    let migrationResult: MigrationResult = {
      migratedState: state,
      changed: false,
    };
    if (!migrations) {
      return migrationResult;
    }
    if (!state) {
      console.warn('State not defined when attempting to migrate.');
      return migrationResult;
    }
    let currentDataVersion = state.version || '0.0.0';
    while (true) {
      const migration = migrations.find(
        m =>
          semver.satisfies(currentDataVersion, m.fromVersionRange) &&
          m.shouldMigrate(state)
      );
      migrations = migrations.filter(
        m => !semver.satisfies(currentDataVersion, m.fromVersionRange)
      );
      if (!migration) {
        // We assume all migrations necessary for the current version of plugin to work are provided
        // Therefore if we don't find any, that means we are done and state is up to date
        break;
      }
      currentDataVersion = migration.toVersion;
      migrationResult = migration.migrate(migrationResult.migratedState);
    }
    return migrationResult;
  },
};
