import { ReactElement } from 'react';

interface SubmitButtonProps {
  text: string;
  styleName: string;
}

/**
 * Composant réutilisation pour le boutton d'envoie de formulaire
 * @param text par défaut est "Envoyer" et peut être passer en props pour changer le texte selon l'utilisation
 * @param styleName par défaut est "submit-button" et peut être passer en props pour changer le style selon l'utilisation
 */
const SubmitButton = ({ text = 'Envoyer', styleName }: SubmitButtonProps): ReactElement => (
  <button className={styleName} type="submit">
    {text}
  </button>
);

export default SubmitButton;
