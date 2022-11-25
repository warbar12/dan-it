'use strict';
const createdList = (arr, parent = document.body) =>{

  arr.map(elemet => {


  //   const list = `
  //   <ul>
  //   <li>${elemet}</li>
  //   </ul>
  //   `
  //   parent.insertAdjacentHTML('beforeend', list)
  })
}
let q = ["hello","world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
let w = ["1", "2", "3", "sea", "user", 23];
let e = ["Kharkiv", "Kiev", ["Borispol", "Irpin"], "Odessa", "Lviv", "Dnieper"]; 
createdList(e)

/*
<ul>
  <li></li>
</ul>
*/ 