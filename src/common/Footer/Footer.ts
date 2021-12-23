import Component from "../components";
import { PageIds } from "../../application/App";
import "./footer.css"


const Buttons = [
  {
    id: PageIds.RSSchool,
    text: "RS School"
  },
 {
    id: PageIds.RimidalUPage,
    text: "© RimidalU 2021"
  },
]

class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className)
  }

  renderPageButtons() {
    const pageButtons = document.createElement("div");
    pageButtons.classList.add("footer");
    Buttons.forEach((button) => {
      const buttonHTML = document.createElement("a");
      buttonHTML.href = button.id;
      buttonHTML.innerText = button.text;
      buttonHTML.classList.add("footer-link");
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