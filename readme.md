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

No issues fould with `CustomGC`,

```sh
nelson@latitude 01:08:00 ~/d/prismatest (prisma-4.8.1)> bash scripts/test.sh

added 8 packages, removed 5 packages, changed 5 packages, and audited 292 packages in 8s

31 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
[+] Running 2/2
 ⠿ Network prismatest_docker-net    Created                                                                                                      0.0s
 ⠿ Container prismatest-postgres-1  Started                                                                                                      0.4s
Prisma schema loaded from schema.prisma
Datasource "db": PostgreSQL database "test-db", schema "public" at "localhost:5432"

Applying migration `20230410035344_initial_migration`

The following migration(s) have been applied:

migrations/
  └─ 20230410035344_initial_migration/
    └─ migration.sql

Your database is now in sync with your schema.

✔ Generated Prisma Client (4.8.1 | library) to ./node_modules/@prisma/client in 135ms


┌─────────────────────────────────────────────────────────┐
│  Update available 4.8.1 -> 4.12.0                       │
│  Run the following to update                            │
│    npm i --save-dev prisma@latest                       │
│    npm i @prisma/client@latest                          │
└─────────────────────────────────────────────────────────┘
 PASS  ./sum.test.ts
 PASS  ./sum.test.js

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.834 s
Ran all test suites matching /sum.js|sum.test.js|sum.test.ts|sum.ts/i.
 PASS  ./user.test.ts
 PASS  ./sum.test.ts
 PASS  ./sum.test.js

Test Suites: 3 passed, 3 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        2.148 s, estimated 4 s
Ran all test suites.
[+] Running 2/2
 ⠿ Container prismatest-postgres-1  Removed                                                                                                      0.3s
 ⠿ Network prismatest_docker-net    Removed                                                                                                      0.1s
nelson@latitude 01:08:37 ~/d/prismatest (prisma-4.8.1)>

```
