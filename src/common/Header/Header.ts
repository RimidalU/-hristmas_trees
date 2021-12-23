import Component from "../components";
import { PageIds } from "../../application/App";
import "./header.css"

const Buttons = [
  {
    id: PageIds.WelcomePage,
    text: "",
    class: "welcom-page"
  },
  {
    id: PageIds.SortPage,
    text: "ИГРУШКИ",
    class: "sort-page"
  },  
  {
    id: PageIds.MainPage,
    text: "ЁЛКА",
    class: "main-page"
  },  
  {
    id: PageIds.ErrorPage,
    text: "Error Page",
    class: "error-page"
  }  
]

class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className)
  }

  renderPageButtons() {
    const pageButtons = document.createElement("div");
    pageButtons.classList.add("header")
    Buttons.forEach((button) => {
      const buttonHTML = document.createElement("a");
      buttonHTML.href = `#${button.id}`;
      buttonHTML.innerText = button.text;
      buttonHTML.classList.add(button.class)
      buttonHTML.classList.add("header-link");
      pageButtons.append(buttonHTML);
    });
    this.container.append(pageButtons);
  }

  render(): HTMLElement {
    this.renderPageButtons();
    return this.container
  }

}

export default Header;