import { useEffect, useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useForm } from 'react-hook-form';



// interface UserProps {
//     user: User;
//   }

// const RegistrationForm:React.FC<UserProps> = (user) => {
const RegistrationForm = () => {
    const [register , setRegister] = useState<User>({
        email: '',
        password:'',
        firstName:'',
        lastName: '',
    });
    const { users, postUsers, getUsers, user } = useContext(GlobalContext);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        postUsers(register);

    }

    useEffect(() => {
        getUsers();
      }, []);
    return (
        <div id='form'>
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
                // ref = {register() }
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