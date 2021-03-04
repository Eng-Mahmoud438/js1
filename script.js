var arabic=document.getElementById("arabic");
var english=document.getElementById("english");
var title=document.getElementById("title");
var title1=document.getElementById("title1");
var title2=document.getElementById("title2");
var about=document.getElementById("about");
var contact=document.getElementById("contact");
document.title="Eng.Mahmoud";
arabic.onclick=()=>{
     setlanguage("arabic");
     localStorage.setItem("Lang","arabic");
};
english.onclick=()=>{
    setlanguage("english");
    localStorage.setItem("Lang","english");
};
onload=()=>{
    setlanguage(localStorage.getItem("Lang"));
};
function setlanguage(getlanguage){
if(getlanguage==="arabic"){
title.innerHTML="المهندس محمود";
title1.innerHTML="اهلا بكم في موقع المهندس محمود";
about.innerHTML="معلومات عنا";
title2.innerHTML="انا مهندس اتصالات ومطور ويب";
contact.innerHTML="تواصل معنا";
}
else if(getlanguage==="english"){
    title.innerHTML="Engineer Mahmoud";
    title1.innerHTML="Welcome to website of Engineer Mahmoud";
about.innerHTML="About Us";
title2.innerHTML="I am an engineer and a software developer";
contact.innerHTML="Contact us";
}
}