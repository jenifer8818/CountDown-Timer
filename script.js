/*const currentYear=new Date().getFullYear();//gives current year
//console.log(currentYear);
const newYear=new Date(`January 1 ${currentYear+1} 00:00:00`);//going to pass constructor value
//${} concatenation panrom
console.log(newYear);

const currentDate=new Date();
console.log(currentDate);
const diff=newYear-currentDate;
//console.log(diff); //in js it returns a millisecond

// 1000ms=1s
// 60s=1m
// 60m=1hr
// 24hrs=1day

const d=Math.floor(diff/1000/60/60/24);
//console.log(d);
const h=Math.floor((diff/1000/60/60)%24);
//console.log(h);
const m=Math.floor((diff/1000/60)%60);
//console.log(m);
const s=Math.floor((diff/1000)%60);
//console.log(s);
*/

const days=document.querySelector("#days");//id ah vachu select panrom
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");
// const mseconds=document.querySelector("#mseconds");

const currentYear=new Date().getFullYear();
const newYear=new Date(`January 1 ${currentYear+1} 00:00:00`);
//suppose if we want new year means we have to add current year+1.
function UpdateTime(){
  const currentDate=new Date();
  const diff=newYear-currentDate;
  const d=Math.floor(diff/1000/60/60/24);
  const h=Math.floor((diff/1000/60/60)%24);
  const m=Math.floor((diff/1000/60)%60);
  const s=Math.floor((diff/1000)%60);
  const ms=Math.floor(diff%1000);

  days.innerHTML=d<10?"0"+d:d;
  hours.innerHTML=h<10?"0"+h:h;
  minutes.innerHTML=m<10?"0"+m:m;
  seconds.innerHTML=s<10?"0"+s:s;
  // mseconds.innerHTML=ms<10?"0"+ms:ms;
}
setInterval(UpdateTime,1000);

//setInterval->1st etha call pannanumo athu 2nd ms ku apro change aganum