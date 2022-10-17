import { useState } from 'react';

const useLocalStorage = <T>(key: string, initialValue: T): [T, (newValue: T) => void] => {
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

export default useLocalStorage;
