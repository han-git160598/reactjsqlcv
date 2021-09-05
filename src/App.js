import React from 'react';
import './App.css';
import Control from './components/Control';
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList';

class App extends React.Component {
	constructor(props){
		super(props)
		this.state={
		 
			isDisplayForm:false,
			clearForm:"false",
		}
	}
	handleShowAddTask = (result)=>{
		this.setState({isDisplayForm:result})
	}

	handleUpdateTask = (data)=>{
		this.setState({tasks:data, clearForm:"true"})
		localStorage.setItem('tasks',JSON.stringify(data))

	}
	

	render() {
		let isDisplayForm = this.state.isDisplayForm ? 
			<TaskForm 
				isDisplayForm={this.state.isDisplayForm}
				handleShowAddTask = {this.handleShowAddTask}
				
		/> :''
		return ( 
			
			<div className="container">
				<div className="text-center">
					<h1>Quản lý công việc</h1>
				</div>
				<hr/>
				<div className="row">
					<div className={isDisplayForm ?"col-xs-4 col-sm-4 col-md-4 col-lg-4" :""}>
						{isDisplayForm}
					</div>
					<div className={isDisplayForm ?"col-xs-8 col-sm-8 col-md-8 col-lg-8" :"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
						<button type="button" className="btn btn-danger" onClick={()=>this.handleShowAddTask("true")}>
							Thêm công việc 
						</button>
						
						<Control 

						/> 
						<TaskList 
							handleUpdateTask ={this.handleUpdateTask}
							clearForm={this.state.clearForm}
						/>
						
					</div>
				</div>

			</div>
			
		);
	}
}

export default App;
