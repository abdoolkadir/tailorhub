import React from 'react';
import Header from '../components/Header';
import HeaderSearchResult from '../components/HeaderSearchResult';
import SearchResult from '../components/SearchResult';

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <HeaderSearchResult />
      <div className="container">
        <SearchResult />
      </div>
    </div>
  );
}

export default Dashboard;
