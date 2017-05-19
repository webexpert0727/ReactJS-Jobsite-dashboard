import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
  render() {
    return (
    	<div className="page category-page">
            <div id="spinner">
                <div className="spinner-img">
                    <img alt="Opportunities Preloader" src="images/loader.gif" />
                    <h2>Please Wait.....</h2>
                </div>
            </div>
	    	<Header />
	        	{this.props.children}
	        <Footer />
	    </div>
    );
  }
}

export default Layout;