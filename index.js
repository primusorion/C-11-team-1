document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.querySelector('.calendar');
    const calendarTitle = document.getElementById('calendarTitle');
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    function renderCalendar(month, year) {
        const firstDay = new Date(year, month).getDay();
        const daysInMonth = 32 - new Date(year, month, 32).getDate();

        const tbl = calendarEl.querySelector('tbody');
        tbl.innerHTML = '';

        let date = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');
                const cellText = document.createTextNode('');
                if (i === 0 && j < firstDay) {
                    cell.appendChild(cellText);
                } else if (date > daysInMonth) {
                    break;
                } else {
                    cellText.nodeValue = date;
                    cell.appendChild(cellText);
                    date++;
                }
                row.appendChild(cell);
            }
            tbl.appendChild(row);
        }

        calendarTitle.textContent = `${monthNames[month]} ${year}`;
    }

    function initCalendar() {
        renderCalendar(currentMonth, currentYear);

        document.getElementById('prevMonth').addEventListener('click', function () {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            renderCalendar(currentMonth, currentYear);
        });

        document.getElementById('nextMonth').addEventListener('click', function () {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            renderCalendar(currentMonth, currentYear);
        });
    }

    initCalendar();
});
