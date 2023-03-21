import { describe, expect, it, vi } from "vitest";
import * as firebaseApp from "firebase/app";

import initialize from "./initialize";

vi.mock("firebase/app");

describe("initialize", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("returns existing app", () => {
    const existingApp = {
      name: "ExistingApp",
      options: {},
      automaticDataCollectionEnabled: false,
    };
    vi.spyOn(firebaseApp, "getApp").mockImplementation(() => existingApp);
    vi.spyOn(firebaseApp, "getApps").mockImplementation(() => [existingApp]);
    expect(initialize()).toBe(existingApp);
  });

  it("returns freshly created app", () => {
    const freshlyCreatedApp = {
      name: "FreshlyCreatedApp",
      options: {},
      automaticDataCollectionEnabled: false,
    };
    vi.spyOn(firebaseApp, "getApps").mockImplementation(() => []);
    vi.spyOn(firebaseApp, "initializeApp").mockImplementation(
      () => freshlyCreatedApp
    );
    expect(initialize()).toBe(freshlyCreatedApp);
  });
});
