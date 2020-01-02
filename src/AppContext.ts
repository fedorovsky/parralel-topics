import React from 'react';

type ContextProps = {
  pageTitle: string;
  setPageTitle: (pageTitle: string) => void;
};

const AppContext = React.createContext<ContextProps>({
  pageTitle: '',
  setPageTitle: () => null,
});

export default AppContext;
