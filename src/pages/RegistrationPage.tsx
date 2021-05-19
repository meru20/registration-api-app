

const RegistrationForm = () => {
    return (
        <div id='form'>
            <div className='row mb-5 mt-3'>
        <div className='col-6 offset-3'>
          <div className='register-box'>
        <div className='row text-center'>
                <h1 className='w-100'>Create a New Account </h1>
                <h6 className='w-100 ' > Be a member of the Alkali</h6>
                 </div>
          <form action='submit' id='member-form ' className='mt-5' >
            <div className='row'>
            <div className='form-group col'>
              <label htmlFor='firstName'>First Name</label>
              <input
                type='text'
                id='firstName'
                className='form-control'
                placeholder='First Name'
                // value={member.firstName}
                // onChange={event => {
                //   setMember({...member, firstName:event.target.value});
                // }}
              />
            </div>
            <div className='form-group col'>
              <label htmlFor='lastName'>Last Name</label>
              <input
                type='text'
                className='form-control'
                placeholder='Last Name'
                id='lastName'
                // value={member.lastName}
                // onChange={event => {
                //   setMember({...member,lastName:event.target.value});
                // }}
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
                //   value={member.email}
                //   onChange={event => {
                //     setMember({...member, email:event.target.value});
                //   }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='linkedIn'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  placeholder='LinkedIn link'
                  id='password'
                //   value={member.linkedIn}
                //   onChange={event => {
                //     setMember({...member, linkedIn:event.target.value});
                //   }}
                />
              </div>
            <button className='btn btn-primary btn-block'>Save</button>
          </form>
          </div>
        </div>
      </div>
      </div>  
    );
      
    
}
export default RegistrationForm;