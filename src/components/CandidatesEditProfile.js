import React, { Component } from 'react';
import CandidatesLeftMenu from './Layout/CandidatesLeftMenu';
import CandidatesBottom from './Layout/CandidatesBottom';
import Layout from './Layout/Layout';

class CandidatesEditProfile extends Component {

	render () {
		return (
			<Layout>
				 <section className="job-breadcrumb">
		            <div className="container">
		                <div className="row">
		                    <div className="col-md-6 col-sm-7 co-xs-12 text-left">
		                        <h3>Edit profile</h3>
		                    </div>
		                    <div className="col-md-6 col-sm-5 co-xs-12 text-right">
		                        <div className="bread">
		                            <ol className="breadcrumb">
		                                <li><a href="#">Home</a> </li>
		                                <li className="active">edit profile</li>
		                            </ol>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </section>
		        <section className="dashboard-body">
		            <div className="container">
		                <div className="row">
		                    <div className="col-md-12 col-sm-12 col-xs-12">
		                    
		                        <CandidatesLeftMenu />

		                        <div className="col-md-8 col-sm-8 col-xs-12">
		                            <div className="heading-inner first-heading">
		                                <p className="title">Edit Profile</p>
		                            </div>
		                            <div className="col-md-12 col-sm-12 col-xs-12 nopadding">
		                                <div className="profile-edit row">

		                                    <form onSubmit={this.sumbitEditForm}>
		                                        <div className="col-md-6 col-sm-12">
		                                            <div className="form-group">
		                                                <label>First Name <span className="required" >*</span></label>
		                                                <input type="text" name="firstName" placeholder="" className="form-control" />
		                                            </div>
		                                        </div>
		                                        <div className="col-md-6 col-sm-12">
		                                            <div className="form-group">
		                                                <label>Last Name <span className="required">*</span></label>
		                                                <input type="text"  placeholder="" className="form-control" />
		                                            </div>
		                                        </div>
		                                        <div className="col-md-6 col-sm-12">
		                                            <div className="form-group">
		                                                <label>Date Of Birth <span className="required">*</span></label>
		                                                <input type="text" placeholder="" className="form-control" />
		                                            </div>
		                                        </div>
		                                        <div className="col-md-6 col-sm-12">
		                                            <div className="form-group">
		                                                <label>Email <span className="required">*</span></label>
		                                                <input type="email" placeholder="" className="form-control" />
		                                            </div>
		                                        </div>
		                                        <div className="col-md-6 col-sm-12">
		                                            <div className="form-group">
		                                                <label>Phone <span className="required">*</span></label>
		                                                <input type="text" placeholder="" className="form-control" />
		                                            </div>
		                                        </div>
		                                        <div className="col-md-6 col-sm-12">
		                                            <div className="form-group">
		                                                <label>Last Education <span className="required">*</span></label>
		                                                <input type="text" placeholder="" className="form-control" />
		                                            </div>
		                                        </div>
		                                        <div className="col-md-12 col-sm-12">
		                                            <div className="form-group">
		                                                <label>Address <span className="required">*</span></label>
		                                                <input type="text" placeholder="" className="form-control" />
		                                            </div>
		                                        </div>
		                                        <div className="col-md-12 col-sm-12">
		                                            <div className="form-group">
		                                                <label>About yourSelf <span className="required">*</span></label>
		                                                <textarea cols="6" rows="8" placeholder="" className="form-control"></textarea>
		                                            </div>
		                                        </div>
		                                        <div className="col-md-12 col-sm-12">
		                                            <button className="btn btn-default pull-right" value="Submit"> Save Profile <i className="fa fa-angle-right"></i></button>
		                                        </div>
		                                    </form>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </section>
		        <CandidatesBottom />
		    </Layout>
		);
	}
}

export default CandidatesEditProfile;