import { useEffect, useState } from 'react';
import { getDonderList } from '../../apis/getDonderList';
import { location,dan } from '../../utils/constantValue';
import { DonderSessionList } from '../DonderList/DonderList';


const DonderList = () => {
    const [getDonder , setDonder] = useState('');
    const [isUpdated , setIsUpdated] = useState(false); 

    useEffect(()=>{
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
        window.location.href = '/donderRegist';
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
            </div>

            <DonderSessionList/>
        </div>

    )
}

export {DonderList};
