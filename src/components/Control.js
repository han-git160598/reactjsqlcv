import React from 'react';
import Search from './Search';
import Sort from './Sort';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class Control extends React.Component {
    constructor(props){
        super(props)
        this.state={
            keyword:'',
            sortTasks:'',
            filterTasks:''
        }
    }
    handleSearchTasks=(keyword)=>{
        var data = {
            keyword:keyword,
            sortTasks:this.state.sortTasks,
            filterTasks:this.state.filterTasks,
        }
        this.props.onFilterTask(data)
        this.setState({keyword:keyword})
        
       
    }
    SortData = (selected) =>{
        var data = {
            keyword:this.state.keyword,
            sortTasks:selected,
            filterTasks:this.state.filterTasks,
        }
        this.props.onFilterTask(data)
        this.setState({sortTasks:selected})
        
    
    }
    filterData = (selected)=>{
        var data = {
            keyword:this.state.keyword,
            sortTasks:this.state.sortTasks,
            filterTasks:selected
        }
        this.props.onFilterTask(data)
        this.setState({filterTasks:selected})
        
    }

	render() {
		return (
		
            <div className="row mr-15">
                <Search handleSearchTasks={this.handleSearchTasks} />
                <Sort SortData={this.SortData} filterData={this.filterData} />
            </div>
  
            
		);
	}
}

const mapStateToProps  = (state) =>{
    return {
        
    }
}
const mapDispatchToProps =(dispatch,props)=>{
    return {
        onFilterTask: (data)=>{
            dispatch(actions.findTasks(data))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Control);
