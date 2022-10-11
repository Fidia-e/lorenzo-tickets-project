import { ReactElement } from 'react';

interface SubmitButtonProps {
  text: string;
}

/**
 * Composant réutilisation pour le boutton d'envoie de formulaire
 * @param text par défaut est "Envoyer" et peut être passer en props pour changer le texte selon l'utilisation
 */
const SubmitButton = ({ text = 'Envoyer' }: SubmitButtonProps): ReactElement => (
  <button className="submit-button" type="submit">
    {text}
  </button>
);

export default SubmitButton;
