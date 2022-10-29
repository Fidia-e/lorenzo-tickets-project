import { ReactElement, ChangeEvent } from 'react';

import { FieldBaseProps } from '../../types';

interface FieldProps extends FieldBaseProps {
  type: string;
}

/**
 * Composant réutilisable lorsqu'un input est nécessaire
 * @param identifier sert à faire la liaison entre l'input et le label
 * @param placeholder le texte affiché par defaut dans l'input
 * @param label le texte du label
 * @param type le type de l'input
 * @param value la valeur de l'input pour avoir un champ contrôlé
 * @param updateField le setter qui permet de modifier @param value pour avoir un champ contrôlé
 * @param styleName le nom de la classe css à appliquer
 */
const Field = ({ identifier, placeholder, label, type, value, updateField, styleName }: FieldProps): ReactElement => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const target = event.currentTarget;
    updateField(target.value);
  };

  return (
    <div className="field">
      <label className="label" htmlFor={identifier}>
        {label}
      </label>
      <input
        autoComplete="off"
        className={styleName}
        id={identifier}
        placeholder={placeholder}
        name={identifier}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Field;
