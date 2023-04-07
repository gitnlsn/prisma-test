const { PrismaClient } = require("@prisma/client");
const sum = require("./sum");

const prismaClient = new PrismaClient();

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
