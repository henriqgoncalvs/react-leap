export type UseInfinityScrollProps = {
  queryFn: (props: any) => Promise<any>;
  take: number;
  filters: Record<string, any>;
  queryKey: string;
};

export type UseInfinityScrollReturn<T = unknown> = {
  data: T[];
  onEndReached: () => void;
  isLoading: boolean;
};
