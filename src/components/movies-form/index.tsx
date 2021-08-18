import React from 'react';
import { useComponent } from './useComponent';
import styles from './styles.module.css';
import { ButtonPanel } from '../button-panel';

export const MoviesForm = () => {
  const { title, buttonsData, onSubmit, onChange } = useComponent();
  return (
    <section className={styles.moviesFormContainer}>
      <form id={'movies-form'} onSubmit={onSubmit}></form>
      <input
        type={'text'}
        name={'movie-title'}
        id={'movie-title'}
        form={'movies-form'}
        placeholder={'Movie title'}
        value={title}
        className={styles.moviesFormTitleInput}
        onChange={onChange}
      />
      <ButtonPanel buttons={buttonsData} />
    </section>
  );
};
