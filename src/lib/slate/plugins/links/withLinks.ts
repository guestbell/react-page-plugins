import { Editor, Transforms, Element } from 'slate';
import { omitFirstArg } from '../../types/omitFirstArg';
import { LinkType } from './linkType';

export const isLinkActive = (editor: Editor) => {
  const [link] = Editor.nodes(editor, {
    match: (elem: Element) => elem.type === LinkType,
  });
  return !!link;
};

export const getLinkUrl = (editor: Editor): string => {
  const [link] = Editor.nodes<Element>(editor, {
    match: (elem: Element) => elem.type === LinkType,
  });
  return link && link[0] && link[0].url;
};

const unwrapLink = (editor: Editor) => {
  Transforms.unwrapNodes(editor, {
    match: (elem: Element) => elem.type === LinkType,
  });
};

const wrapLink = (editor: Editor, url: string) => {
  if (isLinkActive(editor)) {
    unwrapLink(editor);
  }

  const link: Element = { type: LinkType, url, children: [] };
  Transforms.wrapNodes(editor, link, { split: true });
  // Editor.collapse(editor, { edge: 'end' });
};

export interface LinksEditor {
  unwrapLink: omitFirstArg<typeof unwrapLink>;
  wrapLink: omitFirstArg<typeof wrapLink>;
}

export const withLinks = (editor: Editor) => {
  const { isInline } = editor;

  editor.isInline = element => {
    return element.type === LinkType ? true : isInline(element);
  };
  editor.wrapLink = wrapLink.bind(null, editor);
  editor.unwrapLink = unwrapLink.bind(null, editor);
  return editor;
};
