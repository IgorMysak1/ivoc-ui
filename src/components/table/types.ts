export interface ToolbarConfig<TData> {
  input: {
    placeholder: string;
    columnToFilter: Exclude<keyof TData, "id">;
  };
}
