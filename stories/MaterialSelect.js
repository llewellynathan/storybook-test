export const createMaterialSelect = ({
  label = 'Select option',
  options = [],
  value = '',
  placeholder = 'Choose...',
  variant = 'outlined',
  disabled = false,
  required = false,
  helperText = '',
  errorText = '',
  onChange = () => {},
  id = `select-${Date.now()}`,
  ...props
}) => {
  const container = document.createElement('div');
  container.style.margin = '16px 0';
  container.style.width = '100%';
  
  // Create the select wrapper
  const selectField = document.createElement('div');
  let classes = ['mdc-select'];
  
  if (variant === 'outlined') {
    classes.push('mdc-select--outlined');
  } else {
    classes.push('mdc-select--filled');
  }
  
  if (disabled) {
    classes.push('mdc-select--disabled');
  }
  
  if (required) {
    classes.push('mdc-select--required');
  }
  
  selectField.className = classes.join(' ');
  
  // Create the anchor (main select element)
  const anchor = document.createElement('div');
  anchor.className = 'mdc-select__anchor';
  anchor.setAttribute('role', 'button');
  anchor.setAttribute('aria-haspopup', 'listbox');
  anchor.setAttribute('aria-expanded', 'false');
  anchor.setAttribute('aria-labelledby', `${id}-label`);
  
  if (disabled) {
    anchor.setAttribute('aria-disabled', 'true');
  }
  
  // Add ripple for filled variant
  if (variant === 'filled') {
    const ripple = document.createElement('span');
    ripple.className = 'mdc-select__ripple';
    anchor.appendChild(ripple);
  }
  
  // Selected text element
  const selectedText = document.createElement('span');
  selectedText.className = 'mdc-select__selected-text-container';
  selectedText.innerHTML = `<span class="mdc-select__selected-text">${value || ''}</span>`;
  anchor.appendChild(selectedText);
  
  // Dropdown icon
  const dropdownIcon = document.createElement('span');
  dropdownIcon.className = 'mdc-select__dropdown-icon';
  dropdownIcon.innerHTML = `
    <svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false">
      <polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon>
      <polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon>
    </svg>
  `;
  anchor.appendChild(dropdownIcon);
  
  // Create notched outline for outlined variant
  if (variant === 'outlined') {
    const notchedOutline = document.createElement('span');
    notchedOutline.className = 'mdc-notched-outline';
    
    const notchedOutlineLeading = document.createElement('span');
    notchedOutlineLeading.className = 'mdc-notched-outline__leading';
    notchedOutline.appendChild(notchedOutlineLeading);
    
    const notchedOutlineNotch = document.createElement('span');
    notchedOutlineNotch.className = 'mdc-notched-outline__notch';
    
    const floatingLabel = document.createElement('span');
    floatingLabel.className = 'mdc-floating-label';
    floatingLabel.id = `${id}-label`;
    floatingLabel.textContent = label + (required ? ' *' : '');
    notchedOutlineNotch.appendChild(floatingLabel);
    
    notchedOutline.appendChild(notchedOutlineNotch);
    
    const notchedOutlineTrailing = document.createElement('span');
    notchedOutlineTrailing.className = 'mdc-notched-outline__trailing';
    notchedOutline.appendChild(notchedOutlineTrailing);
    
    anchor.appendChild(notchedOutline);
  } else {
    // Filled variant label
    const floatingLabel = document.createElement('span');
    floatingLabel.className = 'mdc-floating-label';
    floatingLabel.id = `${id}-label`;
    floatingLabel.textContent = label + (required ? ' *' : '');
    anchor.appendChild(floatingLabel);
    
    const lineRipple = document.createElement('span');
    lineRipple.className = 'mdc-line-ripple';
    anchor.appendChild(lineRipple);
  }
  
  selectField.appendChild(anchor);
  
  // Create menu
  const menu = document.createElement('div');
  menu.className = 'mdc-select__menu mdc-menu mdc-menu-surface';
  menu.setAttribute('role', 'listbox');
  
  const menuList = document.createElement('ul');
  menuList.className = 'mdc-deprecated-list';
  
  // Add options
  options.forEach((option, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'mdc-deprecated-list-item';
    listItem.setAttribute('role', 'option');
    listItem.setAttribute('data-value', option.value);
    listItem.setAttribute('aria-selected', option.value === value ? 'true' : 'false');
    
    const ripple = document.createElement('span');
    ripple.className = 'mdc-deprecated-list-item__ripple';
    listItem.appendChild(ripple);
    
    const text = document.createElement('span');
    text.className = 'mdc-deprecated-list-item__text';
    text.textContent = option.label;
    listItem.appendChild(text);
    
    menuList.appendChild(listItem);
  });
  
  menu.appendChild(menuList);
  selectField.appendChild(menu);
  
  container.appendChild(selectField);
  
  // Add helper text
  if (helperText || errorText) {
    const helperLine = document.createElement('div');
    helperLine.className = 'mdc-select-helper-line';
    
    const helperTextElement = document.createElement('div');
    helperTextElement.className = errorText ? 
      'mdc-select-helper-text mdc-select-helper-text--validation-msg' : 
      'mdc-select-helper-text';
    helperTextElement.textContent = errorText || helperText;
    
    helperLine.appendChild(helperTextElement);
    container.appendChild(helperLine);
  }
  
  // Handle interactions (simplified for now)
  let isOpen = false;
  
  const toggleMenu = () => {
    if (disabled) return;
    
    isOpen = !isOpen;
    anchor.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    menu.style.display = isOpen ? 'block' : 'none';
    
    if (isOpen) {
      // Position menu
      const rect = anchor.getBoundingClientRect();
      menu.style.position = 'absolute';
      menu.style.top = (rect.bottom + 4) + 'px';
      menu.style.left = rect.left + 'px';
      menu.style.minWidth = rect.width + 'px';
      menu.style.zIndex = '1000';
      menu.style.background = 'white';
      menu.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
      menu.style.borderRadius = '4px';
      menu.style.maxHeight = '200px';
      menu.style.overflowY = 'auto';
    }
  };
  
  anchor.addEventListener('click', toggleMenu);
  anchor.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggleMenu();
    }
  });
  
  // Handle option selection
  menuList.addEventListener('click', (e) => {
    const listItem = e.target.closest('.mdc-deprecated-list-item');
    if (listItem) {
      const selectedValue = listItem.getAttribute('data-value');
      const selectedLabel = listItem.querySelector('.mdc-deprecated-list-item__text').textContent;
      
      // Update selected text
      selectedText.querySelector('.mdc-select__selected-text').textContent = selectedLabel;
      
      // Update aria-selected
      menuList.querySelectorAll('.mdc-deprecated-list-item').forEach(item => {
        item.setAttribute('aria-selected', 'false');
      });
      listItem.setAttribute('aria-selected', 'true');
      
      // Close menu
      isOpen = false;
      anchor.setAttribute('aria-expanded', 'false');
      menu.style.display = 'none';
      
      // Trigger change event
      onChange(selectedValue, selectedLabel);
    }
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!selectField.contains(e.target) && isOpen) {
      isOpen = false;
      anchor.setAttribute('aria-expanded', 'false');
      menu.style.display = 'none';
    }
  });
  
  // Initially hide menu
  menu.style.display = 'none';
  
  // Add basic styles for the custom select
  if (!document.querySelector('#material-select-styles')) {
    const style = document.createElement('style');
    style.id = 'material-select-styles';
    style.textContent = `
      .mdc-select {
        position: relative;
      }
      
      .mdc-select__anchor {
        display: flex;
        align-items: center;
        min-height: 56px;
        cursor: pointer;
        position: relative;
        border-radius: 4px;
        outline: none;
      }
      
      .mdc-select--outlined .mdc-select__anchor {
        border: 1px solid rgba(0, 0, 0, 0.23);
        padding: 0 12px;
      }
      
      .mdc-select--filled .mdc-select__anchor {
        background: rgba(0, 0, 0, 0.04);
        border-bottom: 1px solid rgba(0, 0, 0, 0.42);
        padding: 0 12px;
      }
      
      .mdc-select__selected-text-container {
        flex: 1;
        font-size: 16px;
        line-height: 1.5;
        color: rgba(0, 0, 0, 0.87);
      }
      
      .mdc-select__dropdown-icon {
        width: 24px;
        height: 24px;
        margin-left: 8px;
      }
      
      .mdc-select__dropdown-icon-graphic {
        width: 100%;
        height: 100%;
        fill: rgba(0, 0, 0, 0.54);
      }
      
      .mdc-floating-label {
        position: absolute;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);
        top: -8px;
        left: 12px;
        background: white;
        padding: 0 4px;
      }
      
      .mdc-select--filled .mdc-floating-label {
        top: 8px;
        font-size: 16px;
        background: none;
      }
      
      .mdc-deprecated-list {
        list-style: none;
        margin: 0;
        padding: 8px 0;
      }
      
      .mdc-deprecated-list-item {
        display: flex;
        align-items: center;
        min-height: 48px;
        padding: 0 16px;
        cursor: pointer;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.87);
        position: relative;
      }
      
      .mdc-deprecated-list-item:hover {
        background: rgba(0, 0, 0, 0.04);
      }
      
      .mdc-deprecated-list-item[aria-selected="true"] {
        background: rgba(25, 118, 210, 0.12);
        color: #1976d2;
      }
    `;
    document.head.appendChild(style);
  }
  
  return container;
};