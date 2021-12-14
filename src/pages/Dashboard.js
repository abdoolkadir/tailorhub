import React from 'react';
import Footer from '../components/Footer';
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
      <Footer />
    </div>
  );
}

export default Dashboard;
