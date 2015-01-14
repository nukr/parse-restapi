## Parse Rest Api

v0.0.4

## Installation

npm install parse-restapi

## Usage

```
var parse = require('parse-restapi')
parse.classes('Products').get();
parse.classes('Products').getAll();
parse.classes('Products').create();
parse.classes('Products').update();
parse.classes('Products').del();

parse.users().login({username: 'fakeuser', password: 'Passw0rd1'}, callback);
parse.users().requestPasswordReset(email, callback);
parse.users().getAll(callback);
parse.users().get(objectId, callback);
parse.users().verify(sessionToken, callback);
parse.users().update(userData, callback);
parse.users().del(userData, callback);
parse.users().create(userData, callback);
```

