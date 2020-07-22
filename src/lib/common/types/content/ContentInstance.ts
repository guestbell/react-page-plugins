import { SlateValue } from '../slate/SlateValue';
import { EditableType } from '@react-page/core';

export interface ContentInstance {
  id: number;
  version: number;
  lang: string;
  data: string | SlateValue | EditableType;
  useDefault: boolean;
  isValid: boolean;
}
