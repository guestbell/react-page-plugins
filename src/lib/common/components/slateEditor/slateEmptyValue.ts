import { Node } from 'slate';
export const slateEmptyValue: () => Node[] = () => [
  {
    type: 'PARAGRAPH',
    children: [
      {
        text: '',
      },
    ],
  },
];
