import { useState } from 'react';
import { doLogin } from '../../apis/login';
import { Circles } from  'react-loader-spinner'
import { setCookie } from '../../utils/cookie';
const DonderRegistComponents = () => {

    const [getAccount , setAccount] = useState('');
    const [getPassword , setPassword] = useState('');
    const [isLoading , setIsLoading ] = useState(false);

    const login = () => {
        if(!getAccount ){
            alert('아이디 를 입력해주세요.');
            return;
        }
        if(!getPassword ){
            alert('비밀번호 를 입력해주세요.');
            return;
        }

        setIsLoading(true);

        doLogin(getAccount ,getPassword)
        .then((res : any)=>{
            if(!res.data){
                alert('계정 정보를 다시한번 확인해주세요.');
                setIsLoading(false);
                return;
            }
        setCookie('account',res.data,{path:"/",secure:true,sameSite:'none'});
        setIsLoading(false);
        window.location.href = '/';
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
                    {isLoading ? <>
                        <Circles
                            height="100"
                            width="100"
                            color='grey'
                            ariaLabel='loading'
                        />
                    </> : 
                    <div className="loginBtn">
                        <button type="button" onClick={login} className="btn btn-primary">로그인</button>
                    </div>}
                    
                </div>

   
                </div>
        </div>
    )
}

export { DonderRegistComponents };