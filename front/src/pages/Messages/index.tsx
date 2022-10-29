import { FunctionComponent } from 'react';

import Table from '../../components/Table';
import { messagesTableHeaders, messagesData } from './constants';

const Messages: FunctionComponent = () => (
  <div className="messages-container">
    <h1>Page des messages</h1>
    <Table thHeaders={messagesTableHeaders} items={messagesData} styleName="table messages-table" />
  </div>
);

export default Messages;
