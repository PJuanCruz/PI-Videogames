import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './react/pages/HomePage.jsx';
import LandingPage from './react/pages/LandingPage.jsx';

function App() {
    return (
        <div className="App">
            <Route exact path='/' render={() => <LandingPage />} />
            <Route exact path='/videogames' render={() => <HomePage />} />
        </div>
    );
}

export default App;
