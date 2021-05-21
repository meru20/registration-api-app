import  {Switch, Route} from 'react-router-dom';
import RegistrationForm from '../pages/RegistrationPage';
import Navbar from '../components/Navbar';

const AppRoutes = () => {
    return(
        <div id='app-router'>
            <Navbar/>
            <div className='container'>
            <Switch>
                <Route path='/' exact component={RegistrationForm}/>
            </Switch>
            </div>
            

        </div>
    )
}
export default AppRoutes;