var userNameInput=document.getElementById('username')
var emailInput=document.getElementById('Email')
var passwordInput=document.getElementById('Password')



if(localStorage.getItem('signupInformation')==null){
    var signList=[];
}
else{
    var signListString=localStorage.getItem('signupInformation');
    var signList=JSON.parse(signListString);

}








function signup(){
    var signObject={
        sName:userNameInput.value,
        sEmail:emailInput.value,
        sPassword:passwordInput.value,
        
    }
    if(userNameInput.value && emailInput.value && passwordInput.value){

        signList.push(signObject);
        localStorage.setItem('signupInformation',JSON.stringify(signList));
        document.getElementById('uptext').innerHTML='Success'
       
      
      
    }else{
        document.getElementById('uptext').innerHTML='Inputs Required'
    }

    
 
   

}








var logEmailInput=document.getElementById('logEmail')
var logPasswordInput=document.getElementById('logpassword')
var btn =document.getElementById('login');
var a=document.getElementById('href')
var x =document.getElementById('txt')
loginList=[];



function loginData(){
    var div = ''
    for(i=0;i<signList.length;i++){
        div = 

        
        `<div class="  w-100 h-100 text-center mt-5 p-5 border-1">
        <h2 class="text-light fs-1 fw-bold shadow-lg text-capitalize h-75 mt-5" >Welcome ${signList[i].sName} </h2>
        </div>
        `
    }
    txt.innerHTML=div
}











function login(){


    for(i=0 ; i<signList.length ; i++){
    
         if(logEmailInput== signList[i].sEmail.value&&logPasswordInput.value==signList[i].sPassword){

           
                document.getElementById('downtxt').innerHTML='logged in'
            
            
             
         }
         else if(logEmailInput=='' && logPasswordInput ==''){ 

            
            document.getElementById('downtxt').innerHTML='All inputs is required'
            
    
         }
         else{
             document.getElementById('downtxt').innerHTML='incorrect email or password'
         }
    }
}
         




// loginData()
     
 
    
   





























// if(signList[i].emailInput.value == logEmailInput.value && signList[i].passwordInput.value == logPasswordInput){


//     location=("home.html")

// }else if(logEmailInput == '' && logEmailInput == ''){

//     document.getElementById('downtxt').innerHTML='Inputs Required'

// }else{
//     document.getElementById('uptext').innerHTML='wrong email or password'
// }






  
    
 

   




















































// if(localStorage.getItem('signupInformation')==null){
//     var signList=[];
// }
// else{
//     var signListString=localStorage.getItem('signupInformation');
//     var signList=JSON.parse(signListString);

// }

// function signup(){
//     var signObject={
//         pName:userNameInput.value,
//         pEmail:emailInput.value,
//         pPassword:passwordInput.value,
//     }
//     btn2.addEventListener('click' , function(){
//         signList.push(signObject);
//     localStorage.setItem('signupInformation',JSON.stringify(signList));
//     document.getElementById('uptext').innerHTML='Success'
//     })
    

// }





// function userRegex(sName){
//     var userNameInput=/^[A-Z][a-z]{5,10}[0-9]{0,4}$/;
//     pname=userNameInput.value;
    
   
    
// }
// function emailRegex(sEmail){
//     var emailInput=/[A-Z][a-z][0-9][@gmail.com][@yahoo.com][@outlook.com]$/;
//      sEmail=emailInput.value;
// }
// function passwordRegex(sPassword){
//      var passwordInput=/[A-Z a-z]{2,4}[0-9]{5,9}$/;
//     pPassword=passwordInput.value;
    
// }


// function signup(){

//     var signup={
//         pname:userNameInput.value,
//         pEmail:emailInput.value,
//         pPassword:passwordInput.value,
        
//     }

//     // signList.push(signup)

//  if(userRegex(pname) && emailRegex(email) && passwordRegex(pPassword)){

//         btn2.classList.remove=('disabled')

//         btn2.addEventListener('click' , function(){
            
//         })

      
//     }


// }



   
    




// function userValidation(){
//     var userRegex=/^[A-Z][a-z]{5,10}[0-9]{0,4}$/;
//     var sName = userNameInput.value;
// }
// function emailValidation(){
//     var emailRegex=/[A-Z a-z][0-9][@gmail.com | @yahoo.com | @outlook.com]$/;
//     var sEmail=emailInput.value;
// }
// function passwordValidation(){
//     var passwordRegex=/[0-9]$/;
//     var sPassword=passwordInput.value;
    
// }

// // if(userValidation() && emailValidation() && passwordValidation() == true){
//     signList.push(signObject);
//     localStorage.setItem('signupInformation',JSON.stringify(signList));
//     document.getElementById('uptext').innerHTML='Success'
// //    userNameInput.classList.add=("is-valid")
// //    userNameInput.classList.remove=('is-invalid')

// }else{
//     document.getElementById('uptext').innerHTML='Try Again'
// }



// function login(){
//    var loginObject={
//     pEmail:logEmailInput.value,
//     pPassword:logPasswordInput.value
//    }
   


// //    console.log(loginObject,loginObject.lemail);


// //    for(){

//         if(logEmailInput.value == emailInput.value && logPasswordInput.value == passwordInput.value){
            
//             location.href=""





//         }
//         else if(loginObject.pEmail==''&&loginObject.pPassword==''){
//             document.getElementById('parag').innerHTML='All inputs is required'
//         }
//         else{
//             document.getElementById('parag').innerHTML='incorrect email or password'
//         }
    
//    }