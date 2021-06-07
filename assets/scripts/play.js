var text='';

/*
<div class="container">
    <figure>
        <a href="../oodles">
            <img src="../oodles/cover.jpg" alt="oodles">
            <div class="caption">oodles</div>
        </a>
    </figure>
    <figure>
        <a href="../animation">
            <img src="../animation/cover.gif" alt="animation">
            <div class="caption">animated short films</div>
        </a>
    </figure>
</div>
*/

for(var i=0;i<play.length;i++){
    text+='<figure>\r\n\t\t\t<a href=\'../'+play[i].url+'\'>\r\n\t\t\t\t<img src=\'../'+play[i].url+'\/'+play[i].cover+'\' alt=\''+play[i].url+'\'>\r\n\t\t\t\t<div class=\'caption\'>'+play[i].caption+'<\/div>\r\n\t\t\t<\/a>\r\n\t\t<\/figure>'
}
if(play.length%3!=0){
    for(var i=0;i<3-play.length%3;i++){
        text+='<figure><\/figure>';
    }
}

document.getElementsByClassName('container')[0].innerHTML = text;