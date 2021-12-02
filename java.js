
for(var i=0;i<document.querySelectorAll("button").length;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    /*  alert("sachin");*/
     const str=this.innerHTML;

     if(str=="w")
     {
       var audio=new Audio("crash.mp3");
       audio.play();

     }
     if(str=="a")
     {
       var audio=new Audio("kick-bass.mp3");
       audio.play();
     }
     if(str=="s")
     {
       var audio=new Audio("snare.mp3");
       audio.play();
     }
     if(str=="d")
     {
       var audio=new Audio("tom-1.mp3");
       audio.play();
     }
     if(str=="j")
     {
       var audio=new Audio("tom-2.mp3");
       audio.play();
     }
     if(str=="k")
     {
       var audio=new Audio("tom-3.mp3");
       audio.play();
     }
     if(str=="l")
     {
       var audio=new Audio("tom-4.mp3");
       audio.play();
     }
   });

}
