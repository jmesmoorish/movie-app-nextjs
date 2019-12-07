//import React from 'react'
import React, { useState, useContext } from 'react';
import { createUser } from '../actions'
import { Router } from '../routes'

const Signup = () => {

    //const { dispatch } = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userData = { name: name, email: email, password: password};

    const handleSubmit = (event) => {
        event.preventDefault();
       /* axioswal
          .post('/api/users', {
            name,
            email,
            password,
          })
          .then((data) => {
            if (data.status === 'ok') {
              dispatch({ type: 'fetch' });
              redirectTo('/');
            }
          });*/
          createUser(userData)
          .then((User) => {
            //setSubmitting(false);
            //this.setState({error: undefined});
            Router.pushRoute('/Users');
          })
          .catch((err) => {
            const error = err.message || 'Server Error!';
            console.log ('Error -  '+error);
            //setSubmitting(false);
            //this.setState({error});
          })
      };

    return (
        <div>
            <div className="home-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5"> </div>
                        <div className="col-lg-3">
                            <form className="form-signin" onSubmit={handleSubmit}>
                                <h1 className="h3 mb-3 font-weight-normal">Please Signup</h1>
                                <label for="inputEmail" className="sr-only">Name</label>
                                <input value={name} onChange={e => setName(e.target.value)} type="text" id="inputName" className="form-control" placeholder="Name" required="" autofocus=""/>
                                <label for="inputEmail" className="sr-only">Email address</label>
                                <input  value={email} onChange={e => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus=""/>
                                <label for="inputPassword" className="sr-only">Password</label>
                                <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="inputPassword" className="form-control" placeholder="Password" required=""></input>
                                <h1 className="h3 mb-3 font-weight-normal"></h1>
                                <button className="btn btn-lg btn-primary btn-block" type="submit">Signup</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Signup
