import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
        <section className="login-page-4 parallex">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="login-container">
                            <div className="loginbox">
                                <img src="images/logo.png" alt="logo" className="img-responsive center-block" />
                                <div className="loginbox-title">sign in using social accounts</div>
                                <ul className="social-network social-circle onwhite">
                                    <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#" className="icoLinkedin" title="Linkedin +"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                                <div className="loginbox-or">
                                    <div className="or-line"></div>
                                    <div className="or">OR</div>
                                </div>
                                <div className="form-group">
                                    <label>Email: <span className="required">*</span></label>
                                    <input placeholder="" className="form-control" type="email" />
                                </div>
                                <div className="form-group">
                                    <label>Password: <span className="required">*</span></label>
                                    <input placeholder="" className="form-control" type="password" />
                                </div>
                                <div className="loginbox-forgot">
                                    <a href="">Forgot Password?</a>
                                </div>
                                <div className="loginbox-submit">
                                    <a href="/employee-dashboard"><input type="button" className="btn btn-default btn-block" value="Login" /></a>
                                </div>
                                <div className="loginbox-signup">
                                    <a href="/register">Sign Up With Email</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Login;