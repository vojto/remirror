import { ExtensionFactory } from '@remirror/core';

/**
 * The default text passed into the prosemirror schema.
 *
 * @core
 */
export const TextExtension = ExtensionFactory.node({
  name: 'text',
  createNodeSpec() {
    return { group: 'inline' };
  },
});
