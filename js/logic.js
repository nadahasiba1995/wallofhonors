var group= [{
    name: "أحمد لطفي",
    imgUrl: "img/avatar/ahmedlotfy.jpg",
    positionTitle:'المسمى الوظيفي',
    details: [
    " اسم المقترح : الجدار الالكتروني",
     " تفاصيل المقترح: انشاء نافذة الكترونية تجمع بين مقترحات الموظفين المتميزة"
     ]
},
{
    name: " عبدالحميد",
    imgUrl: "img/avatar/abdulhameed1.jpg",
    positionTitle:'المسمى الوظيفي',
    details: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla odio sed libero venenatis, sed tristique neque interdum. Integer scelerisque tortor lacinia, dictum quam nec, commodo tellus. ",
        " Donec non urna purus. In hac habitasse platea dictumst"
    ]
},
{
    name: "إيهاب",
    imgUrl: "img/avatar/EHAB.JPG",
    positionTitle:'المسمى الوظيفي',
    details: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla odio sed libero venenatis, sed tristique neque interdum. Integer scelerisque tortor lacinia, dictum quam nec, commodo tellus. ",
        " Donec non urna purus. In hac habitasse platea dictumst"
    ]
},
{
    name: "خالد محمود",
    imgUrl: "img/avatar/khalidmahmoud.jpg",
    positionTitle:'المسمى الوظيفي',
    details: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla odio sed libero venenatis, sed tristique neque interdum. Integer scelerisque tortor lacinia, dictum quam nec, commodo tellus. ",
        " Donec non urna purus. In hac habitasse platea dictumst"
    ]
},
];


var len = group.length;

for (var i=0 ; i < len ; i++){
    
         
//     $(".timeline-carousel.owl-carousel").append('<div class="owl-item__inner">'+
//     '<div class="date-wrap">'+
//     '<span class="date"></span>'+
//    ' </div>'+
//     '<div class="text-wrap">'+
//      '<h2>'+ group[i].name+
//      '</h2>'+  
//      '<ul class="details">'+getDetails(i)+'</ul>'+
//     '</div></div>');

    var imgurl= group[i].imgUrl;
  
   
    $(".staff-list").append('<div class="single-staff-item">'+
    '<div class="avt-img-wrap"><span class="avt-img"></span></div>'+
    '<div class="staff-meta">'+
       '<h3>'+group[i].name+'</h3>'+
        '<p>'+group[i].positionTitle+'</p>'+
    '</div>'+
    '<ul class="details">'+getDetails(i)+'</ul>'+
'</div>');


$(".single-staff-item span.avt-img").eq(i).css({"background": 'url('+imgurl+')', "background-size": "cover",
"background-position": "center"});

}



function getDetails(index)
{
    var d='';

    for(var j=0 ; j< group[index].details.length; j++){

        d+= '<li>'+group[index].details[j]+'</li>'


    }

    return d;


}
