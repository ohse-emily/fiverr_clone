var index=0;
var item = Math.floor(Math.random()*5);
hero(item);
function hero(n){
    ul=document.querySelectorAll('#header_hero_backgrounds>ul');
    if(index==ul.length){
        index=0;
    }

    if(n == undefined){
        for(i=0; i<ul.length; i++){
            var beNum=index-1;
    
            if(beNum==-1){
                beNum=4;
            }
            
            if(i==index){
                ul.item(i).setAttribute('class', 'hero on');
            } else if(i==beNum){
                ul.item(beNum).setAttribute('class', 'hero out');  
            } else{
                ul.item(i).setAttribute('class', 'hero');
            }
        }
        //자동
    } else {
        //처음
        ul.item(n).setAttribute('class', 'hero firston');
        index = n;
        console.log(index);
    }
    
    index++;
}
setInterval(hero, 3000);

//Popular ul moving 5 set////////////////////////////////////

var po_ul= document.querySelectorAll('#popular_pic_box>ul');
var po_ul1=document.querySelector('.ul0');
var po_ul2=document.querySelector('.ul1');

var arr=['in', 'out'];
var listNum=0;
var opsit=1;

function pobtn(n){
    po_ul1.setAttribute('class', 'ul'+ listNum+' '+arr[listNum]+n);
    po_ul2.setAttribute('class', 'ul'+ opsit+' '+ arr[opsit] +n);
    listNum ^= 1;
    opsit ^= 1;
}


/*
if(n=undefined){
    // 자동~ 
} else {
    // 처음 돌릴 떄 ~ 
}  */




// VIDEO ON (video_content & seo_video ) // /////////////////////////

function video_on(url){
    video_popup=document.querySelector('#video_content_popup');
    video_popup.setAttribute('class', 'video_on');

    video = document.querySelector('#videoTarget');
    video.setAttribute('src',url);

    document.querySelector('body').style.overflow = 'hidden';   
}

function video_off(){
    video_popup=document.querySelector('#video_content_popup');
    video_popup.setAttribute('class', ' ');

    video = document.querySelector('#videoTarget');
    video.setAttribute('src',' ');

    document.querySelector('body').style.overflow = ''; //''빈칸 안에 space있으면 x
}






// seo btn click// ///////////////////////////////////////////

var index3=0;
let seoBoxSet=document.querySelectorAll('.seo_box_t_set>ul');
function seo_left(){

    if(index3<0){
        index3=3;
    }

    var indexMone = index3-1;


    if(indexMone==-1){
        indexMone=3; 
    }

    for(i=0; i<seoBoxSet.length; i++){
        //  on and out 순서 @!!!@!@!@!@!@!@!@!@!@!@!@ 맞추기

        if(i==index3){
            seoBoxSet.item(i).setAttribute('class','seo_out1');

        } else if(i==indexMone){
            seoBoxSet.item(i).setAttribute('class', 'seo_on1');

        } else{
            seoBoxSet.item(i).setAttribute('class', '');
        }
        console.log(i,index3,indexMone);
    }
    index3--;
}


function seo_right(){
    var indexPone = index3+1;

    if(indexPone==4){
        indexPone=0; 
    }

    for(i=0; i<seoBoxSet.length; i++){
        

        if(i==index3){
            seoBoxSet.item(i).setAttribute('class','seo_out0');
   
        } else if(i==indexPone){
            seoBoxSet.item(indexPone).setAttribute('class', 'seo_on0');

        } else{
            seoBoxSet.item(i).setAttribute('class', '');
        }

    }
    index3++;
    if(index3>=seoBoxSet.length){ index3=0;}

}


// GNB TOP BOX ////////////////////////////////////////////

/*
window.addEventListener('scroll', navBar);

function navBar(){
    let navi=document.querySelector('#gnb');

    if(document.documentElement.scrollTop == 0){
        navi.setAttribute('class', '')
        console.log(navi);
    } else{
        console.log(navi);
        navi.setAttribute('class', 'gnb_bar_up')
    }
}



window.addEventListener('scroll', function(){
    var nowScroll=document.body.scrollTop;
    console.log(nowScroll);
})


window.addEventListener('scroll', scrollevent)

    function scrollevent(){
   
    let navi=document.querySelector('#gnb');
    var nowScroll=document.body.scrollTop;
        console.log(nowScroll);
    if(nowScroll >= 1){
        navi.setAttribute('class', 'gnb_bar_up')
        navi.style.background='black';
    } else if(nowScroll >=200){
        navi.setAttribute('class', 'gnb_bar2_up')
    }
}*/

window.addEventListener('scroll', function(){
    let gnbb=document.querySelector('#gnb');
    let gnb_childd=document.querySelector('#gnb_child');
    let nowScroll=document.documentElement.scrollTop; //현재 스크롤바 위치 

    if(nowScroll == 0){
        gnbb.setAttribute('class', 'gnb_bar')
        document.querySelector('#gnb_img').setAttribute('src', "./images/새 폴더/svg-export/svgexport-4.logo.png");
        gnb_childd.setAttribute('class','gnb_child_off')
        document.querySelector('#gnb_box2_img').setAttribute('src', "./images/새 폴더/svg-export/svgexport-6.globe.png");

    } else if(1<nowScroll && nowScroll<250){
        gnbb.setAttribute('class', 'gnb_bar gnb_bar_up1')
        document.querySelector('#gnb_img').setAttribute('src', "./images/새 폴더/svg-export/svgexport-4.logo2.png");
        gnb_childd.setAttribute('class','gnb_child_off')
        document.querySelector('#gnb_box2_img').setAttribute('src', "./images/새 폴더/svg-export/svgexport-6.globe2.png");
    }else if(250 < nowScroll){
        gnb_childd.setAttribute('class','gnb_child_on')
        gnbb.setAttribute('class', 'gnb_bar gnb_bar_up1')
        document.querySelector('#gnb_img').setAttribute('src', "./images/새 폴더/svg-export/svgexport-4.logo2.png");
        document.querySelector('#gnb_box2_img').setAttribute('src', "./images/새 폴더/svg-export/svgexport-6.globe2.png");
    }   
})



// SNB ONCLICK FUNCTION // 

let snb_ul = document.querySelectorAll('div.snb');

function snbOn(n){ 
    snb_ul.item(n).setAttribute('class', 'snb snb'+n+' '+'snb_block');
}

function snbOff(n){
    snb_ul.item(n).setAttribute('class', 'snb snb'+n+' '+'snb_none');
}




//INSPIRED /////////////////INSPIRED////////////////////////


inspiredOn();
function inspiredOn(){

    let ins_ul = document.querySelector('#inspired_box2') //ul
    let ins_li = document.querySelectorAll('.inspired_box')  //li

    for(i=0; i<ins_li.length; i++){
        let clone=ins_li[i].cloneNode(true); 
        ins_ul.appendChild(clone);
    }

    ins_ul.setAttribute('class', 'inspired_moving');
}



















