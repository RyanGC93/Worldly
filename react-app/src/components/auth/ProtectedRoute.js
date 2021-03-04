import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = props => {
  return (
    <Route {...props}>
      {(props.authenticated)? props.children  : <Redirect to="/login" />}
    </Route>
  )
};




// export const PrivateRoute = () => {
  
//   const sessionUser = useSelector(state => state.session.user);
  
//   useEffect(() => {

//     (async () => {
//       const user = await authenticate();
//       console.log(user)
//       if (!user.errors) {
//         setAuthenticated(true);
//       }
//       setLoaded(true);
//     })();
//   },[]);
  
// }

export default ProtectedRoute