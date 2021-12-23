import Page from "../../common/page";
import MainPage from "../pages/Main";
import SortPage from "../pages/Sort";
import WelcomePage from "../pages/Welcome";
import ErrorPage, { ErrorTypes } from "../pages/Error";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
// import DataModel from "./DataModel";
import Toy from "../pages/Sort/Toy";


export const enum PageIds {
  MainPage = "main-page",
  WelcomePage = "welcome-page",
  SortPage = "sort-page",
  ErrorPage = "error-page",
  RSSchool = "https://rs.school/js",
  RimidalUPage = "https://github.com/RimidalU",
}

class App{
  private static container: HTMLElement = document.body;  
  private static defaultPageId: string = "current-page";
  private header: Header;
  private footer: Footer;  

  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    
    if(currentPageHTML) {
      currentPageHTML.remove();
    }

    let page: Page | null = null;

    if (idPage === PageIds.MainPage){ 
      page = new MainPage(idPage);
    } else if (idPage === PageIds.WelcomePage){
      page = new WelcomePage(idPage)
    } else if (idPage === PageIds.SortPage){
      page = new SortPage(idPage)            
    } else {
      page = new ErrorPage(idPage, ErrorTypes.Error_404);
    }

    if(page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      App.container.append(pageHTML);      
    }
  }

  private enableRouteChange() {
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });    
  }


  constructor(){       
    this.header = new Header("header", "header-container");
    this.footer = new Footer("footer", "footer-container");    
  }

  run(){    
    // App.container.append(this.header.render());
    App.renderNewPage("welcome-page");    
    // App.container.append(this.footer.render());    
    this.enableRouteChange();    
    // App.container.append(this.toy.render())  
    console.log("Реализованно очень мало. Поздно взялся. Если у Вас будет желание и возможность проверить позже, то постараюсь доделать что смогу!");
             
    }

}

export default App;

