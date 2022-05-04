export type UseInfinityScrollProps = {
  queryFn: (props: any) => Promise<any>;
  take: number;
};

export type UseInfinityScrollReturn<T = unknown> = {
  data: T[];
};
