let n=new Date();
const date = document.getElementsByClassName("date-display")[0]
date.innerText=`${n.getDate()}/${n.getMonth()}/${n.getFullYear()}`