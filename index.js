var w=60;
var h=20;
document.getElementById('szfilealot').innerHTML=`<table style="visibility:hidden;"></table>`;
const wr=document.querySelector('table').clientWidth;

function table(){
  for(el of document.querySelectorAll('td')){
    el.removeEventListener('click',color);
  }
  let i=``;
  i+=`<table style="height:${wr/w*h}px">`
  while(h>0){
    i+=`<tr>`;
    let wi=w;
    while(wi>0){
      i+=`<td style="background-color:#282828;"></td>`;
      wi--;
    }
    i+=`</tr>`;
    h--;
  }
  i+=`</table>`;
  document.getElementById('szfilealot').innerHTML=i;
  for(el of document.querySelectorAll('td')){
    el.addEventListener('click',color);
  }
}
function color(event){
  switch(this.style.backgroundColor){
    case 'rgb(40, 40, 40)': this.style.backgroundColor='#00FFA0'; break;
    case 'rgb(0, 255, 160)': this.style.backgroundColor='#FFFFA0'; break;
    case 'rgb(255, 255, 160)': this.style.backgroundColor='#282828'; break;
  }
}
table();
