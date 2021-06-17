const alert=document.querySelector("#alert");
const error=document.querySelector("#error");
const succes=document.querySelector("#succes");
const notf=document.querySelector("#notf");
const alert_m=document.querySelector("#alert > p");
const error_m=document.querySelector("#error > p");
const succes_m=document.querySelector("#succes > p");
const notf_m=document.querySelector("#notf > p");
function cleanAll(){
  try {
    alert.style.display="none";
  } catch (e) {}
  try {
    error.style.display="none";
  } catch (e) {}
  try {
    succes.style.display="none";
  } catch (e) {}
  try {
    notf.style.display="none";
  } catch (e) {}
}
function message(type,mess){
  if(type=="alert"){
    alert.style.display="unset";
    alert_m.innerText=mess;
  }else if(type=="error"){
    error.style.display="unset";
    error_m.innerText=mess;
  }else if(type=="succes"){
    succes.style.display="unset";
    succes_m.innerText=mess;
  }else if(type=="notf"){
    notf.style.display="unset";
    notf_m.innerText=mess;
  }
}
