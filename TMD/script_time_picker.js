document.addEventListener('DOMContentLoaded', function() {
    const timeContainer = document.getElementById('time-container');
    const selectedTimeDisplay = document.getElementById('selected-time');
    let selectedTime = null;

    // 0시부터 24시까지의 시간을 생성
    for (let i = 0; i < 24; i++) {
        const timeBox = document.createElement('div');
        timeBox.textContent = `${i}시 ~ ${i + 1}시`;
        timeBox.classList.add('time-box');
        timeBox.addEventListener('click', function() {
            selectedTime = timeBox.textContent;
            selectedTimeDisplay.textContent = `선택된 시간: ${selectedTime}`;
        });
        timeContainer.appendChild(timeBox);
    }

    // 다음 버튼 클릭 시 동작
    document.getElementById('next-button').addEventListener('click', function() {
        if (selectedTime) {
            // 연결 중 메시지와 로딩 애니메이션 표시
            const loadingContainer = document.createElement('div');
            loadingContainer.id = 'loading-container';

            const loadingSpinner = document.createElement('div');
            loadingSpinner.id = 'loading-spinner';

            const loadingText = document.createElement('span');
            loadingText.id = 'loading-text';
            loadingText.textContent = '연결 중';

            loadingContainer.appendChild(loadingSpinner);
            loadingContainer.appendChild(loadingText);
            document.body.appendChild(loadingContainer);

            // 2초 후 통화 페이지로 이동
            setTimeout(function() {
                document.body.removeChild(loadingContainer);
                window.location.href = 'video_call.html';
            }, 2000);
        } else {
            alert('시간을 선택하세요.');
        }
    });
});
