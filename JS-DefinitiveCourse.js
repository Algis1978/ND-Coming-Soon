console.log ("OBJEKTAI");
//Objektas - duomenų porų 'pavadinimas:vertė' rinkinys.
//Objekto sukūrimas per let, const ir var kintamuosius:
let knyga = {
    autorius: "V. M. Tekerėjus",
    puslapiųSkaicius: 823,
};
console.log(knyga);
//Objekto savybių pasiekimas:
knyga.autorius
console.log(knyga.autorius);
console.log(knyga["puslapiųSkaicius"]);
//Sąlyginių savybių iškvietimas (grąžins 'undefined'):
console.log(knyga.turinys);
//Objekto savybių įvedimas:
knyga.pavadinimas = "Tuštybės mugė";
knyga.ISBN = "123-3234-345";
//Skaitinio pavadinimo savybės įvedimas:
knyga[100] = "kodas";
//Tuščios savybės įvedimas:
knyga.turinys = {};
console.log(knyga);
console.log(knyga.turinys);

console.log ("MASYVAI (arrays)");
//Masyvai - numeruotų duomenų rinkiniai.
//Masyvų sukūrimas:
let gatvesNamuNumeriai = [1, 2, 3, 4, 5, 7, 9]
console.log (gatvesNamuNumeriai);
//Masyvų elementai sunumeruoti, pradedant 0:
console.log (gatvesNamuNumeriai[2]);
//Masyvo elementų eilutės ilgis pasiekiamas per .length raktažodį:
console.log (gatvesNamuNumeriai.length);
//Pakutinio masyvo elemento pasiekimas:
console.log (gatvesNamuNumeriai[gatvesNamuNumeriai.length-1]);
//Masyvo elementų įvedimas arba keitimas:
gatvesNamuNumeriai[0]=23;
console.log (gatvesNamuNumeriai[0]);
//Galima įvesti į masyvą aukštesnio eilės skaičiaus elementus:
gatvesNamuNumeriai[10]=25;
console.log (gatvesNamuNumeriai[10]);
console.log (gatvesNamuNumeriai[9]);
console.log (gatvesNamuNumeriai.length);
// Žodis turi masyvo savybių: - ilgį, raidės numerį:
let z = "visada";
console.log (z.length); //žodžio ilgis
console.log (z[3]); //ketvirta raidė žodyje

//Tiek objektai, tiek masyvai gali būti tušti:
const tusciasObjektas = {};
const tusciasMasyvas = [];
console.log (tusciasObjektas);
console.log (tusciasMasyvas);
//Tiek objektai, tiek masyvai savo sudėtyje gali turėti kitus objektus ir masyvus.

console.log ("MATEMATINIAI OPERATORIAI");
//Operatoriai - integruoti JS veiksmai su vertėmis (operandais).
//Matematiniai +, -, /, *, %, palyginimo <, >, >=, <= ir kt.
//sutrumpinti matematiniai operatoriai:
let skaicius = 7;
skaicius++; //prideda vienetą
console.log(skaicius);
skaicius--; //atima vienetą
console.log(skaicius);
skaicius += 3; //prideda 3
console.log(skaicius);
skaicius -= 4; //atima 4
console.log(skaicius);
skaicius *= 4; //padaugina iš 4
console.log(skaicius);
skaicius /= 3; //padalija iš 3
console.log(skaicius);

console.log ("PALYGINIMO OPERATORIAI");
//Plyginimo operatorių viksmai gražina boolean vertes 'true'(teisinga) ir 'false' (neteisinga).
let x = 10, y = 5;
console.log (x===y); //false
console.log (x!==y); //true
console.log (x < y); //false
console.log (x <= y); //false
console.log (x > y); //true
console.log (x >= y); //true
console.log ("taip"==="ne"); //false
console.log ("taip"==="taip"); //true
console.log (false === (x===y)); //true, apversta vertė

console.log ("LOGINIAI OPERATORIAI");
// Loginiai operatoriai && - ir, || - ar, ! - priešingai,
//naudojami su boolean vertėmis.
console.log ((x!==y)&&(x > y)); //true (2 true)
console.log ((x!==y)&&(x <= y)); //false (1 true, 1 false)
console.log ((x!==y)||(x <= y)); //true (1 true, 1 false)
console.log (!(x!==y)); //false (apverstas 1 true)

console.log ("FUNKCIJOS");
//Funkcija - kodo segmentas, kurį galima iššaukti kelis kartu vėliau kode.
//Pradedama raktažožiu 'function', po to seka 'pavadinimas', ('argumentas'), {'operacija'}.
function pridedamVieneta (k){
    return k+1
}
//'return' raktažodis grąžina funkcijos operacijos rezultatą.
console.log (pridedamVieneta (10));
//Funkcija gali būti priskirta kintamajam:
let m = function atimamVieneta (k) {
    return k-1
}
console.log(m (10));
//Funkija gali būti kitos funkcijos argumentu.
console.log (m(pridedamVieneta (5))); //prideda vienetą ir po to m atima vienetą.
//Rodyklinės funkcijos daugiausiai skirtos perduoti bevardę funkciją vietoj argumento kitai funkcijai.
let l = k => k + 1;
//kintamojo l funkcijos argumentas k perduodamas operacijai k + 1.
console.log (l(15));

console.log ("METODAI");
//Metodais vadinamos funkcijos, priskirtos objektų ir masyvų savybėms.
//Pagal nutylėjimą globalūs metodai priskirti objkto ir masyvo prototipo objektui:
let masyvas1 = [1, 2, 3, 4, 5, 6, 7]
//Pvz., funkcija 'reverse' perkeis elementų išdėstymą atbuline tvarka.
masyvas1.reverse()
console.log (masyvas1);
//Funkcija 'push' pridės naujus elementus.
masyvas1.push (8, 9, 10)
console.log (masyvas1);
//Objektų ir masyvų prototipų metodai nėra tapatūs.
//Savo susikurtą funkciją galima įvesti tarp objekto ir masyvo savybių.
//Pavyzdžiui panaudojam objektą 'knyga1'.
let knyga1 = {
    autorius: "V. M. Tekerėjus",
    puslapiųSkaicius: 823,
};
console.log (knyga1)
//Sukuriame funkciją, kuri sujungs autoriaus ir puslapių skaičiaus savybes į vieną sakinį.
//Šiuo atveju raktažodis 'this' nurodys į paties objekto savybes.
knyga1.aprasas = function () {
    return "Rašytojas "+this.autorius+" parašė "+this.puslapiųSkaicius+" puslapių knygą."
}
console.log (knyga1.aprasas ());