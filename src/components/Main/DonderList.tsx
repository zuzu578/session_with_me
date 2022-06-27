import { useEffect, useState } from 'react';
import { getDonderList } from '../../apis/getDonderList';
import { location,dan } from '../../utils/constantValue';
import { DonderSessionList } from '../DonderList/DonderList';
import { tagReplacer } from '../../utils/tagReplacer';
import { removeCookie } from '../../utils/cookie';


const DonderList = (userData : any) => {
  
    const [isUpdated , setIsUpdated] = useState(false); 

    useEffect(()=>{
      
        getDonderList()
        .then((res:any)=>{
            const result = tagReplacer(res.data);
            console.log('result' , result);
            setDonderData(result);
        })
        .catch((e)=>{
            e.message;
        })

    },[isUpdated])
    const [ donderData , setDonderData ] = useState([]);
    

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
            window.location.href = '/DonderRegist';
        }else{
            alert('동더히로바 로그인후 이용가능합니다.');
            window.location.href = '/Login';
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
                   
            <div className="donderSessionList">
        <table className="table">
             <thead className="thead">
                 <tr>
                     <th><p className='table_head'>동더이름</p></th>
                     <th><p className='table_head'>단위</p></th>
                     <th> <p className='table_head'>지역</p></th>
                     <th> <p className='table_head'>트위터 계정</p></th>
                     <th> <p className='table_head'>메모</p></th>
                     
                 </tr>
             </thead>
             <tbody>
                 {donderData.map((item)=>{
                     return(
                         <div>
                            <tr>
                     <td> 
                    <div className="donder_image">
                    
                       <img src={item.mydonImage}/>
                       쥬쥬 
                    </div>
                    </td>
                     <td> <img src={'https://donderhiroba.jp/'+item.danwi}/>({item.danwiRank}) </td>
                     <td> {item.location} </td>
                     <td> <a href={`https://twitter.com/${item.twitterAccount}`}>{item.twitterAccount}</a></td>
                     <td>
                         <div className="memo">
                          {item.contents}
                          </div>
                    </td>
                    <td> {item.createdTime}</td>
                     
                 </tr>
                         </div>
                     )
                 })}
                 
                 {/* {fileData.map((item)=>{
                     return(
                         <tr>
                           <td>
                               {item.userName}
                           </td>
                           <td>
                               <a href={`http://localhost:8080/fileDownload?fileName=${item.fileName}&filePath=${item.filePath}`}> {item.fileName}</a>
                           </td>
                           <td>
                               {item.comments}
                           </td>
                           <td>
                               {item.createdTime}
                           </td>
                         </tr>
                     )
                 })}  */}
             </tbody>
         </table> 
        </div>
        </div>

    )
}

export {DonderList};
