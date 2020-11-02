let keyEnter = [];
let keyCurrent = [];
let keyCurrentDecript = [];
const array = ['a', 'b', 'c', 'd', 'e' ,'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z'];
const array1 = ['A', 'B', 'C', 'D', 'E' ,'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z'];

function encript() {
    const keyPrevious = document.getElementById("key").value;
    const split = keyPrevious.split('');
    console.log(split);
    for(i= 0; i < split.length; i++){
        for(j = 0; j < array.length; j++){
            if (split[i] == " ") {
                keyEnter.push(" ");
            } else  if(split[i] == split[i].toLowerCase()) {
                if(split[i] == 'w' && split[i] == array[j]){
                    keyEnter.push('a');
                } else if(split[i] == 'y' && split[i] == array[j]){
                    keyEnter.push('b');
                } else if(split[i] == 'z' && split[i] == array[j]){
                    keyEnter.push('c');
                } else if(split[i] == array[j]){
                    keyEnter.push(array[j + 3]);
                }
            } else if ((split[i] == split[i].toUpperCase())) {
                if(split[i] == 'W' && split[i] == array[j].toUpperCase()){
                    keyEnter.push('A');
                } else if(split[i] == 'Y' && split[i] == array[j].toUpperCase()){
                    keyEnter.push('B');
                } else if(split[i] == 'Z' && split[i] == array[j].toUpperCase()){
                    keyEnter.push('C');
                } else if(split[i] == array[j].toUpperCase()){
                    keyEnter.push(array[j + 3].toUpperCase());
                }
            }
        }
    }
    
    keyCurrent = keyEnter;
    document.getElementById("response").innerHTML = "";
    document.getElementById("response").innerHTML = keyEnter.join("");
    document.getElementById("key").value = ""; 
    keyEnter = [];  
}

function decript() {
    for(i= 0; i < keyCurrent.length; i++){
        for(j = 0; j < array.length; j++){
            if (keyCurrent[i] == " ") {
                keyCurrentDecript.push(" ");
            } else if(keyCurrent[i] == keyCurrent[i].toLowerCase()) { 
                if(keyCurrent[i] == 'a' && keyCurrent[i] == array[j]){
                    keyCurrentDecript.push('w');
                } else if(keyCurrent[i] == 'b' && keyCurrent[i] == array[j]){
                    keyCurrentDecript.push('y');
                } else if(keyCurrent[i] == 'c' && keyCurrent[i] == array[j]){
                    keyCurrentDecript.push('z');
                } else if(keyCurrent[i] == array[j]){
                    keyCurrentDecript.push(array[j - 3])
                }
            } else if(keyCurrent[i] == keyCurrent[i].toUpperCase()) {
                if(keyCurrent[i] == 'A' && keyCurrent[i] == array[j].toUpperCase()){
                    keyCurrentDecript.push('W');
                } else if(keyCurrent[i] == 'B' && keyCurrent[i] == array[j].toUpperCase()){
                    keyCurrentDecript.push('Y');
                } else if(keyCurrent[i] == 'C' && keyCurrent[i] == array[j].toUpperCase()){
                    keyCurrentDecript.push('Z');
                } else if(keyCurrent[i] == array[j].toUpperCase()){
                    keyCurrentDecript.push(array[j - 3].toUpperCase())
                }
            }    
        }
    }
    document.getElementById("response").innerHTML = "";
    document.getElementById("response").innerHTML = keyCurrentDecript.join("");
    keyCurrentDecript = [];   
}
