export default (state={serverInfo:{CPU:[]},processInfo:{
    name:'Not Connected',
    recordInfo : {
        recordsProcessed : 0,
        recordsRemaining : 0
    }
}},action)=>{
    switch(action.type){
        case 'CONNECTION_ACCEPTED':
            return({...state,processInfo:{
                ...state.processInfo,
                name:action.payload
            }});
        case 'RECORD_UPDATE':
                    console.log(action.payload)
                    return({...state,processInfo:{
                        ...state.processInfo,
                        recordInfo:action.payload
                    }});
        case 'CPU_UPDATE':
            return({...state,serverInfo:{CPU:action.payload}});
        default:
            return(state);
    }
}