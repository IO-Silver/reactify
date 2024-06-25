var numActions = 0;

function addAction(divName) {
    numActions++;
    var newDiv = document.createElement('div');
    newDiv.innerHTML = "Action " + numActions + `<br>
    <form>
        <label>Goal:</label>           <input id="Goal" type="text" autocorrect="on"> <br>
        <label>Components:</label>     <input id="Components" type="text" autocorrect="on" autocapitalize="words"> <br>
        <label>Description:</label>    <input id="Description" type="text" autocorrect="on"> <br>
    </form>`;
    document.getElementById(divName).appendChild(newDiv);
}

function email() {
    window.open('mailto:Reopolitan@msn.com?subject=Test&body=document.getElementById(\'emailContent\').innerHTML');
}