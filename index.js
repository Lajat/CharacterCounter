var lines = 0,spaces = 0, words = 0, chars = 0, strLength = 0;
inputField.onkeyup = function(e) {
    document.getElementById("paraChars").innerHTML = e.target.value.length;

    var regex = /\s+/gi;
    var wordCount = e.target.value.trim().replace(regex, ' ').split(' ').length;
    paraWords.innerHTML = wordCount;

    if(e.target.value.length === 0){
        paraWords.innerHTML = 0;
        paraLines.innerHTML = 0;
        paraSpaces.innerHTML = 0;
    }
    if(e.target.value.length === 1){
        paraLines.innerHTML = 1;
        paraWords.innerHTML = 1;
    }

    if(e.key == " "){
        spaces = spaces + 1;
        paraSpaces.innerHTML = spaces;
    }

    if(e.key == "Backspace")
    strLength = strLength - 1;
    else
    strLength = strLength + 1;

    if(strLength < 0)
    strLength = 0;

    if(e.key == "Enter"){
        strLength = strLength - 1;
        var diff = (63*(lines)) - strLength;
        strLength = strLength + diff + 1;

        lines = lines + 1;
        paraLines.innerHTML = lines;
    }

    if( strLength > ( 63*(lines) ) ) {
        lines = lines + 1;
        paraLines.innerHTML = lines;
    }
    else if( strLength <= ( 63*(lines-1) ) ) {
        lines = lines - 1;
        paraLines.innerHTML = lines;
    }
}
inputField.onkeypress = function(e) {
    if(e.key == "Backspace")
    strLength = strLength - 1;
    else
    strLength = strLength + 1;

    if(strLength < 0)
    strLength = 0;
}


// function countChars(obj) {
//     document.getElementById("paraChars").innerHTML = obj.value.length;
//     if(obj.value.length === 1)
//     paraLines.innerHTML = 1;
//     if(e.key == "Enter"){
//         lines = lines + 1;
//         paraLines.innerHTML = lines;
//     }
//     if( obj.value.length > ( 63*(lines) ) ) {
//         lines = lines + 1;
//         paraLines.innerHTML = lines;
//     }
//     else if( obj.value.length <= ( 63*(lines-1) ) ) {
//         lines = lines - 1;
//         paraLines.innerHTML = lines;
//     }
// }