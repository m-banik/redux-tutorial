/* Enumeryki świetnie się nadają to obsługi rozmaitych opcji, któych nie chcemy
 pozostawiać przypadkowi lub literówce. Mają własny folder, w któym lądują, jak
 są ogólnego przeznaczenia. W rzeczonym projekcie przypadło to w udziale tylko
 błędom, ale to po części rzecz uznaniowa. Można przenieść tu niektóre inne enum'y
 występujące w aplikacji. Jeśli miałoby to sens. */
export enum ErrorsEnum {
  type = 'Incorrect type!',
  fetch = 'Error occurred while the data fetching attempt!',
  default_abortion_message = 'The user aborted a request.',
  fetch_timeout_failure = 'The external source of data is not responding!',
  add_present_element = 'Movie of such title is already on the list!',
  empty_list = 'The list is already empty!',
  remove_absent_element = 'Such movie does not occur on the list!',
  empty_title = 'Please provide the title!'
}
