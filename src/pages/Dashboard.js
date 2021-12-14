import React from 'react';
import Header from '../components/Header';
import HeaderSearchResult from '../components/HeaderSearchResult';
import SearchResult from '../components/SearchResult';
import SearchResultBar from '../components/SearchResultBar';

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <HeaderSearchResult />
      <SearchResultBar />
      <SearchResult />
    </div>
  );
}

export default Dashboard;
