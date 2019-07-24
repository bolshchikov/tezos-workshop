import Code from './Code';
import React, { useState } from 'react';
import { getContractCode } from './tezos-gateway';
import { Tab, Input, Button } from 'semantic-ui-react'
import './App.css';

const App = () => {
  const [query, setQuery] = useState('KT1KufXrPvNcPJkd3wUuRyZGAbJKFochKjpN');
  const [contractCode, setContractCode] = useState('');

  const panes = [
    { menuItem: 'Transactions', render: () => <Tab.Pane>List of transactions</Tab.Pane> },
    { menuItem: 'Code', render: () => <Tab.Pane><Code code={contractCode}></Code></Tab.Pane> },
    { menuItem: 'Bids', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  ];

  const fetchData = () => {
    getContractCode(query);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Awesome Bid Explorer</h1>
      </header>
      <div className="App-search">
        <Input disabled placeholder="Search by address" value={query} onChange={ev => setQuery(ev.target.value)}></Input>
        <Button primary onClick={fetchData}>Go</Button>
      </div>
      <Tab panes={panes}></Tab>
    </div>
  );
}

export default App;
