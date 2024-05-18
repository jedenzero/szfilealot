var w=60;
var h=20;
function table(){
  if(document.querySelectorAll('td')){
    for(el in document.querySelectorAll('td')){
      el.removeEventListener('click',color);
    }
  }
  let i=``;
  i+=`<table style="height:${3000/w*h}">`
  while(h>0){
    i+=`<tr>`;
    while(w>0){
      i+=`<td></td>`;
      w--;
    }
    i+=`</tr>`;
    h--;
  }
  i+=`</table>`;
  document.getElementById('szfilealot').innerHTML=i;
  for(el in document.querySelectorAll('td')){
    el.addEventListener('click',color);
  }
}
function color(el){
  switch(this.styles.backgroundColor){
    case 'rgb(200, 200, 200)': this.style.backgroundColor='#00FFA0'; break;
    case 'rgb(0, 255, 160)': this.style.backgroundColor='#FFFFA0'; break;
    case 'rgb(255, 255, 160)': this.style.backgroundColor=''; break;
  }
}
table();
