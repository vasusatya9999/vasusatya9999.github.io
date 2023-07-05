//<!--=======================Auto navbar scrrolling===========================-->
const section=document.querySelectorAll('section')
const navLink=document.querySelectorAll('header nav a')
window.onscroll=()=>{
    section.forEach(se=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id =sec.getAttribute('id')
        if(top>=offset && top< offset + height){
            navLink.forEach(links=>{
                links.classlis.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
    //<!--=======================sticky navbar===========================-->
var header=document.querySelector('header')
header.classList.toggle.apply("sticky",window.scrollY>100)


menubar.classList.remove('bx-x')
navbar.classList.remove('active')
};
//<!--=======================TOGGLE CHANGER===========================-->
let menubar=document.querySelector('#menu')
let navbar=document.querySelector('.navbar')
menubar.onclick= ()=>{
    menubar.classList.toggle('bx-x')
navbar.classList.toggle('active')
}

//<!--=======================TEXT  CHANGER===========================-->
var type=new Typed('.textline',{
    strings:["Frontend Developer","Graphic Designer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})