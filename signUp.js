let data=JSON.parse(localStorage.getItem("users")) ||[];

document.querySelector("form").addEventListener("submit",allData)

function allData(evemt){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("pass").value;


if(name==""||email==""||password==""){
    alert("Fill all detail")
}else{
    let data1=new Setdata(name,email,password);

    if(mailCheck(email)==true){
        data.push(data1);
        alert("Signup Successful")
        console.log(data);
        localStorage.setItem("users",JSON.stringify(data));
    }else{
        alert("Alredy Have an Account")
    }
   
}

}
let mailCheck=(mail)=>{
    let f=data.filter((elem)=>{
        return mail===elem.email;
    });
    if(f.length>0) return false;
    else return true;
}

class Setdata{
    constructor(n,e,p){
        this.name=n;
        this.email=e;
        this.password=p;
    }
}