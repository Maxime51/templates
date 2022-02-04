import { aFunction } from "../src";

test("a description of the test", () => {
  expect.assertions(1);

  expect(aFunction("a string")).toEqual("a string");
});
