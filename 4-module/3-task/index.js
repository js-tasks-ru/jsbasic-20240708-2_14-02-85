function highlight(table) {
 let areas = table.rows
 for(let area of areas) {
   for(let cell of area.cells){
      if (cell.hasAttribute('data-available')){
         if (cell.dataset.available === 'true'){
            area.classList.add('available');
            } else if (cell.dataset.available === 'false'){
               area.classList.add('unavailable');
            }
      }else{
      area.hidden = 'true'   
      }
   if (cell.textContent === 'm'){
      area.classList.add ('male')
   } else if(cell.textContent === 'f'){
      area.classList.add ('female')
   }
   if (cell.textContent<18){
      area.style.textDecoration = 'line-through';
   }
   }
 }
// console.log(table);
}
