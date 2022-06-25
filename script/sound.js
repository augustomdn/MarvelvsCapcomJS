//Estou tentando colocar som ná página a partir do momento em que ela carrega, aparentemente o Chrome desabilitou o autoplay!

setTimeout(() => {
    document.getElementById("audio").play();

    
}, 0.1);

var vid = document.getElementById("audio");
vid.volume = 0.03;

