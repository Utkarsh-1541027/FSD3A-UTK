function validate(){
    let username = document.getElementById("un").value;
    let pass = document.getElementById("pass").value;
    if(username.length < 10 && username.length == 0){
        return false;
    }
}