import React, { Component } from 'react';
import EmployeeLeftSide from './Layout/EmployeeLeftSide';
import Layout from './Layout/Layout';

class EditProfile extends Component {
	render () {
		return (
			<Layout>
				<section className="job-breadcrumb">
		            <div className="container">
		                <div className="row">
		                    <div className="col-md-6 col-sm-7 co-xs-12 text-left">
		                        <h3>Edit Your Profile</h3>
		                    </div>
		                    <div className="col-md-6 col-sm-5 co-xs-12 text-right">
		                        <div className="bread">
		                            <ol className="breadcrumb">
		                                <li><a href="#">Home</a></li>
		                                <li><a href="#">Dashboard</a></li>
		                                <li className="active">Edit Profile</li>
		                            </ol>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </section>
		        <section className="dashboard-body">
		            <div className="container">
		                <div className="row">
		                    <div className="col-md-12 col-sm-12 col-xs-12 nopadding">
		                        <EmployeeLeftSide />
		                        <div className="col-md-8 col-sm-8 col-xs-12">
		                            <div className="heading-inner first-heading">
		                                <p className="title">Edit Profile</p>
		                            </div>
		                            <div className="profile-edit row">
		                            	<form>
		                            		<div className="col-md-6 col-sm-12">
			                            		<div className="form-group">
		                                            <label>Industry: <span className="required">*</span></label>
		                                            <input type="text" placeholder="" className="form-control" />
		                                        </div>
		                                    </div>
	                                        <div className="col-md-6 col-sm-12">
		                                        <div className="form-group">
		                                            <label>Type of Business Entity <span className="required">*</span></label>
		                                            <input type="text" placeholder="" className="form-control" />
		                                        </div>
		                                    </div>
		                                    <div className="col-md-6 col-sm-12">
		                                        <div className="form-group">
		                                            <label>Established In: <span className="required">*</span></label>
		                                            <input type="text" placeholder="" className="form-control" />
		                                        </div>
		                                    </div>
		                                    <div className="col-md-6 col-sm-12">
		                                        <div className="form-group">
		                                            <label>No. of Employees <span className="required">*</span></label>
		                                            <input type="text" placeholder="" className="form-control" />
		                                        </div>
		                                    </div>
		                                    <div className="col-md-6 col-sm-12">
		                                        <div className="input-group image-preview form-group">
		                                            <label>Profile Image: <span className="required">*</span></label>
		                                            <input type="text" placeholder="Upload Profile Image" className="form-control image-preview-filename" disabled="disabled" />
		                                            <span className="input-group-btn">
		                                    			<button type="button" className="btn btn-default image-preview-clear">
		                                        		<span className="glyphicon glyphicon-remove"></span> Clear
		                                            	</button>
		                                            	<div className="btn btn-default image-preview-input">
		                                                	<span className="glyphicon glyphicon-folder-open"></span>
		                                                	<span className="image-preview-input-title">Browse</span>
		                                                	<input type="file" accept="file_extension" name="input-file-preview" />
		                                            	</div>
		                                            </span>
		                                        </div>
		                                    </div>
		                                    <div className="col-md-6 col-sm-12">
		                                        <div className="input-group image-preview form-group">
		                                            <label>Profile Image: <span className="required">*</span></label>
		                                            <input type="text" placeholder="Upload Cover Image" className="form-control image-preview-filename" disabled="disabled" />
		                                            <span className="input-group-btn">
		                                    			<button type="button" className="btn btn-default image-preview-clear" >
		                                        			<span className="glyphicon glyphicon-remove"></span> Clear
		                                            	</button>
		                                            	<div className="btn btn-default image-preview-input">
			                                                <span className="glyphicon glyphicon-folder-open"></span>
			                                                <span className="image-preview-input-title">Browse</span>
			                                                <input type="file" accept="file_extension" name="input-file-preview" />
		                                            	</div>
		                                            </span>
		                                        </div>
		                                    </div>
		                                    <div className="col-md-6 col-sm-12">
		                                        <div className="form-group">
		                                            <label>Phone: <span className="required">*</span></label>
		                                            <input type="text" placeholder="" className="form-control" />
		                                        </div>
		                                    </div>
		                                    <div className="col-md-6 col-sm-12">
		                                        <div className="form-group">
		                                            <label>Located: <span className="required">*</span></label>
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
		                                            <label>About Company <span className="required">*</span></label>
		                                            <textarea cols="6" rows="8" placeholder="" className="form-control"></textarea>
		                                        </div>
		                                    </div>
		                                    <div className="col-md-12 col-sm-12">
		                                         <button className="btn btn-default pull-right"> Save Profile <i className="fa fa-angle-right"></i></button>
		                                    </div>
		                            	</form>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </section>
		    </Layout>
		);
	}
}

export default EditProfile;