import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends React.Component {
    constructor(props){
        super(props)
        this.state={
            id:''
        }
    }
    
    handleDeleteTask =(id)=>{
        this.props.onDeleteTask(id)
    }
    handleDetailTask = (id)=>{
        this.props.onDetailTask(id)
    }
    
	render() {
 
        let task = this.props.task1;
        let active = task.status;
        let status='';
        if(active ==="true")
        {
            status = <span className="label label-success">Kích hoạt</span>
        }else{
            status = <span className="label label-primary">Ẩn</span>
        }
		return (
            <tr>
                <td  className="text-center">{this.props.num}</td>
                <td className="text-center">
                    {task.name}
                </td>
                <td className="text-center">
                     {status} 
                </td>
                <td className="text-center">
                
                <button type="button" onClick={()=>this.handleDetailTask(task.id)} className="btn btn-danger"><i className="fa fa-edit"></i> Sửa</button>
                &nbsp;&nbsp;
                <button type="button" onClick={()=>this.handleDeleteTask(task.id)} className="btn btn-primary"><i className="fa fa-trash-alt"></i> Xóa</button>
                
                </td>
            </tr>
        );
	}
} 
const mapStateToProps = (state)=>{
    return {
       
    }
}
const mapDispatchToProps = (dispatch, props) =>{ 
    return {
        onDeleteTask: (id)=>{
            dispatch(actions.deleteTask(id)); 
        },
        onDetailTask: (id)=>{
            dispatch(actions.detailTask(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskItem);

















