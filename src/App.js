import './index.css'
import Video from "./Components/Video";

function App() {
  return (
    <div className='App'>
      <div>Videos</div>
      <Video Time="1 Year" title="Node.Js" Views="100K"></Video>
      <Video Time="10 Year" title="MongoDB" views="1M"></Video>
      <Video Time="1 Month" title="React.js" views="10K"></Video>
    </div>
  );
}
export default App;