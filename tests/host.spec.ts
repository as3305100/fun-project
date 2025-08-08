import { getHostName } from "../src/utils/version";

describe("Host name", () => {
  it("should return the correct hostname", () => {
    expect(getHostName()).toBeTruthy();
  });
});
