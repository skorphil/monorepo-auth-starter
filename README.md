- [ ] Error: Cannot overwrite `Session` model once compiled.
Reproduce: 
1. delete auth_session in landing
2. Reload web

OR

1. login in landing
2. Reload web

Fixed in adapter:
```diff
- const user = User;
- const session = Session;
```

