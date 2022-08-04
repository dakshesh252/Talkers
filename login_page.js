


function Save_user() {


    user = document.getElementById("user").value ;
    avatar = document.getElementById("Avatar").value ;

    localStorage.setItem("User-name" , user);
    localStorage.setItem("User-avatar" , avatar);
    
    window.location= "Media.html";
}