import React, { Component } from 'react';
import CandidatesLeftMenu from './Layout/CandidatesLeftMenu';
import CandidatesBottom from './Layout/CandidatesBottom';
import Layout from './Layout/Layout';
import CandidatesInterviewRequsterPositions from '../components/Layout/CandidatesInterviewRequsterPositions';

import { getApiCandidates } from '../api/requests/'

class CandidatesInterviewRequests extends Component {
	constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

getCandidates() {
		getApiCandidates()
     .then(response => {
		   this.setState({data: response.data[0]})
 });

}
  componentDidMount() { 
		this.getCandidates();

}
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
		                    <div className="col-md-12 col-sm-12 col-xs-12 nopadding">
		                        
		                        <CandidatesLeftMenu />

		                        <div className="col-md-8 col-sm-8 col-xs-12">
		                            <div className="heading-inner first-heading">
		                                <p className="title">Job applied</p>
		                            </div>
		                       <CandidatesInterviewRequsterPositions/>
		                            <div className="col-md-12 col-sm-12 col-xs-12 nopadding">
		                                <div className="pagination-box clearfix">
		                                    <ul className="pagination">
		                                        <li>
		                                            <a href="#" aria-label="Previous"> <span aria-hidden="true">«</span> </a>
		                                        </li>
		                                        <li className="active"><a href="#">1</a></li>
		                                        <li><a href="#">2</a></li>
		                                        <li><a href="#">3</a></li>
		                                        <li><a href="#">4</a></li>
		                                        <li><a href="#">5</a></li>
		                                        <li>
		                                            <a href="#" aria-label="Next"> <span aria-hidden="true">»</span> </a>
		                                        </li>
		                                    </ul>
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

export default CandidatesInterviewRequests;