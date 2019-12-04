import { Editor } from 'slate';

export enum HeadingLevels {
  H1 = 1,
  H2 = 2,
  H3 = 3,
  H4 = 4,
  H5 = 5,
  H6 = 6,
}

export const HeadingType = 'HEADING';

export const HeadingCommands = {
  ToggleHeading: 'toggle_heading',
};

export const isHeadingActive = (editor: Editor, level: HeadingLevels) => {
  const [heading] = Editor.nodes(editor, {
    match: { type: HeadingType, level },
  });
  return !!heading;
};

export const getActiveHeadings = (editor: Editor): HeadingLevels[] => {
  const nodes = Editor.nodes(editor, {
    match: { type: HeadingType },
    mode: 'all',
  });
  let headings = [];
  for (const [node] of nodes) {
    headings.push(node.level);
  }
  headings = headings.filter(i => i);
  const unique = new Set(headings);
  return [...unique];
};

const unwrapHeading = (editor: Editor) => {
  Editor.setNodes(editor, { type: 'paragraph' });
};

const wrapHeading = (editor: Editor, level: HeadingLevels) => {
  if (isHeadingActive(editor, level)) {
    unwrapHeading(editor);
    return;
  }

  const heading = { type: HeadingType, level };
  Editor.setNodes(editor, heading);
  // Editor.collapse(editor, { edge: 'end' });
};

export interface HeadingPluginOptions {
  allowedHeadings?: HeadingLevels[];
  headingsNames?: { [key: number]: string };
}

export const defaultOptions: HeadingPluginOptions = {
  allowedHeadings: [1, 2, 3, 4, 5, 6],
  headingsNames: { 1: 'H1', 2: 'H2', 3: 'H3', 4: 'H4', 5: 'H5', 6: 'H6' },
};

export const withHeadings = (options?: HeadingPluginOptions) => (
  editor: Editor
) => {
  options = { ...defaultOptions, ...options };
  const { exec } = editor;

  editor.exec = command => {
    if (command.type === HeadingCommands.ToggleHeading) {
      const { level } = command;

      if (editor.selection) {
        wrapHeading(editor, level);
      }

      return;
    }
    exec(command);
  };

  editor.headingsConfig = options;
  return editor;
};
