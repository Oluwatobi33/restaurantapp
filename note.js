NOTE = [];
const save = () => {
    if (localStorage.member) {
        NOTE = JSON.parse(localStorage.member)
    }
    var userTitle = title.value;
    var userNote = note.value;
    informatio = {
        title:userTitle,
        note:userNote,
    }
    NOTE.push(informatio)
    localStorage.member = JSON.stringify(NOTE);
    // NOTE = JSON.parse(localStorage.getItem("member"));
    // let tit = "";
    // let bod = "";
    // for (let i = 0; i < NOTE.length; i++) {
    //     tit += `<h2 class="note_title" id="notetitle">${NOTE[i].title}</h2>`
    //     bod += `<p class="note_body" id="notebody">${NOTE[i].note}</p>`
    //     // tit += "<td>"+[i+1]+"</td><td>"+allStudent[i].firstname+"</td><td>"+allStudent[i].lastname+"</td><td>"+allStudent[i].age+"</td><td><button class='btn btn-danger' onclick='dele("+i+")'>delet</button></td><td><button class='btn btn-primary' onclick='edit("+i+")'>edit</button></td>"
    //     // tit += `</tr>` 
    //     console.log(NOTE[i])
    // }
    // notetitle.innerHTML = tit;
    // notebody.innerHTML = bod;
}