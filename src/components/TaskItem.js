
import React from 'react';


class TaskItem extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state ={
           
    //     }
    // }
    handleDeleteTask =(id)=>{
        this.props.handleDeleteTask(id)
    }
    handleDetailTask = (id)=>{
        
        this.props.handleDetailTask(id)
    }
	render() {
        let task = this.props.task;
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
                
                <button type="button" onClick={()=>this.handleDetailTask(task.id)} className="btn btn-danger">Sửa</button>
                &nbsp;&nbsp;
                <button type="button" onClick={()=>this.handleDeleteTask(task.id)} className="btn btn-primary">Xóa</button>
                
                </td>
            </tr>
        );
	}
}

export default TaskItem;
















