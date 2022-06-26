import axios from "axios"

export const playWithFriendsRegist = (pmarameter:any) => {
    return new Promise((resolve , reject)=>{
        resolve(
            axios.post("http://localhost:8081/play/regist.do", {
                donderName: pmarameter.donderName,
                danwi: pmarameter.danwi,
                contents : pmarameter.contents,
                password : pmarameter.password,
                twitterAccount : pmarameter.twitterAccount,
                mydonImage : pmarameter.mydonImage,
                location : pmarameter.location,
                danwiRank : pmarameter.danwiRank,

            })
        )
    })
}