document.getElementById("alert-name-btn").onclick= function() {
    alert('Abdullah Umer');
};
document.getElementById("alert-number-btn").onclick= function() {
    alert('03161602273');
};
document.getElementById("Clear-statement-btn").onclick=function(){
    document.getElementById("original-statement").innerHTML="";
    
}
document.getElementById("Clear-output-btn").onclick=function(){
    document.getElementById("Output").innerHTML="";
}
document.getElementById("variable-names-btn").onclick= function(){

    document.getElementById("original-statement").innerHTML = "<p>Variable Name</p>";
   
    document.getElementById("Output").innerText="fullName";
    document.getElementById("Output").style.textAlign="center";
}
document.getElementById("camelCase-btn").onclick= function(){

    document.getElementById("original-statement").innerHTML = "<p>Give Some Examples of Camel Case.</p>";
   
    document.getElementById("Output").innerHTML = "<ol><li>whatIsYourName?</li> <li>myNameIsAbdullahUmer.</li><li>iAmLearningJavaScript.</li></ol>";
    document.getElementById("Output").style.textAlign="left";
}
document.getElementById("sum-btn").onclick= function(){

    document.getElementById("original-statement").innerHTML = "<p>a = 9<br>b = 5 </p>";
   
    document.getElementById("Output").innerText="a + b = 14";
    document.getElementById("Output").style.textAlign="center";
}
document.getElementById("subtract-btn").onclick= function(){

    document.getElementById("original-statement").innerHTML = "<p>a = 5<br>b = 3 </p>";
   
    document.getElementById("Output").innerText="a - b = 2";
    document.getElementById("Output").style.textAlign="center";
}
document.getElementById("multiply-btn").onclick= function(){

    document.getElementById("original-statement").innerHTML = "<p>a = 4<br>b = 3 </p>";
   
    document.getElementById("Output").innerText="a * b = 12";
    document.getElementById("Output").style.textAlign="center";
}
document.getElementById("divide-btn").onclick= function(){

    document.getElementById("original-statement").innerHTML = "<p>a = 50<br>b = 25 </p>";
   
    document.getElementById("Output").innerText="a / b = 2";
    document.getElementById("Output").style.textAlign="center";
}
document.getElementById("calculate-some-numbers-btn").onclick= function(){

    document.getElementById("original-statement").innerHTML = "<p>a = 50<br>b = 25 <br>c = 15 </p>";
   
    document.getElementById("Output").innerText="a / b * c = 30";
    document.getElementById("Output").style.textAlign="center";
}