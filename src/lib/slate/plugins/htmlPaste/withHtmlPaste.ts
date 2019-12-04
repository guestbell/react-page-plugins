import { jsx } from 'slate-hyperscript';
import { Editor } from 'slate';

const ELEMENT_TAGS = {
  A: el => ({ type: 'link', url: el.getAttribute('href') }),
  BLOCKQUOTE: () => ({ type: 'quote' }),
  H1: () => ({ type: 'heading', level: 1 }),
  H2: () => ({ type: 'heading', level: 2 }),
  H3: () => ({ type: 'heading', level: 3 }),
  H4: () => ({ type: 'heading', level: 3 }),
  H5: () => ({ type: 'heading', level: 3 }),
  H6: () => ({ type: 'heading', level: 3 }),
  LI: () => ({ type: 'list-item' }),
  OL: () => ({ type: 'numbered-list' }),
  P: () => ({ type: 'paragraph' }),
  UL: () => ({ type: 'bulleted-list' }),
};

const MARK_TAGS = {
  CODE: () => ({ type: 'code' }),
  EM: () => ({ type: 'italic' }),
  I: () => ({ type: 'italic' }),
  STRONG: () => ({ type: 'bold' }),
  U: () => ({ type: 'underline' }),
};

export const deserialize = (el: Node) => {
  if (el.nodeType === 3) {
    return el.textContent;
  } else if (el.nodeType !== 1) {
    return null;
  } else if (el.nodeName === 'BR') {
    return '\n';
  }

  const { nodeName } = el;
  let parent = el;

  const children = Array.from(parent.childNodes).map(deserialize);

  if (el.nodeName === 'BODY') {
    return jsx('fragment', {}, children);
  }

  if (ELEMENT_TAGS[nodeName]) {
    const attrs = ELEMENT_TAGS[nodeName](el);
    return jsx('element', attrs, children);
  }

  if (MARK_TAGS[nodeName]) {
    const attrs = MARK_TAGS[nodeName](el);
    return jsx('mark', attrs, children);
  }

  return children;
};

export const withHtml = (editor: Editor) => {
  const { exec, isInline, isVoid } = editor;

  editor.isInline = element => {
    return element.type === 'link' ? true : isInline(element);
  };

  editor.isVoid = element => {
    return element.type === 'image' ? true : isVoid(element);
  };

  editor.exec = command => {
    if (command.type === 'insert_data') {
      const { data } = command;
      const html = data.getData('text/html');

      if (html) {
        const parsed = new DOMParser().parseFromString(html, 'text/html');
        const fragment = deserialize(parsed.body);
        Editor.insertFragment(editor, fragment);
        return;
      }
    }

    exec(command);
  };

  return editor;
};
