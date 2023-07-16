let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let ocean = document.querySelector('.ocean');
window.onscroll = function(){
    let vlaue = scrollY;
    stars.style.left = vlaue + 'px';
    moon.style.top = vlaue * 3 + 'px';
    mountains3.style.top = vlaue * 2 + 'px';
    mountains4.style.top = vlaue * 1.5 + 'px';
    river.style.top = vlaue  + 'px';
    boat.style.top = vlaue  + 'px';
    boat.style.left = vlaue * 3 + 'px';
    ocean.style.fontSize = vlaue + 'px';
    if(scrollY >= 55){
        ocean.style.fontSize = 55 + 'px';
        ocean.style.position = 'fixed';
        if(scrollY >= 424.55){
            ocean.style.display = 'none';
        }else{
            ocean.style.display = 'block';
        }
    }
    if(scrollY >= 168){
        document.querySelector('.main').style.background = 'linear-gradient(#000000, #2c022d)';
    }else{
        document.querySelector('.main').style.background = 'linear-gradient(#240021, #76007a)';
    }
    
    
}