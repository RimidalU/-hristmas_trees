export const Sort: string = `
<div class="controls">                  
  <div class="filters">
    <div class="controls-title">Фильтры по значению</div>
    <div class="shape">Форма:  
      <button class="FilterBall" data-filter="шар"></button>
      <button data-filter="колокольчик"></button>
      <button data-filter="шишка"></button>
      <button data-filter="снежинка"></button>
      <button data-filter="фигурка"></button>
    </div>
    <div class="color">Цвет:   
      <button data-filter="белый"></button>
      <button data-filter="желтый"></button>
      <button data-filter="красный"></button>
      <button data-filter="синий"></button>
      <button data-filter="зелёный"></button>
    </div>
    <div class="size">Размер: 
      <button data-filter="большой"></button>
      <button data-filter="средний"></button>
      <button data-filter="малый"></button>
    </div>
    <div class="favorite-container">Только любимые:
      <div class="form-group">
        <input type="checkbox" class="favorite-input" id="checkbox" />
        <label for="checkbox" class="favorite-input-label"></label>
      </div>   
    </div> 
    
  </div>
  <div class="range">
    <div class="controls-title">Фильтры по диапазону</div>
    <div class="count">
      <span class="control-span">Количество экземпляров:</span> 
      <div class="count-slider-container">
        <output class="slider-output">1</output>
        <div class="count-slider"></div>
        <output class="slider-output">12</output>
      </div>          
    </div>
    <div class="year">
      <span class="control-span">Год приобретения:</span> 
      <div class="year-slider-container">
        <output class="slider-output">1940</output>
        <div class="year-slider"></div>
        <output class="slider-output">2020</output>
      </div>          
    </div>
  </div>
  <div class="sort">
    <div class="controls-title">Поиск</div>
    <input type="search" class="search" autocomplete="off">
    <div class="controls-title">Сортировка</div>
    <select class="sort-select">
      <option selected value="sort-name-max">По названию от «А» до «Я»</option>
      <option value="sort-name-min">По названию от «Я» до «А»</option>
      <option value="sort-count-max">По количеству по возрастанию</option>
      <option value="sort-count-min">По количеству по убыванию</option>
    </select>
    <button data-filter="all" class="reset">Сброс фильтров</button>
  </div>
</div>

`
// <div id="card-container" class="card-container"></div>
