
let id = 1;
let editId = null;

function addTodo(){
    var todo = document.getElementById("input-todo").value;
    if (todo.length == 0) {
        alert("Please enter a todo");
        return;
    }

    
    if (editId == null) {
        
        // create a new <tr>
        var newTodo = document.createElement("tr");
        newTodo.id = "todo-" + id;
        var newTodoId = document.createElement("td");
        var newTodoName = document.createElement("td");
        var newTodoAction = document.createElement("td");

        // add content to <td>
        newTodoId.innerText = id;
        newTodoName.innerText = todo;
        // add id to newTodoName
        newTodoName.setAttribute("id", "todoname-" + id);
        
        var action = '<div class="d-flex">\
        <div onclick="handleDone('+id+')" class="mx-2 mb-2 mt-1"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" width="30px" height="30px"><path fill="#ee3e54" d="M13 27A2 2 0 1 0 13 31A2 2 0 1 0 13 27Z"/><path fill="#f1bc19" d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z"/><path fill="#fce0a2" d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z"/><path fill="#f1bc19" d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z"/><path fill="#ee3e54" d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z"/><path fill="#fbcd59" d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z"/><path fill="#ee3e54" d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z"/><path fill="#fff" d="M18.5 51A2.5 2.5 0 1 0 18.5 56A2.5 2.5 0 1 0 18.5 51Z"/><path fill="#f1bc19" d="M21 66A1 1 0 1 0 21 68A1 1 0 1 0 21 66Z"/><path fill="#fff" d="M80 33A1 1 0 1 0 80 35A1 1 0 1 0 80 33Z"/><path fill="#a1d3a2" d="M72.4,44v20.4c0,4.3-3.5,7.8-7.8,7.8H35.5c-4.3,0-7.8-3.5-7.8-7.8V35.6c0-4.3,3.5-7.8,7.8-7.8h29.1 c3.6,0,6.6,2.4,7.6,5.8"/><path fill="#472b29" d="M64.5,73H35.5c-4.7,0-8.5-3.8-8.5-8.5V35.6c0-4.7,3.8-8.5,8.5-8.5h29.1c3.8,0,7.2,2.6,8.2,6.3 c0.1,0.4-0.1,0.8-0.5,0.9c-0.4,0.1-0.8-0.1-0.9-0.5c-0.9-3.1-3.7-5.2-6.9-5.2H35.5c-3.9,0-7.1,3.2-7.1,7.1v28.8 c0,3.9,3.2,7.1,7.1,7.1h29.1c3.9,0,7.1-3.2,7.1-7.1V44c0-0.4,0.3-0.7,0.7-0.7s0.7,0.3,0.7,0.7v20.4C73.1,69.1,69.2,73,64.5,73z"/><path fill="#472b29" d="M68.5 59.4c-.3 0-.5-.2-.5-.5V55c0-.3.2-.5.5-.5S69 54.7 69 55v3.9C69 59.2 68.8 59.4 68.5 59.4zM68.5 52.5c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5S69 49.7 69 50v2C69 52.3 68.8 52.5 68.5 52.5z"/><path fill="#472b29" d="M64,69H36c-2.8,0-5-2.2-5-5V36c0-2.8,2.2-5,5-5h25.4c0.3,0,0.5,0.2,0.5,0.5S61.7,32,61.4,32H36 c-2.2,0-4,1.8-4,4v28c0,2.2,1.8,4,4,4h28c2.2,0,4-1.8,4-4v-2.4c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5V64C69,66.8,66.8,69,64,69z"/><g><path fill="#00ac9c" d="M49.5,62.5l-0.1,0c-0.1,0-0.1,0-0.2,0c-0.4,0-0.8-0.1-1-0.4l-8.3-8.2c-0.3-0.3-0.4-0.6-0.4-1s0.2-0.8,0.4-1 c0.3-0.3,0.6-0.4,1-0.4c0.4,0,0.8,0.2,1,0.4l7.1,7.4l24-23.3c0.3-0.3,0.6-0.4,1-0.4c0.4,0,0.8,0.2,1,0.4c0.3,0.3,0.4,0.6,0.4,1 s-0.2,0.8-0.4,1L50.6,62.1c-0.1,0.1-0.2,0.2-0.4,0.3c0,0-0.1,0-0.1,0.1c-0.1,0-0.2,0.1-0.3,0.1C49.7,62.5,49.7,62.5,49.5,62.5 L49.5,62.5z"/><path fill="#472b29" d="M74.2,36c0.3,0,0.5,0.1,0.7,0.3c0.4,0.4,0.4,1,0,1.4l-24.6,24c-0.1,0.1-0.2,0.1-0.3,0.2c0,0-0.1,0-0.1,0 c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.1,0c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0c-0.2,0-0.5-0.1-0.7-0.3l-8.3-8.2 c-0.4-0.4-0.4-1,0-1.4c0.2-0.2,0.4-0.3,0.7-0.3s0.5,0.1,0.7,0.3l7.5,7.8l24.4-23.6C73.7,36.1,73.9,36,74.2,36 M74.2,35 c-0.5,0-1,0.2-1.4,0.6L49.2,58.5l-6.8-7.1c-0.4-0.4-0.9-0.6-1.4-0.6s-1,0.2-1.4,0.6c-0.4,0.4-0.6,0.9-0.6,1.4c0,0.5,0.2,1,0.6,1.4 l8.3,8.2c0.4,0.4,0.8,0.6,1.4,0.6c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0c0.1,0,0.3,0,0.3,0c0.1,0,0.2,0,0.3-0.1 c0.1,0,0.2-0.1,0.2-0.1c0.2-0.1,0.4-0.2,0.5-0.4l24.6-24c0.4-0.4,0.6-0.9,0.6-1.4c0-0.5-0.2-1-0.6-1.4C75.2,35.2,74.7,35,74.2,35 L74.2,35z"/></g></svg></div>\
        <div onclick="handleEdit('+id+')" class="m-2"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="22px" height="26px"><radialGradient id="XxuzckEKxQAhu215VR7vra" cx="36" cy="32" r="26.875" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#afeeff"/><stop offset=".193" stop-color="#bbf1ff"/><stop offset=".703" stop-color="#d7f8ff"/><stop offset="1" stop-color="#e1faff"/></radialGradient><path fill="url(#XxuzckEKxQAhu215VR7vra)" d="M5.5,61L5.5,61C3.015,61,1,58.985,1,56.5v0C1,54.015,3.015,52,5.5,52h0 c2.485,0,4.5,2.015,4.5,4.5v0C10,58.985,7.985,61,5.5,61z"/><radialGradient id="XxuzckEKxQAhu215VR7vrb" cx="32" cy="31.5" r="30.775" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#afeeff"/><stop offset=".193" stop-color="#bbf1ff"/><stop offset=".703" stop-color="#d7f8ff"/><stop offset="1" stop-color="#e1faff"/></radialGradient><path fill="url(#XxuzckEKxQAhu215VR7vrb)" d="M64,24L64,24c0-2.761-2.239-5-5-5h-5c-2.761,0-5-2.238-5-5v0c0-2.762,2.238-5,5-5h0.565 C56.48,9,58,7.48,58,5.605L58,5.5C58,3.567,56.433,2,54.5,2l-38,0c-1.926,0-3.49,1.556-3.5,3.483L13,5.5 C12.99,7.43,14.552,9,16.483,9H17c2.209,0,4,1.791,4,4v0c0,2.209-1.791,4-4,4H5c-2.761,0-5,2.239-5,5v0c0,2.761,2.239,5,5,5h1 c2.209,0,4,1.791,4,4v0c0,2.209-1.791,4-4,4H5.5C2.462,35,0,37.462,0,40.5v0C0,43.538,2.462,46,5.5,46H19c1.657,0,3,1.343,3,3v0 c0,1.657-1.343,3-3,3h-1.5c-2.485,0-4.5,2.015-4.5,4.5v0c0,2.485,2.015,4.5,4.5,4.5H33h22c2.209,0,4-1.791,4-4v0 c0-2.209-1.791-4-4-4h-6.5c-1.933,0-3.5-1.567-3.5-3.5v0c0-1.933,1.567-3.5,3.5-3.5H60c2.209,0,4-1.791,4-4v0c0-2.209-1.791-4-4-4 h-1.5c-2.485,0-4.5-2.015-4.5-4.5v0c0-2.485,2.015-4.5,4.5-4.5H59C61.761,29,64,26.761,64,24z"/><linearGradient id="XxuzckEKxQAhu215VR7vrc" x1="10.098" x2="10.098" y1="50.804" y2="57" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#a4a4a4"/><stop offset=".63" stop-color="#7f7f7f"/><stop offset="1" stop-color="#6f6f6f"/><stop offset="1" stop-color="#6f6f6f"/></linearGradient><path fill="url(#XxuzckEKxQAhu215VR7vrc)" d="M8.02,50.804l-1,5c-0.065,0.328,0.037,0.667,0.273,0.903C7.482,56.896,7.737,57,8,57 c0.065,0,0.131-0.007,0.196-0.02l5-1L8.02,50.804z"/><linearGradient id="XxuzckEKxQAhu215VR7vrd" x1="28.5" x2="28.5" y1="55" y2="16" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#ff8b67"/><stop offset=".847" stop-color="#ffa76a"/><stop offset="1" stop-color="#ffad6b"/><stop offset="1" stop-color="#ffad6b"/></linearGradient><path fill="url(#XxuzckEKxQAhu215VR7vrd)" d="M47.707,28.293l-12-12c-0.391-0.391-1.023-0.391-1.414,0l-25,25 c-0.391,0.391-0.391,1.023,0,1.414l12,12C21.488,54.902,21.744,55,22,55s0.512-0.098,0.707-0.293l25-25 C48.098,29.316,48.098,28.684,47.707,28.293z"/><linearGradient id="XxuzckEKxQAhu215VR7vre" x1="15.5" x2="15.5" y1="56" y2="41.001" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#ffc662"/><stop offset=".004" stop-color="#ffc662"/><stop offset=".609" stop-color="#ffc582"/><stop offset="1" stop-color="#ffc491"/><stop offset="1" stop-color="#ffc491"/></linearGradient><path fill="url(#XxuzckEKxQAhu215VR7vre)" d="M21.986,47.836C21.906,47.354,21.489,47,21,47h-4v-4c0-0.489-0.354-0.906-0.836-0.986l-6-1 c-0.271-0.043-0.548,0.023-0.768,0.188c-0.219,0.166-0.36,0.414-0.391,0.688l-1,9c-0.033,0.302,0.072,0.603,0.287,0.817l4,4 C12.481,55.896,12.736,56,13,56c0.037,0,0.073-0.002,0.11-0.006l9-1c0.273-0.03,0.521-0.172,0.688-0.391 c0.165-0.22,0.233-0.497,0.188-0.768L21.986,47.836z"/><linearGradient id="XxuzckEKxQAhu215VR7vrf" x1="49.736" x2="49.736" y1="23.5" y2="5.028" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#ff634d"/><stop offset=".204" stop-color="#fe6464"/><stop offset=".521" stop-color="#fc6581"/><stop offset=".794" stop-color="#fa6694"/><stop offset=".989" stop-color="#fa669a"/><stop offset="1" stop-color="#fa669a"/></linearGradient><path fill="url(#XxuzckEKxQAhu215VR7vrf)" d="M57.603,13.188l-6.791-6.791c-1.826-1.826-4.797-1.826-6.623,0l-3.396,3.396 c-0.391,0.391-0.391,1.023,0,1.414l12,12c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l3.396-3.396 C59.429,17.985,59.429,15.015,57.603,13.188z"/><linearGradient id="XxuzckEKxQAhu215VR7vrg" x1="44" x2="44" y1="9.026" y2="30.974" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#b2b2b2"/><stop offset=".594" stop-color="#949494"/><stop offset="1" stop-color="#848484"/><stop offset="1" stop-color="#848484"/></linearGradient><path fill="url(#XxuzckEKxQAhu215VR7vrg)" d="M53.957,21.543l-11.5-11.5c-1.355-1.355-3.559-1.355-4.914,0l-3.5,3.5 c-1.354,1.354-1.354,3.56,0,4.914l11.5,11.5c0.678,0.678,1.567,1.017,2.457,1.017s1.779-0.339,2.457-1.017l3.5-3.5 C55.312,25.103,55.312,22.897,53.957,21.543z"/></svg></div>\
        </div>'
        newTodoAction.innerHTML = action;

        newTodo.appendChild(newTodoId);
        newTodo.appendChild(newTodoName);
        newTodo.appendChild(newTodoAction);

        var tableBody = document.getElementById('table-body');
        tableBody.appendChild(newTodo);
        document.getElementById("todo-list-table").classList.remove("d-none");
        
        id = id + 1;
        document.getElementById("input-todo").value = "";
    } else {
        var todoElm = document.getElementById("todoname-" + editId);
        todoElm.innerText = todo;
        document.getElementById("input-todo").value = "";
        editId = null;
    }

}


function handleEdit(id) {
    editId = id;
    var todoName = document.getElementById("todoname-" + id);
    document.getElementById("input-todo").value = todoName.innerText
}


function handleDone(id) {
    var todo = document.getElementById("todo-" + id);
    todo.classList.toggle("bg-danger")
}

