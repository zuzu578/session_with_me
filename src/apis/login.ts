import axios from 'axios';

const doLogin = (userId : any , userPassword : any) => {
    return new Promise((resolve,reject)=>{
        resolve(
            axios.post("http://localhost:8081/login/login.do", {
                userId: userId,
                userPassword: userPassword
            })
        )
    })
}

export { doLogin };  