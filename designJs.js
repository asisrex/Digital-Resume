function design(value){
    var id = value;
    document.getElementById(id).style.border = '3px solid rgb(107, 111, 230)';
    document.getElementById(id).style.backgroundColor = 'rgb(177, 214, 255)';
    setTimeout(function () {
       document.getElementById(id).style.border ='1px solid rgb(63, 63, 63)';
  document.getElementById(id).style.backgroundColor='transparent';
}, 1000);
   }