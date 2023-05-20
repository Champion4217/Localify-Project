//-----------adding animation to text------//

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i =0; i<reveals.length;i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 0;

        if(revealtop< windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

//----- adding animation to images---- //

window.addEventListener('scroll', image);

function image(){
    var images = document.querySelectorAll('.image');

    for(var i =0; i<images.length;i++){
        var windowheight = window.innerHeight;
        var imagetop = images[i].getBoundingClientRect().top;
        var imagepoint =200;

        if(imagetop< windowheight - imagepoint){
            images[i].classList.add('active');
        }
        else{
            images[i].classList.remove('active');
        }
    }
}
