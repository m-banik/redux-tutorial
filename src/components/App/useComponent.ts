// Custom'owy hook - interfejs na linii komponent a jego logika
import { useMemo } from 'react';
import { useDataPersister } from './useDataPersister';
import { ButtonPropsType, ButtonKindsEnum } from '..';

type UseComponentType = () => {
  buttonsData: ButtonPropsType[];
};

export const useComponent: UseComponentType = () => {
  const { resetMoviesModel } = useDataPersister();
  // https://pl.reactjs.org/docs/hooks-reference.html#usememo
  const buttonsData = useMemo<ButtonPropsType[]>(
    () => [
      {
        description: 'list the store',
        kind: ButtonKindsEnum.crossed,
        onClick: () => {
          let storedData = localStorage.getItem('persist:root');
          if (storedData) {
            storedData = JSON.parse(storedData);
            if (storedData) {
              const keys = Object.keys(storedData);
              const values = Object.values(storedData);
              for (let i = 0; i < keys.length; i++) {
                console.log(`${keys[i]}: `);
                console.log(JSON.parse(values[i]));
              }
            }
          }
        }
      },
      {
        description: 'clear the store',
        kind: ButtonKindsEnum.filled,
        onClick: resetMoviesModel
      }
    ],
    [resetMoviesModel]
  );
  return {
    buttonsData
  };
};
