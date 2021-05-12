import * as React from 'react';
import { RenderElementProps, RenderLeafProps, useSlate } from 'slate-react';
import { addAlignmentStyles } from '../../../slate/plugins/alignment';
import { addColorStyles } from '../../../slate/plugins/color';
import { Emphasize } from '../../../slate/plugins/emphasize/Emphasize';
import { addFontSizeStyles } from '../../../slate/plugins/fontSize';
import { Heading } from '../../../slate/plugins/heading';
import { Link } from '../../../slate/plugins/links';
import { List } from '../../../slate/plugins/lists';
import { Paragraph } from '../../../slate/plugins/paragraph/Paragraph';
import { Quote } from '../../../slate/plugins/quote';

export const renderElement: React.FC<RenderElementProps> = props => {
  const { element } = props;
  const editor = useSlate();
  const comp =
    Link(props) ||
    Heading(props) ||
    List(props) ||
    Quote(props) ||
    Paragraph(props);
  return addFontSizeStyles(
    editor.fontSizeConfig,
    element,
    addAlignmentStyles(element, comp)
  );
};

export const renderLeaf: React.FC<RenderLeafProps> = props => {
  const { attributes, leaf } = props;
  const children = <span {...attributes}>{Emphasize(props)}</span>;
  return addColorStyles(leaf, children);
};
