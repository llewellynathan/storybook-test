export const createMaterialFAB = ({
  icon = 'add',
  label = null,
  extended = false,
  mini = false,
  color = 'secondary',
  onClick = () => {},
  ...props
}) => {
  const fab = document.createElement('button');
  
  // Base classes
  let classes = ['mdc-fab'];
  
  // Variant classes
  if (extended) {
    classes.push('mdc-fab--extended');
  }
  if (mini) {
    classes.push('mdc-fab--mini');
  }
  
  fab.className = classes.join(' ');
  fab.setAttribute('aria-label', label || `${icon} button`);
  
  // Set color theme
  if (color === 'primary') {
    fab.style.backgroundColor = '#6200ea';
    fab.style.color = '#ffffff';
  } else if (color === 'secondary') {
    fab.style.backgroundColor = '#03dac6';
    fab.style.color = '#000000';
  }
  
  // Create ripple element
  const ripple = document.createElement('div');
  ripple.className = 'mdc-fab__ripple';
  fab.appendChild(ripple);
  
  // Add icon
  const iconElement = document.createElement('span');
  iconElement.className = 'material-icons mdc-fab__icon';
  iconElement.textContent = icon;
  fab.appendChild(iconElement);
  
  // Add label for extended FAB
  if (extended && label) {
    const labelElement = document.createElement('span');
    labelElement.className = 'mdc-fab__label';
    labelElement.textContent = label;
    fab.appendChild(labelElement);
  }
  
  // Add event listener
  fab.addEventListener('click', onClick);
  
  return fab;
};