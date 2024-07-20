import Header from "./components/Header";
import FeatureMovies from "./components/FeatureMovies";
import MediaList from "./components/MediaList";
import { TOP_RATED, TRENDING } from "./libs/constants";

function App() {
  return (
    <div>
      <Header />
      <FeatureMovies />
      <MediaList title={"Trending"} tabs={TRENDING} />
      <MediaList title={"Top Rated"} tabs={TOP_RATED} />
    </div>
  );
}

export default App;
