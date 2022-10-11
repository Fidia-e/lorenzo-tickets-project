import { ReactElement, ChangeEvent } from 'react';

import { FieldBaseProps } from '../../types';

/**
 * Composant réutilisable lorsqu'un textarea est nécessaire
 * @param identifier sert à faire la liaison entre le textarea et le label
 * @param placeholder le texte affiché par defaut dans le textarea
 * @param label le texte du label
 * @param value la valeur du textarea pour avoir un champ contrôlé
 * @param updateField le setter qui permet de modifier @param value pour avoir un champ contrôlé
 */
const FieldLongText = ({ identifier, placeholder, label, value, updateField }: FieldBaseProps): ReactElement => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const target = event.currentTarget;
    updateField(target.value);
  };

  return (
    <div className="field">
      <label className="label" htmlFor={identifier}>
        {label}
      </label>
      <textarea
        autoComplete="off"
        className="textarea"
        id={identifier}
        placeholder={placeholder}
        name={identifier}
        value={value}
        onChange={() => handleChange}
      ></textarea>
    </div>
  );
};

export default FieldLongText;
