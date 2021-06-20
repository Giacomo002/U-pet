const alert=document.querySelector("#alert");
const error=document.querySelector("#error");
const success=document.querySelector("#success");
const notf=document.querySelector("#notf");
const alert_m=document.querySelector("#alert > p");
const error_m=document.querySelector("#error > p");
const success_m=document.querySelector("#success > p");
const notf_m=document.querySelector("#notf > p");
function cleanAll(){
  try {
    alert.style.display="none";
  } catch (e) {}
  try {
    error.style.display="none";
  } catch (e) {}
  try {
    success.style.display="none";
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
  }else if(type=="success"){
    success.style.display="unset";
    success_m.innerText=mess;
  }else if(type=="notf"){
    notf.style.display="unset";
    notf_m.innerText=mess;
  }
}
