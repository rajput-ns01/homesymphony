
document.addEventListener("DOMContentLoaded", function() {
const firebaseConfig = {
    apiKey: "AIzaSyAjkwZu9h04wd2ggR8Pr12yletn1Hrm0QA",
    authDomain: "homesymp-aa82b.firebaseapp.com",
    databaseURL: "https://homesymp-aa82b-default-rtdb.firebaseio.com",
    projectId: "homesymp-aa82b",
    storageBucket: "homesymp-aa82b.appspot.com",
    messagingSenderId: "305599003780",
    appId: "1:305599003780:web:c0dde666112721a94b56d1"
  };


  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
  // Initialize Variables
  const auth=firebase.auth() 
  const database=firebase.database() 

  //set up our register function
  function register(){
    //Get all our input fields
    email=document.getElementById('email').value
    password=document.getElementById('password').value
    full_name=document.getElementById('full_name').value

    //Validate input fields
    if(validate_email(email)==false||validate_password(password)==false){
        alert('Email or Password is incorrect!')
        return
        //Dont conyinue running the code
    }
    if(validate_fields(full_name==false)){
        alert('incorrect name')
        return
    }

    //Move on with Auth
    auth.createUserWithEmailAndPassword(email,password)
    .then(function(){
        //Declare user variables
        var user=auth.currentUser

        //Add this to firebase database
        var database_ref=database.ref()

        //Create User data
        var user_data={
            email:email,
            full_name:full_name,
            last_login:Date.now()
        }
        database_ref.child('users/'+user.uid).set(user_data)

        alert('User created!!')
    })
    .catch(function(error){
        //Firebase will use this to alert of its errors
        var error_code=error.error_code
        var error_message=error.message 

        alert(error_message)
    })
  }


  //Set up our login function
  function login(){
    email=document.getElementById('email').value
    password=document.getElementById('password').value

    //AlsoValidate
    if(validate_email(email)==false||validate_password(password)==false){
        alert('Email or Password is incorrect!')
        return
        //Dont conyinue running the code
    }
    auth.signInWithEmailAndPassword(email,password)
    .then(function(){
                //Declare user variables
        var user=auth.currentUser

        //Add this to firebase database
        var database_ref=database.ref()

        //Create User data
        var user_data={
            last_login:Date.now()
        }

        //Push to Firebase Database
        database_ref.child('users/'+user.uid).update(user_data)

        alert('User Logged In!!')
    })
    .catch(function(error){
               //Firebase will use this to alert of its errors
        var error_code=error.error_code
        var error_message=error.message 

        alert(error_message)
    })
  }

  //Validate functions
  function validate_email(email){
    expression=/^[^@]+@\w+(\.\w+)+\w$/
    if(expression.test(email)==true){
        //Email is good
        return true
    }else{
        //Email is mot good
        return false
    }
  }

  function validate_password(password){
    //Firebase only accepts lengths greater than 6
    if(password<6){
        return false
    }
    else {
        return true
    }
  }

  function validate_fields(field){
    if(field==null){
        return false
    }
    if(field.length<=0){
        return false
    }else{
        return true
    }
  }
});