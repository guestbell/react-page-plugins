import { Node } from 'slate';
export const slateEmptyValue: () => Node[] = () => [
  {
    type: 'paragraph',
    children: [
      {
        text: '',
        marks: [],
      },
    ],
  },
];
