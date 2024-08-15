document.addEventListener('DOMContentLoaded', () => {
    const portfolioData = [
        {
            id: 1,
            title: "Ethereal Echoes",
            artist: "Luna Cascade",
            image: "images/placeholder_artwork_1.jpg",
            audio: "audio/sample1.mp3",
            tracklist: ["Moonlit Serenade", "Whispers in the Mist", "Starlight Sonata"],
            credits: "Mixed and Mastered by Killian Taylor",
            bio: "Luna Cascade is an ambient electronic artist known for creating ethereal soundscapes that transport listeners to otherworldly realms.",
            fullTracklist: [
                { title: "Moonlit Serenade", duration: "4:32" },
                { title: "Whispers in the Mist", duration: "5:17" },
                { title: "Starlight Sonata", duration: "6:03" },
                { title: "Cosmic Lullaby", duration: "4:55" },
                { title: "Nebula Dreams", duration: "5:41" }
            ],
            expandedCredits: "Produced by Luna Cascade\nMixed and Mastered by Killian Taylor\nAdditional synthesizers by Alex Starlight\nArtwork by Celeste Designs"
        },
        {
            id: 2,
            title: "Gangnam Style",
            artist: "PSY",
            image: "images/placeholder_artwork_2.jpg",
            audio: "audio/sample2.mp3",
            tracklist: ["Gangnam Style", "Right Now"],
            credits: "Mixed and Mastered by Killian Taylor",
            bio: "PSY is a South Korean singer, rapper, songwriter, and record producer known for his humorous videos and stage performances.",
            fullTracklist: [
                { title: "Gangnam Style", duration: "3:39" },
                { title: "Right Now", duration: "3:33" }
            ],
            expandedCredits: "Produced by PSY and Yoo Gun Hyung\nMixed and Mastered by Killian Taylor\nChoreography by Ga In"
        },
        // Add more portfolio items here...
    ];

    const portfolioGrid = document.querySelector('.portfolio-grid');

    // Create portfolio items
    portfolioData.forEach((item, index) => {
        const portfolioItem = createPortfolioItem(item, index);
        portfolioGrid.appendChild(portfolioItem);
    });

    function createPortfolioItem(item, index) {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item');
        portfolioItem.dataset.index = index;
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title} by ${item.artist}">
            <div class="info-bar">
                <h3>${item.title}</h3>
                <p>Artist: ${item.artist}</p>
                <button class="more-info-btn" aria-expanded="false">More Info</button>
            </div>
            <div class="expanded-content">
                <button class="close-btn" aria-label="Close expanded view">&times;</button>
                <h2>${item.title}</h2>
                <h3>${item.artist}</h3>
                <p>${item.bio}</p>
                <h4>Full Tracklist:</h4>
                <ul>
                    ${item.fullTracklist.map(track => `<li>${track.title} - ${track.duration}</li>`).join('')}
                </ul>
                <h4>Credits:</h4>
                <pre>${item.expandedCredits}</pre>
                <h4>Listen to Tracks:</h4>
                ${item.fullTracklist.map(track => `
                    <div>
                        <p>${track.title}</p>
                        <audio controls>
                            <source src="${item.audio}" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                `).join('')}
            </div>
        `;

        const moreInfoBtn = portfolioItem.querySelector('.more-info-btn');
        const closeBtn = portfolioItem.querySelector('.close-btn');

        portfolioItem.addEventListener('click', (e) => {
            if (!e.target.classList.contains('more-info-btn') &&
                !e.target.classList.contains('close-btn') &&
                !portfolioItem.classList.contains('expanded')) {
                toggleInfoBar(portfolioItem);
            }
        });

        moreInfoBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleExpand(portfolioItem);
        });

        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleExpand(portfolioItem);
        });

        return portfolioItem;
    }

    function toggleInfoBar(portfolioItem) {
        portfolioItem.classList.toggle('active');
    }

    function toggleExpand(portfolioItem) {
        const isExpanded = portfolioItem.classList.contains('expanded');
        const moreInfoBtn = portfolioItem.querySelector('.more-info-btn');

        // Close other expanded items
        document.querySelectorAll('.portfolio-item.expanded').forEach(item => {
            if (item !== portfolioItem) {
                item.classList.remove('expanded');
                item.querySelector('.more-info-btn').setAttribute('aria-expanded', 'false');
            }
        });

        if (!isExpanded) {
            portfolioItem.classList.add('expanded');
            moreInfoBtn.setAttribute('aria-expanded', 'true');

            // Scroll the expanded item into view if it's not fully visible
            setTimeout(() => {
                const rect = portfolioItem.getBoundingClientRect();
                const isFullyVisible = (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );

                if (!isFullyVisible) {
                    portfolioItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }, 300); // Wait for the expansion animation to complete
        } else {
            portfolioItem.classList.remove('expanded');
            moreInfoBtn.setAttribute('aria-expanded', 'false');
        }
    }

    // ScrollReveal animations
    ScrollReveal().reveal('.animate-top', {
        origin: 'top',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)'
    });

    ScrollReveal().reveal('.portfolio-item', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
        interval: 200
    });
});
