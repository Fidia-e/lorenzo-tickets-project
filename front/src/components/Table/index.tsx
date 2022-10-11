import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import React, { ReactElement } from 'react';

import { Ticket } from '../../types';

interface TableProps {
  thHeaders: string[];
  items: Ticket[]; // TODO when using table with new items, add a pipe and the Type[]
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
          {items.map((item, index: number) => {
            return (
              <tr key={`tr${index}`}>
                {Object.values(item).map((value: string | number | null, index: number) => (
                  <td key={`td${index}`}>{value ?? 'null'}</td>
                ))}
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
