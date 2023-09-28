import {GET_IMAGEN, POST_IMAGEN,GET_FACHADA, POST_FACHADA,GET_DIVISIONES,POST_DIVISIONES, GET_LOGIN,LOGIN_ERROR, GET_ADMIN, AUTHENTICATED, POST_ADMIN} from "./actions";

const initialState={
    imagenes:  [],
    fachadas: [],
    divisiones:[],
    isLoggeIn: [],
    admin: {},
    auth: []
}



const rootReducer=(state=initialState,action)=>{
switch(action.type){

case AUTHENTICATED:
    return{
...state,
auth: action.payload  
};
case POST_ADMIN:
    return {
        ...state,
        admin: action.payload
};
    case GET_ADMIN:
        return {
       ...state,
admin: action.payload
        
    };
    case GET_IMAGEN:
        return {...state, 
        imagenes: action.payload,
           
    };
    case POST_IMAGEN:
        return{
            ...state,
        }
        case GET_LOGIN:
            return{
                ...state,
                isLoggeIn: action.payload
                
                    }
    
          case LOGIN_ERROR:
            return {
              ...state,
              isLoggedIn: false,
              error: action.payload,
            };
case GET_FACHADA:
    return{...state,
fachadas: action.payload
    }
    
    case POST_FACHADA:
        return{
            ...state,
        }
        
case GET_DIVISIONES:
    return{
        ...state,
divisiones: action.payload
    }

    case POST_DIVISIONES:
        return{
            ...state
        }
    default:
        return{...state};
}
}

export default rootReducer 

//agarrar el primer elemento del string y pasarlo a numero