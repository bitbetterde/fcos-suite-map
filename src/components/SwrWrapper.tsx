import React from 'react';
import { SWRConfig } from 'swr';
import { useStore } from '../hooks';
import fetcher from '../util/fetcher';

const SwrWrapper: React.FC = ({ children }) => {
  const setError = useStore((state) => state.setError);
  const error = useStore((state) => state.error);
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
        onSuccess: () => {
          // Reset error modal
          if (error) setError(null);
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SwrWrapper;
