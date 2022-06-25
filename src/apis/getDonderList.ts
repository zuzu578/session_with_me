import axios from "axios";


const getDonderList = () => {
    return new Promise((resolve , reject)=>{
        resolve(axios.get('http://localhost:8081/play/selectList.do'))
    }) 
}

export {getDonderList};

