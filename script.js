// Material Design Component Initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Top App Bar
    const topAppBar = new mdc.topAppBar.MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
    
    // Initialize Drawer
    const drawer = new mdc.drawer.MDCDrawer(document.querySelector('.mdc-drawer'));
    
    // Initialize Menu Toggle
    const menuButton = document.querySelector('.mdc-top-app-bar__navigation-icon');
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            drawer.open = !drawer.open;
        });
    }
    
    // Initialize all buttons
    const buttons = document.querySelectorAll('.mdc-button');
    buttons.forEach(button => {
        new mdc.ripple.MDCRipple(button);
    });
    
    // Initialize all cards
    const cards = document.querySelectorAll('.mdc-card__primary-action');
    cards.forEach(card => {
        new mdc.ripple.MDCRipple(card);
    });
    
    // Initialize FAB
    const fab = document.querySelector('.mdc-fab');
    if (fab) {
        new mdc.ripple.MDCRipple(fab);
    }
    
    // Initialize Icon Buttons
    const iconButtons = document.querySelectorAll('.mdc-icon-button');
    iconButtons.forEach(iconButton => {
        new mdc.ripple.MDCRipple(iconButton).unbounded = true;
    });
    
    // Initialize List Items
    const listItems = document.querySelectorAll('.mdc-deprecated-list-item');
    listItems.forEach(listItem => {
        new mdc.ripple.MDCRipple(listItem);
    });
    
    // Close drawer when clicking outside
    const scrim = document.querySelector('.mdc-drawer-scrim');
    if (scrim) {
        scrim.addEventListener('click', () => {
            drawer.open = false;
        });
    }
    
    // Handle navigation
    handleNavigation();
    
    // Handle feature interactions
    handleFeatureCards();
    
    // Handle FAB click
    handleFAB();
});

// Navigation Handler
function handleNavigation() {
    const navItems = document.querySelectorAll('.mdc-deprecated-list-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active state from all items
            navItems.forEach(nav => nav.classList.remove('mdc-deprecated-list-item--activated'));
            
            // Add active state to clicked item
            item.classList.add('mdc-deprecated-list-item--activated');
            
            // Get the navigation text
            const navText = item.querySelector('.mdc-deprecated-list-item__text').textContent;
            
            // Update page content based on navigation
            updatePageContent(navText);
            
            // Close drawer on mobile
            if (window.innerWidth <= 768) {
                const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
                drawer.open = false;
            }
        });
    });
}

// Feature Cards Handler
function handleFeatureCards() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('.mdc-typography--headline6').textContent;
            showFeatureDetail(title);
        });
    });
}

// FAB Handler
function handleFAB() {
    const fab = document.querySelector('.mdc-fab');
    if (fab) {
        fab.addEventListener('click', () => {
            showCreateCampaignDialog();
        });
    }
}

// Update Page Content
function updatePageContent(section) {
    const mainContent = document.querySelector('.main-content');
    
    switch(section) {
        case 'Home':
            loadHomeContent();
            break;
        case 'Campaigns':
            loadCampaignsContent();
            break;
        case 'Analytics':
            loadAnalyticsContent();
            break;
        case 'Settings':
            loadSettingsContent();
            break;
        default:
            loadHomeContent();
    }
    
    // Update app bar title
    const appBarTitle = document.querySelector('.mdc-top-app-bar__title');
    appBarTitle.textContent = section === 'Home' ? 'Cinch' : section;
}

// Content Loaders
function loadHomeContent() {
    // Current content is already the home content
    console.log('Loading home content');
}

function loadCampaignsContent() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <section class="campaigns-section">
            <h3 class="mdc-typography--headline5">Your Campaigns</h3>
            <div class="campaigns-grid">
                <div class="mdc-card campaign-card">
                    <div class="mdc-card__primary-action">
                        <div class="mdc-card__content">
                            <h4 class="mdc-typography--headline6">Summer Sale 2024</h4>
                            <p class="mdc-typography--body2">Status: Active</p>
                            <p class="mdc-typography--body2">Reach: 12,450 users</p>
                        </div>
                    </div>
                </div>
                <div class="mdc-card campaign-card">
                    <div class="mdc-card__primary-action">
                        <div class="mdc-card__content">
                            <h4 class="mdc-typography--headline6">Product Launch</h4>
                            <p class="mdc-typography--body2">Status: Draft</p>
                            <p class="mdc-typography--body2">Reach: 0 users</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    initializeNewCards();
}

function loadAnalyticsContent() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <section class="analytics-section">
            <h3 class="mdc-typography--headline5">Analytics Dashboard</h3>
            <div class="analytics-cards">
                <div class="mdc-card metric-card">
                    <div class="mdc-card__content">
                        <h4 class="mdc-typography--headline6">Total Campaigns</h4>
                        <p class="mdc-typography--headline4">24</p>
                    </div>
                </div>
                <div class="mdc-card metric-card">
                    <div class="mdc-card__content">
                        <h4 class="mdc-typography--headline6">Active Users</h4>
                        <p class="mdc-typography--headline4">1,234</p>
                    </div>
                </div>
                <div class="mdc-card metric-card">
                    <div class="mdc-card__content">
                        <h4 class="mdc-typography--headline6">Conversion Rate</h4>
                        <p class="mdc-typography--headline4">3.2%</p>
                    </div>
                </div>
            </div>
        </section>
    `;
    initializeNewCards();
}

function loadSettingsContent() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <section class="settings-section">
            <h3 class="mdc-typography--headline5">Settings</h3>
            <div class="mdc-card settings-card">
                <div class="mdc-card__content">
                    <h4 class="mdc-typography--headline6">Account Settings</h4>
                    <p class="mdc-typography--body2">Manage your account preferences and profile information.</p>
                </div>
            </div>
            <div class="mdc-card settings-card">
                <div class="mdc-card__content">
                    <h4 class="mdc-typography--headline6">Notification Settings</h4>
                    <p class="mdc-typography--body2">Control how and when you receive notifications.</p>
                </div>
            </div>
        </section>
    `;
    initializeNewCards();
}

// Initialize new cards after content update
function initializeNewCards() {
    const newCards = document.querySelectorAll('.mdc-card__primary-action:not([data-mdc-ripple-is-unbounded])');
    newCards.forEach(card => {
        new mdc.ripple.MDCRipple(card);
    });
}

// Show Feature Detail
function showFeatureDetail(feature) {
    console.log(`Showing details for: ${feature}`);
    // This would typically show a modal or navigate to a detail page
}

// Show Create Campaign Dialog
function showCreateCampaignDialog() {
    console.log('Opening create campaign dialog');
    // This would typically show a modal dialog for creating a new campaign
}

// Utility Functions
function showSnackbar(message) {
    // Create a simple snackbar notification
    const snackbar = document.createElement('div');
    snackbar.className = 'mdc-snackbar';
    snackbar.innerHTML = `
        <div class="mdc-snackbar__surface">
            <div class="mdc-snackbar__label">${message}</div>
        </div>
    `;
    document.body.appendChild(snackbar);
    
    const mdcSnackbar = new mdc.snackbar.MDCSnackbar(snackbar);
    mdcSnackbar.open();
    
    // Remove after closing
    setTimeout(() => {
        document.body.removeChild(snackbar);
    }, 5000);
}

// Handle responsive behavior
window.addEventListener('resize', () => {
    // Handle responsive changes if needed
    if (window.innerWidth > 768) {
        const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
        if (drawer.open) {
            drawer.open = false;
        }
    }
});

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}