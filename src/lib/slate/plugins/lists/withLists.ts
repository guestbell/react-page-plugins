import { Editor, Transforms, Element } from 'slate';
import { ListTypes } from './listTypes';
import { omitFirstArg } from '../../types/omitFirstArg';

export const isListActive = (editor: Editor, type: ListTypes) => {
  const [list] = Editor.nodes(editor, {
    match: (elem: Element) => elem.type === type,
  });
  return !!list;
};

export const toggleList = (editor: Editor, type: ListTypes) => {
  const isActive = isListActive(editor, type);
  const isListType = type === ListTypes.OL || type === ListTypes.UL;
  Transforms.unwrapNodes(editor, {
    match: (elem: Element) => elem.type === ListTypes.UL,
    split: true,
  });
  Transforms.unwrapNodes(editor, {
    match: (elem: Element) => elem.type === ListTypes.OL,
    split: true,
  });
  const newType = isActive ? null : isListType ? ListTypes.LI : type;
  Transforms.setNodes(editor, { type: newType });

  if (!isActive && isListType) {
    Transforms.wrapNodes(editor, { type, children: [] });
  }
};

export interface ListsEditor {
  toggleList: omitFirstArg<typeof toggleList>;
  isListActive: omitFirstArg<typeof isListActive>;
}

export const withLists = (editor: Editor) => {
  editor.toggleList = toggleList.bind(null, editor);
  editor.isListActive = isListActive.bind(null, editor);
  return editor;
};
