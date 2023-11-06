import { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

declare module "vitest" {
  // biome-ignore lint: ignore this 'any'
  interface Assertion<T = any> extends TestingLibraryMatchers<T, any> {}
  type AsymmetricMatchersContaining = TestingLibraryMatchers;
}
