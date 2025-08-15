export const createMaterialMenu = ({
  items = [
    { text: 'Menu item 1', value: 'item1' },
    { text: 'Menu item 2', value: 'item2' },
    { text: 'Menu item 3', value: 'item3' }
  ],
  anchor = null,
  variant = 'surface',
  fullWidth = false,
  disabled = false,
  onSelect = () => {},
  ...props
}) => {
  const menuContainer = document.createElement('div');
  menuContainer.className = 'mdc-menu-surface--anchor';
  menuContainer.style.position = 'relative';
  menuContainer.style.display = 'inline-block';

  // Create menu surface
  const menu = document.createElement('div');
  menu.className = 'mdc-menu mdc-menu-surface';
  menu.style.position = 'absolute';
  menu.style.zIndex = '8';
  menu.style.minWidth = '112px';
  menu.style.maxWidth = '280px';
  menu.style.borderRadius = '4px';
  menu.style.transformOrigin = 'top left';
  menu.style.backgroundColor = '#ffffff';
  menu.style.boxShadow = '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)';
  menu.style.display = 'none';
  menu.style.opacity = '0';
  menu.style.transform = 'scale(0.8)';
  menu.style.transition = 'opacity 0.03s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1)';

  if (fullWidth) {
    menu.style.width = '100%';
  }

  // Create menu list
  const list = document.createElement('ul');
  list.className = 'mdc-deprecated-list';
  list.style.margin = '0';
  list.style.padding = '8px 0';
  list.style.listStyle = 'none';
  list.setAttribute('role', 'menu');

  items.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'mdc-deprecated-list-item';
    listItem.setAttribute('role', 'menuitem');
    listItem.setAttribute('tabindex', index === 0 ? '0' : '-1');
    listItem.style.padding = '12px 16px';
    listItem.style.cursor = 'pointer';
    listItem.style.userSelect = 'none';
    listItem.style.fontSize = '14px';
    listItem.style.lineHeight = '20px';
    listItem.style.fontFamily = 'Roboto, sans-serif';
    listItem.style.color = 'rgba(0, 0, 0, 0.87)';
    listItem.style.transition = 'background-color 0.15s ease';

    // Hover effects
    listItem.addEventListener('mouseenter', () => {
      listItem.style.backgroundColor = 'rgba(0, 0, 0, 0.04)';
    });

    listItem.addEventListener('mouseleave', () => {
      listItem.style.backgroundColor = 'transparent';
    });

    // Ripple effect
    const ripple = document.createElement('div');
    ripple.className = 'mdc-deprecated-list-item__ripple';
    ripple.style.position = 'absolute';
    ripple.style.top = '0';
    ripple.style.left = '0';
    ripple.style.width = '100%';
    ripple.style.height = '100%';
    listItem.style.position = 'relative';
    listItem.appendChild(ripple);

    // Text content
    const textElement = document.createElement('span');
    textElement.className = 'mdc-deprecated-list-item__text';
    textElement.textContent = item.text;
    listItem.appendChild(textElement);

    // Click handler
    listItem.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      hideMenu();
      onSelect(item, index);
    });

    list.appendChild(listItem);
  });

  menu.appendChild(list);

  // Menu toggle functions
  const showMenu = () => {
    menu.style.display = 'block';
    requestAnimationFrame(() => {
      menu.style.opacity = '1';
      menu.style.transform = 'scale(1)';
    });
  };

  const hideMenu = () => {
    menu.style.opacity = '0';
    menu.style.transform = 'scale(0.8)';
    setTimeout(() => {
      menu.style.display = 'none';
    }, 120);
  };

  // Create anchor button if not provided
  let anchorButton;
  if (!anchor) {
    anchorButton = document.createElement('button');
    anchorButton.className = 'mdc-button mdc-button--raised';
    anchorButton.textContent = 'Open Menu';
    anchorButton.style.padding = '8px 16px';
    anchorButton.style.borderRadius = '4px';
    anchorButton.style.border = 'none';
    anchorButton.style.backgroundColor = '#6200ea';
    anchorButton.style.color = '#ffffff';
    anchorButton.style.cursor = 'pointer';
    anchorButton.style.fontSize = '14px';
    anchorButton.style.fontWeight = '500';
    anchorButton.style.textTransform = 'uppercase';
    anchorButton.style.fontFamily = 'Roboto, sans-serif';
    menuContainer.appendChild(anchorButton);
  } else {
    anchorButton = anchor;
    menuContainer.appendChild(anchor);
  }

  // Toggle menu on anchor click
  anchorButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (menu.style.display === 'none' || !menu.style.display) {
      showMenu();
    } else {
      hideMenu();
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuContainer.contains(e.target)) {
      hideMenu();
    }
  });

  menuContainer.appendChild(menu);

  // Expose methods for external control
  menuContainer.showMenu = showMenu;
  menuContainer.hideMenu = hideMenu;

  return menuContainer;
};