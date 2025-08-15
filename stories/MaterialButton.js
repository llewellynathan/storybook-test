export const createMaterialButton = ({ 
  variant = 'contained',
  label = 'Button',
  icon = null,
  disabled = false,
  size = 'medium',
  onClick = () => {},
  ...props
}) => {
  const button = document.createElement('button');
  
  // Base classes
  let classes = ['mdc-button'];
  
  // Variant classes
  switch (variant) {
    case 'raised':
      classes.push('mdc-button--raised');
      break;
    case 'outlined':
      classes.push('mdc-button--outlined');
      break;
    case 'text':
      // Default, no additional class
      break;
    default:
      classes.push('mdc-button--raised');
  }
  
  if (disabled) {
    button.disabled = true;
  }
  
  button.className = classes.join(' ');
  
  // Create ripple element
  const ripple = document.createElement('div');
  ripple.className = 'mdc-button__ripple';
  button.appendChild(ripple);
  
  // Add icon if provided
  if (icon) {
    const iconElement = document.createElement('i');
    iconElement.className = 'material-icons mdc-button__icon';
    iconElement.setAttribute('aria-hidden', 'true');
    iconElement.textContent = icon;
    button.appendChild(iconElement);
  }
  
  // Add label
  const labelElement = document.createElement('span');
  labelElement.className = 'mdc-button__label';
  labelElement.textContent = label;
  button.appendChild(labelElement);
  
  // Add event listener
  button.addEventListener('click', onClick);
  
  return button;
};