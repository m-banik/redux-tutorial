import React from 'react';
import { useComponent } from './useComponent';
import styles from './styles.module.css';

export const MoviesList: React.FC = () => {
  const { title, movies, onRemoveMovie } = useComponent();
  return (
    <section className={styles.moviesListContainer}>
      <h1 className={styles.moviesListHeader}>{title}</h1>
      <ul className={styles.moviesListProperList}>
        {renderMoviesList(movies, onRemoveMovie)}
      </ul>
    </section>
  );
};

type RenderMoviesListType = (
  movies: ReturnType<typeof useComponent>['movies'],
  onRemoveMovie: ReturnType<typeof useComponent>['onRemoveMovie']
) => JSX.Element[];

const renderMoviesList: RenderMoviesListType = (movies, onRemoveMovie) => {
  return movies.map(({ id, title }) => {
    const onRemove = () => onRemoveMovie(id);
    return (
      <li
        key={id}
        className={styles.moviesListProperListElement}
        onDoubleClick={onRemove}
      >
        {title}
      </li>
    );
  });
};
