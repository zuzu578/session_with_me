import { useEffect, useState } from 'react';
const SelectBox = (props:any , getLocationValue : any) => {

    return(
        <div>
            <div className='selectBox_wrapper'>
                <div className='selectbox_01'>
               
                <select className="form-select" onChange={getLocationValue}>
                    <option selected value=''>지역</option>
                    {props.props.location.map((item : any)=>{
                        return(
                            <>
                            <option value={item}>{item}</option>
                            </>
                        )
                    })}
                    
                </select>
                </div>
                <div className='selectBox_01'>
                <select className="form-select">
                    <option selected value=''>단위</option>
                    {props.props.dan.map((item : any)=>{
                        return(
                            <>
                            <option value={item}>{item}</option>
                            </>
                        )
                    })}
                    
                </select>
                </div>
            </div>
        </div>
    )
}

export {SelectBox};