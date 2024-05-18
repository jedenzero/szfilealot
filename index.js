var w=60;
var h=20;
function table(){
  if(document.querySelectorAll('td')){
    for(el of document.querySelectorAll('td')){
      el.removeNEventListener('click',color);
    }
  }
  let i=``;
  i+=`<table style="height:${300/w*h}px">`
  while(h>0){
    i+=`<tr>`;
    let wi=w;
    while(wi>0){
      i+=`<td></td>`;
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
function color(el){
  switch(this.style.backgroundColor){
    case 'rgb(200, 200, 200)': this.style.backgroundColor='#00FFA0'; break;
    case 'rgb(0, 255, 160)': this.style.backgroundColor='#FFFFA0'; break;
    case 'rgb(255, 255, 160)': this.style.backgroundColor=''; break;
  }
}
table();
