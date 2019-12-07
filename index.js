var data 
window.addEventListener('load',()=>{

  var xhr = new XMLHttpRequest()
  xhr.open("GET","http://localhost:8000/")
  xhr.onload = function(){
    data = JSON.parse(xhr.response)
    console.log(data)
    updateDOM(data)
  }
  xhr.send()
})

function updateDOM(data){
  for(key in data){
    var doc = document.getElementById(key)
    doc.textContent = data[key]
  }
}