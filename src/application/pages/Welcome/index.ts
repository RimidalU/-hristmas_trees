import Page from "../../../common/page";
import "./welcome.css"
import { Welcome } from "./welcome"
import Control from "../../../common/control";
// import App from "../../App";

class WelcomePage extends Page{
    static TextObject={
    PageTitle: Welcome
  }
  
  constructor(id: string){
    super(id);
  }
  
  render(){
    const title = this.createHeaderTitle(WelcomePage.TextObject.PageTitle);
    this.container.append(title);    
    return this.container;       
  }
}

export default WelcomePage;