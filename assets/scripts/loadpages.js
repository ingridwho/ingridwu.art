//play or work and init
var data = window[document.getElementsByClassName("container")[0].getAttribute("page")];
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

//print figures
for(var i=0;i<data.length;i++){
    text+='<figure>\r\n\t\t\t<a href=\'/'+data[i].url+'\'>\r\n\t\t\t\t<img src=\'/'+data[i].url+'\/'+data[i].cover+'\' alt=\''+data[i].url+'\'>\r\n\t\t\t\t<div class=\'caption\'>'+data[i].caption+'<\/div>\r\n\t\t\t<\/a>\r\n\t\t<\/figure>'
}
//empty entries for left align
if(data.length%3!=0){
    for(var i=0;i<3-data.length%3;i++){
        text+='<figure><\/figure>';
    }
}

//output to container
document.getElementsByClassName('container')[0].innerHTML = text;