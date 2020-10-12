let elem = [];

//id
elem[1]= document.getElementById("1");

elem[2] = document.getElementById("2");

elem[3] = document.getElementById("3");

elem[4] = document.getElementById("4");

elem[5] = document.getElementById("5");

elem[6] = document.getElementById("6");

elem[7] = document.getElementById("7");

elem[8] = document.getElementById("8");

elem[9] = document.getElementById("9");

elem[10] = document.getElementById("10");

elem[11] = document.getElementById("11");

elem[12] = document.getElementById("12");

elem[13] = document.getElementById("13");

elem[14] = document.getElementById("14");

elem[15] = document.getElementById("15");

elem[16] = document.getElementById("16");

elem[17] = document.getElementById("17");

elem[18] = document.getElementById("18");

elem[19] = document.getElementById("totals");

//add
elem[1].children[4].children[0].onclick = function(){add1(elem[1]);};

elem[2].children[4].children[0].onclick = function(){add1(elem[2]);};

elem[3].children[4].children[0].onclick = function(){add1(elem[3]);};

elem[4].children[4].children[0].onclick = function(){add1(elem[4]);};

elem[5].children[4].children[0].onclick = function(){add1(elem[5]);};

elem[6].children[4].children[0].onclick = function(){add1(elem[6]);};

elem[7].children[4].children[0].onclick = function(){add1(elem[7]);};

elem[8].children[4].children[0].onclick = function(){add1(elem[8]);};

elem[9].children[4].children[0].onclick = function(){add1(elem[9]);};

elem[10].children[4].children[0].onclick = function(){add1(elem[10]);};

elem[11].children[4].children[0].onclick = function(){add1(elem[11]);};

elem[12].children[4].children[0].onclick = function(){add1(elem[12]);};

elem[13].children[4].children[0].onclick = function(){add1(elem[13]);};

elem[14].children[4].children[0].onclick = function(){add1(elem[14]);};

elem[15].children[4].children[0].onclick = function(){add1(elem[15]);};

elem[16].children[4].children[0].onclick = function(){add1(elem[16]);};

elem[17].children[4].children[0].onclick = function(){add1(elem[17]);};

elem[18].children[4].children[0].onclick = function(){add1(elem[18]);};

//sub
elem[1].children[4].children[1].onclick = function(){sub1(elem[1]);};

elem[2].children[4].children[1].onclick = function(){sub1(elem[2]);};

elem[3].children[4].children[1].onclick = function(){sub1(elem[3]);};

elem[4].children[4].children[1].onclick = function(){sub1(elem[4]);};

elem[5].children[4].children[1].onclick = function(){sub1(elem[5]);};

elem[6].children[4].children[1].onclick = function(){sub1(elem[6]);};

elem[7].children[4].children[1].onclick = function(){sub1(elem[7]);};

elem[8].children[4].children[1].onclick = function(){sub1(elem[8]);};

elem[9].children[4].children[1].onclick = function(){sub1(elem[9]);};

elem[10].children[4].children[1].onclick = function(){sub1(elem[10]);};

elem[11].children[4].children[1].onclick = function(){sub1(elem[11]);};

elem[12].children[4].children[1].onclick = function(){sub1(elem[12]);};

elem[13].children[4].children[1].onclick = function(){sub1(elem[13]);};

elem[14].children[4].children[1].onclick = function(){sub1(elem[14]);};

elem[15].children[4].children[1].onclick = function(){sub1(elem[15]);};

elem[16].children[4].children[1].onclick = function(){sub1(elem[16]);};

elem[17].children[4].children[1].onclick = function(){sub1(elem[17]);};

elem[18].children[4].children[1].onclick = function(){sub1(elem[18]);};

//clear
elem[1].children[4].children[2].onclick = function(){clear1(elem[1]);};

elem[2].children[4].children[2].onclick = function(){clear1(elem[2]);};

elem[3].children[4].children[2].onclick = function(){clear1(elem[3]);};

elem[4].children[4].children[2].onclick = function(){clear1(elem[4]);};

elem[5].children[4].children[2].onclick = function(){clear1(elem[5]);};

elem[6].children[4].children[2].onclick = function(){clear1(elem[6]);};

elem[7].children[4].children[2].onclick = function(){clear1(elem[7]);};

elem[8].children[4].children[2].onclick = function(){clear1(elem[8]);};

elem[9].children[4].children[2].onclick = function(){clear1(elem[9]);};

elem[10].children[4].children[2].onclick = function(){clear1(elem[10]);};

elem[11].children[4].children[2].onclick = function(){clear1(elem[11]);};

elem[12].children[4].children[2].onclick = function(){clear1(elem[12]);};

elem[13].children[4].children[2].onclick = function(){clear1(elem[13]);};

elem[14].children[4].children[2].onclick = function(){clear1(elem[14]);};

elem[15].children[4].children[2].onclick = function(){clear1(elem[15]);};

elem[16].children[4].children[2].onclick = function(){clear1(elem[16]);};

elem[17].children[4].children[2].onclick = function(){clear1(elem[17]);};

elem[18].children[4].children[2].onclick = function(){clear1(elem[18]);};

//total
elem[19].children[4].children[0].onclick = function(){total(elem[19]);};


function add1 (elem) {
  if(elem.children[2].innerHTML == "-") {
    elem.children[2].innerHTML = "1";
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[3].innerHTML = currentScore - 4;
  }
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
    elem.children[3].innerHTML = currentScore - 3;
}
}

function sub1 (elem) {
  if(elem.children[2].innerHTML == "-"){ 
    elem.children[2].innerHTML = "-1";
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[3].innerHTML = currentScore - 4;
  }
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
    elem.children[3].innerHTML = currentScore - 5;
}
}


function clear1 (elem) {
    elem.children[2].innerHTML = "-";
    elem.children[3].innerHTML = "-";
}

function total (elem) {
  let scoreTotal = 0;
  let overTotal = 0;
    for (var i = 0; i < elem.length; i++) {
      if (elem[i].children[2].innerHTML == "-"){
        scoreTotal = scoreTotal + 0;
        overTotal = overTotal + 0;
      }
      else {
        let score = elem[i].chilren[2].innerHTML;
        score = Number.parseInt(score);
        scoreTotal = scoreTotal + score;
        let over = elem[i].chilren[3].innerHTML;
        over = Number.parseInt(over);
        overTotal = overTotal + over;
      }
    }
  elem.children[2].innerHTML = scoreTotal;
  elem.children[3].innerHTML = overTotal;
}
