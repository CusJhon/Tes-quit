// Main entry point for QuickFake
// This file coordinates all modules and ensures proper initialization

(function() {
    'use strict';
    
    // Wait for all scripts to load
    window.addEventListener('load', function() {
        console.log('QuickFake PRO loaded successfully');
        
        // Additional initialization if needed
        if (document.querySelector('.generate-loading')) {
            console.log('Generate loading elements found');
        }
        
        // Add loading="lazy" to all images in result areas
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1 && node.tagName === 'IMG') {
                        node.setAttribute('loading', 'lazy');
                    }
                    if (node.querySelectorAll) {
                        node.querySelectorAll('img').forEach(function(img) {
                            img.setAttribute('loading', 'lazy');
                        });
                    }
                });
            });
        });
        
        observer.observe(document.body, { childList: true, subtree: true });
    });
})();