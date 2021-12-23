import Header from "./Header/Header";
import Footer from "./Footer/Footer"


abstract class Page {
  protected container: HTMLElement;
  static TextObject = {};

  private header: Header;
  private footer: Footer; 

  constructor(id: string){
    this.header = new Header("header", "header-container");
    this.footer = new Footer("footer", "footer-container"); 

    
    this.container = document.createElement("main");
    this.container.classList.add("main-wrap");    
    this.container.id = id;
  }

  protected createHeaderTitle(text: string){

    this.container.append(this.header.render());
    const headerTitle = document.createElement("section");
    headerTitle.classList.add("wrap-section")
    headerTitle.innerHTML = text;
    this.container.append(this.footer.render());  
    return headerTitle;
  }

  render(){
    return this.container;
  }
}

export default Page;