import { logout, login } from "../actions/session";

export const postUser = user => (
  $.ajax({
    url: '/api/users',
    data: {user},
    method: 'Post'
  }
  )
)



export const postSession = user => (
  $.ajax({
    url: '/api/session',
    data: { user },
    method: 'Post'
  }
  )
)

export const deleteSession = () => (
  $.ajax({
    url: '/api/session',
    method: 'Delete'
  }
  )
)

// export const postUser = (user)=>(
//   $.ajax({
//     method: 'post', 
//     url:'/api/users', 
//     data:{user}
//   })
// )

// export const postSession = (user)=>(
//   $.ajax({
//     method: 'post',
//     url: 'api/session',
//     data: {user}
//   })
// )

// export const deleteSession = ()=>(
//   $.ajax({
//     method:'delete',
//     url: 'api/session'
//   })
// )





// export const postSession = (user)=>(
//   $.ajax({
//     method: 'post',
//     url: '/api/users',
//     data: {user}
//   })
// );
// export const postUser =(user)=>{
//   $.ajax({
//     method: 'post',
//     url: 'api/sessions',
//     data: {user}
//   })
// };

// export const deleteSession =()=>(
//   $.ajax({
//     method: 'delete',
//     url: 'api/session'
//   })
// );

// /// actions


// export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
// export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

// const receiveCurrentUser = (user)=>({
//   type: RECEIVE_CURRENT_USER,
//   user
// })

// const logoutCurrentUser =()=>({
//   type: LOGOUT_CURRENT_USER
// })

// export const createUser =(user)=>dispatch=>(
//   postUser(user)
//   .then(user=>dispatch(receiveCurrentUser(user)))
// )

// export const loginUser = user =>dispatch =>(
//   postSession(user)
//   .then(user=>dispatch(receiveCurrentUser(user)))
// )

// export const logoutUser = ()=>dispatch =>(
//   deleteSession()
//   .then(dispatch(logoutCurrentUser()))
// )