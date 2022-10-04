import { ReactElement } from 'react';

interface SubmitButtonProps {
  text: string;
}

const SubmitButton = ({ text = 'Envoyer' }: SubmitButtonProps): ReactElement => (
  <button className="submit-button" type="submit">
    {text}
  </button>
);

export default SubmitButton;
