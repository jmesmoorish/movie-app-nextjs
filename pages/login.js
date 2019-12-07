import React from 'react'

const LoginPage = () => {

   /* return (
        <div>Login page</div>
    )*/

    return (
        <div>
            <div className="home-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5"> </div>
                        <div className="col-lg-3">
                            <form className="form-signin">
                                <h1 className="h3 mb-3 font-weight-normal">Please Login</h1>
                                <label for="inputEmail" className="sr-only">Email address</label>
                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus=""/>
                                <label for="inputPassword" className="sr-only">Password</label>
                                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""></input>
                                <div className="checkbox mb-3">
                                    <h1 className="h3 mb-3 font-weight-normal"></h1>
                                    <label>
                                        <input type="checkbox" value="remember-me"/> Remember me
                                    </label>
                                </div>
                                <h1 className="h3 mb-3 font-weight-normal"></h1>
                                <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage


