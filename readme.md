# Requirements

- docker (optional)
- node / npm

# Reproduction

With script

```sh
bash scripts/test.sh
```

Without Script

```sh
npm i
# Have some postgres instance running this connection:
# postgresql://test-user:test-pass@localhost:5432/test-db?schema=public
npx prisma migrate dev
npx jest --runInBand --detectOpenHandles sum.test.*
npx jest --runInBand --detectOpenHandles user.test.ts
```

# Results

Issue found with `CustomGC`,

```sh
nelson@latitude 01:18:20 ~/d/prismatest (prisma-4.12.0)> bash scripts/test.sh

added 291 packages, and audited 292 packages in 4s

31 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
[+] Running 2/2
 ⠿ Network prismatest_docker-net    Created                                                                                                      0.0s
 ⠿ Container prismatest-postgres-1  Started                                                                                                      0.6s
Prisma schema loaded from schema.prisma
Datasource "db": PostgreSQL database "test-db", schema "public" at "localhost:5432"

Applying migration `20230410035344_initial_migration`

The following migration(s) have been applied:

migrations/
  └─ 20230410035344_initial_migration/
    └─ migration.sql

Your database is now in sync with your schema.

✔ Generated Prisma Client (4.12.0 | library) to ./node_modules/@prisma/client in 83ms


 PASS  ./sum.test.js
 PASS  ./sum.test.ts

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.806 s
Ran all test suites matching /sum.js|sum.test.js|sum.test.ts|sum.ts/i.
 PASS  ./user.test.ts
 PASS  ./sum.test.ts
 PASS  ./sum.test.js

Test Suites: 3 passed, 3 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        2.093 s, estimated 4 s
Ran all test suites.

Jest has detected the following 1 open handle potentially keeping Jest from exiting:

  ●  CustomGC

      at Runtime._loadModule (node_modules/jest-runtime/build/index.js:1009:29)
      at load (node_modules/@prisma/client/runtime/library.js:73:326)
      at node_modules/@prisma/client/runtime/library.js:73:759
      at runInChildSpan (node_modules/@prisma/client/runtime/library.js:70:25817)
      at qr.loadLibrary (node_modules/@prisma/client/runtime/library.js:73:677)
      at zt.loadEngine (node_modules/@prisma/client/runtime/library.js:101:557)
      at zt.instantiateLibrary (node_modules/@prisma/client/runtime/library.js:100:1477)
      at zt.start (node_modules/@prisma/client/runtime/library.js:101:2081)
      at zt.getDmmf (node_modules/@prisma/client/runtime/library.js:101:3489)
      at node_modules/@prisma/client/runtime/library.js:177:2864
      at node_modules/@prisma/client/runtime/library.js:177:3294
      at t._executeRequest (node_modules/@prisma/client/runtime/library.js:177:10748)
      at t._request (node_modules/@prisma/client/runtime/library.js:177:10477)

[+] Running 2/2
 ⠿ Container prismatest-postgres-1  Removed                                                                                                      0.4s
 ⠿ Network prismatest_docker-net    Removed                                                                                                      0.1s
nelson@latitude 01:18:38 ~/d/prismatest (prisma-4.12.0)> 

```
