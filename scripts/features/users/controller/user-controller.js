import User from "../model/user-model.js";
import { login } from "../service/user-services.js";

window.addEventListener("load", initEvent);

function initEvent(){
    document.querySelector('#go').addEventListener("click",takeUserInput);
}

function takeUserInput(){
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    console.log(`Email is ${email} and Password is ${password}`);
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";

    let user = new User(email,password);
    console.log("Class chal padi",user);
    login(user);
}