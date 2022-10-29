/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Message, Client, Employee } from '../../types';
import { GetAllTickets_getAllTickets } from '../../apollo/queries/__generated__/GetAllTickets';
import { useUserContext } from '../../context/user';
import { GetAllTicketsByClientId_getAllTicketsByClientId } from '../../apollo/queries/__generated__/GetAllTicketsByClientId';
import { ItemType } from '../../utils';

interface TableProps {
  thHeaders: string[];
  items:
    | GetAllTickets_getAllTickets[]
    | GetAllTicketsByClientId_getAllTicketsByClientId[]
    | Message[]
    | Client[]
    | Employee[];
  styleName: string;
  deleteFunction?: any;
  itemType: ItemType;
}

/**
 * Composant réutilisable pour les pages nécéssitant une table
 * @param thHeaders sert à créer et identifier les colonnes propres à chaque utilisation
 * @param items un tableau contenant les données propres à chaque utilisation
 * @param styleName sert à identifier la table et à lui appliquer des styles propres à chaque utilisation
 * @param deleteFunction la fonction qui servira à supprimer un item
 * @param itemType le type de l'item utilisé afin d'afficher ou non le bouton voir d'un item et de modifier l'url param
 */
const Table = ({ thHeaders, items, styleName, deleteFunction, itemType }: TableProps): ReactElement => {
  const { user } = useUserContext();
  const { MESSAGE, TICKET } = ItemType;

  const handleOnClick = (event: React.MouseEvent<HTMLElement>): void => {
    console.log(event.currentTarget);
  };

  return (
    <div className="table-container">
      <table className={styleName}>
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
              // Vérification du type de l'item
              let urlParam;
              if (itemType === TICKET && item.id != null) {
                urlParam = item.id;
              }
              if (itemType === MESSAGE && (item as Message).ticket_id != null) {
                urlParam = (item as Message).ticket_id;
              }

              return (
                <tr key={`tr${item.id as number}`}>
                  {
                    /* On affiche seulement les clés qui sont également dans thHeader */
                    thHeaders.map((thHeader, index, e) => {
                      // On va chercher la valeur de la clé puis on l'affiche
                      const value = item[thHeader as keyof typeof item] as string;

                      // on affiche la valeur si elle existe
                      let fragment = <p>{value ?? null}</p>;

                      // si la valeur correspond au statut,
                      // on lui donne une classe et on change le texte
                      if (value === 'open') {
                        fragment = <p className="red-status">ouvert</p>;
                      }
                      if (value === 'closed') {
                        fragment = <p className="blue-status">fermé</p>;
                      }
                      if (value === 'underway') {
                        fragment = <p className="yellow-status">en cours</p>;
                      }

                      return <td key={`td${index}${item.id as number}`}>{fragment}</td>;
                    })
                  }

                  {/* Visible pour tout le monde pour les pages de ticket et message */}
                  {(itemType === MESSAGE || itemType === TICKET) && (
                    <td onClick={handleOnClick} className="see blue">
                      <Link to={`/ticket/${urlParam as number}`}>
                        <FontAwesomeIcon icon={faEye} />
                      </Link>
                    </td>
                  )}

                  {
                    /* Visible que pour les admins */
                    user.role === 'admin' && (
                      <>
                        <td onClick={handleOnClick} className="edit yellow">
                          <FontAwesomeIcon icon={faPen} />
                        </td>
                        <td
                          onClick={() => deleteFunction({ variables: { [`delete${itemType}Id`]: item.id } })}
                          className="delete red"
                        >
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
