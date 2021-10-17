// import logo from './logo.svg';
// import './App.css';

// import Box1 from './components/3.1-boxes/Box1'

// import Quiz from './components/3.2-quiz/Quiz'

import Buttons from './components/4.1-buttons/Buttons'

function App() {

  return (
    <div>
      {/* <Box1/> */}
      {/* <Quiz/> */}
      <Buttons name="Important" fontWeight= 'bold'/>
      <Buttons name="Not Important" fontWeight= 'normal' />
    </div>
  )
}

export default App;
