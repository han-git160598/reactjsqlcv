import React from 'react';
import Search from './Search';
import Sort from './Sort';


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
        this.props.handleControlData1(keyword,this.state.sortTasks,this.state.filterTasks)
        this.setState({keyword:keyword})
        
       
    }
    SortData = (selected) =>{
        this.props.handleControlData1(this.state.keyword,selected,this.state.filterTasks)
        this.setState({sortTasks:selected})
        
    
    }
    filterData = (selected)=>{
        this.props.handleControlData1(this.state.keyword,this.state.sortTasks,selected)
        console.log('vung2',selected)
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

export default Control;
