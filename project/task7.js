/*
1) Опишіть своїми словами що таке Document Object Model (DOM)
2) Яка різниця між властивостями HTML-елементів innerHTML та innerText?
3) Як можна звернутися до елемента сторінки за допомогою JS? Який спосіб кращий?

1)  DOM структура документа, может быть доступна из программ, которые могут изменять содержимое, стиль и структуру документа. 
Представление DOM состоит из структурированной группы узлов и объектов, 

2) innerHTML - устанавливает или получает HTML разметку дочерних элементов, а innerText - задавает или получает текстовое содержимое элемента и его потомков.
3) getElementById, querySelectorAll, getElementsByTagName, querySelector... я считаю что болие универсальный способ querySelector, но все завиист от задачи, все 
методы по-своему хороши. 
*/

const paragraf = document.querySelectorAll("p")

for(let a of paragraf) {
  a.style.backgroundColor = "#ff0000";
}

const list = document.getElementById("optionsList");
const father = list.parentElement // нашли батька
const children = list.children // нашли дочерние ноды
const testParagraph = document.getElementById("testParagraph");
testParagraph.textContent = "This is a paragraph";

// const mainHeader = document.getElementsByClassName("main-header");
// const q = [...mainHeader]
// q?.childNodes?.forEach(el => el.nodeType === 1 && el.classList.add('nav-item'))

const sectionTitle = document.querySelectorAll(".section-title");
sectionTitle.forEach(element => element.classList.remove('section-title'));
console.log(list);
console.log(father);
console.log(children);
// console.log(mainHeader);
console.log(sectionTitle);

