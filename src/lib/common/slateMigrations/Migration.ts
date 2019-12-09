import { SlateValue } from '../types/slate/SlateValue';
import semver from 'semver';

export interface MigrationResult {
  changed: boolean;
  migratedState: SlateValue;
}

/**
 * @class the class used to migrate plugin content between toVersion
 */
export class Migration {
  public fromVersionRange: string;
  public toVersion: string;

  public constructor(
    toVersion: string,
    fromVersionRange: string,
    migrate: (state: SlateValue) => MigrationResult,
    shouldMigrate: (state: SlateValue) => boolean = () => true
  ) {
    if (
      !migrate ||
      !toVersion ||
      !fromVersionRange ||
      semver.valid(toVersion, true) === null ||
      semver.validRange(fromVersionRange, true) === null
    ) {
      throw new Error(
        `A migration toVersion, fromVersionRange and migrate function must be defined and proper, got ${JSON.stringify(
          { migrate, toVersion, fromVersionRange }
        )}`
      );
    }
    this.toVersion = toVersion;
    this.migrate = migrate;
    this.fromVersionRange = fromVersionRange;
    this.shouldMigrate = shouldMigrate;
  }

  public migrate = (state: SlateValue): MigrationResult => ({
    changed: false,
    migratedState: state,
  });
  public shouldMigrate: (state: SlateValue) => boolean = () => true;
}
