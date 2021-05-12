// This example is for an Editor with `ReactEditor` and `HistoryEditor`
import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';
import { HistoryEditor } from 'slate-history';
import { EmphasizeEditor } from '../slate/plugins/emphasize/withEmphasize';
import { LinksEditor, LinkType } from '../slate/plugins/links';
import { ColorEditor, ColorType } from '../slate/plugins/color';
import { RGBColor } from '@react-page/editor';
import { AlignmentEditor, AlignmentTypes } from '../slate/plugins/alignment';
import {
  HeadingLevels,
  HeadingsEditor,
  HeadingType,
} from '../slate/plugins/heading';
import { ParagraphType } from '../slate/plugins/paragraph/withParagraph';
import { FontSizeEditor } from '../slate/plugins/fontSize';
import { ListsEditor, ListTypes } from '../slate/plugins/lists';
import { QuotesEditor, QuoteType } from '../slate/plugins/quote';
import { imageType } from '../slate/plugins/htmlPaste/withHtmlPaste';

type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  color?: RGBColor;
};

export type ElementType =
  | typeof ParagraphType
  | typeof LinkType
  | typeof ColorType
  | typeof HeadingType
  | ListTypes
  | typeof QuoteType
  | typeof imageType;

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor &
      ReactEditor &
      HistoryEditor &
      EmphasizeEditor &
      LinksEditor &
      ColorEditor &
      AlignmentEditor &
      HeadingsEditor &
      FontSizeEditor &
      ListsEditor &
      QuotesEditor;
    Element: {
      type: ElementType;
      url?: string;
      alignment?: AlignmentTypes;
      children?: CustomText[];
      level?: HeadingLevels;
      fontSize?: number;
    };
    Text: CustomText;
  }
}
