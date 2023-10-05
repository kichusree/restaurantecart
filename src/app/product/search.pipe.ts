import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productArray:any[],filterString:string,propName:string): any{
    const result:any=[]
    if(!productArray || filterString==' ' || propName==' '){
      return productArray
    }
    else{
       productArray.forEach((item:any)=>{
        if(item[propName].trim().toLowerCase().includes(filterString.trim().toLowerCase())){
      // trim used to remove whitespaces in string ie in starting and ending
      result.push(item)
    }
  })
  return result
  }

}
}