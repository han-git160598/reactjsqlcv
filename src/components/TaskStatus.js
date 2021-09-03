import React from 'react';

class TaskStatus extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            options:[
                {
                    label:'Kích hoạt',
                    value:"true"
                },
                {
                    label:'Ẩn',
                    value:"false"
                }
            ],
        }
        
    }
    selectedStatus = (e)=>{
        this.props.handeChangeStatus(e.target.value)
        this.setState({selectedStatus:e.target.value})
    }   
	render() {
        var status =this.props.activeStatus
    
		return (
            <select onChange={this.selectedStatus} value={status} className="form-control" >
                 <option  value={"true"}>Kích hoạt</option>
                 <option  value={"false"}>Ẩn</option>
            </select>
		);
	}
}

export default TaskStatus;
