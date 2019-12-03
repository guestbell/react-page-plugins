import { Editor } from 'slate';

export enum ListTypes {
  UL = 'ul',
  OL = 'ol',
  LI = 'li',
}

export const isListActive = (editor: Editor, type: ListTypes) => {
  const [list] = Editor.nodes(editor, { match: { type } });
  return !!list;
};

export const withLists = (editor: Editor) => {
  const { exec } = editor;

  editor.exec = command => {
    if (command.type === 'toggle_list') {
      const {
        list: { type },
      } = command;
      const isActive = isListActive(editor, type);
      const isListType = type === ListTypes.OL || type === ListTypes.UL;
      Editor.unwrapNodes(editor, {
        match: { type: ListTypes.UL },
        split: true,
      });
      Editor.unwrapNodes(editor, {
        match: { type: ListTypes.OL },
        split: true,
      });
      const newType = isActive ? null : isListType ? ListTypes.LI : type;
      Editor.setNodes(editor, { type: newType });

      if (!isActive && isListType) {
        Editor.wrapNodes(editor, { type, children: [] });
      }

      return;
    }
    exec(command);
  };

  return editor;
};
