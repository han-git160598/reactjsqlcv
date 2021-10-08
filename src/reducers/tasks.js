import * as types from './../constains/ActionTypes';

var s4=()=>{
    return Math.floor( (1+Math.random()) *0x10000 ).toString(16).substring(1)
}
var generateID = () =>{
    return s4()+s4()+s4()+s4()
}
 
var data = JSON.parse(localStorage.getItem('tasks'));

var initialState = data ? data : [];
var myReducer = (state = initialState,action)=>{
    
    switch(action.type)
    {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            var newData = JSON.parse(localStorage.getItem('tasks'));
            if(!newData)
            {
                
                newData =[];
            }
            var newTask = {
                id : generateID(),
                name:action.task.name,
                status:action.task.status === "true" ? "true" :"false"
            }
            newData.push(newTask);

            localStorage.setItem('tasks',JSON.stringify(newData))
            return [...newData];   
        case types.DELETE_TASK:
            let arrNew = state.filter(
                (data)=>data.id !== action.id
            )
            localStorage.setItem('tasks',JSON.stringify(arrNew))
            return arrNew;
        case types.UPDATE_TASK:
            var updateData = JSON.parse(localStorage.getItem('tasks'));
            if(updateData && action.data.name)
            {
                for(let i=0;i<updateData.length;i++)
                {
                
                    if(updateData[i].id === action.data.id)
                    {
                        updateData[i].name=action.data.name
                        updateData[i].status=action.data.status
                    }
                }
            }
            var data = [...updateData]
            localStorage.setItem('tasks',JSON.stringify(data))
            return data;
        case types.FILTER_TASK:
            let results = JSON.parse(localStorage.getItem('tasks'));
        	if(results)
        	{   
        		let val = action.data.keyword.toLowerCase();
        		var search =results.filter(data => data.name.toLowerCase().includes(val))
               
        		var data1 =[];
        		if(action.data.sortTasks === '2')
        		{
        			data1 = search.sort((a, b) => b.name.localeCompare(a.name))	
        		}else{
        			data1 = search.sort((a, b) => a.name.localeCompare(b.name))	
        		}
        		var finaldata=data1;
        		if(action.data.filterTasks === '1') 
        		{
        			finaldata =data1.filter(data => data.status === "true")
        		}else if ( action.data.filterTasks === '2')
        		{
        			finaldata =data1.filter(data => data.status === "false")
        		}
        	}
          
            return finaldata;
        default : return state
    }

}
 
export default myReducer;