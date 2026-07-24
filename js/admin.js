// 요소 접근 정의
const tableBody = document.getElementById('bookTableBody');
const addBtn = document.getElementById('addBookBtn')


// 화면에 도서 목록을 테이블 표시
function renderTable(){
    tableBody.innerHTML = '';

    for(let i=0; i < books.length; i++){
        let book = books[i];

        const newRow = document.createElement('tr');
        newRow.setAttribute('data-id',book.id); //어떤 책의 행인지 직별

    // 행 추가
    newRow.innerHTML =
    `<td>${book.id}</td>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.publisher}</td>
    <td>${book.year}</td>
    <td>${book.isbn}</td>
    <td>${book.category}</td>
    <td>${book.status}</td>
    <td class="status">
        <a class="btn" href="./detail.html">상세</a>
        <button class="btn basic edit-btn" type="button">수정</button>
        <button class="btn basic delete-btn" type="button">삭제</button>
    </td>
    `; 
        tableBody.appendChild(newRow);
    }
};


// 페이지 로드시 최초 1회 그리기
renderTable();


// 등록
addBtn.addEventListener('click',function(){
    // input 태그에 값을 입력 기억
    let title = document.getElementById('inputTitle').value.trim();
    let author = document.getElementById('inputAuthor').value;
    let publisher = document.getElementById('inputPublisher').value;
    let year = document.getElementById('inputYear').value;
    let isbn = document.getElementById('inputIsbn').value;
    let category = document.getElementById('inputCategory').value;

    // 입력 제한(유효성검사) - 도서명과 저자만 필수 입력
    if(title === '' || author === ''){
        alert('도서명과 저자는 필수입력입니다.');
        return;
    }


    // 신규 도서목록 생성(객체)
    let newBook = {id:nextId,
                    title:title, author:author,
                    publisher:publisher, year:Number(year),
                    isbn:isbn, category:category, status:'대출가능'};


    // 배열 추가 -> 신규번호 생성 -> 로컬스토리지 지정 -> 화면표시
    books.push(newBook);
    nextId += 1;
    saveBooks();
    renderTable();

    document.getElementById('bookForm').reset();
    alert('도서가 등록되었습니다.');
});

    // 삭제
    tableBody.addEventListener('click',function(e){
        // 삭제버튼이 눌려지면
        if(e.target.classList.contains('delete-btn')){
            let row = e.target.closest('tr');
            let bookId = Number(row.getAttribute('data-id'));
            console.log(bookId);
            // 영구삭제 확인
            let confirmed = confirm('정말 삭제할까요?');
            if(!confirmed){return;}

            // 삭제 실행 - 도서의 id 찾기
            let targetIndex = -1;
            for(let i=0; i<books.length; i++){
                if(books[i].id === bookId){
                    targetIndex = i
                    break;
                }
            }
            
            // 삭제 실행 - 정확하게 도서 id 찾으면
            if(targetIndex != -1){
                books.splice(targetIndex,1);
                saveBooks();
                renderTable();
                alert('도서가 삭제되었습니다.');
            }
        }
    });