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
            id: 1,
            title: "Gangnam style",
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
        // ... (include the other 5 portfolio items here)
    ];

    const portfolioGrid = document.querySelector('.portfolio-grid');

    // Create portfolio items
    portfolioData.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item');
        portfolioItem.dataset.index = index;
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
                <button class="more-info-btn">More Info</button>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);

        // Add click event listener for info bar
        const infoBar = portfolioItem.querySelector('.info-bar');
        portfolioItem.addEventListener('click', (e) => {
            if (!e.target.classList.contains('more-info-btn') && !portfolioItem.classList.contains('expanded')) {
                infoBar.classList.toggle('active');
            }
        });

        // Add click event listener for "More Info" button
        const moreInfoBtn = portfolioItem.querySelector('.more-info-btn');
        moreInfoBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            expandItem(portfolioItem, item);
        });
    });

    function expandItem(portfolioItem, item) {
        // Close any previously expanded items
        const expandedItems = document.querySelectorAll('.portfolio-item.expanded');
        expandedItems.forEach(expandedItem => {
            if (expandedItem !== portfolioItem) {
                expandedItem.classList.remove('expanded');
                expandedItem.innerHTML = expandedItem.originalHTML;
            }
        });

        if (!portfolioItem.classList.contains('expanded')) {
            // Store the original HTML
            portfolioItem.originalHTML = portfolioItem.innerHTML;

            // Determine expansion direction
            const index = parseInt(portfolioItem.dataset.index);
            const isLeftEdge = index % 3 === 0;
            const isRightEdge = index % 3 === 2;

            if (isRightEdge) {
                portfolioItem.style.marginRight = 'calc(-100% - 2rem)';
            } else if (!isLeftEdge) {
                portfolioItem.style.marginLeft = 'calc(-50% - 1rem)';
            }

            // Expand the item
            portfolioItem.classList.add('expanded');
            portfolioItem.innerHTML = `
                <img src="${item.image}" alt="${item.title} by ${item.artist}">
                <div class="expanded-content">
                    <button class="close-btn">Close</button>
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

            // Add click event listener for close button
            const closeBtn = portfolioItem.querySelector('.close-btn');
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                portfolioItem.classList.remove('expanded');
                portfolioItem.style.marginLeft = '';
                portfolioItem.style.marginRight = '';
                portfolioItem.innerHTML = portfolioItem.originalHTML;

                // Re-add event listeners to the restored elements
                const infoBar = portfolioItem.querySelector('.info-bar');
                const moreInfoBtn = portfolioItem.querySelector('.more-info-btn');

                portfolioItem.addEventListener('click', (e) => {
                    if (!e.target.classList.contains('more-info-btn') && !portfolioItem.classList.contains('expanded')) {
                        infoBar.classList.toggle('active');
                    }
                });

                moreInfoBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    expandItem(portfolioItem, item);
                });
            });
        }
    }

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
