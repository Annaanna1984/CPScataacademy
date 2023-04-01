const buttonMenu = document.querySelector('.button--menu');
const sideBar = document.querySelector('.page__sidebar');
const pageMain =  document.querySelector('.page--main');
buttonMenu.addEventListener('click', function (){
    sideBar.classList.add('modal--open');
    pageMain.classList.add('main--opacity');
    pageMain.classList.add('main-overflow-hidden');
    pageMain.classList.remove('main-overflow-auto');
})

function sidebarClose() {
    sideBar.classList.remove('modal--open');
    pageMain.classList.remove('main--opacity');
    pageMain.classList.remove('main-overflow-hidden');
    pageMain.classList.add('main-overflow-auto');
}

function sidebarCloseClickOutside(e) {
    if(sideBar.classList.contains('modal--open') && !e.target.matches('.page__sidebar, .page__sidebar *')) {
        sidebarClose();
    }
}
document.addEventListener('touchstart', sidebarCloseClickOutside);
const iconClose = document.querySelector('.icon--close');
iconClose.addEventListener('click', sidebarClose)
const buttonFeedback = document.querySelector('.icon-feedback');
const feedback = document.querySelector('.feedback');
const btnClose = document.querySelector('.btn--close');
buttonFeedback.addEventListener('click', function (){
    feedback.classList.add('modal--open');
    pageMain.classList.add('main--opacity');
    sideBar.classList.add('main--opacity');
    pageMain.classList.add('main-overflow-hidden');
    sideBar.classList.remove('modal--open');
    pageMain.classList.remove('main-overflow-auto');
})



function feedbackClose() {
    feedback.classList.remove('modal--open');
    pageMain.classList.remove('main--opacity');
    sideBar.classList.remove('main--opacity');
    pageMain.classList.remove('main-overflow-hidden');
    pageMain.classList.add('main-overflow-auto');
}

function feedbackCloseTouchOutside(e) {
    if(feedback.classList.contains('modal--open') && !e.target.matches('.feedback, .feedback *')) {
        feedbackClose();
    }
}
document.addEventListener('touchstart', feedbackCloseTouchOutside);
btnClose.addEventListener('click', feedbackClose)

const buttonCall = document.querySelector('.icon-call');
const call = document.querySelector('.call');
buttonCall.addEventListener('click', function (){
    call.classList.add('modal--open');
    pageMain.classList.add('main--opacity');
    sideBar.classList.add('main--opacity');
    pageMain.classList.add('main-overflow-hidden');
    sideBar.classList.remove('modal--open');
    pageMain.classList.remove('main-overflow-auto');
    if (SidebarIconFeedback.classList.contains('modal--open')){
        document.querySelector(".icon-feedback").disabled = true;
    }
})

function callClose() {
    call.classList.remove('modal--open');
    pageMain.classList.remove('main--opacity');
    sideBar.classList.remove('main--opacity');
    pageMain.classList.remove('main-overflow-hidden');
    pageMain.classList.add('main-overflow-auto');
}

function callCloseTouchOutside(e) {
    if(call.classList.contains('modal--open') && !e.target.matches('.call, .call *')) {
        callClose();
    }
}
document.addEventListener('touchstart', callCloseTouchOutside);



const callIconClose = document.querySelector('.call__icon--close')
callIconClose.addEventListener('click', callClose)

const SidebarIconFeedback = document.querySelector('.sidebar__icon-feedback');
SidebarIconFeedback.addEventListener('click', function (){
    call.classList.remove('modal--open');
    feedback.classList.add('modal--open');
    pageMain.classList.add('main--opacity');
    sideBar.classList.add('main--opacity');
    pageMain.classList.add('main-overflow-hidden');
    pageMain.classList.remove('main-overflow-auto');
    sideBar.classList.remove('modal--open');
})

const SidebarIconCall = document.querySelector('.sidebar__icon-call');
SidebarIconCall.addEventListener('click', function (){
    feedback.classList.remove('modal--open');
    call.classList.add('modal--open');
    pageMain.classList.add('main--opacity');
    sideBar.classList.add('main--opacity');
    pageMain.classList.add('main-overflow-hidden');
    pageMain.classList.remove('main-overflow-auto');
    sideBar.classList.remove('modal--open');
})
function modalClickOutside(e){
    if(!e.composedPath().includes(SidebarIconFeedback) && !e.composedPath().includes(SidebarIconCall)
        && !e.composedPath().includes(buttonCall) && !e.composedPath().includes(buttonFeedback)
        && !e.composedPath().includes(buttonMenu)){
        callClose();
        feedback.classList.remove('modal--open');
        call.classList.remove('modal--open');
        sideBar.classList.remove('modal--open');
    }
}
document.addEventListener('click', modalClickOutside);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        feedback.classList.remove('modal--open');
        call.classList.remove('modal--open');
        sideBar.classList.remove('modal--open');
        pageMain.classList.remove('main-overflow-hidden');
        pageMain.classList.remove('main--opacity');
        sideBar.classList.remove('main--opacity');
    }
});