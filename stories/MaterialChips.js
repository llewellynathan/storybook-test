export const createMaterialChip = ({
  label = 'Chip',
  variant = 'filled',
  leadingIcon = null,
  trailingIcon = null,
  removable = false,
  selected = false,
  disabled = false,
  clickable = true,
  onClick = () => {},
  onRemove = () => {},
  ...props
}) => {
  const chip = document.createElement('div');
  let classes = ['mdc-chip'];
  
  if (selected) {
    classes.push('mdc-chip--selected');
  }
  
  if (disabled) {
    classes.push('mdc-chip--disabled');
  }
  
  chip.className = classes.join(' ');
  chip.setAttribute('role', clickable ? 'button' : 'option');
  chip.setAttribute('tabindex', disabled ? '-1' : '0');
  
  // Chip ripple
  const ripple = document.createElement('div');
  ripple.className = 'mdc-chip__ripple';
  chip.appendChild(ripple);
  
  // Leading icon or checkmark for selected state
  if (leadingIcon || selected) {
    const leadingIconElement = document.createElement('i');
    leadingIconElement.className = selected ? 
      'material-icons mdc-chip__checkmark' : 
      'material-icons mdc-chip__icon mdc-chip__icon--leading';
    leadingIconElement.textContent = selected ? 'check' : leadingIcon;
    chip.appendChild(leadingIconElement);
  }
  
  // Primary action (label)
  const primaryAction = document.createElement('span');
  primaryAction.className = 'mdc-chip__primary-action';
  primaryAction.setAttribute('role', 'gridcell');
  
  const text = document.createElement('span');
  text.className = 'mdc-chip__text';
  text.textContent = label;
  primaryAction.appendChild(text);
  
  if (clickable && !disabled) {
    primaryAction.addEventListener('click', onClick);
  }
  
  chip.appendChild(primaryAction);
  
  // Trailing icon or remove button
  if (trailingIcon && !removable) {
    const trailingIconElement = document.createElement('i');
    trailingIconElement.className = 'material-icons mdc-chip__icon mdc-chip__icon--trailing';
    trailingIconElement.textContent = trailingIcon;
    chip.appendChild(trailingIconElement);
  }
  
  if (removable) {
    const removeButton = document.createElement('button');
    removeButton.className = 'mdc-chip__trailing-action';
    removeButton.setAttribute('tabindex', '-1');
    removeButton.setAttribute('aria-label', `Remove ${label}`);
    
    const removeIcon = document.createElement('i');
    removeIcon.className = 'material-icons mdc-chip__trailing-action__icon';
    removeIcon.textContent = 'cancel';
    removeButton.appendChild(removeIcon);
    
    removeButton.addEventListener('click', (e) => {
      e.stopPropagation();
      onRemove();
    });
    
    chip.appendChild(removeButton);
  }
  
  // Set color theme based on variant
  if (variant === 'outlined') {
    chip.style.border = '1px solid #e0e0e0';
    chip.style.backgroundColor = 'transparent';
  } else {
    chip.style.backgroundColor = selected ? '#6200ea' : '#e0e0e0';
    chip.style.color = selected ? '#ffffff' : '#000000';
  }
  
  return chip;
};

export const createMaterialChipSet = ({
  chips = [],
  variant = 'choice',
  multiSelect = false,
  onSelectionChange = () => {},
  ...props
}) => {
  const chipSet = document.createElement('div');
  chipSet.className = 'mdc-chip-set';
  chipSet.setAttribute('role', variant === 'filter' ? 'grid' : 'listbox');
  
  if (variant === 'filter') {
    chipSet.classList.add('mdc-chip-set--filter');
  } else if (variant === 'choice') {
    chipSet.classList.add('mdc-chip-set--choice');
  }
  
  let selectedChips = new Set();
  
  chips.forEach((chipConfig, index) => {
    const chip = createMaterialChip({
      ...chipConfig,
      onClick: () => {
        if (variant === 'choice' && !multiSelect) {
          // Single selection for choice chips
          chipSet.querySelectorAll('.mdc-chip').forEach(c => {
            c.classList.remove('mdc-chip--selected');
            c.style.backgroundColor = '#e0e0e0';
            c.style.color = '#000000';
          });
          selectedChips.clear();
        }
        
        // Toggle selection
        const isSelected = chip.classList.contains('mdc-chip--selected');
        if (isSelected) {
          chip.classList.remove('mdc-chip--selected');
          chip.style.backgroundColor = '#e0e0e0';
          chip.style.color = '#000000';
          selectedChips.delete(index);
        } else {
          chip.classList.add('mdc-chip--selected');
          chip.style.backgroundColor = '#6200ea';
          chip.style.color = '#ffffff';
          selectedChips.add(index);
        }
        
        onSelectionChange(Array.from(selectedChips));
        if (chipConfig.onClick) chipConfig.onClick();
      },
      onRemove: () => {
        chip.remove();
        selectedChips.delete(index);
        onSelectionChange(Array.from(selectedChips));
        if (chipConfig.onRemove) chipConfig.onRemove();
      }
    });
    
    if (chipConfig.selected) {
      selectedChips.add(index);
    }
    
    chipSet.appendChild(chip);
  });
  
  return chipSet;
};