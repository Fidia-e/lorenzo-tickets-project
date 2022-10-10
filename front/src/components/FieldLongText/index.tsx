import { Dispatch, ReactElement, SetStateAction, ChangeEvent } from 'react';

interface FieldLongTextProps {
  identifier: string;
  placeholder: string;
  label: string;
  value: string;
  updateField: Dispatch<SetStateAction<string>>;
}

/**
 * A field to be used inside a form : label and textarea
 */
const FieldLongText = ({ identifier, placeholder, label, value, updateField }: FieldLongTextProps): ReactElement => {
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
