
### export-proxy

* combine `directory export`

### Usage

If you have such file structure

```
| action
--| index.js
--| user.js
--| item.js
```

* user.js

```js
export changePwd = () => { ... }

...
```

* item.js

```js
export buyItem = () => { ... }

...
```

* index.js

```js
import createExportProxy from 'export-proxy'

import * as user from './user'
import * as item from './item'

export default createExportProxy(user, item)

```

* You can import that such as:

```js
import _ from '.../action'

_.changePwd()
_.buyItem()
```

### License
MIT
