import { request } from 'graphql-request';

const fetcher = (query: string, variables?: Object) =>
  request(import.meta.env.SNOWPACK_PUBLIC_API_URL, query, variables);

export default fetcher;
