
// 키워드 카테고리 전달 
// results.html?keyword=java -> 주소에서 검색어 가져오기
// results.html?category=잡지 -> 주소에서 카테고리 가져오기
let params = new URLSearchParams(window.location.search);
let keyword = params.get('keyword');
let category = params.get('category');

let resultTitle = document.getElementById('resultTitle');
let resultCards = document.getElementById('resultCards');

let matched = [];

if(keyword !== null){
resultTitle.textContent = `${keyword} 검색 결과`;

// 검색결과 : 배열 [객체] -> 현재 도서의 반복처리(도서,저자 포함)
for(let i=0; i<books.length; i++){
    let book = books[i];
    let titleMatch = book.title.toLowerCase().includes(keyword.toLowerCase());
    let authorMatch = book.author.toLowerCase().includes(keyword.toLowerCase());

    // 도서명 또는 저자에 키워드가 포함되면 -> 검색성공
    if(titleMatch || authorMatch){
        matched.push(book);
        } 
    }
} else if (category !== null){
    resultTitle.textContent = `${category} 검색결과`;
    for(let i=0; i < books.length; i++){
        if(books[i].category === category){
            matched.push(books[i]);
        }
    }
} else {
    // 쿼리스트링이 없이 페이지로 접근
    resultTitle.textContent = '잘못된 접근입니다.'
}

// 결과 화면 표시
resultCards.innerHTML = '';
if(matched.length === 0){
    resultCards.innerHTML = `
    <div class="card">
    <p>검색 결과가 없습니다.</p>
    </div>
    `;
} else {
    // cards 결과 표시
    for(let i=0; i<matched.length; i++){
        let book = matched[i];
        let badgeClass = '';
        if(book.status === '대출가능'){
            badgeClass = 'badge ok';
        } else {
            badgeClass = 'badge';
        }
        let cardHtml = `
        <div class="card">
            <p class="${badgeClass}">${book.status}</p>
            <p>${book.title}</p>
            <p>${book.author} ˙ ${book.year}</p>
            <a class="btn" href="./detail.html?id=${book.id}">상세보기</a>   
        </div>
        `;
        resultCards.innerHTML += cardHtml;
    }
}


