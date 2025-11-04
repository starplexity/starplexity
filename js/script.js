document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('gameSlider');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');

    if (!slider) return;

    // Card width (300px) + gap (1.5rem which is 24px) = 324px
    const cardScrollWidth = 324; 
    const scrollInterval = 4000; // 4 seconds between auto-scrolls
    let scrollDirection = 1; // 1 for right, -1 for left

    // --- 1. Manual Scrolling Functionality ---
    if (scrollLeftBtn && scrollRightBtn) {
        scrollLeftBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -cardScrollWidth, behavior: 'smooth' });
        });

        scrollRightBtn.addEventListener('click', () => {
            slider.scrollBy({ left: cardScrollWidth, behavior: 'smooth' });
        });
    }

    // --- 2. Auto-Scrolling Functionality ---
    function autoScroll() {
        // Check if we hit the end (scrollWidth - clientWidth) or the start (0)
        const isAtEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10;
        const isAtStart = slider.scrollLeft <= 10;

        if (isAtEnd) {
            scrollDirection = -1; // Reverse direction to left
        } else if (isAtStart) {
            scrollDirection = 1; // Reverse direction to right
        }

        const newScroll = slider.scrollLeft + (cardScrollWidth * scrollDirection);
        
        slider.scrollTo({ 
            left: newScroll, 
            behavior: 'smooth' 
        });
    }

    // Only start auto-scroll if the slider content is actually wider than the viewport
    if (slider.scrollWidth > slider.clientWidth) {
        setInterval(autoScroll, scrollInterval);
    }
});