// IBM Carbon Design System - Interactive Components JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all interactive components
    initAccordion();
    initTabs();
    initCopyButtons();
    initSmoothScroll();
    initTableOfContents();
    
    console.log('IBM Documentation page initialized');
});

/**
 * Accordion Component
 * Handles expand/collapse functionality for accordion items
 */
function initAccordion() {
    const accordionHeadings = document.querySelectorAll('.bx--accordion__heading');
    
    accordionHeadings.forEach(heading => {
        heading.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Toggle aria-expanded attribute
            this.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle content visibility
            const content = this.nextElementSibling;
            if (content && content.classList.contains('bx--accordion__content')) {
                content.style.display = isExpanded ? 'none' : 'block';
            }
        });
        
        // Keyboard accessibility
        heading.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

/**
 * Tabs Component
 * Handles tab switching functionality
 */
function initTabs() {
    const tabsContainer = document.querySelector('.bx--tabs');
    if (!tabsContainer) return;
    
    const tabLinks = tabsContainer.querySelectorAll('.bx--tabs__nav-link');
    const tabPanels = document.querySelectorAll('[role="tabpanel"]');
    
    tabLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active state from all tabs
            tabLinks.forEach(tab => {
                tab.parentElement.classList.remove('bx--tabs__nav-item--selected');
                tab.setAttribute('aria-selected', 'false');
            });
            
            // Add active state to clicked tab
            this.parentElement.classList.add('bx--tabs__nav-item--selected');
            this.setAttribute('aria-selected', 'true');
            
            // Hide all tab panels
            tabPanels.forEach(panel => {
                panel.style.display = 'none';
            });
            
            // Show corresponding tab panel
            if (tabPanels[index]) {
                tabPanels[index].style.display = 'block';
            }
        });
        
        // Keyboard navigation
        link.addEventListener('keydown', function(e) {
            let newIndex = index;
            
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                newIndex = (index + 1) % tabLinks.length;
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                newIndex = (index - 1 + tabLinks.length) % tabLinks.length;
            } else if (e.key === 'Home') {
                e.preventDefault();
                newIndex = 0;
            } else if (e.key === 'End') {
                e.preventDefault();
                newIndex = tabLinks.length - 1;
            }
            
            if (newIndex !== index) {
                tabLinks[newIndex].focus();
                tabLinks[newIndex].click();
            }
        });
    });
}

/**
 * Copy to Clipboard
 * Handles copy functionality for code snippets
 */
function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.bx--snippet-btn--copy');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const snippet = this.closest('.bx--snippet');
            const code = snippet.querySelector('code');
            
            if (code) {
                const textToCopy = code.textContent;
                
                // Use Clipboard API
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        showCopyFeedback(this);
                    }).catch(err => {
                        console.error('Failed to copy:', err);
                        fallbackCopy(textToCopy, this);
                    });
                } else {
                    fallbackCopy(textToCopy, this);
                }
            }
        });
    });
}

/**
 * Fallback copy method for older browsers
 */
function fallbackCopy(text, button) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        showCopyFeedback(button);
    } catch (err) {
        console.error('Fallback copy failed:', err);
    }
    
    document.body.removeChild(textarea);
}

/**
 * Show visual feedback when code is copied
 */
function showCopyFeedback(button) {
    const originalHTML = button.innerHTML;
    button.innerHTML = '<span class="bx--assistive-text">Copied!</span><svg width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M6.5 11.5l-3-3 1-1 2 2 5-5 1 1z"/></svg>';
    button.style.backgroundColor = '#24a148';
    
    setTimeout(() => {
        button.innerHTML = originalHTML;
        button.style.backgroundColor = '';
    }, 2000);
}

/**
 * Smooth Scroll
 * Handles smooth scrolling for anchor links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or "javascript:void(0)"
            if (href === '#' || href.includes('javascript:')) {
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                // Calculate offset for sticky header
                const headerHeight = document.querySelector('.bx--header')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without jumping
                history.pushState(null, null, href);
                
                // Update active state in TOC
                updateActiveTOCLink(href);
            }
        });
    });
}

/**
 * Table of Contents
 * Highlights current section in TOC based on scroll position
 */
function initTableOfContents() {
    const tocLinks = document.querySelectorAll('.docs-toc-link');
    const sections = document.querySelectorAll('.docs-section, .docs-subsection');
    
    if (tocLinks.length === 0 || sections.length === 0) return;
    
    // Throttle scroll events for performance
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateActiveTOCOnScroll(tocLinks, sections);
                ticking = false;
            });
            ticking = true;
        }
    });
}

/**
 * Update active TOC link based on scroll position
 */
function updateActiveTOCOnScroll(tocLinks, sections) {
    const headerHeight = document.querySelector('.bx--header')?.offsetHeight || 0;
    const scrollPosition = window.scrollY + headerHeight + 100;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = '#' + section.id;
        }
    });
    
    if (currentSection) {
        updateActiveTOCLink(currentSection);
    }
}

/**
 * Update active state of TOC link
 */
function updateActiveTOCLink(href) {
    const tocLinks = document.querySelectorAll('.docs-toc-link');
    
    tocLinks.forEach(link => {
        if (link.getAttribute('href') === href) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Responsive Navigation Toggle
 * For mobile devices
 */
function initMobileNav() {
    const header = document.querySelector('.bx--header');
    
    if (window.innerWidth <= 672) {
        // Add mobile menu toggle button
        const menuButton = document.createElement('button');
        menuButton.className = 'bx--header__menu-trigger';
        menuButton.setAttribute('aria-label', 'Open menu');
        menuButton.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M2 4h16v2H2zm0 5h16v2H2zm0 5h16v2H2z"/></svg>';
        
        header.appendChild(menuButton);
        
        menuButton.addEventListener('click', function() {
            const sidebar = document.querySelector('.docs-sidebar');
            if (sidebar) {
                sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
            }
        });
    }
}

// Handle window resize
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        initMobileNav();
    }, 250);
});

// Initialize mobile nav on load
initMobileNav();

/**
 * Search Functionality (Placeholder)
 * This would typically integrate with a search service
 */
function initSearch() {
    const searchInput = document.querySelector('.docs-search-input');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            
            if (query.length > 2) {
                // Implement search logic here
                console.log('Searching for:', query);
            }
        });
    }
}

/**
 * Print Styles Handler
 * Optimize page for printing
 */
window.addEventListener('beforeprint', function() {
    // Expand all accordions for printing
    const accordionHeadings = document.querySelectorAll('.bx--accordion__heading');
    accordionHeadings.forEach(heading => {
        heading.setAttribute('aria-expanded', 'true');
        const content = heading.nextElementSibling;
        if (content) {
            content.style.display = 'block';
        }
    });
});

/**
 * Accessibility: Skip to main content
 */
function addSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-to-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: #0f62fe;
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 9999;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '0';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

addSkipLink();

// Made with Bob
