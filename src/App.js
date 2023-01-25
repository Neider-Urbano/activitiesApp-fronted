import DarkProvider from './context/DarkContext';
import { Router } from './routes/Router';


function App() {

  return (
    <DarkProvider>
      <Router />
    </DarkProvider>
  );
}

export default App;
