// Custom'owy hook - interfejs na linii komponent a jego logika
import { ChangeEventHandler, useState, useCallback, useMemo } from 'react';
import { useDataPersister } from './useDataPersister';
import { ButtonPropsType, ButtonKindsEnum } from '@Components/button';
import { ErrorsEnum } from '@Common/enums';

type UseComponentType = () => {
  title: string;
  buttonsData: ButtonPropsType[];
  onSubmit: ChangeEventHandler<HTMLFormElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const useComponent: UseComponentType = () => {
  const { clearMoviesList, addMovie, removeMovie } = useDataPersister();
  // https://pl.reactjs.org/docs/hooks-state.html
  const [title, setTitle] = useState<string>('');
  const onSubmit = useCallback<ChangeEventHandler<HTMLFormElement>>((event) => {
    event.preventDefault();
  }, []);
  const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      const { value } = event.currentTarget;
      setTitle(value);
    },
    []
  );
  // https://pl.reactjs.org/docs/hooks-reference.html#usememo
  const buttonsData = useMemo<ButtonPropsType[]>(
    () => [
      {
        description: 'clear the list',
        kind: ButtonKindsEnum.basic,
        form: 'movies-form',
        onClick: clearMoviesList
      },
      {
        description: 'add movie',
        kind: ButtonKindsEnum.basic,
        form: 'movies-form',
        onClick: () => {
          if (title.length === 0) {
            alert(ErrorsEnum.empty_title);
            return;
          }
          addMovie(title);
          setTitle('');
        }
      },
      {
        description: 'remove movie',
        kind: ButtonKindsEnum.basic,
        form: 'movies-form',
        onClick: () => {
          if (title.length === 0) {
            alert(ErrorsEnum.empty_title);
            return;
          }
          removeMovie(title);
          setTitle('');
        }
      }
    ],
    [title, clearMoviesList, addMovie, removeMovie]
  );
  return {
    title,
    buttonsData,
    onSubmit,
    onChange
  };
};
