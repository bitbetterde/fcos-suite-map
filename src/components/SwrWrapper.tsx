import React from 'react';
import { SWRConfig } from 'swr';
import { useStore } from '../hooks';
import fetcher from '../util/fetcher';

interface Props {}

const SwrWrapper: React.FC<Props> = ({ children }) => {
  const setError = useStore((state) => state.setError);
  return (
    <SWRConfig
      value={{
        fetcher,
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
