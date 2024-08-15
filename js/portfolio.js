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
            title: "Gangnam style",
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
                <p>Tracklist:</p>
                <ul class="tracklist">
                    ${item.tracklist.map(track => `<li>${track}</li>`).join('')}
                </ul>
                <p>${item.credits}</p>
                <button class="more-info-btn" aria-expanded="false">More Info</button>
            </div>
        `;

        const moreInfoBtn = portfolioItem.querySelector('.more-info-btn');

        portfolioItem.addEventListener('click', (e) => {
            if (!e.target.classList.contains('more-info-btn') && !portfolioItem.classList.contains('expanded')) {
                toggleInfoBar(portfolioItem);
            }
        });

        moreInfoBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleExpand(portfolioItem, item);
        });

        return portfolioItem;
    }

    function toggleInfoBar(portfolioItem) {
        portfolioItem.classList.toggle('active');
    }

    function toggleExpand(portfolioItem, item) {
        const isExpanded = portfolioItem.classList.contains('expanded');
        const expandedContent = portfolioGrid.querySelector('.expanded-content');

        // Close any other expanded items
        document.querySelectorAll('.portfolio-item.expanded').forEach(expandedItem => {
            if (expandedItem !== portfolioItem) {
                collapseItem(expandedItem);
            }
        });

        if (!isExpanded) {
            expandItem(portfolioItem, item);
        } else {
            collapseItem(portfolioItem);
        }
    }

    function expandItem(portfolioItem, item) {
        portfolioItem.classList.add('expanded');
        const expandedContent = document.createElement('div');
        expandedContent.classList.add('expanded-content');
        expandedContent.innerHTML = createExpandedContent(item);

        // Find the correct position to insert the expanded content
        const itemIndex = Array.from(portfolioGrid.children).indexOf(portfolioItem);
        const itemsPerRow = Math.floor(portfolioGrid.offsetWidth / portfolioItem.offsetWidth);
        const insertIndex = Math.ceil((itemIndex + 1) / itemsPerRow) * itemsPerRow;

        if (portfolioGrid.children[insertIndex]) {
            portfolioGrid.insertBefore(expandedContent, portfolioGrid.children[insertIndex]);
        } else {
            portfolioGrid.appendChild(expandedContent);
        }

        const closeBtn = expandedContent.querySelector('.close-btn');
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            collapseItem(portfolioItem);
        });

        // Trigger reflow to ensure the transition applies
        expandedContent.offsetHeight;
        expandedContent.style.opacity = '1';
        expandedContent.style.transform = 'translateY(0)';
    }

    function collapseItem(portfolioItem) {
        portfolioItem.classList.remove('expanded');
        const expandedContent = portfolioGrid.querySelector('.expanded-content');
        if (expandedContent) {
            expandedContent.style.opacity = '0';
            expandedContent.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                expandedContent.remove();
            }, 500); // Match this timing with the CSS transition duration
        }
    }

    function createExpandedContent(item) {
        return `
            <button class="close-btn" aria-label="Close expanded view">Close</button>
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
        `;
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
