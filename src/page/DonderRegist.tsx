import { useEffect } from 'react';
export const DonderRegist = (userData : any) => {
    useEffect(()=>{
        console.log('userData =>' , userData);
    },[])
    return(
        <div>
            <div className='regForm'>
               <div className='input_item'>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className='input_item'>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            
            
        </div>
    )
}