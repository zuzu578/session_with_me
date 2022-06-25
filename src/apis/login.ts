import axios from 'axios';

const doLogin = (userId : any , userPassword : any) => {
   return new Promise((resolve,reject)=>{
       resolve(axios.post(''));
   })
}

export { doLogin };  