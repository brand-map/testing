import type { Result } from "neverthrow";

export interface LocalStoreInterface {
  set(key: string, data: unknown): Promise<Result<void, Error>>;
  get<T>(key: string): Promise<Result<T | null, Error>>;
  remove(key: string): Promise<void>;
}
