import * as React from 'react';
import { Node, Element, Text } from 'slate';

export type TextRuleType = (text: Text) => JSX.Element;
export type NodeRuleType = (node: Node, children: JSX.Element) => JSX.Element;

export interface SlateRendererProps {
  value: Node[];
  textRule: TextRuleType;
  nodeRule: NodeRuleType;
}

export interface RendererRecursiveProps {
  node: Node;
  textRule: TextRuleType;
  nodeRule: NodeRuleType;
}

const RendererRecursive: React.FC<RendererRecursiveProps> = ({
  node,
  textRule,
  nodeRule,
}) => {
  if (Text.isText(node)) {
    return textRule(node);
  }
  if (Element.isElement(node)) {
    return nodeRule(
      node,
      node.children && (
        <>
          {node.children.map((n, key) => (
            <RendererRecursive
              nodeRule={nodeRule}
              textRule={textRule}
              node={n}
              key={key}
            />
          ))}
        </>
      )
    );
  }
};

const SlateRenderer: React.FC<SlateRendererProps> = props => {
  const { value, nodeRule, textRule } = props;
  return (
    <>
      {value &&
        value.map((node, key) => (
          <RendererRecursive
            nodeRule={nodeRule}
            textRule={textRule}
            node={node}
            key={key}
          />
        ))}
      {/*<pre>{JSON.stringify(value, null, 1)}</pre>*/}
    </>
  );
};

export default SlateRenderer;
