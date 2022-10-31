import { useState } from 'react';
import { Status } from '../apollo/__generated__/globalTypes';
const { open, closed, underway } = Status;

export const useLocalStorage = <T>(key: string, initialValue: T): [T, (newValue: T) => void] => {
  const [data, setData] = useState<T>((): T => {
    const itemInLocalStorage = window.localStorage.getItem(key);

    // si l'élément existe, on le parse, sinon on renvoie la valeur initiale
    if (itemInLocalStorage !== '') {
      try {
        return JSON.parse(itemInLocalStorage as string) as T;
      } catch (error) {
        return itemInLocalStorage as T;
      }
    } else {
      return initialValue;
    }
  });

  const setValueAndPersist = (newValue: T): void => {
    setData(newValue);

    if (typeof newValue === 'object') {
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } else {
      // https://stackoverflow.com/a/53813384
      window.localStorage.setItem(key, newValue as unknown as string);
    }
  };

  return [data, setValueAndPersist];
};

export const isActiveClassName = (isActive: boolean): string => (isActive ? 'active' : '');

export const ticketStatusClassName = (status: string): string => {
  switch (status) {
    case open:
      return 'blue-status';
    case closed:
      return 'red-status';
    case underway:
      return 'yellow-status';
    default:
      return '';
  }
};

export const ticketStatusTraduction = (status: string): string => {
  switch (status) {
    case open:
      return 'ouvert';
    case closed:
      return 'fermé';
    case underway:
      return 'en cours';
    default:
      return '';
  }
};
