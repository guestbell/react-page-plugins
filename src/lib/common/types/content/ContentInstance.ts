import { SlateValue } from '../slate/SlateValue';
import { ValueWithLegacy } from '@react-page/editor';

export interface ContentInstance {
  id: number;
  version: number;
  lang: string;
  data: string | SlateValue | ValueWithLegacy;
  useDefault: boolean;
  isValid: boolean;
}
