//init and set data
var data = window[document.getElementsByClassName("modules")[0].getAttribute("id")];
var text='';
var temptext='';

//add to string using a temp string based on module name
data.forEach(element => {
    if(element.module=='title'){
        handleTitle(element.text);
    }
    if(element.module=='description'){
        handleDescription(element.text);
    }
    if(element.module=='widephoto'){
        handleWidePhoto(element.filename);
    }
    if(element.module=='back'){
        handleBack();
    }
    if(element.module=='photogrid'){
        handlePhotogrid(element.filenames);
    }
    if (typeof element.inlinestyles !== 'undefined') {
        handleInlineStyles(element.inlinestyles);
    }
    text+=temptext;
    temptext=''
});

//helper functions
function handleTitle(input){
    temptext+='<div class=\'title\'>'+input+'</div>'
}
function handleDescription(input){
    temptext+='<div class=\'description\'>'+input+'</div>'
}
function handleWidePhoto(filename){
    temptext+='<div class=\'image\'><img src=\''+filename+'\' loading=\'lazy\'></img></div>'
}
function handlePhotogrid(filenames){
    temptext+='<div class=\'photogrid\'>';

    
    filenames.forEach(filename => {
        //math for width??
        var ratio = filename.x / filename.y;
        temptext+='<div style=\'flex: '+ratio+'\'><img src=\''+filename.image+'\' loading=\'lazy\'></img></div>'
    });

    temptext+='</div>';
}
function handleBack(){
    temptext+='<div class=\'back\'><a href=\'/\'>back<\/a></div>'
}
function handleInlineStyles(inlinestyles){
    var firstoccurance = temptext.indexOf('>');
    temptext = temptext.slice(0, firstoccurance) + " style=\'"+inlinestyles+"\' " + temptext.slice(firstoccurance);
}

//output to container
document.getElementsByClassName('modules')[0].innerHTML = text;