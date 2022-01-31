import { SlateValue } from '../../types/slate/SlateValue';
export const slateEmptyValue: (text?: string) => SlateValue = (text = '') => [
  {
    type: 'PARAGRAPH',
    children: [
      {
        text,
      },
    ],
  },
];
