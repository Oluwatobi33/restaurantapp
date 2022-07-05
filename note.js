disp()
details = [];
const save = () => {
    if (localStorage.project) {
        details = JSON.parse(localStorage.project)
    }
    var hod = title.value;
    var uk = note.value;
    informatio = {
        ttle:hod,
        bk:uk,
    }
    details.push(informatio)
    localStorage.project = JSON.stringify(details);
    location.reload()
}
function disp() {
    let t = ""
    details = JSON.parse(localStorage.getItem("project"));
    for (let i = 0; i < details.length; i++) {
        t += `<h2 class="note_title" id="notetitle">${details[i].ttle}</h2><p class="note_body" id="notebody">${details[i].bk}</p><div class="note_btn"><button onclick='edit(${i})' class="note_btn note_view">Edit Detail</button><button onclick='remove(${i})' class="note_btn note_delete">Delete Note</button></div>` 
    }
    console.log(details)
    display.innerHTML = t;
}
function remove(i){
    detail = JSON.parse(localStorage.getItem("project"));
    detail.splice(i,1)
    localStorage.setItem('project',JSON.stringify(detail))
    location.reload()
}
var edite;
function edit(i){
    detail = JSON.parse(localStorage.getItem("project"));
    console.log(detail);
    title.value = detail[i].ttle;
    note.value = detail[i].bk;
    hov.style.display="none";
    upd.style.display="block";
    edite = i;
}
function update(){
    details = JSON.parse(localStorage.getItem("project"))
    details.splice(edite,1,{
        ttle:title.value,
        bk:note.value,
    })
    localStorage.project = JSON.stringify(details)
    location.reload()
}