const name=document.getElementById('name');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirmPassword=document.getElementById('confirm_password');

var button = document.getElementById("submit");
var form  = document.getElementById("myform")

form.addEventListener('submit',function(event){
    event.preventDefault();
    if(name.value==''){
        alert("enter your name");
        return;
    }
    if(email.value==''){
        alert("enter your email");
        return;
    }
    if(password.value==''){
        alert("enter the password");
        return;
    }
    if(password.value!=confirmPassword.value){
        alert("password dosent match");
        return;
    }
    

    button.addEventListener('click',function(){
        // var url = 'http://127.0.0.1:3000/vocabBuilder/index.html';
        console.log("hello");
        window.location.href ="index.html";
    
    });

})


function referToindex(){
    // cnt=0;
    if(name.value==''){
        alert("enter your name");
        return;
    }
    if(email.value==''){
        alert("enter your email");
        return;
    }
    if(password.value==''){
        alert("enter the password");
        return;
    }
    if(password.value!=confirmPassword.value){
        alert("password dosent match");
        return;
    }
    
    window.location.href='index.html';
}
