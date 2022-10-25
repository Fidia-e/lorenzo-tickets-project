/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import React, { ReactElement } from 'react';

import { Message, Client, Employee } from '../../types';
import { GetAllTickets_getAllTickets } from '../../apollo/queries/__generated__/GetAllTickets';

interface TableProps {
  thHeaders: string[];
  items: GetAllTickets_getAllTickets[] | Message[] | Client[] | Employee[];
}

/**
 * Composant réutilisable pour les pages nécéssitant une table
 * @param thHeaders sert à créer et identifier les colonnes propres à chaque utilisation
 * @param items un tableau contenant les données propres à chaque utilisation
 */
const Table = ({ thHeaders, items }: TableProps): ReactElement => {
  const handleOnClick = (event: React.MouseEvent<HTMLElement>): void => {
    console.log(event.currentTarget);
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {thHeaders.map((th: string) => (
              <th key={th}>{th}</th>
            ))}
            <th colSpan={3}>Gestion</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => {
            return (
              <tr key={`tr${item.id}`}>
                {thHeaders.map((thHeader, index) => {
                  //
                  const value = item[thHeader as keyof typeof item];
                  return <td key={`td${index}${item.id}`}>{value ?? null}</td>;
                })}

                <td onClick={handleOnClick} className="see">
                  <FontAwesomeIcon icon={faEye} />
                </td>
                <td onClick={handleOnClick} className="edit">
                  <FontAwesomeIcon icon={faPen} />
                </td>
                <td onClick={handleOnClick} className="delete">
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
