
export function login(userInfo){
      if(localStorage){
        if(localStorage.user){
            alert("Already Registered")
        }
        else{
            localStorage.user = JSON.stringify(userInfo);
            alert("New User Registered")
            location.href = "index.html";
        }
      }
      else{
        alert("Outdated Browser")
      }
}