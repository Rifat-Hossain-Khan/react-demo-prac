import React from 'react';
import './App.css';
import CompnentC from './components/CompnentC';
// import DataFetching from './components/DataFetching';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <DataFetching /> */}
      <UserContext.Provider value={'Rifat'}>
        <ChannelContext.Provider value={'V2 Technology'}>
          <CompnentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
