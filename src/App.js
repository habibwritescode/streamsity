import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Home from './pages/home/home-page';
import BrowsePage from './pages/browse/browse-page';
import SearchPage from './pages/search/search-page';
import ArtistPage from './pages/artists/artists';
import AlbumPage from './pages/albums/albums';
import Player from './components/audio-player/audio-player';
import SearchBar from './components/search-bar/search-bar';
import Burger from './components/burger/Burger';

import './App.css';


const App = () => {
  return (
    <div className="App">
      <div className='side-nav'>
        <Burger />
      </div>
      <div className='main-app'>
        <SearchBar />
        <Switch>
          {/* <Route exact path='/' component={Home} /> */}
          <Route exact path='/browse' component={BrowsePage} />
          <Route exact path='/search' component={SearchPage} />
          <Route exact path="/artists" component={ArtistPage} />
          <Route exact path="/albums" component={AlbumPage} />
        </Switch>
      </div>
      <Player />
    </div>
  );
}

export default App;