import sum from "../sum";
import bigString from "../bigString.json";

test("adds 1 + 2 to equal 3", () => {
  let newArray = [];
  for (let i = 0; i < 10000000; i++) {
    newArray.push(bigString);
  }
  expect(sum(1, 2)).toBe(3);
});
