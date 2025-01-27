---
to: src/utils/index.ts
inject: true
append: true
skip_if: <%= h.changeCase.camelCase(name) %>
---
export * from './<%= h.changeCase.camelCase(name) %>';
