let titles = [];
let texts = [];

load();

function render(title) {
    let content = document.getElementById('content');
    content.innerHTML = '';
    

    renderContent()

    for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        const text = texts[i];

        renderNoticeContent(title, text, i)
    }
}


function renderContent() {
    let content = document.getElementById('content');
    content.innerHTML +=`
    <header>
    <div class="logo">
        <img src="icon/icon-todo.png">
        <h1>NOTEPAD</h1>
    </div>
    </header>
    
        <div class="main">
            <div class="mainInput">
                <input id="title" type="text" class="titleField" placeholder="Titel..."></textarea><br>
                <input id="text" type="text" class="nameField" placeholder="Deine Notiz..."></textarea><br>
                <button class="inputBoxButton" onclick="addNotes()">Hinzufügen</button>
                <button class="deleteBoxButton" onclick="clearThis(title, text)">Löschen</button>
                </div>
        </div>
        `;
}

function clearThis(title,text) {
    
    document.getElementById('title').value = "";
    document.getElementById('text').value = "";
    
}


function renderNoticeContent(title, text, i) {
    let content = document.getElementById('content');
    content.innerHTML +=`
    <div class="container" >
        <div class="noticeContainer"
            <div class="noticeFieldNote">
                    <div class="noticeTitle"><b>Titel:</b>${title}</div>
                    <div class="noticeText"><b>Notiz:</b>${text}</div>
                <div class="containerDeleteButton2">
                    <button onclick="deleteNotes(${i})">Löschen</button>
                </div>
            </div>  
        </div>
    </div>      
    `;
}


function addNotes() {
    let title = document.getElementById('title');
    let text = document.getElementById('text');


    if (title.value == "" || text.value == "") {
        alert('Bitte füllen Sie beide Textfelder aus!');
    }
    else {

        titles.push(title.value);
        texts.push(text.value);

        

        render();
        save();
    }
}


function deleteNotes(i) {
    titles.splice(i, 1);
    texts.splice(i, 1);
    render();
    save();
}


function save() {
    let titlesAsText = JSON.stringify(titles);
    localStorage.setItem('titles', titlesAsText);

    let textsAsText = JSON.stringify(texts);
    localStorage.setItem('texts', textsAsText);
}


function load() {
    let titlesAsText = localStorage.getItem('titles');
    let textsAsText = localStorage.getItem('texts');

    if (titlesAsText && textsAsText) {
        titles = JSON.parse(titlesAsText);
        texts = JSON.parse(textsAsText);
    }
}

