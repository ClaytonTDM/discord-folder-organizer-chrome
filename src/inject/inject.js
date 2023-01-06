setTimeout(function() {
var buttons = document.getElementsByClassName("folderIconWrapper-1oRIZr");
for(var i = 0; i < buttons.length; i++){
    buttons[i].click();
}
setTimeout(function() {
for(var i = 0; i < buttons.length; i++){
    buttons[i].click();
    console.log(buttons);
}}, 100);
}, 16500);
