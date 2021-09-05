import * as types from './../constains/ActionTypes';

export const listAll = ()=>{
    return {
        type  : types.LIST_ALL,
    }
}
export const addTask = (task)=>{
    
    return {
        type  : types.ADD_TASK,
        task:task
    }   
} 

export const deleteTask = (id)=>{
 
    return {
        type: types.DELETE_TASK,
        id:id
    }
}
export const detailTask = (id)=>{
    return {
        type:types.DETAIL_TASK,
        id:id
    }
}
export const updateTask = (data)=>{
    return {
        type: types.UPDATE_TASK,
        data:data
    }
}
export const findTasks = (data)=>{
    return {
        type: types.FILTER_TASK,
        data:data
    }
}