import { vi } from "vitest";

import select from "./select";

describe("select", () => {
  it("returns a correct array with a property `id` and the whole properties returned by `data()`", () => {
    expect(
      select({
        id: "99",
        exists: () => true,
        data: () => ({ color: "pink" }),
      })
    ).toMatchObject({ id: "99", color: "pink" });
  });
  it("returns a null if snapshot does not exist", () => {
    expect(
      select({
        id: "99",
        exists: () => false,
        data: vi.fn(),
      })
    ).toMatchObject({});
  });
});
