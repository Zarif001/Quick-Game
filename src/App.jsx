import Player from './components/Player.jsx';
import TimeChallenge from './components/TimeChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title={'Not Easy'} targetTime={1}/>
        <TimeChallenge title={'Easy'} targetTime={5}/>
        <TimeChallenge title={'Normal'} targetTime={10}/>
        <TimeChallenge title={'Difficult'} targetTime={15}/>
      </div>
    </>
  );
}

export default App;
