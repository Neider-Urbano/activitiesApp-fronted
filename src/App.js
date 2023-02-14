import DarkProvider from './context/DarkContext';
import { Router } from './routes/Router';
import { TranslationProvider } from './translations/TranslationProvider';


function App() {

  return (
    <TranslationProvider>
      <DarkProvider>
        <Router />
      </DarkProvider>
    </TranslationProvider>
  );
}

export default App;
