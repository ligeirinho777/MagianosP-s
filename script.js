document.addEventListener('DOMContentLoaded', function() {
    const newsList = document.getElementById('news-list');

    // Simulando a obtenção de noticias
    const news = [
        { title: 'Vitória do Time A sobre o Time B', date: '2024-08-27'},
        { title: 'Jogador X anuncia aposentadoria', date: '2024-08-26'},
        { title: 'Time C conquista campeonato internacional', date: '2024-08-25'}
    ];

    news.forEach(item => {
        const div = document.createElement('div');
        div.className = 'news-item';
        div.innerHTML = `<h3>${item.title}</h3><p>${item.date}</p>`;
        newsList.appendChild(div);
    });
});    