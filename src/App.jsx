import Slider from './components/Slider/Slider';
import { SliderData } from './components/Slider/SliderData';

import './App.css';

function App() {
  return (
    <div className="App">
      <Slider
        slides={SliderData}
        bg="light"
        size="small"
        // shadow="true"
        arrows="sharp"
      />
      <Slider
        slides={SliderData}
        bg="light"
        size="medium"
        // shadow="true"
        arrows="sharp"
      />
      <Slider
        slides={SliderData}
        bg="light"
        size="big"
        // shadow="true"
        arrows="sharp"
      />
    </div>
  );
}

export default App;
