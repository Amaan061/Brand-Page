import HeroSection from './components/Hero'; // Ensure this matches the exported name from Hero.jsx
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <HeroSection /> 
    </>
  );
}

export default App;
