import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div className="fixed-footer">
	            <footer className="footer">
	                <div className="container">
	                    <div className="row">
	                        <div className="col-sm-6 col-md-3 col-xs-12">
	                            <div className="footer_block">
	                                <a href="index.html" className="f_logo"><img src="images/logo.png" className="img-responsive" alt="logo" /></a>
	                                <p>Aoluptas sit aspernatur aut odit aut fugit, sed elits quias horisa hinoe magni  magni dolores eos qui ratione volust luptatem sequised .</p>
	                                <div className="social-bar">
	                                    <ul>
	                                        <li>
	                                            <a className="fa fa-twitter" href="#"></a>
	                                        </li>
	                                        <li>
	                                            <a className="fa fa-pinterest" href="#"></a>
	                                        </li>
	                                        <li>
	                                            <a className="fa fa-facebook" href="#"></a>
	                                        </li>
	                                        <li>
	                                            <a className="fa fa-behance" href="#"></a>
	                                        </li>
	                                        <li>
	                                            <a className="fa fa-instagram" href="#"></a>
	                                        </li>
	                                        <li>
	                                            <a className="fa fa-linkedin" href="#"></a>
	                                        </li>
	                                    </ul>
	                                </div>
	                            </div>
	                        </div>
	                        <div className="col-sm-6 col-md-2 col-xs-12">
	                            <div className="footer_block">
	                                <h4>Hot Links</h4>
	                                <ul className="footer-links">
	                                    <li>
	                                        <a href="#">Home</a>
	                                    </li>
	                                    <li>
	                                        <a href="#">Jobs</a>
	                                    </li>
	                                    <li>
	                                        <a href="#">About Us</a>
	                                    </li>

	                                    <li>
	                                        <a href="#">Privacy</a>
	                                    </li><li>
	                                        <a href="#">Contact Us</a>
	                                    </li>
	                                    <li>
	                                        <a href="#">Term & Conditions</a>
	                                    </li>
	                                </ul>
	                            </div>
	                        </div>
	                        <div className="col-sm-6 col-md-4 col-xs-12">
	                            <div className="footer_block dark_gry">
	                                <h4>Recent Posts</h4>
	                                <ul className="recentpost">
	                                    <li>
	                                        <span><a className="plus" href="#"><img src="images/footer/1.png" alt="" /><i>+</i></a></span>
	                                        <p><a href="#">Fusce gravida tortor felis, ac dictum risus sagittis</a></p>
	                                        <h3>Sep 15, 2016</h3>
	                                    </li>
	                                    <li>
	                                        <span><a className="plus" href="#"><img src="images/footer/2.png" alt="" /><i>+</i></a></span>
	                                        <p><a href="#">Fusce gravida tortor felis, ac dictum risus sagittis</a></p>
	                                        <h3>Fab 10, 2016</h3>
	                                    </li>
	                                    <li>
	                                        <span><a className="plus" href="#"><img src="images/footer/2.png" alt="" /><i>+</i></a></span>
	                                        <p><a href="#">Fusce gravida tortor felis, ac dictum risus sagittis</a></p>
	                                        <h3>Fab 10, 2016</h3>
	                                    </li>

	                                </ul>
	                            </div>
	                        </div>
	                        <div className="col-sm-6 col-md-3 col-xs-12">
	                            <div className="footer_block">
	                                <h4>Contact Information</h4>
	                                <ul className="personal-info">
	                                    <li><i className="fa fa-map-marker"></i> 3rd Floor,Link Arcade Model Town, BBL, USA.</li>
	                                    <li><i className="fa fa-envelope"></i> Support@domain.com</li>
	                                    <li><i className="fa fa-phone"></i> (0092)+ 124 45 78 678 </li>
	                                    <li><i className="fa fa-clock-o"></i> Mon - Sun: 8:00 - 16:00</li>
	                                </ul>
	                            </div>
	                        </div>

	                    </div>
	                </div>
	            </footer>
	            <section className="footer-bottom-section">
	                <div className="container">
	                    <div className="row">
	                        <div className="col-md-12 col-sm-12 col-xs-12">
	                            <div className="footer-bottom">
	                                <div className="container">
	                                    <div className="row">
	                                        <div className="col-md-12 col-sm-12 col-xs-12">
	                                            <p>Copyright ©2016 - Opportunities A Mega Job Board Template - All rights Reserved. Made By <a href="http://themeforest.net/user/scriptsbundle"> ScriptsBundle </a></p>
	                                            <p>Reproduction of material from scriptsBundle without permission is strictly prohibited. </p>
	                                        </div>
	                                        <div className="col-md-12 col-sm-12 col-xs-12 hidden-xs hidden-sm">
	                                            <ul className="footer-menu">
	                                                <li>
	                                                    <a href="#">Jobs in australia</a>
	                                                </li>
	                                                <li>
	                                                    <a href="#">Jobs in malaysia</a>
	                                                </li>
	                                                <li>
	                                                    <a href="#">Jobs in england</a>
	                                                </li>
	                                                <li>
	                                                    <a href="#">Jobs in saudi arabia</a>
	                                                </li>
	                                                <li>
	                                                    <a href="#">Jobs in south africa</a>
	                                                </li>
	                                                <li>
	                                                    <a href="#">Jobs in saudi Pakistan</a>
	                                                </li>
	                                            </ul>
	                                        </div>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </section>
	        </div>
		);
	}
}

export default Footer;