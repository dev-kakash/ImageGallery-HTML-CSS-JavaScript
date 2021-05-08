var a = document.getElementsByClassName("a");
a[0].onclick = function(){
    pic.src = "pic1.png";
}
a[1].onclick = function(){
    pic.src = "pic2.png";
}
a[2].onclick = function(){
    pic.src = "pic3.png";
}
a[3].onclick = function(){
    pic.src = "pic4.png";
}

for (let i = 0;i<4;i++){
   a[i].addEventListener('click',function(){
        let b = document.getElementsByClassName("k");
        b[0].className = b[0].className.replace("k","");
        this.className += "k";


   });
}