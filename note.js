tobi = JSON.parse(localStorage.getItem("project"));
var loginuser = JSON.parse(localStorage.getItem("Eail"));
let hass;
tobi.map((item,index)=>{
    if (tobi[index].Email == loginuser) {
        hass = tobi[index].note;
    }
})
const only = ()=>{
    for (var index = hass.length -1; index >= 0; index--) {
        display.innerHTML += `<div class="container col-12 col-md-6 card my-2" style="background-color: #15273B;">
            <h2 class="text-light">${hass[index].userTitle}</h2>
            <p class="text-light">${hass[index].userNote}</p>
            <div class="container pb-1">
                <button class="btn me-3" onclick='del(${index})' style="background-color:#E01541;color:white;">Delet Note</button>
                <button class="btn btn-primary me-3" onclick='edit(${index})' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit Note</button>
            </div>
        </div>`
    }
}
const save = ()=>{
    if (title.value != "" && note.value != ""){
        informatio = {  
            userTitle:title.value,
            userNote:note.value,
        }
        hass.push(informatio);
        display.innerHTML = "";
        only();
        title.value = "";
        note.value = "";
        tobi.map((item,index)=>{
            if (tobi[index].Email == loginuser) {
                tobi[index].note = hass;
                console.log(tobi[index].note);
            }
        })
        localStorage.project = JSON.stringify(tobi);
    }else{
        alert("This is an empty note, it will not be saved")
    }
}
const del = (index)=>{
    let answer = confirm("Are you sure, you want to delet this note.");
    if (answer === true) {      
        let filteredArray = hass.filter((item,ind)=>index != ind);
        hass = filteredArray;
        tobi.map((item,index)=>{
            if (tobi[index].Email == loginuser) {
                tobi[index].note = hass;
                console.log(tobi[index].note);
            }
        })
        display.innerHTML = "";
        only();
        localStorage.project = JSON.stringify(tobi);
    }
}
let ind;
const edit = (index)=>{
    let answer = confirm("Are you sure, you want to edit this note. if yes, you can delet the previous one, if not needed.")
    if (answer === true) {        
        title.value = hass[index].userTitle;
        note.value = hass[index].userNote;
        tobi.map((item,index)=>{
            if (tobi[index].Email == loginuser) {
                tobi[index].note = hass;
                console.log(tobi[index].note);
            }
        })
        ind = index;
        display.innerHTML = "";
    }else{
        location.reload()
    }
}
const logout = ()=>{
    localStorage.removeItem("Eail")
}