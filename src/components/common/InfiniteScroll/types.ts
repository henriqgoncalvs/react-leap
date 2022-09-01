export type UseInfiniteScrollProps = {
  queryFn: (props: any) => Promise<any>;
  take: number;
  filters: Record<string, any>;
  queryKey: string;
};

export type UseInfiniteScrollReturn<T = unknown> = {
  data: T[];
  onEndReached: () => void;
  isLoading: boolean;
  isError: boolean;
};
