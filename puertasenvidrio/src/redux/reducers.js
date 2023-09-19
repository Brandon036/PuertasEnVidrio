import {GET_IMAGEN, POST_IMAGEN,GET_FACHADA, POST_FACHADA,GET_DIVISIONES,POST_DIVISIONES, GET_LOGIN,LOGIN_ERROR} from "./actions";

const initialState={
    imagenes:  [],
    fachadas: [],
    divisiones:[],
    isLoggeIn: false
}


const rootReducer=(state=initialState,action)=>{
switch(action.type){

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