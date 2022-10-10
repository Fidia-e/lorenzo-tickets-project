import { Dispatch, ReactElement, SetStateAction, ChangeEvent } from 'react';

interface FieldProps {
  identifier: string;
  placeholder: string;
  label: string;
  type: string;
  value: string;
  updateField: Dispatch<SetStateAction<string>>;
}

/**
 * A field to be used inside a form : label and input
 */
const Field = ({ identifier, placeholder, label, type, value, updateField }: FieldProps): ReactElement => {
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
        className="input"
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
