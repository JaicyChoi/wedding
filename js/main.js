if(window.NodeList && !NodeList.prototype.forEach)
    NodeList.prototype.forEach = Array.prototype.forEach;

const nav_wrapper = document.querySelector('.nav_wrapper');
const menu_mini_icon = document.querySelector('.menu_mini_icon');
const menu_mini = document.querySelector('.menu_mini');
const menu_mini_li = document.querySelectorAll('.menu_mini>li');
const main_visual = document.querySelectorAll('.main_visual');
const progress_bar = document.querySelectorAll('.progress_bar');
let interval = 3000;
let visual_index = 0;
let menu_click = false;
let progress_bar_before = document.head.appendChild(document.createElement('style'));

//show main visual and progress bar
main_visual[visual_index].classList.add('show');
progress_bar_before.innerHTML = '.progress_bar:nth-child('+ ( visual_index + 1 ) +'):before{ background: rgba(255, 255, 255, .75); animation: move_progress 3s infinite;}';
let show_main_visual = setInterval(show_next, interval);
function show_next(){
    main_visual[visual_index].classList.remove('show');
    progress_bar_before.innerHTML = '.progress_bar:nth-child('+ ( visual_index + 1 ) +'):before{ background: transparent; animation: none;}';
    visual_index++;
    if( visual_index >= main_visual.length ) visual_index = 0;
    main_visual[visual_index].classList.add('show');
    progress_bar_before.innerHTML = '.progress_bar:nth-child('+ ( visual_index + 1 ) +'):before{ background: rgba(255, 255, 255, .75); animation: move_progress 3s infinite;}';
}

//mini menu control
menu_mini_icon.addEventListener('click', function(){
    if( menu_click === false ){
        menu_click = true;
        if( nav_wrapper.classList.value.indexOf('scroll') > 0 )
            nav_wrapper.classList.add('hover');
        menu_mini_icon.classList.add('show');
        menu_mini.classList.add('show');
        menu_mini_li.forEach(function(li){
            li.classList.add('open');
        });
    }
    else{
        menu_click = false;
        if( nav_wrapper.classList.value.indexOf('scroll') > 0 )
            nav_wrapper.classList.remove('hover');
        menu_mini_icon.classList.remove('show');
        menu_mini.classList.remove('show');
        menu_mini_li.forEach(function(li){
            li.classList.remove('open');
        });
    }
});

const indicator = document.querySelector('.indicator');
const go_top = document.querySelector('.go_top');
const conetent_description = document.querySelector('.conetent_description');
const gallery1_div = document.querySelectorAll('.gallery1_wrap>div');
const gallery2_div = document.querySelectorAll('.gallery2_wrap>div');
const gruop2 = document.querySelector('.group2');
const group2_text_box = document.querySelector('.group2_text_box');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const group3_text_box = document.querySelector('.group3_text_box');
const wedding_img = document.querySelectorAll('.wedding_img');
const wedding_text_box_wrap = document.querySelectorAll('.wedding_text_box_wrap');
const group4 = document.querySelector('.group4');
const group4_text_box = document.querySelector('.group4_text_box');
const group5_logo = document.querySelector('.group5_logo');
const group5_text_box = document.querySelector('.group5_text_box');
const group5_title = document.querySelector('.group5_title');
const group5_img_shader = document.querySelector('.group5_img_shader');
const footer = document.querySelector('footer');
const footer_logo = document.querySelector('.footer_logo');
const footer_text = document.querySelector('.footer_text');
const sign_up_box = document.querySelector('.sign_up_box');
const social_li = document.querySelectorAll('.social>li');

window.addEventListener('scroll', function(){
    //show move top btn
    if( window.pageYOffset >= window.innerHeight/2 )
        go_top.classList.add('show');
    else
        go_top.classList.remove('show');

    //show group1 text
    if( window.pageYOffset >= 130 ){
        conetent_description.classList.add('show');
        indicator.classList.add('hide');
    }

    //fix navigator and show gallery images
    if( window.pageYOffset >= 200){
        nav_wrapper.classList.add('scroll');
        gallery1_div.forEach(function(div){
            div.classList.add('show');
        });
        gallery2_div.forEach(function(div){
            div.classList.add('show');
        });
    }
    else nav_wrapper.classList.remove('scroll');

    //show group2 texts
    if( window.pageYOffset >= 1500 ){
        gruop2.classList.add('show');
        group2_text_box.classList.add('show');
        left.classList.add('show');
        right.classList.add('show');
    }

    //show group3 text
    if( window.pageYOffset >= 2200 )
        group3_text_box.classList.add('show');
    //show group3 wedding images and texts
    if( window.pageYOffset >= 2600 ){
        wedding_img[0].classList.add('show');
        wedding_text_box_wrap[0].classList.add('show');
    }
    if( window.pageYOffset >= 2800 ){
        wedding_img[1].classList.add('show');
        wedding_text_box_wrap[1].classList.add('show');
    }
    if( window.pageYOffset >= 3000 ){
        wedding_img[2].classList.add('show');
        wedding_text_box_wrap[2].classList.add('show');
    }

    //show group4
    if( window.pageYOffset >= 4000 ){
        group4.classList.add('show');
        group4_text_box.classList.add('show');
    }

    //show group5 logo amd text
    if( window.pageYOffset >= 4800 ){
        group5_logo.classList.add('scale');
        group5_text_box.classList.add('show');
        group5_title.classList.add('show');
    }
    //show group5 image
    if( window.pageYOffset >= 5500 )
        group5_img_shader.classList.add('whip');

    //show footer
    if( window.pageYOffset >= 6500 ){
        footer.classList.add('show');
        footer_logo.classList.add('show');
    }
    if( window.pageYOffset >= 6600 ){
        footer_text.classList.add('show');
        sign_up_box.classList.add('show');
    }
    if( window.pageYOffset >= 6700 )
        social_li.forEach(function(li){
            li.classList.add('show');
        });

});

//top button control
go_top.addEventListener('click', function(){
    document.querySelector('header').scrollIntoView({behavior:'smooth'});
});