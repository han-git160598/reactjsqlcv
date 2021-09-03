import React from 'react';


class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            keyword:''
        }
    }
    handleSearchTasks =(e)=>{
        this.props.handleSearchTasks(e.target.value)
    }
	render() {
		return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input onChange={this.handleSearchTasks} type="text" className="form-control" id="exampleInputAmount" placeholder="Search" />
                    <span className="input-group-btn">
                        <button type="button" className="btn btn-default">
                            <span className="fa fa-search mr-5"></span>
                        </button>
                    </span>
                </div>
            </div> 
		);
	}
}

export default Search;
