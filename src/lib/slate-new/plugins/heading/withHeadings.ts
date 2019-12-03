import { Editor } from 'slate';

export enum HeadingTypes {
  H1 = 1,
  H2 = 2,
  H3 = 3,
  H4 = 4,
  H5 = 5,
  H6 = 6,
}

export const isHeadingActive = (editor: Editor, level: HeadingTypes) => {
  const [heading] = Editor.nodes(editor, { match: { type: 'heading', level } });
  return !!heading;
};

const unwrapHeading = (editor: Editor) => {
  Editor.setNodes(editor, { type: 'p' });
};

const wrapHeading = (editor: Editor, level: HeadingTypes) => {
  if (isHeadingActive(editor, level)) {
    unwrapHeading(editor);
    return;
  }

  const heading = { type: 'heading', level };
  Editor.setNodes(editor, heading);
  // Editor.collapse(editor, { edge: 'end' });
};

export const withHeadings = (editor: Editor) => {
  const { exec } = editor;

  editor.exec = command => {
    if (command.type === 'toggle_heading') {
      const { level } = command;

      if (editor.selection) {
        wrapHeading(editor, level);
      }

      return;
    }
    exec(command);
  };

  return editor;
};
