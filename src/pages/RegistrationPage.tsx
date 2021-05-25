import { useEffect, useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Alert from '../components/Alert';

const RegistrationForm = () => {
    const [register , setRegister] = useState<User>({
        email: '',
        password:'',
        firstName:'',
        lastName: '',
    });
    const { alert, postUsers, getUsers, user } = useContext(GlobalContext);

const clearForm = () => {
    setRegister({
        email: '',
        password:'',
        firstName:'',
        lastName: '',
    })
  }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        postUsers(register);

    }

    useEffect(() => {
        getUsers();
        clearForm()
      }, []);
    //   if (alert){
    //       return <Alert/>
    //   }
    return (
        <div id='form'>
            {alert? (
                <Alert/>
            ):(
                ''
                )}
            <div className='row mb-5 mt-3'>
        <div className='col-6 offset-3'>
          <div className='register-box'>
        <div className='row text-center'>
                <h1 className='w-100'>Create a New Account </h1>
                <h6 className='w-100 ' > Be a member </h6>
                 </div>
          <form action='submit' id='member-form ' className='mt-5' onSubmit={handleSubmit}>
            <div className='row'>
            <div className='form-group col'>
              <label htmlFor='firstName'>First Name</label>
              <input
                type='text'
                id='firstName'
                className='form-control'
                name='firstName'
                placeholder='First Name'
                value={user?.firstName}
                onChange={event => {
                    setRegister({...register, firstName:event.target.value})
            
                }}
              />
            </div>
            <div className='form-group col'>
              <label htmlFor='lastName'>Last Name</label>
              <input
                type='text'
                className='form-control'
                placeholder='Last Name'
                id='lastName'
                value={user?.lastName}
                onChange={event => {
                  setRegister({...register, lastName:event.target.value});
                }}
              />
            </div>
            </div>
            
             
           
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Email'
                  id='email'
                  value={user?.email}
                  onChange={event => {
                    setRegister({...register, email:event.target.value});
                  }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='linkedIn'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  placeholder='password'
                  id='password'
                  value={user?.password}
                  onChange={event => {
                    setRegister({...register, password:event.target.value});
                  }}
                />
              </div>
              <div className='row'>
              <button className='btn btn-primary btn-block'
              >Save</button>

              </div>
            
          </form>
          </div>
        </div>
      </div>
      </div>  
    );
      
    
}
export default RegistrationForm;