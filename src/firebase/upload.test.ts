import { describe, expect, it, vi } from "vitest";
import * as firebaseStorage from "firebase/storage";
import { FullMetadata, StorageReference } from "firebase/storage";

import upload from "./upload";

vi.mock("firebase/storage");

describe("upload", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("returns an empty string", async () => {
    vi.spyOn(firebaseStorage, "uploadBytes").mockRejectedValue(null);
    vi.spyOn(firebaseStorage, "getDownloadURL").mockRejectedValue(null);
    expect(await upload(new Blob())).toBe("");
  });

  it("returns the uploaded file url", async () => {
    vi.spyOn(firebaseStorage, "uploadBytes").mockResolvedValue({
      ref: {} as StorageReference,
      metadata: {} as FullMetadata,
    });
    vi.spyOn(firebaseStorage, "getDownloadURL").mockResolvedValue("/image.png");
    expect(await upload(new Blob())).toBe("/image.png");
  });
});
