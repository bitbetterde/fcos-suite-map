import { request } from 'graphql-request';
import React from 'react';
import { SWRConfig } from 'swr';
import { useStore } from '../hooks';

interface Props {}

const SwrWrapper: React.FC<Props> = ({ children }) => {
  const setError = useStore((state) => state.setError);
  return (
    <SWRConfig
      value={{
        fetcher: (query: string) => request(import.meta.env.SNOWPACK_PUBLIC_API_URL, query),
        onError: (error) => {
          setError({
            title: 'API nicht erreichbar',
            message: 'Kann die API nicht erreichen. Bitte später erneut probieren.',
            icon: 'alert',
          });
          console.error('Error while fetching', error);
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SwrWrapper;
