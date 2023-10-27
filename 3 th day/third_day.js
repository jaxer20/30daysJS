let a = 5
let b = 10
console.log(a+=b);

// alert("merhaba")
// prompt("rakam giriniz", "harf degil")
// let isDelete = confirm("silmek istediğine emin misin?")
// console.log(isDelete ? "Silme işlemi başarili" : "Silme islemi iptal edildi");

// let silme = confirm("işleminizi onayliyor musunuz?")
// console.log(silme ? "işleminiz silindi" : "işleminiz silinmedi");

const date = new Date()
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getHours())
console.log(date.getSeconds());
console.log(date.getMinutes())
console.log(date.getMilliseconds())
console.log(date.getTime())
console.log(date.getUTCFullYear());

let year = date.getFullYear()
    month = date.getMonth()
    day = date.getDate()
    hour = date.getHours()
    minute = date.getMinutes()
    second = date.getSeconds()
    dayNumber = date.getDay()
    let months = [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayis",
        "Haziran",
        "Temmuz",
        "Agustos",
        "Eylul",
        "Ekim",
        "Kasim",
        "Aralik"]
    console.log(months.length);
    let days = [
        "Pazartesi",
        "Sali",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi",
        "Pazar"]
    console.log(days.length);
    let ReadableDate = `${day} ${months[month]} ${year}, ${days[dayNumber]}, ${hour}:${minute}:${second}`

    // 13 Mart 2022, Pazar, 15:20:00

    console.log(ReadableDate);
    console.log(days[3]);

    // exercises
    console.log(4!=="4");
    console.log(!(4!=="4"));
    console.log(!(4>3 && 10>12));

    let todayMonth = date.getMonth()
    console.log(todayMonth);

    let todayDay = date.getDate()
    console.log(todayDay);
    // 
    let todayNumberOfDay = date.getDay()
    console.log(todayNumberOfDay);

    let todayHours = date.getHours()
    console.log(todayHours);

    let todayMinutes = date.getMinutes()
    console.log(todayMinutes);

    let todayTime = date.getTime()
    console.log(todayTime);

    // let baseOfTriangle = prompt("Please enter value base of Triange")
    // // let heightOfTriangle = prompt ("Please enter value height of triangle")

    // let areaOfTriangle = (baseOfTriangle * heightOfTriangle) / 2

    // console.log(areaOfTriangle);

    // let sideA = Number(prompt("enter side A"))
    // let sideB = Number(prompt("enter side B"))
    // let perimeter = (sideA + sideB) * 2
    // console.log(perimeter);

    // let r = Number(prompt("Enter value of radius"))
    // const pi = Math.PI
    // let area = pi * r * r
    // console.log(area);

    // let name1 = prompt ("Enter your name")
    // let nameLenght = name1.length
    // console.log(nameLenght >7 ? "your name is long" : "your name is short" );

    // let firstName = prompt ("enter your first name")
    // let lastName = prompt ("enter your last name")
    // let f = firstName.length
    // let l = lastName.length
    // console.log(f > l ? " `your first name,  ${firstName} is longer than your family name, ${lastName}" : "your family name, ${lastName} is longer than your first name,  ${firstName}`");

    // let firstName = "turgay"
    // let lastName = "kayis"
    // let f = firstName.length
    // let l = lastName.length
    // console.log(f > l ? " `your first name,  `${firstName}` is longer than your family name, lastName" : "your     family name, lastName is longer than your first     name,  firstName");
    
    
    // let date1 = new Date()
    // let birthYear = prompt("enter your birth day") 
    // let age = date1.getFullYear() - birthYear
    // let sure = 18 - age
    // console.log(age < 18 ? `"ehliyet almak için ${sure} yil 
    // beklemelisin"` : "ehliyet alabilir");


    // let now = new Date (year)
    // let birthYear = prompt("enter your birth day") 
    // let age = now - birthYear
    // let sure = 18 - age
    // console.log(age < 18 ? `"ehliyet almak için ${sure} yil beklemelisin"` : "ehliyet alabilir");

   
    //*YYYY/MM/DD HH:mm oluşturma
    let date1 = new Date ()
    let yil = date.getFullYear()
    let ay = date.getMonth()
    let gun = date.getDay()
    let saat = date.getHours()
    let dakika = date.getMinutes()
    let tarih = `${yil}/${ay}/ ${gun} ${saat}:${dakika}`
    console.log(tarih); 

    let date2 = new Date ("2017-01-26 9:4:1")
    console.log(date2);

    
    
    