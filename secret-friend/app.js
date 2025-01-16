var friendsArray = [];
let p = document.getElementById("error");
let ulFriends = document.getElementById("listaAmigos");
let h2 = document.getElementById("resultado");

function clearFields() {
    document.getElementById("amigo").value = "";
    p.style.display = "none";
}

function agregarAmigo() {
    let friend = document.getElementById("amigo").value; //get the value from input with id "amigo"
    if (friend != "") {
        if (!isFriendRepeated(friend)) {
            friendsArray.push(friend); //add friend element to the array 
            clearFields(); //clear input field
            showFriend();

            console.log(friendsArray);
        } else {
            p.style.display = "block";
            p.innerHTML = "Amigo repetido.";
        }
    } else {
        p.style.display = "block";
        p.innerHTML = "Inserte un valor.";
    }

}

function isFriendRepeated(friend) {
    let repeated = friendsArray.includes(friend);
    return repeated;
}

function showFriend() {
    h2.style.display = "none";
    ulFriends.style.display = "block";
    let li = document.createElement('li');
    let lastValue = friendsArray[friendsArray.length - 1];
    li.innerHTML = lastValue;
    ulFriends.appendChild(li);
};

function hideFriendList() {
    ulFriends.style.display = "none";
}

function sortearAmigo() {
    if (friendsArray.length == 0) {
        p.style.display = "block";
        p.innerHTML = "Inserte un valor primero."
    } else {
        h2.style.display = "block";
        let randNum = Math.floor(Math.random() * friendsArray.length) + 1;
        let randFreind = friendsArray.at(randNum - 1);

        hideFriendList();
        h2.innerHTML = "Tu amigo secreto es: " + randFreind;
    }
}