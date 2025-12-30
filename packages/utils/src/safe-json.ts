import { Result } from "neverthrow";

export class SafeJson {
  static stringify(data: unknown): Result<string, Error> {
    const safeStringify = Result.fromThrowable(
      (data: unknown) => JSON.stringify(data),
      () => new Error("JSON stringify error"),
    );

    return safeStringify(data);
  }

  static parse<T = unknown>(data: string): Result<T, Error> {
    const safeParse = Result.fromThrowable(
      (data: string) => JSON.parse(data) as T,
      () => new Error("JSON parse error"),
    );

    return safeParse(data);
  }
}
