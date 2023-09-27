import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Explore from './components/explore/Explore';
import Article from './articles/Article'

import NewAuther from './components/newAuthors/NewAuther';
import Trending from './components/topTrendingTopics/Trending'
import Adds from './adds/Adds';
import ExploreVideos from './components/exploreVideos/ExploreVideos';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="app_container">
      <Navbar />
      <Wrapper>
        <Banner />
        <NewAuther />
        <Trending />
        <Explore />
        <Article />
        <Adds />
      </Wrapper>
      <ExploreVideos />
      <Footer />
    </div>
  );
}

export default App;
