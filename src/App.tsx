import { useState } from 'react';
import LoadingPage from './components/LoadingPage';
import HomePage from './components/HomePage';

export default function App() {
  const [showHomePage, setShowHomePage] = useState(false);

  return showHomePage ? (
    <HomePage />
  ) : (
    <LoadingPage onComplete={() => setShowHomePage(true)} />
  );
}