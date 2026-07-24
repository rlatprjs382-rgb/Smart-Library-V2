// 폼에서 검색어 제출(submit) -> 새로고침 자동 실행
// 검색어 입력 -> 가져오기 
// 빈 값 검사 (예외처리)
// result.html로 검색어 전달 -> 쿼리스트링(?키=값)

const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit',function(e){
    e.preventDefault();
    let keyword = document.getElementById('searchInput').value;

    if(keyword === ''){
        alert('검색어를 입력하세요.');
        return;
    }

    window.location.href = `./results.html?keyword=${keyword}`;

});
