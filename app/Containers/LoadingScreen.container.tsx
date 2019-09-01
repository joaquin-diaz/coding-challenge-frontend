import * as React from 'react';

import LoadingScreen from '../Components/LoadingScreen';
import { ApplicationState } from '../configure.store';
import { useSelector } from 'react-redux';

const LoadingScreenContainer: React.FC = () => {
  const isLoading = useSelector((state: ApplicationState) => state.films.isLoading);
  const query = useSelector((state: ApplicationState) => state.films.query);

  return <LoadingScreen isLoading={isLoading} query={query} />;
};

export default LoadingScreenContainer;
