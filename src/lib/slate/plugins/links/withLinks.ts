import { Editor } from 'slate';

export const isLinkActive = (editor: Editor) => {
  const [link] = Editor.nodes(editor, { match: { type: 'link' } });
  return !!link;
};

export const getLinkUrl = (editor: Editor): string => {
  const [link] = Editor.nodes(editor, { match: { type: 'link' } });
  return link && link[0] && link[0].url;
};

const unwrapLink = (editor: Editor) => {
  Editor.unwrapNodes(editor, { match: { type: 'link' } });
};

const wrapLink = (editor: Editor, url: string) => {
  if (isLinkActive(editor)) {
    unwrapLink(editor);
  }

  const link = { type: 'link', url, children: [] };
  Editor.wrapNodes(editor, link, { split: true });
  // Editor.collapse(editor, { edge: 'end' });
};

export const withLinks = (editor: Editor) => {
  const { exec, isInline } = editor;

  editor.isInline = element => {
    return element.type === 'link' ? true : isInline(element);
  };

  editor.exec = command => {
    if (command.type === 'insert_link') {
      const { url } = command;

      if (editor.selection) {
        wrapLink(editor, url);
      }

      return;
    }

    if (command.type === 'remove_link') {
      if (editor.selection) {
        unwrapLink(editor);
      }

      return;
    }
    exec(command);
  };

  return editor;
};
