import * as types from './../constains/ActionTypes';

function datatask(){
    return JSON.parse(localStorage.getItem('tasks'));
}

var initialState = datatask() ? datatask() : [];
var myReducer = (state = initialState,action)=>{
    var data = datatask();
    switch(action.type)
    {
        case types.DETAIL_TASK:
            let result = data.filter((v)=>v.id === action.id)
            return result ;
        default : return state
    }

}
 
export default myReducer;