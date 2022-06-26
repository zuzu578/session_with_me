import { useEffect } from 'react';
export const DonderSessionList = (data : any ) => {

    useEffect(()=>{
        console.log('props data =>' , data);
    },[])

    return (
        <>
       
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
                 <tr>
                    
                     <td> 
                        
                         <div className="donder_image">
                       <img src='https://img.taiko-p.jp/imgsrc.php?v=&kind=mydon&fn=mydon_710556190451'/>
                       쥬쥬 
                     </div>
                    </td>
                     <td> <img src='https://donderhiroba.jp/imgsrc_danlabel.php?taiko_no=710556190451'/> </td>
                     <td> 서울 </td>
                     <td> <a href="https://twitter.com/uopswwn">@uopswwn</a></td>
                     <td>
                         <div className="memo">
                          태고의달인 세션 같이하실분 구해요!
                          </div>
                    </td>
                     
                 </tr>
                 
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
        </>
    )
}
