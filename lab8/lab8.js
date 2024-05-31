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

    showDate();
});
0 comments on commit c0dd2b5