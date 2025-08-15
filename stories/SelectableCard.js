export const createSelectableCard = ({
  icon = 'check_circle',
  label = 'Option Label',
  selected = false,
  disabled = false,
  onClick = () => {},
  id = `selectable-${Date.now()}`,
  ...props
}) => {
  const card = document.createElement('div');
  card.className = 'selectable-card';
  card.setAttribute('role', 'checkbox');
  card.setAttribute('aria-checked', selected);
  card.setAttribute('aria-disabled', disabled);
  card.setAttribute('tabindex', disabled ? '-1' : '0');
  card.id = id;
  
  // Apply styles
  card.style.cssText = `
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-radius: 8px;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    transition: all 0.2s ease;
    user-select: none;
    background: white;
    border: 2px solid ${selected ? '#0994F2' : 'transparent'};
    box-shadow: ${selected ? 'none' : 'inset 0 0 0 1px #374148'};
    opacity: ${disabled ? '0.5' : '1'};
    position: relative;
    overflow: hidden;
  `;
  
  // Add ripple container
  const rippleContainer = document.createElement('span');
  rippleContainer.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    border-radius: 8px;
    pointer-events: none;
  `;
  card.appendChild(rippleContainer);
  
  // Icon element
  const iconElement = document.createElement('i');
  iconElement.className = 'material-icons';
  iconElement.textContent = icon;
  iconElement.style.cssText = `
    font-size: 24px;
    color: #596873;
    z-index: 1;
    position: relative;
  `;
  
  // Label element
  const labelElement = document.createElement('span');
  labelElement.textContent = label;
  labelElement.style.cssText = `
    font-family: 'Roboto', 'NexaText', sans-serif;
    font-weight: 800;
    font-size: 16px;
    line-height: 1.5em;
    letter-spacing: 0.15px;
    color: #010C14;
    z-index: 1;
    position: relative;
    flex: 1;
  `;
  
  // Add elements
  card.appendChild(iconElement);
  card.appendChild(labelElement);
  
  // Hover effect
  if (!disabled) {
    card.addEventListener('mouseenter', () => {
      if (!selected) {
        card.style.boxShadow = 'inset 0 0 0 1px #596873';
        card.style.background = 'rgba(0, 0, 0, 0.02)';
      } else {
        card.style.background = 'rgba(9, 148, 242, 0.04)';
      }
    });
    
    card.addEventListener('mouseleave', () => {
      if (!selected) {
        card.style.boxShadow = 'inset 0 0 0 1px #374148';
      }
      card.style.background = 'white';
    });
  }
  
  // Click handler with ripple effect
  const handleClick = (e) => {
    if (disabled) return;
    
    // Create ripple effect
    const ripple = document.createElement('span');
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: rgba(9, 148, 242, 0.3);
      left: ${x}px;
      top: ${y}px;
      transform: scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
    `;
    
    rippleContainer.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
      ripple.remove();
    }, 600);
    
    // Toggle selection
    const newSelected = !selected;
    card.setAttribute('aria-checked', newSelected);
    card.style.border = `2px solid ${newSelected ? '#0994F2' : 'transparent'}`;
    card.style.boxShadow = newSelected ? 'none' : 'inset 0 0 0 1px #374148';
    
    // Call onClick with new state
    onClick(newSelected, id);
  };
  
  card.addEventListener('click', handleClick);
  
  // Keyboard support
  card.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleClick(e);
    }
  });
  
  // Add CSS animation for ripple
  if (!document.querySelector('#selectable-card-styles')) {
    const style = document.createElement('style');
    style.id = 'selectable-card-styles';
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
      
      .selectable-card:focus {
        outline: 2px solid #0994F2;
        outline-offset: 2px;
      }
      
      .selectable-card:focus:not(:focus-visible) {
        outline: none;
      }
    `;
    document.head.appendChild(style);
  }
  
  return card;
};

// Helper function to create a group of selectable cards
export const createSelectableCardGroup = ({
  options = [],
  multiSelect = true,
  onChange = () => {},
  className = '',
  columns = 2
}) => {
  const container = document.createElement('div');
  container.className = `selectable-card-group ${className}`;
  container.style.cssText = `
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    gap: 16px;
    width: 100%;
  `;
  
  // Track selected items
  const selectedItems = new Set();
  
  options.forEach(option => {
    const card = createSelectableCard({
      ...option,
      onClick: (isSelected, id) => {
        if (multiSelect) {
          if (isSelected) {
            selectedItems.add(id);
          } else {
            selectedItems.delete(id);
          }
        } else {
          // Single select - deselect all others
          container.querySelectorAll('.selectable-card').forEach(c => {
            if (c.id !== id) {
              c.setAttribute('aria-checked', 'false');
              c.style.border = '1px solid #374148';
            }
          });
          selectedItems.clear();
          if (isSelected) {
            selectedItems.add(id);
          }
        }
        
        onChange(Array.from(selectedItems), id, isSelected);
      }
    });
    
    if (option.selected) {
      selectedItems.add(option.id || card.id);
    }
    
    container.appendChild(card);
  });
  
  return container;
};