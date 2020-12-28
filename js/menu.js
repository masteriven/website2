function menu(){
  var x = document.getElementById('menu');
  if(x.style.display === "block"){
    x.style.display = "none";
    console.log('none');

  }else{
    x.style.display = "block";
    console.log('block');

  }
}
