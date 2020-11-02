let keyEnter = [];
let keyCurrent = [];
let keyCurrentDecript = [];
const array = ['a', 'b', 'c', 'd', 'e' ,'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z'];

function encript() {
    const keyPrevious = document.getElementById("key").value;
    const split = keyPrevious.split('');
    
    for(i= 0; i < split.length; i++){
        for(j = 0; j < array.length; j++){
            if(split[i] == 'w' && split[i] == array[j]){
                keyEnter.push('a');
            } else if(split[i] == 'y' && split[i] == array[j]){
                keyEnter.push('b');
            } else if(split[i] == 'z' && split[i] == array[j]){
                keyEnter.push('c');
            } else if(split[i] == array[j]){
                keyEnter.push(array[j + 3])
            }
        }
    }
    
    keyCurrent = keyEnter;
    document.getElementById("response").innerHTML = "";
    document.getElementById("response").innerHTML = keyEnter;
    document.getElementById("key").value = ""; 
    keyEnter = [];  
}

function decript() {
    for(i= 0; i < keyCurrent.length; i++){
        for(j = 0; j < array.length; j++){
            if(keyCurrent[i] == 'a' && keyCurrent[i] == array[j]){
                keyCurrentDecript.push('w');
            } else if(keyCurrent[i] == 'b' && keyCurrent[i] == array[j]){
                keyCurrentDecript.push('y');
            } else if(keyCurrent[i] == 'c' && keyCurrent[i] == array[j]){
                keyCurrentDecript.push('z');
            } else if(keyCurrent[i] == array[j]){
                keyCurrentDecript.push(array[j - 3])
            }
        }
    }
    document.getElementById("response").innerHTML = "";
    document.getElementById("response").innerHTML = keyCurrentDecript;
    keyCurrentDecript = [];   
}
