import React from 'react';
import './App.css';
import Control from './components/Control';
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList';

class App extends React.Component {
	constructor(props){
		super(props)
		this.state={
			tasks:[],
			isDisplayForm:false,
			clearForm:"false",
		}
	}
	onGenerateData =()=>{
		var tasks = [
			{
				id:this.generateID(),
				name:'REACT JS',
				status:"true"
			},
			{
				id:this.generateID(),
				name:'PHP LARAVEL',
				status:"true"
			},
			{
				id:this.generateID(),
				name:'JAVA',
				status:"false"
			},
			{
				id:this.generateID(),
				name:'RUBY',
				status:"false"
			}
		]
		this.setState({tasks:tasks})
		localStorage.setItem('tasks',JSON.stringify(tasks))
	}
	s4(){
		return Math.floor( (1+Math.random()) *0x10000 ).toString(16).substring(1)
	}
	generateID()
	{
		return this.s4()+this.s4()+this.s4()+this.s4()
	}
	componentDidMount(){	
		if(localStorage && localStorage.getItem('tasks'))
		{
			
			let tasks = JSON.parse(localStorage.getItem('tasks'))
			this.setState({tasks:tasks})	
			
		}
	}
	handleShowAddTask = (result)=>{
		this.setState({isDisplayForm:result})
	}
	handleDeleteTask = (arrTasks)=>{
		localStorage.setItem('tasks',JSON.stringify(arrTasks))
		this.setState({tasks:arrTasks})
	}
	handleAddTask = (data)=>{
		let NewData = JSON.parse(localStorage.getItem('tasks'));
		if(NewData)
		{	
			data.id = this.generateID()
			NewData.push(data);
			localStorage.setItem('tasks',JSON.stringify(NewData))
			this.setState({tasks:NewData})
		}else{
			let Data=[];
			data.id = this.generateID()
			Data.push(data);
			localStorage.setItem('tasks',JSON.stringify(Data))
			this.setState({tasks:Data})
		}
	}
	handleUpdateTask = (data)=>{
		this.setState({tasks:data, clearForm:"true"})
		localStorage.setItem('tasks',JSON.stringify(data))

	}
	
	handleControlData1 =(keyword,sort,filter)=>{
		let results = JSON.parse(localStorage.getItem('tasks'));
		
		if(results)
		{
			let val = keyword.toLowerCase();
			var search =results.filter(data => data.name.toLowerCase().includes(val))
			var data=[]
			
			if(sort == 2)
			{
				data = search.sort((a, b) => b.name.localeCompare(a.name))	
			}else{
				data = search.sort((a, b) => a.name.localeCompare(b.name))	
			}
			var finaldata=data;
			if(filter == 1)
			{
				finaldata =data.filter(data => data.status == "true")
			}else if ( filter == 2)
			{
				finaldata =data.filter(data => data.status == "false")
			}
			this.setState({tasks:finaldata})
		}
	}

	render() {
		let isDisplayForm = this.state.isDisplayForm ? 
			<TaskForm 
				isDisplayForm={this.state.isDisplayForm}
				handleShowAddTask = {this.handleShowAddTask}
				addTask = {this.handleAddTask}
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
						&nbsp; &nbsp; 
						<button 
							type="button" 
							className="btn btn-danger"
							onClick={this.onGenerateData}
							
							>							
							Generate
						</button>
						
						<Control 
							handleControlData1={this.handleControlData1}
						/> 
						<TaskList 
							tasks ={this.state.tasks}
							handleDeleteTask={this.handleDeleteTask}
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
