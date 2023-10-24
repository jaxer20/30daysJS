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

    let sideA = Number(prompt("enter side A"))
    let sideB = Number(prompt("enter side B"))
    let perimeter = (sideA + sideB) * 2
    console.log(perimeter);