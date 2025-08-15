export const createMaterialSwitch = ({
  checked = false,
  disabled = false,
  label = '',
  onChange = () => {},
  ...props
}) => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.alignItems = 'center';
  container.style.gap = '16px';
  container.style.padding = '8px 0';
  
  const switchContainer = document.createElement('div');
  switchContainer.className = 'mdc-switch';
  
  if (disabled) {
    switchContainer.classList.add('mdc-switch--disabled');
  }
  
  if (checked) {
    switchContainer.classList.add('mdc-switch--checked');
  }
  
  const track = document.createElement('div');
  track.className = 'mdc-switch__track';
  track.style.backgroundColor = checked ? '#6200ea' : '#000000';
  track.style.opacity = checked ? '0.54' : '0.38';
  track.style.borderRadius = '7px';
  track.style.height = '14px';
  track.style.width = '36px';
  track.style.position = 'relative';
  track.style.transition = 'background-color 0.2s ease, opacity 0.2s ease';
  
  const thumbUnderlay = document.createElement('div');
  thumbUnderlay.className = 'mdc-switch__thumb-underlay';
  thumbUnderlay.style.position = 'absolute';
  thumbUnderlay.style.top = '-10px';
  thumbUnderlay.style.left = checked ? '16px' : '-10px';
  thumbUnderlay.style.width = '48px';
  thumbUnderlay.style.height = '48px';
  thumbUnderlay.style.borderRadius = '50%';
  thumbUnderlay.style.transition = 'left 0.2s ease';
  thumbUnderlay.style.display = 'flex';
  thumbUnderlay.style.alignItems = 'center';
  thumbUnderlay.style.justifyContent = 'center';
  
  const thumb = document.createElement('div');
  thumb.className = 'mdc-switch__thumb';
  thumb.style.backgroundColor = checked ? '#6200ea' : '#fafafa';
  thumb.style.borderRadius = '50%';
  thumb.style.height = '20px';
  thumb.style.width = '20px';
  thumb.style.boxShadow = '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)';
  thumb.style.transition = 'background-color 0.2s ease';
  
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.className = 'mdc-switch__native-control';
  input.checked = checked;
  input.disabled = disabled;
  input.style.position = 'absolute';
  input.style.opacity = '0';
  input.style.width = '100%';
  input.style.height = '100%';
  input.style.margin = '0';
  input.style.cursor = disabled ? 'default' : 'pointer';
  
  input.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    
    track.style.backgroundColor = isChecked ? '#6200ea' : '#000000';
    track.style.opacity = isChecked ? '0.54' : '0.38';
    thumb.style.backgroundColor = isChecked ? '#6200ea' : '#fafafa';
    thumbUnderlay.style.left = isChecked ? '16px' : '-10px';
    
    if (isChecked) {
      switchContainer.classList.add('mdc-switch--checked');
    } else {
      switchContainer.classList.remove('mdc-switch--checked');
    }
    
    onChange(isChecked);
  });
  
  thumbUnderlay.appendChild(thumb);
  thumbUnderlay.appendChild(input);
  track.appendChild(thumbUnderlay);
  switchContainer.appendChild(track);
  
  container.appendChild(switchContainer);
  
  if (label) {
    const labelElement = document.createElement('label');
    labelElement.textContent = label;
    labelElement.style.fontSize = '14px';
    labelElement.style.fontWeight = '400';
    labelElement.style.color = disabled ? 'rgba(0, 0, 0, 0.38)' : 'rgba(0, 0, 0, 0.87)';
    labelElement.style.cursor = disabled ? 'default' : 'pointer';
    
    labelElement.addEventListener('click', () => {
      if (!disabled) {
        input.click();
      }
    });
    
    container.appendChild(labelElement);
  }
  
  return container;
};

export const createMaterialCheckbox = ({
  checked = false,
  indeterminate = false,
  disabled = false,
  label = '',
  onChange = () => {},
  ...props
}) => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.alignItems = 'center';
  container.style.gap = '16px';
  container.style.padding = '8px 0';
  
  const checkboxContainer = document.createElement('div');
  checkboxContainer.className = 'mdc-checkbox';
  checkboxContainer.style.position = 'relative';
  checkboxContainer.style.width = '18px';
  checkboxContainer.style.height = '18px';
  
  if (disabled) {
    checkboxContainer.classList.add('mdc-checkbox--disabled');
  }
  
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.className = 'mdc-checkbox__native-control';
  input.checked = checked;
  input.disabled = disabled;
  input.indeterminate = indeterminate;
  input.style.position = 'absolute';
  input.style.opacity = '0';
  input.style.width = '100%';
  input.style.height = '100%';
  input.style.margin = '0';
  input.style.cursor = disabled ? 'default' : 'pointer';
  
  const background = document.createElement('div');
  background.className = 'mdc-checkbox__background';
  background.style.position = 'absolute';
  background.style.top = '0';
  background.style.left = '0';
  background.style.width = '18px';
  background.style.height = '18px';
  background.style.border = `2px solid ${(checked || indeterminate) ? '#6200ea' : 'rgba(0, 0, 0, 0.54)'}`;
  background.style.borderRadius = '2px';
  background.style.backgroundColor = (checked || indeterminate) ? '#6200ea' : 'transparent';
  background.style.transition = 'background-color 0.2s ease, border-color 0.2s ease';
  
  const checkmark = document.createElement('svg');
  checkmark.className = 'mdc-checkbox__checkmark';
  checkmark.setAttribute('viewBox', '0 0 24 24');
  checkmark.style.position = 'absolute';
  checkmark.style.top = '0';
  checkmark.style.left = '0';
  checkmark.style.width = '100%';
  checkmark.style.height = '100%';
  checkmark.style.opacity = (checked && !indeterminate) ? '1' : '0';
  checkmark.style.transition = 'opacity 0.2s ease';
  
  const checkmarkPath = document.createElement('path');
  checkmarkPath.className = 'mdc-checkbox__checkmark-path';
  checkmarkPath.setAttribute('fill', 'none');
  checkmarkPath.setAttribute('stroke', 'white');
  checkmarkPath.setAttribute('stroke-width', '2');
  checkmarkPath.setAttribute('d', 'M4.1,12.7 9,17.6 20.3,6.3');
  checkmark.appendChild(checkmarkPath);
  
  const mixedmark = document.createElement('div');
  mixedmark.className = 'mdc-checkbox__mixedmark';
  mixedmark.style.position = 'absolute';
  mixedmark.style.top = '50%';
  mixedmark.style.left = '50%';
  mixedmark.style.transform = 'translate(-50%, -50%)';
  mixedmark.style.width = '10px';
  mixedmark.style.height = '2px';
  mixedmark.style.backgroundColor = 'white';
  mixedmark.style.opacity = indeterminate ? '1' : '0';
  mixedmark.style.transition = 'opacity 0.2s ease';
  
  input.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    const isIndeterminate = e.target.indeterminate;
    
    background.style.backgroundColor = (isChecked || isIndeterminate) ? '#6200ea' : 'transparent';
    background.style.borderColor = (isChecked || isIndeterminate) ? '#6200ea' : 'rgba(0, 0, 0, 0.54)';
    checkmark.style.opacity = (isChecked && !isIndeterminate) ? '1' : '0';
    mixedmark.style.opacity = isIndeterminate ? '1' : '0';
    
    onChange(isChecked, isIndeterminate);
  });
  
  background.appendChild(checkmark);
  background.appendChild(mixedmark);
  checkboxContainer.appendChild(input);
  checkboxContainer.appendChild(background);
  
  container.appendChild(checkboxContainer);
  
  if (label) {
    const labelElement = document.createElement('label');
    labelElement.textContent = label;
    labelElement.style.fontSize = '14px';
    labelElement.style.fontWeight = '400';
    labelElement.style.color = disabled ? 'rgba(0, 0, 0, 0.38)' : 'rgba(0, 0, 0, 0.87)';
    labelElement.style.cursor = disabled ? 'default' : 'pointer';
    
    labelElement.addEventListener('click', () => {
      if (!disabled) {
        input.click();
      }
    });
    
    container.appendChild(labelElement);
  }
  
  return container;
};