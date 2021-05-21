import { request } from 'graphql-request';

const fetcher = (query: string, variables?: Record<string, unknown>): Promise<unknown> =>
  request(import.meta.env.SNOWPACK_PUBLIC_API_URL, query, variables);

export default fetcher;
