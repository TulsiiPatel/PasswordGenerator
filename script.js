let slider = document.getElementById("slider");
let slidervalue = document.getElementById("slidervalue");
let finalpass = document.getElementById("finalpass");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let Generatebtn = document.getElementById("Generatebtn");
let copyIcon = document.getElementById("copyIcon");

slidervalue.textContent = slider.value;
slider.addEventListener('input',()=>{
    slidervalue.textContent = slider.value;
});

Generatebtn.addEventListener('click', ()=>{
    finalpass.value = GeneratePassword();
});

let lowerchars = "abcdefghijklmnopqrsyuvwxyz";
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num = "0123456789";
let sym = "~!@#$%^&*";

//function to genearate password
function GeneratePassword(){
    let string = "";
    let allChars = "";
    
    allChars += lowercase.checked ? lowerchars : "";
    allChars += uppercase.checked ? upperchars : "";
    allChars += numbers.checked ? num : "";
    allChars += symbols.checked ? sym : "";

    if(allChars == "" || allChars.length == 0){
        return string;
    }

    let i = 1;
    while(i <= slider.value){
        string += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    return string;
}

copyIcon.addEventListener('click', () => {
    if(finalpass.value != "" || finalpass.value.length >= 1){
        navigator.clipboard.writeText(finalpass.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(()=> {
            copyIcon.innerHTML = "content_copy";
            copyIcon.title ="";
        }, 3000)
    }
});