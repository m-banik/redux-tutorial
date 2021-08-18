/* Przykład wysoce reużywalnego komponentu. Zachowuje(i styluje)
 się inaczej w zależności od przekazanych prop'ów.*/
import React from 'react';
import styles from './styles.module.css';

// Ten enum mógłby równie dobrze znajdować się w `src/common/enums`
export enum ButtonKindsEnum {
  basic,
  crossed,
  filled
}

type BasicButtonPropsType = {
  description: string;
  kind: ButtonKindsEnum;
  form?: string;
  isDisabled?: boolean;
  submit?: boolean;
  onClick: VoidFunction;
};

// Zauważ, że teraz komponent wymaga przekazania prop'a `onClick` ALBO `submit`
export type ButtonPropsType =
  | BasicButtonPropsType
  | (Omit<BasicButtonPropsType, 'onClick'> & {
      submit: boolean;
      onClick?: VoidFunction;
    });

export const Button: React.FC<ButtonPropsType> = ({
  description,
  kind,
  form,
  isDisabled,
  submit,
  onClick
}) => {
  if (submit) {
    const className: string = isDisabled
      ? `${styles.submitButton} ${styles.disabledButton}`
      : styles.submitButton;
    return (
      <button
        type={'submit'}
        form={form}
        disabled={isDisabled}
        className={className}
        onClick={onClick}
      >
        {description}
      </button>
    );
  }
  const buttonVariant = renderButtonVariant(description, kind);
  const className = isDisabled ? ` ${styles.disabledButton}` : '';
  return React.cloneElement(buttonVariant, {
    className: buttonVariant.props.className
      ? buttonVariant.props.className + className
      : className,
    form,
    disabled: !!isDisabled,
    onClick: isDisabled ? undefined : onClick
  });
};

const renderButtonVariant = (
  description: ButtonPropsType['description'],
  buttonKind: ButtonPropsType['kind']
) => {
  switch (buttonKind) {
    case ButtonKindsEnum.crossed:
      return (
        <div className={styles.crossedButton}>
          <span className={styles.buttonContentWrapper}>{description}</span>
        </div>
      );
    case ButtonKindsEnum.filled:
      return (
        <div className={styles.filledButton}>
          <span className={styles.buttonContentWrapper}>{description}</span>
        </div>
      );
    case ButtonKindsEnum.basic:
    default:
      return (
        <button type={'button'} className={styles.basicButton}>
          {description}
        </button>
      );
  }
};
