const fs = require("fs");
const path = require("path");

const FILE_PREFIX = "user";
const FILE_SUFIX = ".test.js";
const DIR_NAME = "withPrismaActionsWithoutTypescript";
const TOTAL_TO_CREATE = 100;

function create() {
  const filename = FILE_PREFIX + FILE_SUFIX;
  const testsDir = path.join(__dirname, DIR_NAME);
  const fileCount = fs
    .readdirSync(testsDir)
    .filter((file) => file.startsWith(FILE_PREFIX)).length;
  const newFilename = `${FILE_PREFIX}${fileCount + 1}${FILE_SUFIX}`;
  const sourceFile = path.join(testsDir, filename);
  const destinationFile = path.join(testsDir, newFilename);

  fs.copyFileSync(sourceFile, destinationFile);
  console.log(`File '${filename}' copied to '${destinationFile}'.`);
}

let total = TOTAL_TO_CREATE;
while (total--) {
  create();
}
