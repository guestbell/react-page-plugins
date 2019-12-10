import { SlateValue } from '../../types/slate/SlateValue';
export const slateEmptyValue: () => SlateValue = () => ({
  version: '0.0.3',
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
