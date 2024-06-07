document.addEventListener("DOMContentLoaded", function() {
    function showDate() {
        let locales = [
            { locale: 'ru-RU', description: 'Россия' },
            { locale: 'en-US', description: 'США' },
            { locale: 'fr-FR', description: 'Франция' },
            { locale: 'de-DE', description: 'Германия' },
            { locale: 'ja-JP', description: 'Япония' }
        ];
        let ids = ['current-date-ru', 'current-date-en', 'current-date-fr', 'current-date-de', 'current-date-ja'];

        let today = new Date();

        locales.forEach((item, index) => {
            let out = document.getElementById(ids[index]);
            if (out) {
                out.innerHTML = item.description + " (" + item.locale + "): " + today.toLocaleString(item.locale);
            }
        });
    }

    function showCurrentDate() {
        let today = new Date();
        
        let year = today.getFullYear();
        let month = today.toLocaleString('ru-RU', { month: 'long' });
        let date = today.getDate();
        let day = today.toLocaleString('ru-RU', { weekday: 'long' });

        let output = `
            Текущий год: ${year}<br>
            Текущий месяц: ${month}<br>
            Текущая дата: ${date}<br>
            День недели: ${day}
        `;

        let out = document.getElementById('current-date');
        if (out) {
            out.innerHTML = output;
        }
    }

    function showDayOfWeek() {
        let day = document.getElementById('day').value;
        let month = document.getElementById('month').value;
        let year = document.getElementById('year').value;

        if (day && month && year) {
            let date = new Date(year, month - 1, day);
            let dayOfWeek = date.toLocaleString('ru-RU', { weekday: 'long' });
            
            document.getElementById('day-of-week').innerHTML = `День недели: ${dayOfWeek}`;
        } else {
            document.getElementById('day-of-week').innerHTML = 'Пожалуйста, введите корректные данные.';
        }
    }

    showDate();
    showCurrentDate();
    
    window.showDayOfWeek = showDayOfWeek; // Make showDayOfWeek available globally
});