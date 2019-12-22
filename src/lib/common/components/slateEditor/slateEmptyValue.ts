import { SlateValue } from '../../types/slate/SlateValue';
export const slateEmptyValue: () => SlateValue = () => [
  {
    type: 'PARAGRAPH',
    children: [
      {
        text: '',
      },
    ],
  },
];
