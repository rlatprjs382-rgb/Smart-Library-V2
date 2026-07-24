// 최초 접속시 기본 데이터 
let defaultBooks = [
    {id:1, title:'Effective Java',author:'Joshon',
        publisher:'itbooks',year:'2020년',isbn:'isbn-1234',category:'IT',status:'대출가능'},
    {id:2, title:'Clean Code',author:'Rober',
        publisher:'itbooks',year:'2025년',isbn:'isbn-5678',category:'IT',status:'대출중'},
    {id:3, title:'월간 디자인',author:'디자인하우스',
        publisher:'디자인하우스',year:'2021년',isbn:'isbn-4321',category:'잡지',status:'대출가능'},
    {id:4, title:'모비 딕',author:'허먼 멜빌',
        publisher:'문학사',year:'1995년',isbn:'isbn-4541',category:'문학',status:'대출가능'},
    {id:5, title:'무서운 게 딱 좋아',author:'이길동',
        publisher:'아동문학',year:'2025년',isbn:'isbn-9874',category:'아동',status:'대출가능'}
];

let books;
let savedData = localStorage.getItem('libraryBooks');


// 로컬스토리지 JSON형식
if(savedData === null){
    books = defaultBooks;
} else {
    books = JSON.parse(savedData);
}

// 도서번호 : 기본키(유일하게 도서를 구분)
let nextId = 1;
for(let i=0; i<books.length; i++){
    if(books[i].id >= nextId){
        nextId = books[i].id + 1;
    }
}

function saveBooks(){
localStorage.setItem('libraryBooks',JSON.stringify(books));
}