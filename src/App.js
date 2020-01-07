import React from 'react';
import './App.css';
// import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
// import CompnentC from './components/CompnentC';
// import DataFetching from './components/DataFetching';

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <DataFetching />
      <UserContext.Provider value={'Rifat'}>
        <ChannelContext.Provider value={'V2 Technology'}>
          <CompnentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne /> */}
      <CounterTwo/>
    </div>
  );
}

export default App;
