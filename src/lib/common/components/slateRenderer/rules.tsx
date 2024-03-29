import * as React from 'react';
import { QuoteType } from '../../../slate/plugins/quote/quoteType';
import { HeadingType } from '../../../slate/plugins/heading/headingType';
import { ParagraphType } from '../../../slate/plugins/paragraph/withParagraph';
import { ListTypes } from '../../../slate/plugins/lists/listTypes';
import { EmphasizeTypes } from '../../../slate/plugins/emphasize/emphasizeTypes';
import { Text, Element } from 'slate';
import { addAlignmentStyles } from '../../../slate/plugins/alignment/addAlignmentStyles';
import { addFontSizeStyles } from '../../../slate/plugins/fontSize/addFontSizeStyles';
import { defaultConfig } from '../../../slate/plugins/fontSize/fontSizeConfig';
import { LinkType } from '../../../slate/plugins/links/linkType';
import { ColorType } from '../../../slate/plugins/color/colorType';
import { addColorStyles } from '../../../slate/plugins/color';
import { Link as RouterLink } from 'react-router-dom';
import { getPathname, isSamePageUrl } from '../../utils/urlUtil';

const BLOCK_TAGS = {
  a: LinkType,
  blockquote: QuoteType,
  h: HeadingType,
  color: ColorType,
  p: ParagraphType,
  ul: ListTypes.UL,
  ol: ListTypes.OL,
  li: ListTypes.LI,
};

// Add a dictionary of mark tags.
const MARK_TAGS = {
  em: EmphasizeTypes.Italic,
  strong: EmphasizeTypes.Bold,
  u: EmphasizeTypes.Underline,
};

const TEXT_RULE = (text: Text) => {
  let children: JSX.Element;
  let isWrapped = false;
  if (text[MARK_TAGS.em]) {
    children = <i>{children ?? text.text}</i>;
    isWrapped = true;
  }
  if (text[MARK_TAGS.strong]) {
    children = <b>{children ?? text.text}</b>;
    isWrapped = true;
  }
  if (text[MARK_TAGS.u]) {
    children = <u>{children ?? text.text}</u>;
    isWrapped = true;
  }
  if (!isWrapped) {
    children = <span>{text.text}</span>;
  }
  return addColorStyles(text, children);
};

const BLOCK_RULE = (node: Element, children: JSX.Element) => {
  let comp: JSX.Element;
  switch (node.type) {
    case BLOCK_TAGS.a:
      if (isSamePageUrl(node.url)) {
        return <RouterLink to={getPathname(node.url)}>{children}</RouterLink>;
      } else {
        comp = <a href={node.url as string}>{children}</a>;
      }
      break;
    case BLOCK_TAGS.p:
      comp = <p>{children}</p>;
      break;
    case BLOCK_TAGS.p:
      comp = <p>{children}</p>;
      break;
    case BLOCK_TAGS.h:
      const level = node.level;
      if (level === 2) {
        comp = <h2>{children}</h2>;
      } else if (level === 3) {
        comp = <h3>{children}</h3>;
      } else if (level === 4) {
        comp = <h4>{children}</h4>;
      } else if (level === 5) {
        comp = <h5>{children}</h5>;
      } else if (level === 6) {
        comp = <h6>{children}</h6>;
      } else {
        comp = <h1>{children}</h1>;
      }
      break;
    case BLOCK_TAGS.blockquote:
      comp = <blockquote>{children}</blockquote>;
      break;
    case BLOCK_TAGS.ol:
      comp = <ol>{children}</ol>;
      break;
    case BLOCK_TAGS.ul:
      comp = <ul>{children}</ul>;
      break;
    case BLOCK_TAGS.li:
      comp = <li>{children}</li>;
      break;
    default:
      comp = <p>{children}</p>;
      break;
  }
  return addFontSizeStyles(defaultConfig, node, addAlignmentStyles(node, comp));
};

const rules = {
  textRule: TEXT_RULE,
  nodeRule: BLOCK_RULE,
};

export default rules;
