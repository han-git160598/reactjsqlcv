import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends React.Component {
    constructor(){
        super()
        this.state={
            status:false,
            name:''
        }
    }
    handleHideAddTask = () =>{
        this.props.handleShowAddTask(false)
    }
    addTaskName =(e)=>{
        this.setState({name:e.target.value})
    }
    addTaskStatus = (e)=>{
        this.setState({status:e.target.value})
    }
    addTask =()=>{
        if(this.state.name)
        {
            let dataTask = {name:this.state.name, status:this.state.status}
            this.props.onAddTask(dataTask)
            this.setState({name:''})
            
        }
    }
	render() {
		return (
		
            <div className="panel panel-danger">
            <div className="panel-heading">
                  <h3 className="panel-title">
                      Thêm công việc
                      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="fa fa-times-circle mr-5" onClick={this.handleHideAddTask}></span>
                  </h3>
            </div>
            <div className="panel-body">
                
                <form>
                    <div className="form-group">
                        <label >Tên</label>
                        <input onChange={this.addTaskName} value={this.state.name} type="text" className="form-control"/> 
                    </div>
                    <div className="form-group">
                        <label  >Trạng thái</label>
                        <select onChange={this.addTaskStatus} className="form-control" required="required">
                            <option value={false}>Ẩn</option>
                            <option value={true}>Kích hoạt</option>
                            
                        </select>
                    </div>
                </form>
                <center>
                <button type="button" className="btn btn-danger" onClick={this.addTask}><i className="fa fa-plus"></i>  Thêm</button>
                &nbsp; &nbsp; 
                <button type="button" className="btn btn-primary"><i className="fa fa-remove"></i>  Hủy bỏ</button>
                </center>

            </div>
      </div>
                
  
            
		);
	}
}

const mapStateToProps = (state)=>{
    return {

    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return {
        onAddTask: (task)=>{
            dispatch(actions.addTask(task)); 
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
