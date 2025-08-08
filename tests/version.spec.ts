import { getVersion } from "../src/utils/version";

describe("Version", () => {
  it("it should return the correct application version", () => {
    expect(getVersion()).toBeTruthy();
  });
});
