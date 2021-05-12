import { jsx } from 'slate-hyperscript';
import { Editor, Text, Node as SlateNode } from 'slate';
import { ParagraphType } from '../paragraph/withParagraph';
import { ListTypes } from '../lists/listTypes';
import { HeadingType } from '../heading/headingType';
import { QuoteType } from '../quote/quoteType';
import { LinkType } from '../links/linkType';
import { EmphasizeTypes } from '../emphasize/emphasizeTypes';

const ELEMENT_TAGS = {
  A: (el: Element) => ({ type: LinkType, url: el.getAttribute('href') }),
  BLOCKQUOTE: () => ({ type: QuoteType }),
  H1: () => ({ type: HeadingType, level: 1 }),
  H2: () => ({ type: HeadingType, level: 2 }),
  H3: () => ({ type: HeadingType, level: 3 }),
  H4: () => ({ type: HeadingType, level: 3 }),
  H5: () => ({ type: HeadingType, level: 3 }),
  H6: () => ({ type: HeadingType, level: 3 }),
  LI: () => ({ type: ListTypes.LI }),
  OL: () => ({ type: ListTypes.OL }),
  P: () => ({ type: ParagraphType }),
  UL: () => ({ type: ListTypes.UL }),
};

const MARK_TAGS = {
  EM: () => ({ [EmphasizeTypes.Italic]: true }),
  I: () => ({ [EmphasizeTypes.Italic]: true }),
  STRONG: () => ({ [EmphasizeTypes.Bold]: true }),
  U: () => ({ [EmphasizeTypes.Underline]: true }),
};

const checkEmpty = potentialString =>
  !(
    potentialString &&
    typeof potentialString === 'string' &&
    potentialString.length > 0 &&
    !/^(\r\n|\r|\n)$/.test(potentialString)
  );

export const deserialize = (el: Node) => {
  if (el.nodeType === 3) {
    return el.textContent && el.textContent.replace('\n', '');
  } else if (el.nodeType !== 1) {
    return null;
  } else if (el.nodeName === 'BR') {
    return '\n';
  }

  const { nodeName } = el;
  const parent = el;

  const children: unknown[] = Array.from(parent.childNodes).map(deserialize);

  if (el.nodeName === 'BODY') {
    if (!checkEmpty(children[0])) {
      children.slice(1);
    }
    if (checkEmpty(children[children.length - 1])) {
      children.pop();
    }
    return jsx('fragment', {}, children);
  }

  if (ELEMENT_TAGS[nodeName]) {
    const attrs = ELEMENT_TAGS[nodeName](el);
    return jsx('element', attrs, children);
  }

  if (MARK_TAGS[nodeName]) {
    const attrs = MARK_TAGS[nodeName](el);
    return jsx('text', attrs, children);
  }

  return children;
};

export const imageType = 'image';

export interface HtmlEditor {}

export const withHtml = (editor: Editor) => {
  const { isInline, isVoid, insertData } = editor;

  editor.isInline = element => {
    return element.type === LinkType ? true : isInline(element);
  };

  editor.isVoid = element => {
    return element.type === 'image' ? true : isVoid(element);
  };
  editor.insertData = data => {
    const html = data.getData('text/html');

    if (html) {
      const parsed = new DOMParser().parseFromString(html, 'text/html');
      let fragment = (deserialize(parsed.body) as unknown) as SlateNode[];
      const selection = editor.selection;

      const selectedNode = Editor.node(editor, selection)[0] as Text;
      const selectedNodeEmpty =
        selectedNode &&
        selectedNode.text !== undefined &&
        selectedNode.text.length === 0
          ? true
          : false;
      if (!selectedNodeEmpty && fragment.length > 1) {
        fragment = fragment.slice(1);
      }
      Editor.insertFragment(editor, fragment);
      if (selectedNodeEmpty && fragment.length > 1) {
        editor.selection = selection;
        editor.deleteFragment();
      }
      return;
    }
    insertData(data);
  };
  return editor;
};
