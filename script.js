const btn = document.getElementById("back-to-top");
console.log(btn);

btn.addEventListener('click', function(){
    window.scrollTo(0,0);
});