const nav_wrapper = document.querySelector('.nav_wrapper');
const menu_mini_icon = document.querySelector('.menu_mini_icon');
const menu_mini = document.querySelector('.menu_mini');
const menu_mini_li = document.querySelectorAll('.menu_mini>li');

window.addEventListener('scroll', function(){
    if( window.pageYOffset >= 170){
        nav_wrapper.classList.add('scroll');
    }
    else nav_wrapper.classList.remove('scroll');
});

let menu_click = false;

menu_mini_icon.addEventListener('click', function(){
    if( menu_click === false ){
        menu_click = true;
        menu_mini_icon.classList.add('show');
        menu_mini.classList.add('show');
        menu_mini_li.forEach(function(li){
            li.classList.add('open');
        });
    }
    else{
        menu_click = false;
        menu_mini_icon.classList.remove('show');
        menu_mini.classList.remove('show');
        menu_mini_li.forEach(function(li){
            li.classList.remove('open');
        });
    }
});

//making top button!