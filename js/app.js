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

function themeChange2() {
    
    if (document.getElementById('theme').classList.contains('light')) {
        document.getElementById('theme').href = './css/dark.css';
    
        document.getElementById('theme').classList.remove('light');
        document.getElementById('theme').classList.add('dark');
    
    
        // alert('escuro');
    }
}

function themeChange3() {
    if(document.getElementById('theme').href = './css/dark.css') {
        document.getElementById('theme').href = './css/light.css';
    } 
    if(document.getElementById('theme').href = './css/dark.css') {
        document.getElementById('theme').href = './css/dark.css';
    }
}
