import { request } from 'graphql-request';
import type { Variables } from 'graphql-request/dist/types';

const fetcher = <T, V extends Variables>(query: string, variables?: V): Promise<T> =>
  request(import.meta.env.VITE_PUBLIC_API_URL, query, variables);

export default fetcher;
