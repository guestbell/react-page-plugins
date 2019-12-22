import { SlateValue } from '../types/slate/SlateValue';

export interface MigrationResult {
  changed: boolean;
  migratedState: SlateValue;
  finalVersion: number;
}

/**
 * @class the class used to migrate plugin content between toVersion
 */
export class Migration {
  public fromVersionMin: number;
  public fromVersionMax: number;
  public toVersion: number;

  public constructor(
    toVersion: number,
    fromVersionMin: number,
    fromVersionMax: number,
    migrate: (state: SlateValue, version: number) => MigrationResult,
    shouldMigrate: (state: SlateValue, version: number) => boolean = () => true
  ) {
    if (
      !migrate ||
      toVersion === null ||
      fromVersionMin === null ||
      fromVersionMax === null
    ) {
      throw new Error(
        `A migration toVersion, fromVersionRange and migrate function must be defined and proper, got ${JSON.stringify(
          { migrate, toVersion, fromVersionMin, fromVersionMax }
        )}`
      );
    }
    this.toVersion = toVersion;
    this.migrate = migrate;
    this.fromVersionMin = fromVersionMin;
    this.fromVersionMax = fromVersionMax;
    this.shouldMigrate = shouldMigrate;
  }

  public migrate = (state: SlateValue, version: number): MigrationResult => ({
    changed: false,
    migratedState: state,
    finalVersion: version,
  });
  public shouldMigrate: (state: SlateValue, version: number) => boolean = () =>
    true;
}
