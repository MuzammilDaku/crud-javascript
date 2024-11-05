var editMode = null
function emply (){
    if (editMode==null){
        getData(),
        reset()
   
    }
    else{
        update()
        editMode = null
        reset()
    }
    
}
function getData() {
  var x = document.getElementById("in1").value;
  var y = document.getElementById("in2").value;
//   console.log(x, y);
  var a = document.getElementById('td1')
  var b = document.getElementById('td2')
  var table = document.getElementById('table')
  var row = table.length
  var newRow = table.insertRow(row)
  cell1 = newRow.insertCell(0)
  cell2 = newRow.insertCell(1)
  cell3 = newRow.insertCell(2)
  cell4 = newRow.insertCell(3)
  cell1.innerHTML=x
  cell2.innerHTML=y
  cell3.innerHTML=`<button onclick="edit(this)"  data-toggle="modal" data-target="#exampleModal" class="btn btn-outline-primary">Edit/Update</button>`
  cell4.innerHTML=`<button  onclick="dlt(this)" class="btn btn-outline-danger">Delete</button>`
};


function reset(){
    document.getElementById('in1').value=''
    document.getElementById('in2').value=''
}
function edit(e){
    editMode = true
  editMode = e.parentElement.parentElement
//    console.log(x)
   document.getElementById('in1').value=editMode.cells[0].innerHTML
   document.getElementById('in2').value=editMode.cells[1].innerHTML
}
function update(e){
    editMode.cells[0].innerHTML= document.getElementById('in1').value
    editMode.cells[1].innerHTML= document.getElementById('in2').value
}
function dlt(d){
    var a = d.parentElement.parentElement
    if (confirm("Are You Sure?") == true) {
      a.remove()
      } 
}

