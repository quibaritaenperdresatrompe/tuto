import { vi } from "vitest";

import buildConfig from "./buildConfig";

describe("buildConfig", () => {
  it("returns an object with a property `apiKey` set to `1618033`", () => {
    vi.stubEnv("VITE_FIREBASE_API_KEY", "16180339");
    expect(buildConfig(["apiKey"], { prefix: "FIREBASE" })).toMatchObject({
      apiKey: "16180339",
    });
  });
});
