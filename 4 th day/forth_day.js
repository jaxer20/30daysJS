 let num = 0 
 if (num > 0){
    console.log(`${num} is a positive number`);
 } else if (num < 0) {
    console.log(`${num} is a negative number`);
 } else {
    console.log(`${num} = 0`);
 }

    let score = 60
    if (0 <= score && score <40) {
        console.log(`${score} = DD`);
    } else if (40 <= score && score < 60) {
        console.log(`${score} = CC`);
    } else if (60 <= score && score < 85) {
        console.log(`${score} = BB`)
    } else if (85 <= score && score <= 100) {
        console.log(`${score} = AA`)
    } else {
        console.log("girilen not 0-100 arasında olmalidir");
    }


    // let sayi = prompt("bir sayi giriniz")
    // if (sayi % 2 == 0) {
        // console.log("çift sayi girdiniz");
    // } else {
        // console.log("tek sayi girdiniz");
    // }

    let now = new Date()
    let bugun = now.getDay()
    if (bugun == 7 || bugun == 6) {
        console.log("iyi hafta sonlari");
    } else {
        console.log("iyi mesailer");
    }
    console.log(bugun);


    // k = "ab"
    // p = "1234"
    // let name1 = prompt("kullanici adi giriniz")
    // let password = prompt("sifre giriniz")
    // if (name1 == k && password == p) {
        // console.log("giris basarili");        
    // } else if (name1 == k && password != p) {
        // console.log("hatali sifre");
    // } else if (name1 != k && password == p) {
        // console.log("kullanici adi hatali");
    // } else {
        // // console.log("kullanici adi ve sifre hatali");
    // }

    let number2= 5
    switch (number2 < 0) {
        case "1": console.log("`${number2} sifirdn küçük DOGRU`");
            break;
        default:console.log("sifirdan kucuk");
            break;
    }

    let not = 84
    switch (true) {
        case ( 0 < not && not < 40):
            console.log("dd");
            break;
        case ( 40 <= not && not < 60):
            console.log("cc");
            break;
        case ( 60 <= not && not < 85):
            console.log("bb");
            break;
        case ( 85 <= not && not <= 100):
            console.log("aa");
            break;
        default:
            console.log("0-100 arasi giriniz");
    }


    let myAge = 30
    let yourAge = 30

    switch (true) {
        case (myAge > yourAge):
            console.log(`"ben senden ${myAge - yourAge} yaş daha buyugum"`);
            break;
        case (yourAge > myAge):
            console.log(`"sen benden ${yourAge - myAge} daha buyuksun"`);
            break;
        default:
            console.log("yaslarimiz esit");;
    }