import React from 'react';
import { StatusBar } from 'react-native';

import Header from './component/Header';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar background="#7159c1" />
      <Header />
      <Routes />
    </>
  );
}
