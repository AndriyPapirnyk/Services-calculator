range_inp.oninput = function() {
document.getElementById('age').innerText = range_inp.value;
};
let sip1cur = false;
let sip2cur = false;
let sip3cur = false;

let mainPrice = 7500;
price.innerText = mainPrice + '₴';

ip1.onclick = function() {
    sip2.style.display = 'none';
    sip3.style.display = 'none';

if(sip1cur === false) {
sip1.style.display = 'flex';
sip1cur = true;
} else if(sip1cur === true){
sip1.style.display = 'none';
sip1cur = false;
};
};

ip2.onclick = function() {
    sip1.style.display = 'none';
    sip3.style.display = 'none';

    if(sip2cur === false) {
    sip2.style.display = 'flex';
    sip2cur = true;
    } else if(sip2cur === true){
    sip2.style.display = 'none';
    sip2cur = false;
    };
};
  
ip3.onclick = function() {
    sip1.style.display = 'none';
    sip2.style.display = 'none';

        if(sip3cur === false) {
        sip3.style.display = 'flex';
        sip3cur = true;
        } else if(sip3cur === true){
        sip3.style.display = 'none';
        sip3cur = false;
        };
};

bl1.onclick = function(){
txt1.innerText = 'Повний день';
sip1.style.display = 'none';
sip1cur = false;
mainPrice = mainPrice + 2300;
price.innerText = mainPrice + '₴';
};
bl2.onclick = function(){
    txt1.innerText = 'Неповний день';
    sip1.style.display = 'none';
    sip1cur = false;
    mainPrice = mainPrice - 2300;
    price.innerText = mainPrice + '₴';
    };
    bl3.onclick = function(){
        txt2.innerText = '2-х разове (сніданок-обід)';
        sip2.style.display = 'none';
        sip2cur = false;
        mainPrice = mainPrice - 1200;
        price.innerText = mainPrice + '₴';
        };
        bl4.onclick = function(){
            txt2.innerText = '4-х разове (сніданок, обід, перекус, вечеря)';
            sip2.style.display = 'none';
            sip2cur = false;
            mainPrice = mainPrice + 1200;
            price.innerText = mainPrice + '₴';
            };
            bl5.onclick = function(){
                txt3.innerText = 'Оплата за реквізитами щомісяця';
                sip3.style.display = 'none';
                sip2cur = false;
                };
                bl6.onclick = function(){
                    txt3.innerText = 'Автоматичне списання з картки що місяця';
                    sip3.style.display = 'none';
                    sip2cur = false;
                    mainPrice = mainPrice - mainPrice/10;
            price.innerText = mainPrice + '₴';
                    };




