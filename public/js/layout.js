var element ;

function bone() {
    document.getElementById("cinematic").pause();
    document.getElementById("cinematic").currentTime = 0 ;

    element = document.getElementById("b1") ;
    element.classList.add("active") ;
    element = document.getElementById("b2") ;
    element.classList.remove("active") ;
    element = document.getElementById("b3") ;
    element.classList.remove("active") ;
    element = document.getElementById("b4") ;
    element.classList.remove("active") ;
    element = document.getElementById("b5") ;
    element.classList.remove("active") ;
    element = document.getElementById("b6") ;
    element.classList.remove("active") ;

    element = document.getElementById("s1") ;
    element.classList.remove("inactive") ;
    element = document.getElementById("s2") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s3") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s4") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s5") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s6") ;
    element.classList.add("inactive") ;
}

function btwo() {
    document.getElementById("cinematic").pause();
    document.getElementById("cinematic").currentTime = 0 ;

    element = document.getElementById("b1") ;
    element.classList.remove("active") ;
    element = document.getElementById("b2") ;
    element.classList.add("active") ;
    element = document.getElementById("b3") ;
    element.classList.remove("active") ;
    element = document.getElementById("b4") ;
    element.classList.remove("active") ;
    element = document.getElementById("b5") ;
    element.classList.remove("active") ;
    element = document.getElementById("b6") ;
    element.classList.remove("active") ;

    
    element = document.getElementById("s1") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s2") ;
    element.classList.remove("inactive") ;
    element = document.getElementById("s3") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s4") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s5") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s6") ;
    element.classList.add("inactive") ;
}

function bthr() {
    document.getElementById("cinematic").pause();
    document.getElementById("cinematic").currentTime = 0 ;

    element = document.getElementById("b1") ;
    element.classList.remove("active") ;
    element = document.getElementById("b2") ;
    element.classList.remove("active") ;
    element = document.getElementById("b3") ;
    element.classList.add("active") ;
    element = document.getElementById("b4") ;
    element.classList.remove("active") ;
    element = document.getElementById("b5") ;
    element.classList.remove("active") ;
    element = document.getElementById("b6") ;
    element.classList.remove("active") ;
    
    element = document.getElementById("s1") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s2") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s3") ;
    element.classList.remove("inactive") ;
    element = document.getElementById("s4") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s5") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s6") ;
    element.classList.add("inactive") ;
}

function bfou() {
    document.getElementById("cinematic").pause();
    document.getElementById("cinematic").currentTime = 0 ;

    element = document.getElementById("b1") ;
    element.classList.remove("active") ;
    element = document.getElementById("b2") ;
    element.classList.remove("active") ;
    element = document.getElementById("b3") ;
    element.classList.remove("active") ;
    element = document.getElementById("b4") ;
    element.classList.add("active") ;
    element = document.getElementById("b5") ;
    element.classList.remove("active") ;
    element = document.getElementById("b6") ;
    element.classList.remove("active") ;
    
    element = document.getElementById("s1") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s2") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s3") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s4") ;
    element.classList.remove("inactive") ;
    element = document.getElementById("s5") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s6") ;
    element.classList.add("inactive") ;
}

function bfiv() {
    document.getElementById("cinematic").pause();
    document.getElementById("cinematic").currentTime = 0 ;
    
    element = document.getElementById("b1") ;
    element.classList.remove("active") ;
    element = document.getElementById("b2") ;
    element.classList.remove("active") ;
    element = document.getElementById("b3") ;
    element.classList.remove("active") ;
    element = document.getElementById("b4") ;
    element.classList.remove("active") ;
    element = document.getElementById("b5") ;
    element.classList.add("active") ;
    element = document.getElementById("b6") ;
    element.classList.remove("active") ;
    
    element = document.getElementById("s1") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s2") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s3") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s4") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s5") ;
    element.classList.remove("inactive") ;
    element = document.getElementById("s6") ;
    element.classList.add("inactive") ;
}

function bsix() {
    document.getElementById("cinematic").pause();
    document.getElementById("cinematic").currentTime = 0 ;
    
    element = document.getElementById("b1") ;
    element.classList.remove("active") ;
    element = document.getElementById("b2") ;
    element.classList.remove("active") ;
    element = document.getElementById("b3") ;
    element.classList.remove("active") ;
    element = document.getElementById("b4") ;
    element.classList.remove("active") ;
    element = document.getElementById("b5") ;
    element.classList.remove("active") ;
    element = document.getElementById("b6") ;
    element.classList.add("active") ;
    
    element = document.getElementById("s1") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s2") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s3") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s4") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s5") ;
    element.classList.add("inactive") ;
    element = document.getElementById("s6") ;
    element.classList.remove("inactive") ;
}

module.exports = router;