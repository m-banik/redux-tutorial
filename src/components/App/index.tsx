// Główny komponent aplikacji
import React from 'react';
import { useComponent } from './useComponent';
import './styles.css';
import styles from './styles.module.css';
import { ButtonPanel, MoviesList, MoviesForm } from '@Components/index';

export const App: React.FC = () => {
  const { buttonsData } = useComponent();
  return (
    <div className={styles.appContainer}>
      <ButtonPanel buttons={buttonsData} extraClassName={styles.buttonPanel} />
      <MoviesList />
      <MoviesForm />
    </div>
  );
};
