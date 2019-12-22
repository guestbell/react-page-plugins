import { SlateValue } from '../types/slate/SlateValue';
import { Migration, MigrationResult } from './Migration';

export const Migrator = {
  migrateState(
    version: number,
    state: SlateValue,
    migrations?: Migration[]
  ): MigrationResult {
    let migrationResult: MigrationResult = {
      migratedState: state,
      changed: false,
      finalVersion: version,
    };
    if (!migrations) {
      return migrationResult;
    }
    if (!state) {
      console.warn('State not defined when attempting to migrate.');
      return migrationResult;
    }
    let currentDataVersion = version || 0;
    while (true) {
      const migration = migrations.find(
        m =>
          currentDataVersion <= m.fromVersionMax &&
          currentDataVersion >= m.fromVersionMin &&
          m.shouldMigrate(state, currentDataVersion)
      );
      migrations = migrations.filter(
        m =>
          !(
            currentDataVersion <= m.fromVersionMax &&
            currentDataVersion >= m.fromVersionMin
          )
      );
      if (!migration) {
        // We assume all migrations necessary for the current version of plugin to work are provided
        // Therefore if we don't find any, that means we are done and state is up to date
        break;
      }
      currentDataVersion = migration.toVersion;
      migrationResult = migration.migrate(
        migrationResult.migratedState,
        currentDataVersion
      );
    }
    return migrationResult;
  },
};
