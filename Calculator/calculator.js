let btn = document.querySelectorAll('input');
let dis = document.getElementById('display');


let count = 0;


for (let i = 0; i < btn.length; i++) {
    const element = btn[i];
    element.addEventListener('click', function run() {
        if (element.value == 'AC') {
            dis.innerHTML = '';
        }
        else if (element.value == 'Del') {
            dis.innerHTML = dis.innerHTML.substring(0, dis.innerHTML.length - 1);
        }
        else if (element.value == '=') {
            let n = eval(dis.innerHTML);
            dis.innerHTML = n;
        }
        else if (element.value == 'x') {
            dis.innerHTML += '*'
        }
        else if (element.value == '.') {
            count++;
            if (count == 1) {
                dis.innerHTML += '.'
            }
        }
        else if (element.value != 'Dark mode' && element.value != '.' && element.innerHTML != 'x') {
            dis.innerHTML += element.value;
            count = 0;
        }
        else if (element.value == 'Dark mode') {
            dis.innerHTML += ''
        }

    })
}



function black() {
    let backmain = document.getElementById('main');
    let dis = document.getElementById('display');
    let bgc = document.querySelector('body');
    
    if (dis.style.color != 'white') {

        bgc.style.backgroundColor = '#0E090A';
        dis.style.backgroundColor = '#090305';
        dis.style.color = 'white'
        backmain.style.backgroundColor = '#141313';
        backmain.style.boxShadow = '8px 8px 12px #000000, -8px -8px 14px #3332328f';

    }
    else {
        dis.style.backgroundColor = '#bdbdbd'
        dis.style.color = 'black'
        backmain.style.backgroundColor = '#cccccc';
        bgc.style.backgroundColor = '#ececec';
        backmain.style.boxShadow = '8px 8px 12px #0000005e, -8px -8px 14px #ffffff';
    }

    // if(nine.style.backgroundColor != '#262525' ){
    //     nine.style.backgroundColor = '#262525' ;
    //     nine.style.color = '#ffffff';
    // }
    // else{
    //     nine.style.backgroundColor = '#ffffff'; 
    //     nine.style.color = '#030102'
    // }


 
}





