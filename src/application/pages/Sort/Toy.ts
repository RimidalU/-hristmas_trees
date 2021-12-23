import Component from "../../../common/components";
import dataModelSort, { DataToySourse } from "../../App/DataModel";
import {Data} from "../../App/data";
import SortPage from ".";

class Toy extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className)
  }
     renderToysSection() {
      
        //  console.log(dataModelSort.returnDataToy());
          
      dataModelSort.returnDataToy().forEach((toy) => {
      const toyHTML = document.createElement("div");
      toyHTML.classList.add("toy-card");
      toyHTML.classList.add(`${toy.shape}`);
      toyHTML.classList.add(`${toy.color}`);
      toyHTML.classList.add(`${toy.size}`);
      toyHTML.classList.add(`${toy.favorite}`);
      toyHTML.setAttribute("data-num", `${toy.num}`)
      toyHTML.innerHTML = `       
        <h2 class="card-title">${toy.name}</h2>
        <img class="card-img" src="../../../assets/toys/${toy.num}.png" alt="toy">
        <div class="card-description">      
          <p class="count">Количество:<span>${toy.count}</span></p>
          <p class="year">Год покупки:<span>${toy.year}</span></p>
          <p class="shape">Форма:<span>${toy.shape}</span></p>
          <p class="color">Цвет:<span>${toy.color}</span></p>
          <p class="size">Размер:<span>${toy.size}</span></p>
          <p class="favorite">Любимая:<span>${toy.favorite}</span></p>
        </div>
        <div class="ribbon"></div>
      </div>
      `
      this.container.append(toyHTML); 
    });   
  }

  render(): HTMLElement {
    this.renderToysSection();
    return this.container
  }

}

export default Toy;