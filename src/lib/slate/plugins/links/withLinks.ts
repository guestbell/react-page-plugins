import { Editor, Transforms } from 'slate';
import { LinkType } from './linkType';
import { ReactEditor } from 'slate-react';

export const isLinkActive = (editor: Editor) => {
  const [link] = Editor.nodes(editor, {
    match: elem => elem.type === LinkType,
  });
  return !!link;
};

export const getLinkUrl = (editor: Editor): string => {
  const [link] = Editor.nodes(editor, {
    match: elem => elem.type === LinkType,
  });
  return link && link[0] && link[0].url;
};

export const LinkCommands = {
  InsertLink: 'insert_link',
  RemoveLink: 'remove_link',
};

const unwrapLink = (editor: Editor) => {
  Transforms.unwrapNodes(editor, { match: elem => elem.type === LinkType });
};

const wrapLink = (editor: Editor, url: string) => {
  if (isLinkActive(editor)) {
    unwrapLink(editor);
  }

  const link = { type: LinkType, url, children: [] };
  Transforms.wrapNodes(editor, link, { split: true });
  // Editor.collapse(editor, { edge: 'end' });
};

export const withLinks = (editor: ReactEditor) => {
  const { exec, isInline } = editor;

  editor.isInline = element => {
    return element.type === LinkType ? true : isInline(element);
  };

  editor.exec = command => {
    if (command.type === LinkCommands.InsertLink) {
      const { url } = command;

      if (editor.selection) {
        wrapLink(editor, url);
      }

      return;
    }

    if (command.type === LinkCommands.RemoveLink) {
      if (editor.selection) {
        unwrapLink(editor);
      }

      return;
    }
    exec(command);
  };

  return editor;
};
