/* Przykładowe dane wejściowe aplikacji. Też przykład użycia funkcji
 pomocniczej z folderu `utils`. */
import { MoviesModelStateType } from './types';
import { uuid } from '@Utils/uuid';

export const basic_data: MoviesModelStateType = {
  description: 'Favourite movies list',
  list: [
    {
      id: uuid(),
      title: 'Koneser',
      director: 'Giuseppe Tornatore',
      premiere_date: 2013
    },
    {
      id: uuid(),
      title: 'Między słowami',
      director: 'Sofia Coppola',
      premiere_date: 2003
    },
    {
      id: uuid(),
      title: 'Annie Hall',
      director: 'Woody Allen',
      premiere_date: 1977
    },
    {
      id: uuid(),
      title: 'Zrywa się wiatr',
      director: 'Hayao Miyazaki',
      premiere_date: 2013
    },
    {
      id: uuid(),
      title: 'Samotny mężczyzna',
      director: 'Tom Ford',
      premiere_date: 2009
    },
    {
      id: uuid(),
      title: 'Manchester by the Sea',
      director: 'Kenneth Lonergan',
      premiere_date: 2016
    },
    {
      id: uuid(),
      title: 'Na noże',
      director: 'Rian Johnson',
      premiere_date: 2019
    }
  ]
};

export const extra_data: MoviesModelStateType = {
  description: 'Additional movies list',
  list: [
    {
      id: uuid(),
      title: 'Wielkie piękno',
      director: 'Paolo Sorrentino',
      premiere_date: 2013
    },
    {
      id: uuid(),
      title: 'Ostatnia rodzina',
      director: 'Jan P. Matuszyński',
      premiere_date: 2016
    },
    {
      id: uuid(),
      title: 'Jesienna sonata',
      director: 'Ingmar Bergman',
      premiere_date: 1978
    }
  ]
};
