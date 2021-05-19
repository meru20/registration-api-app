import  {Switch, Route} from 'react-router-dom';
import RegistrationForm from '../pages/RegistrationPage';

const AppRoutes = () => {
    return(
        <div className='container-fluid'>
            <Switch>
                <Route path='/' exact component={RegistrationForm}/>
            </Switch>

        </div>
    )
}
export default AppRoutes;