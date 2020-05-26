let row_one = document.getElementById('row-1');
let row_two = document.getElementById('row-2');
let row_the = document.getElementById('row-3');
let row_fou = document.getElementById('row-4');
   
let int = setInterval(() => {
  let time = new Date();
  let h   = time.getHours().toString();
  let m   = time.getMinutes().toString();
  let s   = time.getSeconds().toString();
  let d   = time.getDay();
  let dd  = time.getDate();
  let mon = time.getMonth();
  let y   = time.getFullYear();
  if (h.length < 2) h = "0" + h;    
  if (m.length < 2) m = "0" + m;    
  if (s.length < 2) s = "0" + s; 
  let hou_one, hou_two, min_one, min_two, sec_one, sec_two;

  if (mon == 0) mon = "January";
  if (mon == 1) mon = "February";
  if (mon == 2) mon = "March";
  if (mon == 3) mon = "April";
  if (mon == 4) mon = "May";
  if (mon == 5) mon = "June";
  if (mon == 6) mon = "July";
  if (mon == 7) mon = "August";
  if (mon == 8) mon = "September";
  if (mon == 9) mon = "October";
  if (mon == 10) mon = "November";
  if (mon == 11) mon = "December";

  if (d == 1) document.getElementById("day-name").innerHTML = `Monday | ${dd} ${mon} ${y}`;
  if (d == 2) document.getElementById("day-name").innerHTML = `Thuesday | ${dd} ${mon} ${y}`;
  if (d == 3) document.getElementById("day-name").innerHTML = `Wednesday | ${dd} ${mon} ${y}`;
  if (d == 4) document.getElementById("day-name").innerHTML = `Thursday | ${dd} ${mon} ${y}`;
  if (d == 5) document.getElementById("day-name").innerHTML = `Friday | ${dd} ${mon} ${y}`;
  if (d == 6) document.getElementById("day-name").innerHTML = `Saturday | ${dd} ${mon} ${y}`;
  if (d == 0) document.getElementById("day-name").innerHTML = `Sunday | ${dd} ${mon} ${y}`;

  let one = document.querySelectorAll('#row-1 > div');
  let two = document.querySelectorAll('#row-2 > div');
  let the = document.querySelectorAll('#row-3 > div');
  let fou = document.querySelectorAll('#row-4 > div');
  let fiv = document.querySelectorAll('#row-5 > div');
  let six = document.querySelectorAll('#row-6 > div');
  let zer = document.querySelectorAll('#zero-block > div');
  for (let elem of one) elem.style.color = "rgba(255, 255, 255, 0.2)";
  for (let elem of two) elem.style.color = "rgba(255, 255, 255, 0.2)";
  for (let elem of the) elem.style.color = "rgba(255, 255, 255, 0.2)";
  for (let elem of fou) elem.style.color = "rgba(255, 255, 255, 0.2)";
  for (let elem of fiv) elem.style.color = "rgba(255, 255, 255, 0.2)";
  for (let elem of six) elem.style.color = "rgba(255, 255, 255, 0.2)";
  for (let elem of zer) elem.style.color = "rgba(255, 255, 255, 0.2)";

  if (h[0] == "0") document.getElementById("one-zero").style.color = "rgba(255, 255, 255, 1)";
  else {
    hou_one = document.querySelector(`#row-1 > div:nth-of-type(${h[0]})`);
    hou_one.style.color = "rgba(255, 255, 255, 1)";
  }

  if (h[1] == "0") document.getElementById("two-zero").style.color = "rgba(255, 255, 255, 1)";
  else {
    hou_two = document.querySelector(`#row-2 > div:nth-of-type(${h[1]})`);
    hou_two.style.color = "rgba(255, 255, 255, 1)";
  }

  if (m[0] == "0") document.getElementById("the-zero").style.color = "rgba(255, 255, 255, 1)";
  else {
    min_one = document.querySelector(`#row-3 > div:nth-of-type(${m[0]})`);
    min_one.style.color = "rgba(255, 255, 255, 1)";
  }

  if (m[1] == "0") document.getElementById("fou-zero").style.color = "rgba(255, 255, 255, 1)";
  else {
    min_two = document.querySelector(`#row-4 > div:nth-of-type(${m[1]})`);
    min_two.style.color = "rgba(255, 255, 255, 1)";
  }

  if (s[0] == "0") document.getElementById("fiv-zero").style.color = "rgba(255, 255, 255, 1)";
  else {
    sec_one = document.querySelector(`#row-5 > div:nth-of-type(${s[0]})`);
    sec_one.style.color = "rgba(255, 255, 255, 1)";
  }

  if (s[1] == "0") document.getElementById("six-zero").style.color = "rgba(255, 255, 255, 1)";
  else {
    sec_two = document.querySelector(`#row-6 > div:nth-of-type(${s[1]})`);
    sec_two.style.color = "rgba(255, 255, 255, 1)";
  }
}, 950);