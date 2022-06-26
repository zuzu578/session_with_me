import { useEffect, useState } from 'react';
import { getDonderList } from '../../apis/getDonderList';
import { location,dan } from '../../utils/constantValue';
import { DonderSessionList } from '../DonderList/DonderList';
import { tagReplacer } from '../../utils/tagReplacer';
import { removeCookie } from '../../utils/cookie';


const DonderList = (userData : any) => {
    const [getDonder , setDonder] = useState('');
    const [isUpdated , setIsUpdated] = useState(false); 
    const [ donderData , setDonderData ] = useState({});

    useEffect(()=>{
        // const result = tagReplacer(userData.props);
        getDonderList()
        .then((res:any)=>{
            console.log(res.data);
        })
        .catch((e)=>{
            e.message;
        })

    },[isUpdated])

    const getDanwi = (e:any) => {
        console.log(e.target.value);
        if(!isUpdated){
            setIsUpdated(true);
        }else {
            setIsUpdated(false);
        }

       
           
    }

    const getLocation = (e:any) => {
        console.log(e.target.value);
        if(!isUpdated){
            setIsUpdated(true);
        }else {
            setIsUpdated(false);
        }
        
    }

    const goRegiFnc = () => {
        if(userData.props){
            alert('로그인함 ');
        }else{
            alert('동더히로바 로그인후 이용가능합니다.');
            window.location.href = '/donderRegist';
        }
  
    }

    const logOut = () => {
        removeCookie();
        alert('로그아웃 되었습니다.');
        window.location.reload();
    }
    return (
        <div className='donderList'>
              <div className='selectBox_wrapper'>
                <div className='selectbox_01'>
               
                <select className="form-select" onChange={getLocation}>
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
                <div className='selectbox_01'>
                <select className="form-select" onChange={getDanwi}>
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
                <div className='donderRegBtn'>
                     <button type="button" className="btn btn-success" onClick={goRegiFnc}>동더 등록하기</button>
                </div>
                {userData.props ? 
                <div className='logOut'>
                    <button type="button"  onClick={logOut}className="btn btn-danger">로그아웃</button>
                </div>
                : ''}
                
            </div>

            <DonderSessionList/>
        </div>

    )
}

export {DonderList};
