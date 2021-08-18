/* Komponent-kontener na przyciski. Za jego pomocą możemy
 tworzyć panele jedynie za przekazaniem tablicy prop'ów
 w formacie przewidzianym dla komponentu `Button`. */
import React from 'react';
import styles from './styles.module.css';
import { ButtonPropsType, Button } from '../button';

type ButtonPanelPropsType = {
  buttons: ButtonPropsType[];
  className?: string;
  extraClassName?: string;
};

export const ButtonPanel: React.FC<ButtonPanelPropsType> = ({
  buttons,
  className,
  extraClassName
}) => {
  if (buttons.length < 1) {
    return null;
  }
  const panelClassName =
    className || extraClassName
      ? `${styles.buttonPanel} ${extraClassName}`
      : styles.buttonPanel;
  return <div className={panelClassName}>{renderButtons(buttons)}</div>;
};

/* Uwaga: Poniżej użyłem indeksu jako klucza w drodze wyjątku i wiedząc, że
 nie będę przycisków usuwał z VDOM. Normalnie w tablicach JSX powinno się
 ZAWSZE używać unikatowych wartości, jak `id` tworzone z pomocą `uuid`. */
const renderButtons = (buttons: ButtonPanelPropsType['buttons']) =>
  buttons.map((buttonProps, index) => <Button key={index} {...buttonProps} />);
