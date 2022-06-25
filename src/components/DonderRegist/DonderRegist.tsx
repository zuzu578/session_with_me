import { useState } from 'react';
import { doLogin } from '../../apis/login';
const DonderRegistComponents = () => {

    const [getAccount , setAccount] = useState('');
    const [getPassword , setPassword] = useState('');

    const login = () => {
        doLogin(getAccount ,getPassword)
        .then((res : any)=>{

        })
        .catch((e : any)=>{
            e.message;
        })
    }

    const getPw = (e:any) => {
        setPassword(e.target.value);

    }

    const getId = (e:any) => {
        setAccount(e.target.value);
    }

    return(
        <div>
            <div className="loginFrom">
                <div className="image">
                    <img src='https://taiko-ch.net/images/top/slide/slide_ac.jpg'/>
                </div>
    
            </div>
            

            <div className="login">
                
                <div className="login_wrapper">
                <h3 className="text_01"> 동더히로바에 로그인하고 서비스를 이용해보세요! </h3>
                    <div className="input-group mb-3">
                        <input type="text" onChange={getId} className="form-control" placeholder="반다이남코 아이디"  aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" onChange={getPw} className="form-control" placeholder="반다이남코 비밀번호"  aria-describedby="basic-addon1"/>
                    </div>
                    <div className="loginBtn">
                        <button type="button" onClick={login} className="btn btn-primary">로그인</button>
                    </div>
                </div>
                </div>
        </div>
    )
}

export { DonderRegistComponents };