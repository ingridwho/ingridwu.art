//init and set data
var data = window[document.getElementsByClassName("modules")[0].getAttribute("id")];
var text='';
var temptext='';
var async = [];

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
    if(element.module=='container'){
        handleContainer(element.data);
    }
    if(element.module=='responsivegallery'){
        handleResponsiveGallery(element.id, element.offset, element.filenames, element.targetHeight);
    }
    if(element.module=='lightbox'){
        handleLightbox(element.filenames);
    }
    if (typeof element.inline !== 'undefined') {
        handleInline(element.inline);
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
    temptext+='<div class=\'image\'><img data-src=\''+filename+'\' class=\'lazyload\'></img></div>'
}

function handlePhotogrid(filenames){
    temptext+='<div class=\'photogrid\'>';
 
    filenames.forEach(filename => {
        //math for width??
        var ratio = filename.x / filename.y;
        temptext+='<div class="teaser lazyload" style=\'flex: '+ratio+'\'><img data-src=\''+filename.image+'\' class=\'lazyload\'></img></div>'
    });

    temptext+='</div>';
}

function handleContainer(data){
    temptext+='<div class=\'container\'>';

    data.forEach(element => {
        temptext+='<figure>'

        //OPEN
        if (typeof element.url !== 'undefined') {
            temptext+='<a href=\'/'+element.url+'\'>';
        }
        if (typeof element.img !== 'undefined') {
            temptext+='<img data-src=\''+element.img+'\' class=\'lazyload\' alt=\''+element.url+'\'>';
        }
        if (typeof element.caption !== 'undefined'){
            temptext+='<div class=\'caption\'>'+element.caption+'<\/div>';
        }

        //CLOSE
        if (typeof element.url !== 'undefined') {
            temptext+='</a>';
        }

        temptext+='</figure>'
    });

    if(data.length%3!=0){
        for(var i=0;i<3-data.length%3;i++){
            temptext+='<figure><\/figure>';
        }
    }

    temptext+='</div>';
}

function handleBack(){
    temptext+='<div class=\'back\'><a href=\'/\'>back<\/a></div>'
}

function handleInline(inline){
    var firstoccurance = temptext.indexOf('>');
    temptext = temptext.slice(0, firstoccurance)+" "+inline+" "+temptext.slice(firstoccurance);
}

function handleResponsiveGallery(id, offset, filenames, targetHeight){
    temptext+='<div id=\''+id+'\' class=\'wrapper\'></div>'
    async.push ({
        type: 'responsivegrid',
        id: id,
        offset: offset,
        targetHeight: targetHeight,
        filenames: filenames
    });
}

function handleLightbox(filenames){
    temptext+='<div id=\'myModal\' class=\'modal\'>'
    temptext+=notLightbox(filenames);
    temptext+='</div>';
}

//output to container
document.getElementsByClassName('modules')[0].innerHTML = text;

//async run after doc load
function handleAsync(){
    
    Array.from(async).forEach(element => {
        if(element.type == 'responsivegrid'){
            notGrid(document.getElementById(element.id),element.filenames,element.targetHeight,element.offset);
        }
    });
}

handleAsync();

//JQUERY
$(window).on('resize', function(){
    handleAsync();
});
$('body').on('click', function(event) {
    closeModal();
});
$('div.wrapper, div.mySlides').on('click', function(event) {
    event.stopPropagation();
});