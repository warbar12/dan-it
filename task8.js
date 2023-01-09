/*
1) - createElement.
2) - insertAdjacentHTML(position) - определяет позицию добавляемого элемента относительно элемента, вызвавшего метод.
beforebegin - до открывающего тега, afterbegin - перед первым потомком, beforeend - после последнего потомка, afterend - после закрывающего тега.
3) - remove() удаляет элемент из DOM-дерева, в котором он находится.
*/

const e = ["Kharkiv", "Kiev", ["Borispol", "Irpin"], "Odessa", "Lviv", "Dnieper"];

const data = [["Регион города - 1", "Регион города - 2"], "Kharkiv", "Kiev", 
["Borispol",["Село под городом - 1", "Село под городом - 2"], "Irpin"],
"Odessa", "Lviv", "Dnieper",["Село под городом - 1", "Село под городом - 2",["Село под городом - 1", "Село под городом - 2"]]];


const getList = (arr, parent = document.body) => {
  const mainList = document.createElement('ul');

  const addItemToList = (arr, list) => arr.map((item, index) => {
    const listItem = document.createElement('li');
    const itemTitle = document.createElement('h3');

    if(!!Array.isArray(item)){
      const parrentItem = list.childNodes[index - 1] || list.childNodes[index - 2]

      const childrenList = document.createElement('ul');

      addItemToList(item, childrenList)

      if(!parrentItem){
        itemTitle.innerText = 'City is not defined';
        listItem.appendChild(itemTitle);
        listItem.appendChild(childrenList);

        return list.appendChild(listItem);
      }

      return parrentItem.appendChild(childrenList);
    }
    itemTitle.innerText = item;
    listItem.appendChild(itemTitle);

    return list.appendChild(listItem)
  });

  addItemToList(arr, mainList)

  return parent.appendChild(mainList)
}
getList(data)

// таймер обратного отсчета
// let t = 3;
// let time = document.getElementsByClassName("clock")[0];

// function fun() {
//   t--
//   time.innerHTML = t;
//   if(t < 0) clearInterval(inter);
//   if(t === 0) document.body.remove()
// }
// const inter = setInterval("fun()", 1000);
// fun()
