import React from 'react';
import { connect } from 'react-redux';
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
            status:'',
            idTask:null,
            name:''
           
        }
        
    }
    selectedStatus = (e)=>{
        this.props.handeChangeStatus(e.target.value)
        this.setState({status:e.target.value})
    }   
    UNSAFE_componentWillReceiveProps(nextProps){   
        if(nextProps.detailtask.length === 1 && nextProps.detailtask[0].id !==null)
        { 
            this.props.EditTaskName(nextProps.detailtask[0].name)
            this.setState({
                name:nextProps.detailtask[0].name,
                status:nextProps.detailtask[0].status,
                idTask:nextProps.detailtask[0].id
            
            });
        }else{
            
            this.setState({
                idTask:null,
                status:"true",
                name:''
            })
        }
    }
	render() {
        
   
		return (
            <select onChange={this.selectedStatus} value={this.state.status} className="form-control" >
                 <option  value={"true"}>Kích hoạt</option>
                 <option  value={"false"}>Ẩn</option>
            </select>
		);
	}
}

const mapStateToProps  = (state) =>{
    return {
        detailtask:state.detailtask
    }
}
export default connect(mapStateToProps,null) (TaskStatus);
