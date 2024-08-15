document.addEventListener('DOMContentLoaded', () => {
    const portfolioData = [
        {
            id: 1,
            title: "Ethereal Echoes",
            artist: "Luna Cascade",
            image: "../images/placeholder_artwork_1.jpg",
            tracklist: ["Moonlit Serenade", "Whispers in the Mist", "Starlight Sonata"],
            credits: "Mixed and Mastered by Killian Taylor"
        },
        {
            id: 2,
            title: "Urban Rhythms",
            artist: "The City Collective",
            image: "/api/placeholder/400/400?text=Urban+Rhythms",
            tracklist: ["Neon Nights", "Concrete Jungle", "Subway Dreams", "Skyscraper Blues"],
            credits: "Produced, Mixed, and Mastered by Killian Taylor"
        },
        {
            id: 3,
            title: "Acoustic Journeys",
            artist: "Wooden Hearts",
            image: "/api/placeholder/400/400?text=Acoustic+Journeys",
            tracklist: ["Forest Whispers", "Mountain Melodies", "River's Song"],
            credits: "Recorded and Mixed by Killian Taylor"
        },
        {
            id: 4,
            title: "Electric Dreams",
            artist: "Synth Waves",
            image: "/api/placeholder/400/400?text=Electric+Dreams",
            tracklist: ["Retro Future", "Digital Love", "Neon Horizons", "Binary Beats"],
            credits: "Mixed and Mastered by Killian Taylor"
        },
        {
            id: 5,
            title: "Jazz Nocturne",
            artist: "The Midnight Quartet",
            image: "/api/placeholder/400/400?text=Jazz+Nocturne",
            tracklist: ["Blue Moon Bossa", "Saxophone Lullaby", "Nightclub Noir"],
            credits: "Recorded, Mixed, and Mastered by Killian Taylor"
        },
        {
            id: 6,
            title: "Folk Tales",
            artist: "Storyteller's Guild",
            image: "/api/placeholder/400/400?text=Folk+Tales",
            tracklist: ["Wanderer's Ballad", "Harvest Home", "Legends of the Green", "Fireside Songs"],
            credits: "Produced and Mixed by Killian Taylor"
        }
    ];

    const portfolioGrid = document.querySelector('.portfolio-grid');

    // Create portfolio items
    portfolioData.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item');
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title} by ${item.artist}">
            <div class="info-bar">
                <h3>${item.title}</h3>
                <p>Artist: ${item.artist}</p>
                <p>Tracklist:</p>
                <ul class="tracklist">
                    ${item.tracklist.map(track => `<li>${track}</li>`).join('')}
                </ul>
                <p>${item.credits}</p>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);

        // Add click event listener
        portfolioItem.addEventListener('click', () => {
            const infoBar = portfolioItem.querySelector('.info-bar');
            infoBar.classList.toggle('active');
        });
    });

    // ScrollReveal animations
    ScrollReveal().reveal('.animate-top', {
        origin: 'top',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.portfolio-item', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out',
        interval: 200
    });
});
