import { SlateValue } from '../../types/slate/SlateValue';
export const slateEmptyValue: () => SlateValue = () => ({
  version: '0.0.1',
  data: [
    {
      type: 'PARAGRAPH',
      children: [
        {
          text: '',
        },
      ],
    },
  ],
});
