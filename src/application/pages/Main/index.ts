import "./main.css";
import Page from "../../../common/page";
import { Main } from "./main"
import Control from "../../../common/control";

class MainPage extends Page{
    static TextObject={
    PageTitle: Main
  }

  constructor(id: string){
    super(id);
  }
  
  render(){
    const title = this.createHeaderTitle(MainPage.TextObject.PageTitle);
    
    this.container.append(title);
    title.classList.add("page-blur")    
    return this.container;
  }
}

export default MainPage;