let Timer_Mili_Seconds="00";
let Timer_Seconds="00";
let Timer_Minutes="00";
let Timer_Hours="00";

let Pause_Timer=document.getElementById('Pause_Timer');
Pause_Timer.onclick=()=>{
    window.clearInterval(s);
    let Reset_Timer=document.getElementById('Reset_Timer');
    Reset_Timer.disabled = false;
    Reset_Timer.setAttribute('class','Toogle_Button');
    let statr=document.getElementById('Toogle_Button');
    statr.disabled=false;
}
function Start_Timer()
{
    let statr=document.getElementById('Toogle_Button');
    statr.disabled=true;
      document.getElementById('Reset_Timer').disabled=true;
      s=setInterval(()=>{
        Timer_Mili_Seconds+=5;
        document.getElementById('MilliSeconds').innerHTML=Timer_Mili_Seconds;
        if(!(Timer_Mili_Seconds<100))
        {
            Timer_Mili_Seconds=0;
            Timer_Seconds++;
            if(Timer_Seconds<10){Timer_Seconds= String(Timer_Seconds).padStart(2,0)}
            document.getElementById('Seconds').innerHTML=Timer_Seconds;
        }
        if(!(Timer_Seconds<60))
        {
            Timer_Seconds=0;
            Timer_Minutes++;
            if(Timer_Minutes<10){Timer_Minutes= String(Timer_Minutes).padStart(2,0)}
            document.getElementById('Minutes').innerHTML=Timer_Minutes;
        }
        if(!(Timer_Minutes<60))
        {
            Timer_Minutes=0;
            Timer_Hours++;
            if(Timer_Hours<10){Timer_Hours= String(Timer_Hours).padStart(2,0)}
            document.getElementById('hours').innerHTML=Timer_Hours;
        }
        
    },50)
}
function Reset_Timer()
{
    Timer_Mili_Seconds="00";
    Timer_Seconds="00";
    Timer_Minutes="00";
    Timer_Hours="00";
    document.getElementById('MilliSeconds').innerHTML="00";
    document.getElementById('Seconds').innerHTML="00";
    document.getElementById('Minutes').innerHTML="00";
    document.getElementById('hours').innerHTML="00";
}

//////////////////////// Time - Time////////////////////////////////////////////
(()=>{
    let Time=new Date();
    let Hours=Time.getHours();
    Hours = (Hours % 12) || 12;
    let Minutes=Time.getMinutes();
    let Seconds=Time.getSeconds();

    let Hours_Degree=(360 / 12)*Hours;
    let Minutes_Degree=(360 / 60)*Minutes;
    let Seconds_Degree=(360 / 60)*Seconds;
    
    let Hours_Animation_String=`@keyframes ani_3{0%{transform: rotate(${Hours_Degree}deg);}100%{transform: rotate(360deg);}}`;
    let Minutes_Animation_String=`@keyframes ani_2{0%{transform: rotate(${Minutes_Degree}deg);}100%{transform: rotate(360deg);}}`;
    let Seconds_Animation_String=`@keyframes ani_1{0%{transform: rotate(${Seconds_Degree}deg);}100%{transform: rotate(360deg);}}`;
    document.head.innerHTML+="<style>"+Seconds_Animation_String+"\n"+Minutes_Animation_String+"\n"+Hours_Animation_String+ "</style>";
})();

document.getElementById('Stop_Watch_Button').onclick=()=>{
    document.querySelector('.Main-Section .Content-Wrapper .Content .Stop-Watch').style.left="0";
    document.querySelector('.Main-Section .Content-Wrapper .Content .Stop-Watch').style.opacity="1";
    document.querySelector('.Main-Section .Content-Wrapper .Content .Clock').style.left="300px";
    document.querySelector('.Main-Section .Content-Wrapper .Content .Clock').style.opacity="0";
    document.getElementById('Stop_Watch_Span').style.display="block";
    document.getElementById('Clock_Span').style.display="none";
};
document.getElementById('Clock_Button').onclick=()=>{
    document.querySelector('.Main-Section .Content-Wrapper .Content .Clock').style.left="0";
    document.querySelector('.Main-Section .Content-Wrapper .Content .Clock').style.opacity="1";
    document.querySelector('.Main-Section .Content-Wrapper .Content .Stop-Watch').style.left="px";
    document.querySelector('.Main-Section .Content-Wrapper .Content .Stop-Watch').style.opacity="0";
    document.getElementById('Clock_Span').style.display="block";
    document.getElementById('Stop_Watch_Span').style.display="none";
};