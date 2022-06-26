import { useEffect, useState } from 'react';

import { location, dan } from '../utils/constantValue';
import { playWithFriendsRegist } from '../apis/playWithFriendsRegist';

export const DonderRegist = (userData : any) => {
    const [getMemoData , setMemo] = useState('');
    const [gettwitter , setTwitter] = useState('');
    const [getLocations , setLocations ] = useState('');
    const [getPasswords , setPassword ]= useState('');
    const [getDanwi , setDanwiData] = useState('');

    useEffect(()=>{
        console.log('userData =>' , userData);
  
    },[])

    const registDo = () => { 
        const paramMap = {
            donderName : userData.props.donderName,
            contents:getMemoData,
            twitterAccount : gettwitter,
            danwi : userData.props.danwi,
            mydonImage : userData.props.mydonImage,
            location : getLocations,
            password : getPasswords,
            danwiRank : getDanwi,


        }
        playWithFriendsRegist(paramMap)
        .then((res:any)=>{
            console.log('res =>' , res.data);
            alert('등록이 완료되었습니다!');
            window.location.href = '/';

        })
        .catch((e)=>{
            e.message;
            alert('서버와 통신하는데 문제가 발생했습니다.');
        })
    }

    const getMemo = (e:any)=>{
        setMemo(e.target.value);
    }
    const getTwitterAccount = (e:any)=>{
        setTwitter(e.target.value);
    }

    const getLocationData = (e:any) => {
        setLocations(e.target.value);
    }

    const getPassword = (e:any) => {
        setPassword(e.target.value);
    }
    const getDanwiData = (e:any) =>{
        setDanwiData (e.target.value);
    }
    return(
        <div>
            <div className='regForm'>
                <h3> 동더 등록하기 </h3>
               <div className='input_item'>

               <div className='selectBox_wrapper_02'>
                <div className='selectbox_02'>
               
                <select className="form-select" onChange={getLocationData}>
                    <option selected value=''>지역</option>
                    {location.map((item : any)=>{
                        return(
                            <>
                            <option value={item}>{item}</option>
                            </>
                        )
                    })}
                    
                </select>
                </div>
                <div className='selectBox_02'>
                <select className="form-select" onChange={getDanwiData}>
                    <option selected value=''>단위</option>
                    {dan.map((item : any)=>{
                        return(
                            <>
                            <option value={item}>{item}</option>
                            </>
                        )
                    })}
                    
                </select>
                </div>
            </div>
               
                <input type="text" className="form-control" value={userData.props.donderName}placeholder="동더이름" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className='input_item'>
                <input type="text" className="form-control" onChange={getMemo} placeholder="메모" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className='input_item'>
                <input type="text" className="form-control" onChange={getTwitterAccount} placeholder="트위터 계정" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className='input_item'>
                <input type="password" className="form-control" onChange={getPassword} placeholder="비밀번호" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className ='registDoBtn'>
                    <button type="button" onClick={registDo} className="btn btn-light">등록</button>
                </div>
            </div>
            
            
        </div>
    )
}