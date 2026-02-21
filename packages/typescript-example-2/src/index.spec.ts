import { describe, it, expect } from "vitest";
import { world } from "./index.js";

describe("World", () => {
  it("should return world", () => {
    expect(world()).toBe("World");
  });
});
