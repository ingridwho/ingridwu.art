//read data in from file
var level = document.getElementById("header").getAttribute("level");
var active = document.getElementById("header").getAttribute("active");
var path =""

//determine relative paths
if(level==0){
    //no change
}
if(level==1){
    path="../"
}

/*
generate this:

<div class="topnav">
    <a href="">ingrid wu</a>
    <a href="">info</a>
    <a href="">work</a>
    <a href="play">play</a>
</div>
*/
var text ="<div class=\'topnav\'>\r\n\t\t\t<a href=\""+path+"\">ingrid wu<\/a>\r\n\t\t\t<a href=\""+path+"\">info<\/a>\r\n\t\t\t<a href=\""+path+"\">work<\/a>\r\n\t\t\t<a href=\'"+path+"play\'>play<\/a>\r\n\t\t<\/div>";

//helper function index of
function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}

//add active class
var results = getIndicesOf(active, text,true);
if(active=='play'){
    var firstoccurance=results[0]+5;
}
else{
    var firstoccurance=results[0]+-1;
}
text = text.slice(0, firstoccurance) + " class=\"active\" " + text.slice(firstoccurance);

//output inside header div
document.getElementById("header").innerHTML = text;