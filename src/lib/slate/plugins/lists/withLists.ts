import { Editor, Transforms } from 'slate';
import { ListTypes } from './listTypes';
import { ReactEditor } from 'slate-react';

export const ListCommands = {
  ToggleList: 'toggle_list',
};

export const isListActive = (editor: Editor, type: ListTypes) => {
  const [list] = Editor.nodes(editor, { match: elem => elem.type === type });
  return !!list;
};

export const withLists = (editor: ReactEditor) => {
  const { exec } = editor;

  editor.exec = command => {
    if (command.type === ListCommands.ToggleList) {
      const {
        list: { type },
      } = command;
      const isActive = isListActive(editor, type);
      const isListType = type === ListTypes.OL || type === ListTypes.UL;
      Transforms.unwrapNodes(editor, {
        match: elem => elem.type === ListTypes.UL,
        split: true,
      });
      Transforms.unwrapNodes(editor, {
        match: elem => elem.type === ListTypes.OL,
        split: true,
      });
      const newType = isActive ? null : isListType ? ListTypes.LI : type;
      Transforms.setNodes(editor, { type: newType });

      if (!isActive && isListType) {
        Transforms.wrapNodes(editor, { type, children: [] });
      }

      return;
    }
    exec(command);
  };

  return editor;
};
