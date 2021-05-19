import  {Switch, Route} from 'react-router-dom';
import RegistrationForm from '../pages/RegistrationPage';

const AppRoutes = () => {
    return(
        <div id='app-routes'>
            <Switch>
                <Route path='/' exact component={RegistrationForm}/>
            </Switch>

        </div>
    )
}
export default AppRoutes;