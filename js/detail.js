// 주소창에 쿼리스트링 전달 detail.html?id=1
// 주소에서 도서 id 가져오기 
// books 배열에서 도서 찾기
// 찾은 도성의 정보를 detail.html 표시

// 1단계
let params = new URLSearchParams(window.location.search);
let bookId = Number (params.get('id'));

// 2단계 (찾기 결과 - 도서 1권)
let targetBook = null;
for(let i=0; i < books.length; i++){
    if(books[i].id === bookId){
        targetBook = books[i];
        break;
    }
}

// 3단계 : 화면에 표시 (예외처리 고민)
if(targetBook === null){
    alert('도서를 찾을 수 없습니다.');
} else {
    // 도서정보 표시
    document.getElementById('detailStatus').textContent = targetBook.status;
    document.getElementById('detailTitle').textContent = targetBook.title;
    document.getElementById('detailAuthor').textContent =`저자명 : ${targetBook.author}`;
    document.getElementById('detailYear').textContent = targetBook.year;
    document.getElementById('detailCategory').textContent = targetBook.category;
}
