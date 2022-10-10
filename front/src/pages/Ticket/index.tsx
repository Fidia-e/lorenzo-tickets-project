import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

const Ticket: FunctionComponent = () => {
  const { id } = useParams();

  return <h1>Page du ticket: {id}</h1>;
};

export default Ticket;
