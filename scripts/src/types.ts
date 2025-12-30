export type ExecArgs<Options extends Record<string, string | number | boolean | undefined> = {}, Args extends any[] = (string | undefined | void)[]> = {
  args: Args;
  options: Options;
};
export type ExecMain = (args: ExecArgs) => Promise<void>;
