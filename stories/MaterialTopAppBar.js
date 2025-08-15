export const createMaterialTopAppBar = ({
  title = 'Page Title',
  variant = 'standard',
  navigationIcon = 'menu',
  actionItems = [],
  dense = false,
  prominent = false,
  fixed = false,
  color = 'primary',
  onNavigationClick = () => {},
  ...props
}) => {
  const container = document.createElement('div');
  container.style.position = 'relative';
  container.style.width = '100%';
  container.style.height = fixed ? '100vh' : 'auto';
  
  const topAppBar = document.createElement('header');
  let classes = ['mdc-top-app-bar'];
  
  // Add variant classes
  switch (variant) {
    case 'short':
      classes.push('mdc-top-app-bar--short');
      break;
    case 'short-collapsed':
      classes.push('mdc-top-app-bar--short', 'mdc-top-app-bar--short-collapsed');
      break;
    case 'dense':
      classes.push('mdc-top-app-bar--dense');
      break;
    case 'prominent':
      classes.push('mdc-top-app-bar--prominent');
      break;
    default:
      // Standard variant
  }
  
  if (fixed) {
    classes.push('mdc-top-app-bar--fixed');
  }
  
  topAppBar.className = classes.join(' ');
  
  // Set color theme
  if (color === 'primary') {
    topAppBar.style.backgroundColor = '#6200ea';
    topAppBar.style.color = '#ffffff';
  } else if (color === 'secondary') {
    topAppBar.style.backgroundColor = '#03dac6';
    topAppBar.style.color = '#000000';
  } else if (color === 'surface') {
    topAppBar.style.backgroundColor = '#ffffff';
    topAppBar.style.color = '#000000';
    topAppBar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
  }
  
  const row = document.createElement('div');
  row.className = 'mdc-top-app-bar__row';
  
  // Start section
  const startSection = document.createElement('section');
  startSection.className = 'mdc-top-app-bar__section mdc-top-app-bar__section--align-start';
  
  // Navigation icon
  if (navigationIcon) {
    const navButton = document.createElement('button');
    navButton.className = 'material-icons mdc-top-app-bar__navigation-icon mdc-icon-button';
    navButton.setAttribute('aria-label', 'Open navigation menu');
    navButton.textContent = navigationIcon;
    navButton.addEventListener('click', onNavigationClick);
    startSection.appendChild(navButton);
  }
  
  // Title
  const titleElement = document.createElement('span');
  titleElement.className = 'mdc-top-app-bar__title';
  titleElement.textContent = title;
  startSection.appendChild(titleElement);
  
  row.appendChild(startSection);
  
  // End section (action items)
  if (actionItems.length > 0) {
    const endSection = document.createElement('section');
    endSection.className = 'mdc-top-app-bar__section mdc-top-app-bar__section--align-end';
    endSection.setAttribute('role', 'toolbar');
    
    actionItems.forEach(item => {
      const actionButton = document.createElement('button');
      actionButton.className = 'material-icons mdc-top-app-bar__action-item mdc-icon-button';
      actionButton.setAttribute('aria-label', item.label || item.icon);
      actionButton.textContent = item.icon;
      
      if (item.onClick) {
        actionButton.addEventListener('click', item.onClick);
      }
      
      endSection.appendChild(actionButton);
    });
    
    row.appendChild(endSection);
  }
  
  topAppBar.appendChild(row);
  container.appendChild(topAppBar);
  
  // Add main content area if fixed
  if (fixed) {
    const main = document.createElement('main');
    main.className = 'mdc-top-app-bar--fixed-adjust';
    main.style.padding = '24px';
    main.style.height = 'calc(100vh - 64px)';
    main.style.overflow = 'auto';
    
    const content = document.createElement('div');
    content.innerHTML = `
      <h2>Page Content</h2>
      <p>This is the main content area. The top app bar is fixed and will remain visible when scrolling.</p>
      <div style="height: 200vh; background: linear-gradient(to bottom, #f5f5f5, #e0e0e0); display: flex; align-items: center; justify-content: center;">
        <p>Scroll to test fixed behavior</p>
      </div>
    `;
    
    main.appendChild(content);
    container.appendChild(main);
  } else {
    // Add sample content for non-fixed variants
    const content = document.createElement('div');
    content.style.padding = '24px';
    content.innerHTML = `
      <h2>Page Content</h2>
      <p>This content appears below the top app bar.</p>
    `;
    container.appendChild(content);
  }
  
  return container;
};