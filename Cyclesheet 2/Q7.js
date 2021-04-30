var ques = ["PPLEA","PLTOAP","ECPMORTU","BSMERLCA","EBKODARY"];
var ans = ["APPLE","LAPTOP","COMPUTER","SCRAMBLE","KEYBOARD"];
var hint = ["An _______ a day, keeps the doctor away","A portable device on which you can play this game","A non-portable device on which you can play this game","Name of this game","The device you are using to write your answers"];
var c=0;
var i=0;
var x="";
var s=0;
function load(){
    i=Math.floor(Math.random()*5);
    document.getElementById("word").innerHTML = ques[i];
    document.getElementById("hint").innerHTML = hint[i];
}
function button_click(){
    x = document.getElementById("answer").value;
    if(ques[i]!="done" && c!=5)
    {
        ques[i]="done";
        x=x.toUpperCase();
        if(x==ans[i]){
            alert("Success");
            s++;
        }
        else
            alert("Wrong Answer");
        c++;
    }
    i = Math.floor(Math.random()*5);
    while(ques[i]=="done" && c!=5)
    {
        i=Math.floor(Math.random()*5);
    }
    if(c!=5)
    {
        document.getElementById("word").innerHTML = ques[i];
        document.getElementById("hint").innerHTML = hint[i];
    }
    else
    {
        document.getElementById("word").innerHTML = "QUIZ COMPLETE";
        document.getElementById("hint").innerHTML = "Your Score is: "+s;
        document.getElementById("answer").style.display="none";
        document.getElementById("check").style.display="none";
    }
    document.getElementById("answer").value = "";    
}