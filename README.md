## Parse Rest Api

## Installation

npm install node-parse-rest

## Usage

```
var parse = require('node-parse-rest')
parse.classes('Products').get();
parse.classes('Products').getAll();
parse.classes('Products').create();
parse.classes('Products').update();
parse.classes('Products').del();

parse.users().login(username, password);
parse.users().requestPasswordReset(email);
```

