<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@remirror/core-utils](./core-utils.md) &gt; [findPositionOfNodeBefore](./core-utils.findpositionofnodebefore.md)

## findPositionOfNodeBefore variable

Returns position of the previous node.

```ts
const pos = findPositionOfNodeBefore(tr.selection);

```

<b>Signature:</b>

```typescript
findPositionOfNodeBefore: <GSchema extends import("prosemirror-model").Schema<string, string> = any>(value: PMSelection<GSchema> | import("prosemirror-model").ResolvedPos<GSchema> | Readonly<import("prosemirror-state").EditorState<GSchema>> | import("prosemirror-state").Transaction<GSchema>) => FindProsemirrorNodeResult<any> | undefined
```