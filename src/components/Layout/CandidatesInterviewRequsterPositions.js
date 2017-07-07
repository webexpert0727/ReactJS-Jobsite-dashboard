import React, { Component } from 'react';
import { getApiPositionsUUID } from '../../api/requests'

export default class CandidatesInterviewRequsterPositions extends Component {

	constructor(props) {
    super(props);
    this.componentDidMount();
    this.state = {
      data: []
    };
  }

getPositions() {
		getApiPositionsUUID(1)
     .then(response => {
		   this.setState({data: response.data})
 });

}

  componentDidMount() { 
		this.getPositions();
}

	render() {
        var rows = [];
        const List = this.state.data.map((item, index) =>
             rows.push(
                                            <div className="job-box job-box-2">
		                                    <div className="col-md-2 col-sm-2 col-xs-12 hidden-xs hidden-sm">
		                                        <div className="comp-logo">
		                                            <a href=""><img src="images/company/5.png" className="img-responsive" alt="scriptsbundle" /> </a>
		                                        </div>

		                                    </div>
		                                    <div className="col-md-10 col-sm-10 col-xs-12">
		                                        <div className="job-title-box">
		                                            <a href="#">
		                                                <div className="job-title">{item.title}</div>
		                                            </a>
		                                            <a href="#"><span className="comp-name">{item.location} </span></a>
		                                            <a href="" className="job-type jt-full-time-color">
		                                                <i className="fa fa-clock-o"></i> Full time
		                                            </a>
		                                        </div>
		                                        <p>{item.description}<a href="">Read More</a> </p>
		                                    </div>
		                                    <div className="job-salary">
		                                        <i className="fa fa-money"></i> $400 - $500
		                                    </div>
											</div>

			 )
                                      );
              
    
    return(
    <div>{rows}</div>   
    ); 
         
}  
}