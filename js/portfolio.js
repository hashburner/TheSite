document.addEventListener('DOMContentLoaded', () => {
    const portfolioData = [
        {
            id: 1,
            title: "Ethereal Echoes",
            artist: "Luna Cascade",
            image: "images/placeholder_artwork_1.jpg",
            audio: "audio/sample1.mp3",
            tracklist: ["Moonlit Serenade", "Whispers in the Mist", "Starlight Sonata"],
            credits: "Mixed and Mastered by Killian Taylor"
        },
        {
            id: 2,
            title: "Urban Rhythms",
            artist: "The City Collective",
            image: "images/placeholder_artwork_1.jpg",
            audio: "audio/sample2.mp3",
            tracklist: ["Neon Nights", "Concrete Jungle", "Subway Dreams", "Skyscraper Blues"],
            credits: "Produced, Mixed, and Mastered by Killian Taylor"
        },
        {
            id: 3,
            title: "Acoustic Journeys",
            artist: "Wooden Hearts",
            image: "images/placeholder_artwork_1.jpg",
            audio: "audio/sample3.mp3",
            tracklist: ["Forest Whispers", "Mountain Melodies", "River's Song"],
            credits: "Recorded and Mixed by Killian Taylor"
        },
        {
            id: 4,
            title: "Electric Dreams",
            artist: "Synth Waves",
            image: "images/placeholder_artwork_1.jpg",
            audio: "audio/sample4.mp3",
            tracklist: ["Retro Future", "Digital Love", "Neon Horizons", "Binary Beats"],
            credits: "Mixed and Mastered by Killian Taylor"
        },
        {
            id: 5,
            title: "Jazz Nocturne",
            artist: "The Midnight Quartet",
            image: "images/placeholder_artwork_1.jpg",
            audio: "audio/sample5.mp3",
            tracklist: ["Blue Moon Bossa", "Saxophone Lullaby", "Nightclub Noir"],
            credits: "Recorded, Mixed, and Mastered by Killian Taylor"
        },
        {
            id: 6,
            title: "Folk Tales",
            artist: "Storyteller's Guild",
            image: "images/placeholder_artwork_1.jpg",
            audio: "audio/sample6.mp3",
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
                <audio controls>
                    <source src="${item.audio}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
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
