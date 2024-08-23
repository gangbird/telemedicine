document.getElementById('personalInfoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 폼 제출 동작을 막음
    window.location.href = 'date_picker.html'; // 날짜 선택 페이지로 이동
});
