const theme = document.getElementById('theme');

function olaMundo() {
    alert('ola mundo!')
}

function themeChange() {
    // alert('teste')
    if (document.getElementById('theme').classList.contains('dark')) {
        document.getElementById('theme').href = './css/light.css';

        document.getElementById('theme').classList.remove('dark');
        document.getElementById('theme').classList.add('light');


        // alert('claro');
    }
    if (document.getElementById('theme').classList.contains('light')) {
        document.getElementById('theme').href = './css/dark.css';

        document.getElementById('theme').classList.remove('light');
        document.getElementById('theme').classList.add('dark');


        // alert('escuro');
    }
}

// function themeChange2() {

//     if (document.getElementById('theme').classList.contains('light')) {
//         document.getElementById('theme').href = './css/dark.css';

//         document.getElementById('theme').classList.remove('light');
//         document.getElementById('theme').classList.add('dark');


//         // alert('escuro');
//     }
// }

// function themeChange3() {
//     if (document.getElementById('theme').href = './css/dark.css') {
//         document.getElementById('theme').href = './css/light.css';
//     }
//     if (document.getElementById('theme').href = './css/light.css') {
//         document.getElementById('theme').href = './css/dark.css';
//     }
// }

// function themeChange4() {
//     document.getElementById('theme').onclick = function () {
//         if (document.getElementById('theme').href = './css/dark.css') {
//             document.getElementById('theme').href = './css/light.css';
//         }
//         if (document.getElementById('theme').href = './css/light.css') {
//             document.getElementById('theme').href = './css/dark.css';
//         }
//     }
// }

// function themeChange5() {
//     // alert('teste')
//     if (document.body.classList.contains('light')) {
//         document.getElementById('theme').href = './css/light.css';

//         document.getElementById('theme').classList.remove('dark');
//         document.getElementById('theme').classList.add('light');


//         // alert('claro');
//     } else {
//         document.getElementById('theme').href = './css/dark.css';

//         document.getElementById('theme').classList.remove('light');
//         document.getElementById('theme').classList.add('dark');


//         // alert('escuro');
//     }
// }

function themeChange6() {
    document.getElementById("themes").addEventListener('click', e => {
        if (document.body.classList.contains("light-mode")) {
            document.body.classList.toggle("dark-mode");
        } else {
            document.body.classList.toggle("light-mode");
        }
    });
}

function teste2() {
    document.body.innerHTML = "<p>Oi</p>";
}

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener('click', (e) => {
    alert("ola")
});
