import * as React from 'react';
import { Node, Element, Text } from 'slate';
import { SlateValue } from '../../types/slate/SlateValue';
import { Migrator } from '../../slateMigrations/Migrator';
import { Migration } from '../../slateMigrations/Migration';

export type TextRuleType = (text: Text) => JSX.Element;
export type NodeRuleType = (node: Node, children: JSX.Element) => JSX.Element;

export interface SlateRendererProps {
  value: SlateValue;
  textRule: TextRuleType;
  nodeRule: NodeRuleType;
  version?: number;
  migrations?: Migration[];
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
  const { value, nodeRule, textRule, migrations, version } = props;

  const migratedValue = React.useMemo(() => {
    const migrationResult = Migrator.migrateState(version, value, migrations);
    return migrationResult.migratedState;
  }, [props.value]);
  return (
    <div className="slateRenderer__container">
      {migratedValue &&
        Array.isArray(migratedValue) &&
        migratedValue.map((node, key) => (
          <RendererRecursive
            nodeRule={nodeRule}
            textRule={textRule}
            node={node}
            key={key}
          />
        ))}
      {/*<pre>{JSON.stringify(value, null, 1)}</pre>*/}
    </div>
  );
};

export default React.memo(SlateRenderer);
