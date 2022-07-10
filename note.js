tobi = JSON.parse(localStorage.getItem("project"));
var mail = JSON.parse(localStorage.getItem("Email"));
let receiver;
tobi.map((item,index)=>{
    if (tobi[index].Email == mail) {
        receiver = tobi[index].note
    }
})
const save = ()=>{
    if (title.value != "" && note.value != ""){
        informatio = {  
            userTitle:title.value,
            userNote:note.value,
        }
        receiver.push(informatio);
        display.innerHTML = "";
        only();
        title.value = "";
        note.value = "";
        tobi.map((item,index)=>{
            if (tobi[index].userEmail == mail) {
                tobi[index].userNote = receiver;
                console.log(tobi[index].userNote);
            }
        })
        localStorage.member = JSON.stringify(tobi);
    }else{
        alert("This is an empty note, it will not be saved")
    }
}
const only = ()=>{
    for (var index = receiver.length -1; index >= 0; index--) {
        display.innerHTML += `<div class="container col-12 col-md-6 card my-2" style="background-color: #15273B;">
            <h2 class="text-light">${receiver[index].userTitle}</h2>
            <p class="text-light">${receiver[index].userNote}</p>
            <div class="container pb-1">
                <button class="btn me-3" onclick='del(${index})' style="background-color:#E01541;color:white;">Delet Note</button>
                <button class="btn btn-primary me-3" onclick='edit(${index})' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit Note</button>
            </div>
        </div>`
    }
}
const del = (index)=>{
    let answer = confirm("Are you sure, you want to delet this note.");
    if (answer === true) {      
        let filteredArray = receiver.filter((item,ind)=>index != ind);
        receiver = filteredArray;
        tobi.map((item,index)=>{
            if (tobi[index].userEmail == mail) {
                tobi[index].userNote = receiver;
                console.log(tobi[index].userNote);
            }
        })
        display.innerHTML = "";
        only();
        localStorage.member = JSON.stringify(tobi);
    }
}
let ind;
const edit = (index)=>{
    let answer = confirm("Are you sure, you want to edit this note. if yes, you can delet the previous one, if not needed.")
    if (answer === true) {        
        title.value = receiver[index].userTitle;
        note.value = receiver[index].userNote;
        tobi.map((item,index)=>{
            if (tobi[index].userEmail == mail) {
                tobi[index].userNote = receiver;
                console.log(tobi[index].userNote);
            }
        })
        ind = index;
        display.innerHTML = "";
    }else{
        location.reload()
    }
}
const Update = ()=>{
    location.reload()
}
const logout = ()=>{
    localStorage.removeItem("Email")
}