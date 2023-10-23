console.log(typeof 6);
console.log(typeof null);
console.log(typeof undefined);
 
// let age = 30
// let name = "jaxer"
// const surname = "hope"
// const alive = true
// console.log(name, surname, age, alive);
// 
// DAY2
const word = "javascript"
word [0] = "Y"
console.log(word); 

let numOne = 3
let numTwo = 3
console.log(numOne == numTwo);

let js = "javascript"
let py = "phyton"
console.log(js == py);

let nums = [1, 2, 3]
nums [0] = 10
console.log(nums);

let nums1 = [1,2,3]
let nums2 = [1,2,3]
console.log(nums1==nums2);

let pi = Math.PI
console.log(pi);

console.log(Math.round (pi))
console.log(Math.floor (pi))
console.log(Math.ceil (pi))

let a = (22, -40, 80, 5, 9)
console.log(Math.min(a));
console.log(Math.max(a));

console.log(Math.min(22, -40, 80, -2));
console.log(Math.max(22, -40, 80, -2));

 
let age = 30
let name = "jaxer"
const surname = "hope"
const alive = true
const nn = "1"
const mm = "2"
let fullName = (name +" "+ surname+ " " + age+ " " + alive)
console.log(fullName);
console.log(nn + mm );
// console.log (fullName = (`${name}`))
console.log(fullName.length);
console.log(fullName.length-1);

let yazi = "denizli"
let lastYazi = yazi.length-1
console.log(lastYazi);
console.log(yazi.toUpperCase());
console.log

let string = 'afyonkarahisar'
console.log(string.substr());
const isim = 'jaxer hope, three one, two, four, five'
console.log(isim.split(",", 2 ))
let cars = "  audi,  bmw,  mercedes   ."
console.log(cars.trim(""));
console.log(cars);
console.log(cars.includes("audi"));
console.log(cars.includes("Audi"));

let str = "merhaba Ahmet, nasilsin Ahmet"
console.log(str.replace("Ahmet", "Mehmet"));
console.log(str.replaceAll("Ahmet", "Mehmet"));

console.log(string.indexOf("K"));
console.log(string.indexOf("o"));
console.log(string.indexOf("a"));
console.log(string.lastIndexOf("a"));

let str1 = "30 Days Of Javasscript"
console.log(str1.startsWith("30"));
console.log(str1.startsWith("thirty"));
console.log(str1.startsWith("Days"));
console.log(str1.endsWith("pt"));

console.log(str1.search("Of"));
console.log(str1.search( /of/gi));

let str2 = "I Love JavaScript. If you do not love Javascript what else can you love"

console.log(str2.match("love"));
console.log(str2.match(/love/));
console.log(str2.match(/love/gi));

let txt= 'In 2019 bla bla 30 day, in 2020 25 hours'
let regEx = /\d+/
console.log(txt.match(regEx));
console.log(txt.match(/\d+/g));

let str3 = "love "
console.log(str3.repeat(10));
typeof "5"

const a1 = "6"
console.log(typeof(a1))
console.log(typeof(+a1))

let str5 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cupiditate recusandae ab necessitatibus aliquid sit a earum. Voluptates similique exercitationem ut dignissimos  pariatur. Dicta, ratione.'

console.log(str5.match("a"))
console.log(str5.replaceAll("a", "A"))


// EXERCISES
let x = [0,1,2,3]
let y = "0,1,2,3"
console.log(y==x);
x [4] = 25
x [2] = 40
console.log(x);
y [4] = "123"
y [8] = "2000"
console.log(y);
console.log(y.substr(2));

console.log(str5.split(".", 2));
console.log(str5.includes("Ut"));
let x1 = "n1m1k1l1o1u1y1t1r1e1e3e4e5e6e7e8"
console.log(x1.replaceAll("1", "e"));
console.log(str5.lastIndexOf("a"));
console.log(str5.startsWith("l"));
console.log(x1.endsWith("e"));
console.log(x1.search(/8/gi));
console.log(str5.match("Ut"));
console.log(str5.match(/Ut/i));

let y2 = "sdfgh bir sdflsjkgsşdl bir wepj bir dfghj bir wery bir sadfg bir gujtr bir qweqr bir jtyk Bir BIR BiR"
console.log(y2.match("bir"));
console.log(y2.match(/bir/gi));
console.log(y2.match(/bir/g));
console.log(y2.match(/bir/));
let xx = "I love js. js is good kind ofsoftware. Js fg "
console.log(xx.match(/js/gi));