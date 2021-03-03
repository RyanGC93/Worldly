const isRemembered = () => {
  
  const rememberMe = localStorage.getItem('rememberMe') === 'true';
  const user = rememberMe ? localStorage.getItem('user') : '';
  return user
}
const rememberMe =(remember, user ) =>{
  localStorage.setItem('rememberMe', remember);
  localStorage.setItem('user', remember ? user : '');

}

export {rememberMe, isRemembered}
