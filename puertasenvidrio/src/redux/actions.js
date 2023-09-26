import axios from "axios"


export const GET_IMAGEN = "GET_IMAGEN"
export const POST_IMAGEN="POST_IMAGEN"
export const GET_FACHADA = "GET_FACHADA"
export const POST_FACHADA = "POST_FACHADA"
export const GET_DIVISIONES = "GET_DIVISIONES"
export const POST_DIVISIONES ="POST_DIVISIONES"
export const GET_LOGIN = "GET_LOGIN"
export const LOGIN_ERROR= "LOGIN_ERROR"
export const GET_ADMIN='GET_ADMIN'
export const AUTHENTICATED = "AUTHENTICATED"

export const login = (payload) => {
    return {
      type: GET_LOGIN,
      payload: payload
    };
  };
  export const authenticated = (userData) => {
    return async function(dispatch) {
      try {
        const response = await axios.get('http://localhost:3001/admin/name', userData);
        const datas =  response.data
        dispatch({type: AUTHENTICATED, payload: datas})
        alert('LOGUEADO');
        // Si tu API devuelve algún dato relacionado con la autenticación, puedes usarlo aquí.
        // Por ejemplo, puedes dispatch una acción con el token de autenticación.
      // Esto dependerá de cómo manejes la autenticación en tu aplicación.
        return response;
      } catch (error) {
      }
    };
  };
  export const loginError = (errorMessage) => {
    return {
      type: 'LOGIN_ERROR',
      payload: errorMessage,
    };
  };
  

export function postImagen (payload){
    return async function(){
        try{
const response = await axios.post('http://localhost:3001/ipuertasenvidrio', payload)
alert('IMAGE CREATED!')      
return response;
        }catch(error){
alert('IMAGE NOT CREATED')      
        }
    }
}

export const getImagen = ()=>{
    return async function(dispatch){
        try{
            const imageData = await axios.get(
                "http://localhost:3001/ipuertasenvidrio"
                )
            const image = imageData.data
            dispatch({type:GET_IMAGEN, payload: image})
        }catch(error){
            alert('IMAGE NOT EXIST')
        }
    
    }
}

export const getAdmin = ()=>{
  return async function(dispatch){
try {
  const response = await axios.get('http://localhost:3001/admin')
  const adminInfoE= response.data[0].email
  const adminInfoP= response.data[0].password
  dispatch({type: GET_ADMIN, payload: {adminInfoE, adminInfoP}})
} catch (error) {
  alert('USUARIO INCORRECTO')
}
  }
}



export function postFachada (payload){
    return async function(){
        try{
const response = await axios.post('http://localhost:3001/fachadasenvidrio', payload)
alert('IMAGE CREATED!')      
return response;
        }catch(error){
alert('IMAGE NOT CREATED')      
        }
    }
}


export const getFachada = ()=>{
    return async function(dispatch){
        try{
            const imageData = await axios.get(
                "http://localhost:3001/fachadasenvidrio"
                )
            const image = imageData.data
            dispatch({type:GET_FACHADA, payload: image})
        }catch(error){
            alert('IMAGE NOT EXIST')
        }
    
    }
}


export function postDivisiones(payload){
    return async function(){
        try{
const response = await axios.post('http://localhost:3001/divisionesdevidrio', payload)
alert('IMAGE CREATED!')      
return response;
        }catch(error){
alert('IMAGE NOT CREATED')      
        }
    }
}

export const getDivisiones = ()=>{
    return async function(dispatch){
        try{
            const imageData = await axios.get(
                "http://localhost:3001/divisionesdevidrio"
                )
            const image = imageData.data
            dispatch({type:GET_DIVISIONES, payload: image})
        }catch(error){
            alert('IMAGE NOT EXIST')
        }
    
    }
}

export const getLogin= (userData) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`http://localhost:3001/admin/name`, {
          params: userData, // Cambia de enviar una solicitud POST a una solicitud GET con parámetros
        });
        if (response.data) {
          dispatch(login());
        } else {
          dispatch(loginError('Invalid credentials'));
        }
      } catch (error) {
        dispatch(loginError('An error occurred'));
      }
    };
  };

    export default getImagen