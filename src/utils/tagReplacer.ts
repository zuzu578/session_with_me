export const tagReplacer = (param : any) => {
    //console.log('parameter ==> ' , param);
    if(!param){
        return null;
    }
 
    const result = param.map((item:any)=>{
        item.danwi = item.danwi.replaceAll('HtmlImage[<img src="','').replaceAll('" style="height:21px;margin:1px 0;">]','')
        item.mydonImage = item.mydonImage.replaceAll('HtmlImage[<img class="customd_mydon" src="','').replaceAll('">]','').replaceAll('amp;','')
        return item;
    })
  
    return result;

}

