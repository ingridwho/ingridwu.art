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

for(var i=0;i<work.length;i++){
    text+='<figure>\r\n\t\t\t<a href=\''+work[i].url+'\'>\r\n\t\t\t\t<img src=\''+work[i].url+'\/'+work[i].cover+'\' alt=\''+work[i].url+'\'>\r\n\t\t\t\t<div class=\'caption\'>'+work[i].caption+'<\/div>\r\n\t\t\t<\/a>\r\n\t\t<\/figure>'
}

document.getElementsByClassName('container')[0].innerHTML = text;