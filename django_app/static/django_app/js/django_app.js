$(document).ready(function() {
  $('.btn-read-more').click(function() {
    $(this).parent().find('.news-text').toggle();
    return false;
  });
  $('.news-text').hide();
});

function out(){
    let t1 = parseInt(document.getElementById("quantity1").value);
    let t2 = parseInt(document.getElementById("quantity2").value);
    let t3 = parseInt(document.getElementById("quantity3").value);
    let t4 = parseInt(document.getElementById("quantity4").value);
    let t5 = parseInt(document.getElementById("quantity5").value);
    let t6 = parseInt(document.getElementById("quantity6").value);
    let t7 = parseInt(document.getElementById("quantity7").value);
    let t8 = parseInt(document.getElementById("quantity8").value);
    let t9 = parseInt(document.getElementById("quantity9").value);
    console.log(t1, t2, t3, t4, t5, t6, t7, t8, t9)

    let summ_el = t1 + t2 + t3 + t4 + t5 + t6 + t7 + t8 + t9

let p1 = 1000;
let p2 = 1500;
let p3 = 2000;
let p4 = 1200;
let p5 = 1800;
let p6 = 2500;
let p7 = 800;
let p8 = 3000;
let p9 = 1500;
let total1 = 0;
let total2 = 0;
let total3 = 0;
let total4 = 0;
let total5 = 0;
let total6 = 0;
let total7 = 0;
let total8 = 0;
let total9 = 0;

for (let i = 1; i <= 9; i++) {
  let quantity = parseInt(document.getElementById("quantity" + i).value);
  let price = eval("p" + i);
  let total = quantity * price;
  eval("total" + i + " = total");
}

let summ = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9


resultText = "Всего в корзине: " +  summ_el + " телескопов."   +  '<br/>' + "На сумму: " + summ + " руб.";
document.getElementById("result").innerHTML = resultText;




}

