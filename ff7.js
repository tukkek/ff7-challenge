const CHARACTERS=['Cloud','Barret','Tifa','Aeris','Red XIII','Cait Sith','Cid']
const OPTIONAL=['Vincent','Yuffie']
const RESULT=document.querySelector('#result')

function shuffle (arr) {//TODO https://stackoverflow.com/a/60662877
    var j, x, index;
    for (index = arr.length - 1; index > 0; index--) {
        j = Math.floor(Math.random() * (index + 1));
        x = arr[index];
        arr[index] = arr[j];
        arr[j] = x;
    }
    return arr;
}


export function setup(){
  let characters=shuffle([CHARACTERS,OPTIONAL].flatMap(cs=>cs))
  for(let o of OPTIONAL){
    let i=characters.indexOf(o)
    if(i>=3) characters.splice(i,1)
  }
  let d=new Date()
  if(d.getMonth()==3&&d.getDate()==1){
    let i=characters.indexOf('Yuffie')
    if(i>=0) characters.splice(i,1,['Yuckie'])
  }
  for(let c of characters){
    let li=document.createElement('li')
    li.textContent=c
    RESULT.appendChild(li)
  }
}
