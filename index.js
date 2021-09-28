//symmetrical t-network
function cal_1(r, n){
  var res = parseFloat(r), dec = parseFloat(n);
  var m = Math.pow(10, dec/20);
  var a = res*((m-1) / (m+1));
  var b = res*((2* m) / (m*m - 1));
  var RA = a.toFixed(2);
  var RB = b.toFixed(2);
  document.getElementsByClassName("answer")[0].innerHTML = "<b>R1: </b> " + RA + " Ω <br> <b> R2: </b> " + RB + " Ω <br> <b> R3: </b> " + RA ;
}

//asymmetrical t-network
function cal_2(r1, r2, m){
  var res1 = parseFloat(r1), res2 = parseFloat(r2), dec = parseFloat(m);
  var n = Math.pow(10, dec/20);
  var a = (res1*((n*n + 1) / (n*n -1))) - (2 * Math.sqrt(res1 * res2)*(n/(n*n - 1)));
  var b = (2 * Math.sqrt(res1*res2)*(n/(n*n - 1)));
  var c = res2 * ((n*n + 1) / (n*n - 1)) - (2 * Math.sqrt(res1 * res2)*(n/(n*n - 1)));
  var RA = a.toFixed(2);
  var RB = b.toFixed(2);
  var RC = c.toFixed(2);
  document.getElementsByClassName("answer")[2].innerHTML = "<b> R1: </b>" + RA + " Ω <br> <b> R2: </b>" + RB + " Ω <br> <b> R3: </b>" + RC + " Ω";
}

//symmetrical pi-network
function cal_3(r, m){
  var res1 = parseFloat(r), dec = parseFloat(m);
  var n = Math.pow(10, dec/20);
  //var s = Math.sqrt(res1/res1);
  var a = res1 * ((n*n-1)/(n*n - 2*n + 1));
  var b = Math.sqrt(res1 * res1)*(n*n-1)/(2*n);
  var RA = a.toFixed(2);
  var RB = b.toFixed(2);
  document.getElementsByClassName("answer")[1].innerHTML = "<b> R1: </b>" + RA + " Ω <br> <b> R2: </b>" + RB + " Ω <br> <b> R3: </b>" + RA + " Ω";
}

//asymmetrical pi-network
function cal_4(r1, r2, m){
  var res1 = parseFloat(r1), res2 = parseFloat(r2), dec = parseFloat(m);
  var n = Math.pow(10, dec/20);
  var s = Math.sqrt(res1/res2);
  var a = res1 * ((n*n-1)/(n*n - 2*n*s + 1));
  var b = Math.sqrt(res1 * res2)*(n*n-1)/(2*n);
  var c = res2 * (n*n-1) / (n*n - 2*n/s + 1);
  var RA = a.toFixed(2);
  var RB = b.toFixed(2);
  var RC = c.toFixed(2);
  document.getElementsByClassName("answer")[3].innerHTML = "<b> R1: </b>" + RA + " Ω <br> <b> R2: </b>" + RB + " Ω <br> <b> R3: </b>" + RC + " Ω";
}

//bridged t-network
function cal_5(r, n){
  var res1 = parseFloat(r), dec = parseFloat(n);
  var m = Math.pow(10, dec/20);
  var a = res1;
  var b = res1 * (m - 1);
  var c = (a*a) / (b);
  var RA = a.toFixed(2);
  var RB = b.toFixed(2);
  var RC = c.toFixed(2);
  document.getElementsByClassName("answer")[4].innerHTML = "<b> R1: </b>" + RA + " Ω <br> <b> R2: </b>" + RB + " Ω <br> <b> R3: </b>" + RC + " Ω";
}

//L-Network
function cal_6(r1, r2, m){
  var res1 = parseFloat(r1), res2 = parseFloat(r2), dec = parseFloat(m);
  var n = Math.pow(10, dec / 10);
  if(res1 < res2){
    document.getElementsByClassName("answer")[5].innerHTML = "Invalid input. (Condition: Zs > Zl)";
    return;
  }
  if(res1 == res2){
    var s = Math.sqrt(res1 / res2);
    var a = (res1 * (n * s) - 1) / (s * n);
    var b = res1 / (s * (n - s));
  }
  else{
    var a = Math.sqrt(res1 * (res1 - res2));
    var b = (res1 * res2) / a;
  }
  var RA = a.toFixed(2);
  var RB = b.toFixed(2);
  document.getElementsByClassName("answer")[5].innerHTML = "<b>R1: </b>" + RA + " Ω <br> <b> R2: </b>" + RB + " Ω";
}
