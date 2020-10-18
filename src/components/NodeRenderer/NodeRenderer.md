### Grid

```js
import { NodeRenderer } from "./NodeRenderer";

<NodeRenderer />;
```

#### custom button with props

```js
import { NodeRenderer } from "./NodeRenderer";

<NodeRenderer
  elements={[
    { type: "span", children: "abc" },
    { type: "div", children: "DivNode" },
  ]}
/>;
```

#### custom button with props

```js
import { NodeRenderer } from "./NodeRenderer";

<NodeRenderer
  elements={[{}, {}, {}, {}]}
  elementsProps={{ children: "abc" }}
  elementsType="span"
/>;
```
