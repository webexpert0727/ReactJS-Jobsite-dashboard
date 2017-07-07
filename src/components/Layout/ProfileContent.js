import React, { Component } from 'react';
import { getApiCandidates } from '../../api/requests'
export default class ProfileContent extends Component {

	constructor(props) {
    super(props);
    this.componentDidMount();
    this.state = {
      data: []
    };
  }

getCandidates() {
		getApiCandidates()
     .then(response => {
		   this.setState({data: response.data})
		   debugger;
 });

}

  componentDidMount() { 
		this.getCandidates();
		debugger;
}

	render() {
        var rows = [];
        const List = this.state.data.map((item) =>
             rows.push(<div className="profile-content">
		                                <div className="card">
		                                    <div className="firstinfo">
		                                    	<img src="images/users/12.jpg" alt="" className="img-circle img-responsive" />
		                                        <div className="profileinfo">
		                                            <h1> <a href="">{item.fullName} </a></h1>
		                                            <h3>{item.industry}</h3>
		                                            <p className="bio">{item.summary}</p>
		                                            <div className="profile-skills">
		                                            	<span> laravel </span> <span> css </span> <span> javascript </span> <span> php </span> <span> wordpress </span> 
		                                            </div>
		                                            <div className="hire-btn">
		                                            	<a href="" className="btn-default" > <i className="fa fa-location-arrow"></i> Hire Me</a>
		                                            </div>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>)
                                      );
              
    
    return(
    <div>{rows}</div>   
    ); 
         
}  
}