import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import React, { ReactElement } from 'react';

import { Message, Client, Employee } from '../../types';
import { GetAllTickets_getAllTickets } from '../../apollo/queries/__generated__/GetAllTickets';
import { useUserContext } from '../../context/user';
import { GetAllTicketsByClientId_getAllTicketsByClientId } from '../../apollo/queries/__generated__/GetAllTicketsByClientId';

interface TableProps {
  thHeaders: string[];
  items:
    | GetAllTickets_getAllTickets[]
    | GetAllTicketsByClientId_getAllTicketsByClientId[]
    | Message[]
    | Client[]
    | Employee[];
}

/**
 * Composant réutilisable pour les pages nécéssitant une table
 * @param thHeaders sert à créer et identifier les colonnes propres à chaque utilisation
 * @param items un tableau contenant les données propres à chaque utilisation
 */
const Table = ({ thHeaders, items }: TableProps): ReactElement => {
  const { user } = useUserContext();

  const handleOnClick = (event: React.MouseEvent<HTMLElement>): void => {
    console.log(event.currentTarget);
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {
              /* Affiche les colonnes avec les entêtes approriées */
              thHeaders.map((th: string) => (
                <th key={th}>{th}</th>
              ))
            }
            <th colSpan={user.role === 'admin' ? 3 : 1}>Gestion</th>
          </tr>
        </thead>
        <tbody>
          {
            /* Le map permet de boucler sur tout les objets que l'on veut afficher */
            items.map(item => {
              return (
                <tr key={`tr${item.id as number}`}>
                  {
                    /* On affiche seulement les clés qui sont également dans thHeader */
                    thHeaders.map((thHeader, index) => {
                      // On va chercher la valeur de la clé puis on l'affiche
                      const value = item[thHeader as keyof typeof item] as string;
                      return <td key={`td${index}${item.id as number}`}>{value ?? null}</td>;
                    })
                  }

                  {/* Visible pour tout le monde */}
                  <td onClick={handleOnClick} className="see">
                    <FontAwesomeIcon icon={faEye} />
                  </td>

                  {
                    /* Visible que pour les admins */
                    user.role === 'admin' && (
                      <>
                        <td onClick={handleOnClick} className="edit">
                          <FontAwesomeIcon icon={faPen} />
                        </td>
                        <td onClick={handleOnClick} className="delete">
                          <FontAwesomeIcon icon={faTrash} />
                        </td>
                      </>
                    )
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
