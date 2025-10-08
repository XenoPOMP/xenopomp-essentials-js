import type { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator(
  () => 'https://github.com/XenoPOMP/xenopomp-essentials-js',
);

export const deepTypeNamingRule = createRule({
  name: 'deep-types-naming',
  defaultOptions: [],
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Naming convention for deep types.',
    },
    messages: {
      invalidName:
        'Deep type name "{{name}}" have to follow "TypeDeep" convention.',
    },
    schema: [],
  },
  create(context) {
    function doesNotFollowConvention(name: string): boolean {
      // Word Deep not detected. Stop visitor execution.
      if (!/Deep/.test(name)) {
        return false;
      }

      // Word "Deep" is presented inside type declaration name.
      // Checking for convention.
      return !/^\w+Deep/.test(name);
    }

    return {
      'TSInterfaceDeclaration, TSTypeAliasDeclaration': function (
        node: TSESTree.TSInterfaceDeclaration | TSESTree.TSTypeAliasDeclaration,
      ) {
        const { id } = node;

        if (doesNotFollowConvention(id.name)) {
          // Report that problem is detected.
          context.report({
            messageId: 'invalidName',
            node: node.id,
          });
        }
      },
    };
  },
});
