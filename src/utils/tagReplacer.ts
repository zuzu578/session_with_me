export const tagReplacer = (param : any) => {
    console.log('parameter ==> ' , param);
    if(!param){
        return null;
    }
    param = {
        danwi : param.danwi.replaceAll('HtmlImage[<img src="','').replaceAll('" style="height:21px;margin:1px 0;">]',''),
        mydonImage : param.mydonImage.replaceAll('HtmlImage[<img class="customd_mydon" src="','').replaceAll('">]','').replaceAll('amp;','')
    }
    return param;

}

