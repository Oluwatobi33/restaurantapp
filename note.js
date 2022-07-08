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
        // alert("You are not permited to submit an empty note")
    }
}
const only = ()=>{
    for (var index = receiver.length -1; index >= 0; index--) {
        display.innerHTML += `<div class="container col-6 card my-2" style="background-color: #15273B;">
            <h2 class="text-light">${receiver[index].userTitle}</h2>
            <p class="text-light">${receiver[index].userNote}</p>
            <div class="container pb-1">
                <button class="btn me-3" onclick='del(&{index})' style="background-color:#E01541;color:white;">Delet Note</button>
                <button class="btn btn-primary me-3" onclick='edit(&{index})' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit Note</button>
            </div>
        </div>`
    }
}

// if(localStorage.member){
//     disp()
// }
// else{
//     details=[];
// }
// localStorage.member = JSON.stringify(details);
// details = [];
// const save = () => {
//     if (localStorage.member) {
//         details = JSON.parse(localStorage.member)
//     }
//     var hod = title.value;
//     var uk = note.value;
//     informatio = {  
//         ttle:hod,
//         bk:uk,
//     }
//     details.push(informatio)
//     localStorage.member = JSON.stringify(details);
//     title.value=''
//     note.value='';
//     location.reload()
// }
// function disp() {
//     let t = ""
//     details = JSON.parse(localStorage.getItem("member"));
//     for (let i = 0; i < details.length; i++) {
//         t += `<h2 class="note_title" id="notetitle">${details[i].ttle}</h2><p class="note_body" id="notebody">${details[i].bk}</p><div class="note_btn">
//         <button class="note_btn note_view" onclick='edit(${i})' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit Detail</button><button onclick='remove(${i})' class="note_btn note_delete">Delete Note</button></div>` 
//     }
//     console.log(details)
//     display.innerHTML = t;
// }
// function remove(i){
//     detail = JSON.parse(localStorage.getItem("member"));
//     detail.splice(i,1)
//     localStorage.setItem('member',JSON.stringify(detail))
//     location.reload()
// }
// var edite;
// function edit(i){
//     detail = JSON.parse(localStorage.getItem("member"));
//     console.log(detail);
//     title.value = detail[i].ttle;
//     note.value = detail[i].bk;
//     hov.style.display="none";
//     upd.style.display="block";
//     edite = i;
// }
// function update(){
//     details = JSON.parse(localStorage.getItem("member"))
//     details.splice(edite,1,{
//         ttle:title.value,
//         bk:note.value,
//     })
//     localStorage.member = JSON.stringify(details)
//     location.reload()
// }