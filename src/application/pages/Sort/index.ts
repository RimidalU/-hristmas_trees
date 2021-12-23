import Page from "../../../common/page";
import "./sort.css"
import { Sort } from "./sort"
import Component from "../../../common/components";
import Control from "../../../common/control";
import Toy from "./Toy";
import { DataModelSort, DataToySourse } from "../../App/DataModel";

class SortPage extends Page{
    static TextObject={
    PageTitle: Sort
  }
  
  constructor(id: string){
    super(id);    
  }

  
  render(){
    const title = this.createHeaderTitle(SortPage.TextObject.PageTitle);
    let toy = new Toy("div", "card-container")
    title.append(toy.render())
    this.container.append(title);
    title.classList.add("page-blur");  
    this.runFilters()   
    return this.container;    
  }

  runFilters(){
    let filterBox = document.querySelectorAll('.toy-card ');

  let filtrs = document.body.querySelector(".controls") 
   addEventListener('click', (event) =>  {
    
      if (event.target.localName !== 'button') return false;
      let filterClass = event.target.dataset['filter'];
  
      filterBox.forEach(elem => {
          elem.classList.remove('hide');
          if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
              elem.classList.add('hide');
          }
      });
  
  });
  
  }
    
  }

  

export default SortPage;