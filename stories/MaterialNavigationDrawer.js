export const createMaterialNavigationDrawer = ({
  variant = 'modal',
  title = 'Navigation',
  subtitle = '',
  navigationItems = [],
  open = false,
  dismissible = false,
  onItemClick = () => {},
  onClose = () => {},
  ...props
}) => {
  const container = document.createElement('div');
  container.style.position = 'relative';
  container.style.width = '100%';
  container.style.height = '400px';
  container.style.overflow = 'hidden';
  container.style.display = 'flex';
  
  // Create drawer
  const drawer = document.createElement('aside');
  let classes = ['mdc-drawer'];
  
  if (variant === 'modal') {
    classes.push('mdc-drawer--modal');
  } else if (variant === 'dismissible') {
    classes.push('mdc-drawer--dismissible');
  }
  
  if (open) {
    classes.push('mdc-drawer--open');
  }
  
  drawer.className = classes.join(' ');
  drawer.style.position = variant === 'modal' ? 'absolute' : 'relative';
  drawer.style.zIndex = variant === 'modal' ? '6' : 'auto';
  
  // Header
  const header = document.createElement('div');
  header.className = 'mdc-drawer__header';
  
  if (title) {
    const titleElement = document.createElement('h3');
    titleElement.className = 'mdc-drawer__title';
    titleElement.textContent = title;
    header.appendChild(titleElement);
  }
  
  if (subtitle) {
    const subtitleElement = document.createElement('h6');
    subtitleElement.className = 'mdc-drawer__subtitle';
    subtitleElement.textContent = subtitle;
    header.appendChild(subtitleElement);
  }
  
  drawer.appendChild(header);
  
  // Content
  const content = document.createElement('div');
  content.className = 'mdc-drawer__content';
  
  // Navigation list
  if (navigationItems.length > 0) {
    const nav = document.createElement('nav');
    nav.className = 'mdc-deprecated-list';
    
    navigationItems.forEach((item, index) => {
      const listItem = document.createElement('a');
      listItem.className = 'mdc-deprecated-list-item';
      listItem.href = item.href || '#';
      
      if (item.active) {
        listItem.classList.add('mdc-deprecated-list-item--activated');
        listItem.setAttribute('aria-current', 'page');
      }
      
      listItem.addEventListener('click', (e) => {
        e.preventDefault();
        onItemClick(item, index);
      });
      
      // Ripple
      const ripple = document.createElement('span');
      ripple.className = 'mdc-deprecated-list-item__ripple';
      listItem.appendChild(ripple);
      
      // Icon
      if (item.icon) {
        const icon = document.createElement('i');
        icon.className = 'material-icons mdc-deprecated-list-item__graphic';
        icon.setAttribute('aria-hidden', 'true');
        icon.textContent = item.icon;
        listItem.appendChild(icon);
      }
      
      // Text
      const text = document.createElement('span');
      text.className = 'mdc-deprecated-list-item__text';
      text.textContent = item.text;
      listItem.appendChild(text);
      
      nav.appendChild(listItem);
    });
    
    content.appendChild(nav);
  }
  
  drawer.appendChild(content);
  container.appendChild(drawer);
  
  // Scrim for modal variant
  if (variant === 'modal') {
    const scrim = document.createElement('div');
    scrim.className = 'mdc-drawer-scrim';
    scrim.style.position = 'absolute';
    scrim.style.top = '0';
    scrim.style.left = '0';
    scrim.style.width = '100%';
    scrim.style.height = '100%';
    scrim.style.backgroundColor = 'rgba(0, 0, 0, 0.32)';
    scrim.style.opacity = open ? '1' : '0';
    scrim.style.visibility = open ? 'visible' : 'hidden';
    scrim.style.transition = 'opacity 0.25s ease, visibility 0.25s ease';
    scrim.style.zIndex = '5';
    
    scrim.addEventListener('click', onClose);
    container.appendChild(scrim);
  }
  
  // Main content area
  const mainContent = document.createElement('div');
  mainContent.style.flex = '1';
  mainContent.style.padding = '24px';
  mainContent.style.backgroundColor = '#f5f5f5';
  mainContent.style.overflow = 'auto';
  
  const contentText = document.createElement('div');
  contentText.innerHTML = `
    <h2>Main Content</h2>
    <p>This is the main content area. The navigation drawer can be opened to show navigation options.</p>
    <button class="mdc-button mdc-button--raised" onclick="this.parentElement.parentElement.parentElement.querySelector('.mdc-drawer').classList.toggle('mdc-drawer--open'); this.parentElement.parentElement.parentElement.querySelector('.mdc-drawer-scrim').style.opacity = this.parentElement.parentElement.parentElement.querySelector('.mdc-drawer').classList.contains('mdc-drawer--open') ? '1' : '0'; this.parentElement.parentElement.parentElement.querySelector('.mdc-drawer-scrim').style.visibility = this.parentElement.parentElement.parentElement.querySelector('.mdc-drawer').classList.contains('mdc-drawer--open') ? 'visible' : 'hidden';">
      <div class="mdc-button__ripple"></div>
      <span class="mdc-button__label">Toggle Drawer</span>
    </button>
  `;
  
  mainContent.appendChild(contentText);
  container.appendChild(mainContent);
  
  return container;
};