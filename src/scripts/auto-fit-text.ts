/**
 * Dynamically adjusts font size of elements to prevent word breaks
 * Finds the longest word and calculates maximum font size where it fits
 */

function fitTextToContainer() {
    const elements = document.querySelectorAll<HTMLElement>('.auto-fit-text');

    elements.forEach((element) => {
        const text = element.textContent || '';
        const words = text.trim().split(/\s+/);

        // Find the longest word
        const longestWord = words.reduce((a, b) => a.length > b.length ? a : b, '');

        // Get available width (parent width minus padding)
        const parent = element.parentElement;
        if (!parent) return;

        const parentStyle = window.getComputedStyle(parent);
        const availableWidth = parent.offsetWidth;

        // Binary search to find optimal font size
        let minSize = 8; // Minimum ~0.5rem
        let maxSize = 22; // Maximum 1.375rem (cap to preserve margins)
        let optimalSize = minSize;

        // Create a temporary span to measure text width
        const measureSpan = document.createElement('span');
        measureSpan.style.visibility = 'hidden';
        measureSpan.style.position = 'absolute';
        measureSpan.style.whiteSpace = 'nowrap';
        measureSpan.style.fontFamily = window.getComputedStyle(element).fontFamily;
        measureSpan.style.fontWeight = window.getComputedStyle(element).fontWeight;
        measureSpan.textContent = longestWord;
        document.body.appendChild(measureSpan);

        // Binary search for optimal font size
        while (minSize <= maxSize) {
            const midSize = Math.floor((minSize + maxSize) / 2);
            measureSpan.style.fontSize = `${midSize}px`;

            const wordWidth = measureSpan.offsetWidth;

            if (wordWidth <= availableWidth * 0.9) { // Use 90% of available width
                optimalSize = midSize;
                minSize = midSize + 1;
            } else {
                maxSize = midSize - 1;
            }
        }

        document.body.removeChild(measureSpan);

        // Apply the optimal font size
        element.style.fontSize = `${optimalSize}px`;

        // Find and scale the subtitle (next sibling div with company name)
        const cardContent = element.closest('.flex-1');
        if (cardContent) {
            const subtitle = cardContent.querySelector('.text-gray-500');
            if (subtitle && subtitle instanceof HTMLElement) {
                // Subtitle should be ~70% of the title size
                const subtitleSize = Math.max(11, Math.floor(optimalSize * 0.7));
                subtitle.style.fontSize = `${subtitleSize}px`;
            }
        }
    });
}

// Run on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fitTextToContainer);
} else {
    fitTextToContainer();
}

// Rerun on resize with debounce
let resizeTimeout: ReturnType<typeof setTimeout>;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(fitTextToContainer, 150);
});

export { fitTextToContainer };
