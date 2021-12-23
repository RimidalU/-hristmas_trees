import { Data } from "./data";
import { DataUrlInterface } from "./data";


export const DataToySourse = JSON.parse(JSON.stringify(Data))


// const enum Keys {
//   num = "num",
//   name = "name",
//   count = "count",
//   year = "year",
//   shape = "shape",
//   color = "color",
//   size = "size",
//   favorite ="favorite",
// }


export class DataModelSort{  
  DataToy: Array<DataUrlInterface>

  constructor(){     
    this.DataToy = DataToySourse;
  }

  sortByShape(volume: string ){
    
    for (let i = 0; i < DataToySourse.length; i++){
      if (DataToySourse[i].shape === volume){
       this.DataToy.push(DataToySourse[i])
       console.log(DataToySourse[i]);       
      }         
    }
    console.log(this.DataToy);   
  // return this.DataToy
  }

  returnDataToy(){
    return this.DataToy
  }


}

let dataModelSort = new DataModelSort();

export default dataModelSort;


// export function SortByCount(key: string){
//   DataToy.array.forEach(element => {
//     if(DataToy.key = volume){
//       DataToy.push(toy)
//       }
//       return this.sortData
   
//   });
// }





// class DataModel {  
//      data: Array<DataUrlInterface>;
//      sortData: Array<DataUrlInterface>;     
//   constructor(){
//     this.data = DataToy;
//     this.sortData = [];    
//   }
  
//   sortByShape(volume: string ){
    
//     for (let i = 0; i < this.data.length; ++i){
//       if (this.data[i].shape = volume){
//         this.sortData.push(this.data[i])
//       }
//       console.log(this.sortData);
      
//       return this.sortData
//     }
    
//     // this.data.forEach(toy => {
//     //   if(toy.key = volume){
//     //   this.sortData.push(toy)
//     //   }
//     //   return this.sortData
//     // });
//   }
  
// };


// export default DataModel