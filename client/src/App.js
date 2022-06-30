import { Route } from 'react-router-dom';
import './App.css';
import CreatePage from './react/pages/CreatePage.jsx';
import DetailPage from './react/pages/DetailPage.jsx';
import HomePage from './react/pages/HomePage.jsx';
import LandingPage from './react/pages/LandingPage.jsx';
import UpdatePage from './react/pages/UpdatePage.jsx';

function App() {
    return (
        <div className="App">
            <Route exact path='/' render={() => <LandingPage />} />
            <Route exact path='/videogames' render={() => <HomePage />} />
            <Route exact path='/videogames/:id' render={() => <DetailPage />} />
            <Route exact path='/create' render={() => <CreatePage />} />
            <Route exact path='/update/:id' render={() => <UpdatePage />} />
        </div>
    );
}

export default App;