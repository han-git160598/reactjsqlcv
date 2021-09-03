
import React from 'react';
import TaskItem from './TaskItem';
import TaskStatus from './TaskStatus';


class TaskList extends React.Component {
    constructor(){
        super()
        this.state={
            idTask:null,
            name:'',
            status:"true"
        }
    }
   
    handleDeleteTask= (id)=>{
      let arrTasks = JSON.parse(localStorage.getItem('tasks'))
      if(arrTasks)
      {
        let arrNew = arrTasks.filter(
            (data)=>data.id !== id
          )
        this.props.handleDeleteTask(arrNew)
      }
    }
    handleDetailTask =(id)=>{
        
        let arrTasks = JSON.parse(localStorage.getItem('tasks'))
        if(arrTasks)
        {
            let result =  arrTasks.filter(
                data=>data.id === id
            )
            this.setState({name:result[0].name,status:result[0].status,idTask:id })
        }
       
    }
    handeChangeStatus =(data)=>{
        this.setState({status:data})
    }
    handleChangeName = (e)=>{
        this.setState({name:e.target.value})
    }
   
    handleUpdateTask = ()=>{
        let arrTasks = JSON.parse(localStorage.getItem('tasks'))
     
        if(arrTasks && this.state.idTask)
        {
         
            for(let i=0;i<arrTasks.length;i++)
            {
               
                if(arrTasks[i].id === this.state.idTask)
                {
                    console.log(this.state.status)
                    arrTasks[i].name=this.state.name
                    arrTasks[i].status=this.state.status
                }
            }
        }
        
        this.props.handleUpdateTask(arrTasks)
    }
	render() {
        let num = 0;
        let elmTasks = this.props.tasks.map((task,index)=>{
            num++;
            return (
                <TaskItem 
                    task={task} 
                    num={num} 
                    key={index}
                    handleDeleteTask={this.handleDeleteTask}
                    handleDetailTask = {this.handleDetailTask}
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
                                <input onChange={this.handleChangeName} type="text" value={this.state.name} className="form-control"  />
                            </td>
                            <td>
                                <TaskStatus 
                                    activeStatus={this.state.status}
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

export default TaskList;
















