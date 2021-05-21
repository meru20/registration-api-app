import  {BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from './router/AppRoutes';
import { GlobalProvider } from './context/GlobalContext';
import './App.css';

const App =() => {
  return (
    <Router>
      <GlobalProvider>
      <AppRoutes/>

      </GlobalProvider>
     
    </Router>
    
  );
}

export default App;
