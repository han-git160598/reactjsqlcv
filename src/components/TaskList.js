
import React from 'react';
import TaskItem from './TaskItem';
import TaskStatus from './TaskStatus';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
class TaskList extends React.Component {
    constructor(props){
        super(props)
        this.state={
            idTask:null,
            name:'',
            status:"true"
        }
    }
    EditTaskName =(data)=>{
        this.setState({name:data})
    }
    handeChangeStatus =(data)=>{
        this.setState({status:data})
    }
    handleChangeName = (e)=>{
      
        this.setState({name:e.target.value})
    }
  
    handleUpdateTask = ()=>{
        var id = this.props.detailtask.length === 1 ? this.props.detailtask[0].id : '';
        if(id && this.state.name)
        {
            var data = {name:this.state.name, status:this.state.status, id:id}
            this.props.onUpdate(data)
            this.setState({ 
                idTask:null,
                name:'',
                status:"true"
            })
        }
        
    }

	render() {
       
        let num = 0;
        let elmTasks = this.props.tasks.map((task,index)=>{
            num++;
            return (
                <TaskItem 
                    task1={task} 
                    num={num} 
                    key={index}
                /> 
            )      
        })
		return (
            <div className="row mr-15">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Trạng Thái</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    <tbody> 
                        <tr>
                            <td className="text-center">
                               Chi tiết
                            </td>
                            <td>
                                <input onChange={this.handleChangeName} value={this.state.name} type="text" className="form-control"  />
                            </td>
                            <td>
                                <TaskStatus 
                                    EditTaskName = {this.EditTaskName}
                                    handeChangeStatus={this.handeChangeStatus}
                                />
                            </td>
                            <td className="text-center"> 
                                <button onClick={this.handleUpdateTask} type="button" className="btn btn-danger">Cập nhật</button>
                            </td>
                        </tr>
                        {elmTasks}
                        {/* <TaskItem/> */}
                    </tbody>
                </table>
                
            </div>
            </div>
        );
	}
}

const mapStateToProps  = (state) =>{
    
    return {
        tasks :state.tasks,
        detailtask:state.detailtask
    }
}
const mapDispatchToProps =(dispatch,props)=>{
    return {
        onUpdate: (data)=>{
            dispatch(actions.updateTask(data))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (TaskList);
















