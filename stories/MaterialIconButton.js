export const createMaterialIconButton = ({
  icon = 'favorite',
  size = 'standard',
  variant = 'standard',
  selected = false,
  disabled = false,
  label = '',
  toggle = false,
  onIcon = null,
  offIcon = null,
  onClick = () => {},
  ...props
}) => {
  const button = document.createElement('button');
  let classes = ['mdc-icon-button'];
  
  if (disabled) {
    button.disabled = true;
  }
  
  if (toggle) {
    classes.push('mdc-icon-button--toggle');
  }
  
  button.className = classes.join(' ');
  button.setAttribute('aria-label', label || icon);
  
  // Size styling
  let buttonSize, iconSize;
  switch (size) {
    case 'small':
      buttonSize = '32px';
      iconSize = '18px';
      break;
    case 'large':
      buttonSize = '56px';
      iconSize = '28px';
      break;
    default: // standard
      buttonSize = '48px';
      iconSize = '24px';
  }
  
  button.style.width = buttonSize;
  button.style.height = buttonSize;
  button.style.padding = '0';
  button.style.border = 'none';
  button.style.borderRadius = '50%';
  button.style.cursor = disabled ? 'default' : 'pointer';
  button.style.display = 'inline-flex';
  button.style.alignItems = 'center';
  button.style.justifyContent = 'center';
  button.style.position = 'relative';
  button.style.transition = 'background-color 0.2s ease, color 0.2s ease';
  
  // Variant styling
  switch (variant) {
    case 'filled':
      button.style.backgroundColor = selected ? '#6200ea' : '#e7e0ec';
      button.style.color = selected ? '#ffffff' : '#1d1b20';
      break;
    case 'tonal':
      button.style.backgroundColor = selected ? '#6200ea' : '#e8def8';
      button.style.color = selected ? '#ffffff' : '#1d1b20';
      break;
    case 'outlined':
      button.style.backgroundColor = selected ? '#6200ea' : 'transparent';
      button.style.color = selected ? '#ffffff' : '#6200ea';
      button.style.border = `1px solid ${selected ? '#6200ea' : '#79747e'}`;
      break;
    default: // standard
      button.style.backgroundColor = selected ? 'rgba(98, 0, 234, 0.12)' : 'transparent';
      button.style.color = selected ? '#6200ea' : '#49454f';
  }
  
  if (disabled) {
    button.style.opacity = '0.38';
    button.style.cursor = 'default';
  }
  
  // Ripple effect
  const ripple = document.createElement('div');
  ripple.className = 'mdc-icon-button__ripple';
  ripple.style.position = 'absolute';
  ripple.style.top = '0';
  ripple.style.left = '0';
  ripple.style.width = '100%';
  ripple.style.height = '100%';
  ripple.style.borderRadius = '50%';
  ripple.style.overflow = 'hidden';
  button.appendChild(ripple);
  
  // Icon element
  const iconElement = document.createElement('i');
  iconElement.className = 'material-icons';
  iconElement.style.fontSize = iconSize;
  iconElement.style.lineHeight = '1';
  iconElement.style.position = 'relative';
  iconElement.style.zIndex = '1';
  
  // Handle toggle icons
  if (toggle && onIcon && offIcon) {
    iconElement.textContent = selected ? onIcon : offIcon;
  } else {
    iconElement.textContent = icon;
  }
  
  button.appendChild(iconElement);
  
  // Click handler
  let isSelected = selected;
  button.addEventListener('click', (e) => {
    if (disabled) return;
    
    if (toggle) {
      isSelected = !isSelected;
      
      // Update appearance
      switch (variant) {
        case 'filled':
          button.style.backgroundColor = isSelected ? '#6200ea' : '#e7e0ec';
          button.style.color = isSelected ? '#ffffff' : '#1d1b20';
          break;
        case 'tonal':
          button.style.backgroundColor = isSelected ? '#6200ea' : '#e8def8';
          button.style.color = isSelected ? '#ffffff' : '#1d1b20';
          break;
        case 'outlined':
          button.style.backgroundColor = isSelected ? '#6200ea' : 'transparent';
          button.style.color = isSelected ? '#ffffff' : '#6200ea';
          button.style.borderColor = isSelected ? '#6200ea' : '#79747e';
          break;
        default:
          button.style.backgroundColor = isSelected ? 'rgba(98, 0, 234, 0.12)' : 'transparent';
          button.style.color = isSelected ? '#6200ea' : '#49454f';
      }
      
      // Update icon
      if (onIcon && offIcon) {
        iconElement.textContent = isSelected ? onIcon : offIcon;
      }
    }
    
    onClick(isSelected, e);
  });
  
  return button;
};