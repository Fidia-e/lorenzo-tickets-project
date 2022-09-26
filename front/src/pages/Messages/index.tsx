import { FunctionComponent } from 'react';

import Table from '../../components/Table';
import { messagesTableHeaders, messagesData } from './constants';
import { ItemType } from '../../utils';

const Messages: FunctionComponent = () => (
  <div className="messages-container">
    <h1>Page des messages</h1>
    <Table
      thHeaders={messagesTableHeaders}
      items={messagesData}
      styleName="table messages-table"
      itemType={ItemType.MESSAGE}
    />
  </div>
);

export default Messages;
