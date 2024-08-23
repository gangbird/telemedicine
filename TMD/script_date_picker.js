document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.getElementById('calendar');
    const monthYearDisplay = document.getElementById('month-year');
    const selectedDateDisplay = document.getElementById('selected-date');
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    function updateCalendar(month, year) {
        calendar.innerHTML = ''; // Clear previous calendar
        monthYearDisplay.textContent = `${year}년 ${month + 1}월`;

        let firstDay = new Date(year, month, 1).getDay();
        let daysInMonth = 32 - new Date(year, month, 32).getDate();

        // Create days of the week header
        const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
        const daysHeader = document.createElement('div');
        daysHeader.classList.add('days-header');
        daysOfWeek.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.textContent = day;
            daysHeader.appendChild(dayElement);
        });
        calendar.appendChild(daysHeader);

        // Create date cells
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            calendar.appendChild(emptyCell);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dateCell = document.createElement('div');
            dateCell.textContent = day;
            dateCell.classList.add('date-cell');
            dateCell.addEventListener('click', function() {
                const selectedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                selectedDateDisplay.textContent = `선택된 날짜: ${selectedDate}`;
            });
            calendar.appendChild(dateCell);
        }
    }

    document.getElementById('prev-month').addEventListener('click', function() {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
        updateCalendar(currentMonth, currentYear);
    });

    document.getElementById('next-month').addEventListener('click', function() {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
        updateCalendar(currentMonth, currentYear);
    });

    document.getElementById('next-button').addEventListener('click', function() {
        if (selectedDateDisplay.textContent) {
            // 날짜가 선택되었을 때 시간 선택 페이지로 이동
            window.location.href = 'time_picker.html';
        } else {
            alert('날짜를 선택하세요.');
        }
    });

    updateCalendar(currentMonth, currentYear);
});
