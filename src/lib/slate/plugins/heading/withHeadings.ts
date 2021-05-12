import { Editor, Transforms, Element } from 'slate';
import { HeadingLevels } from './headingLevels';
import { HeadingType } from './headingType';
import { ParagraphType } from '../paragraph/withParagraph';
import { omitFirstArg } from '../../types/omitFirstArg';

export const isHeadingActive = (editor: Editor, level: HeadingLevels) => {
  const [heading] = Editor.nodes(editor, {
    match: (elem: Element) => elem.type === HeadingType && elem.level === level,
  });
  return !!heading;
};

export const getActiveHeadings = (editor: Editor): HeadingLevels[] => {
  const nodes = Editor.nodes<Element>(editor, {
    match: (elem: Element) => elem.type === HeadingType,
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
  Transforms.setNodes(editor, { type: ParagraphType, level: null });
};

const wrapHeading = (editor: Editor, level: HeadingLevels) => {
  if (isHeadingActive(editor, level)) {
    unwrapHeading(editor);
    return;
  }

  const heading: Element = { type: HeadingType, level };
  Transforms.setNodes(editor, heading);
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

export interface HeadingsEditor {
  headingsConfig: HeadingPluginOptions;
  wrapHeading: omitFirstArg<typeof wrapHeading>;
  unwrapHeading: omitFirstArg<typeof unwrapHeading>;
  isHeadingActive: omitFirstArg<typeof isHeadingActive>;
  getActiveHeadings: omitFirstArg<typeof getActiveHeadings>;
}

export const withHeadings = (options?: HeadingPluginOptions) => (
  editor: Editor
) => {
  options = { ...defaultOptions, ...options };

  editor.wrapHeading = wrapHeading.bind(null, editor);
  editor.unwrapHeading = unwrapHeading.bind(null, editor);
  editor.isHeadingActive = isHeadingActive.bind(null, editor);
  editor.getActiveHeadings = getActiveHeadings.bind(null, editor);

  editor.headingsConfig = options;
  return editor;
};
