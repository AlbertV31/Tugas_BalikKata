function balikKata(kata) {
 var awal = kata;
 var balik = '';
 for (var i = kata.length-1 ; i >= 0; i--) {
   balik = balik + awal[i];
 }
 return balik;
}

// testCase
console.log(balikKata("Niomic!"))
console.log(balikKata("JavaScript"))
console.log(balikKata("alohahola"))
console.log(balikKata("Jawa_Barat"))
