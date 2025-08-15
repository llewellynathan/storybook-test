export const createMaterialTextField = ({
  label = 'Label',
  value = '',
  type = 'text',
  variant = 'outlined',
  required = false,
  disabled = false,
  helperText = '',
  errorText = '',
  leadingIcon = null,
  trailingIcon = null,
  placeholder = '',
  maxLength = null,
  rows = null,
  ...props
}) => {
  const isTextarea = type === 'textarea';
  const container = document.createElement('div');
  container.style.margin = '16px 0';
  container.style.width = '280px';
  
  // Create the text field wrapper
  const textField = document.createElement('label');
  let classes = ['mdc-text-field'];
  
  if (variant === 'outlined') {
    classes.push('mdc-text-field--outlined');
  } else {
    classes.push('mdc-text-field--filled');
  }
  
  if (disabled) {
    classes.push('mdc-text-field--disabled');
  }
  
  if (leadingIcon) {
    classes.push('mdc-text-field--with-leading-icon');
  }
  
  if (trailingIcon) {
    classes.push('mdc-text-field--with-trailing-icon');
  }
  
  if (isTextarea) {
    classes.push('mdc-text-field--textarea');
  }
  
  textField.className = classes.join(' ');
  
  // Add ripple for filled variant
  if (variant === 'filled') {
    const ripple = document.createElement('span');
    ripple.className = 'mdc-text-field__ripple';
    textField.appendChild(ripple);
  }
  
  // Add leading icon
  if (leadingIcon) {
    const leadingIconElement = document.createElement('i');
    leadingIconElement.className = 'material-icons mdc-text-field__icon mdc-text-field__icon--leading';
    leadingIconElement.setAttribute('tabindex', '0');
    leadingIconElement.setAttribute('role', 'button');
    leadingIconElement.textContent = leadingIcon;
    textField.appendChild(leadingIconElement);
  }
  
  // Create input element
  const input = document.createElement(isTextarea ? 'textarea' : 'input');
  input.className = 'mdc-text-field__input';
  input.value = value;
  input.disabled = disabled;
  input.required = required;
  input.placeholder = placeholder;
  
  if (!isTextarea) {
    input.type = type;
  }
  
  if (maxLength) {
    input.maxLength = maxLength;
  }
  
  if (isTextarea && rows) {
    input.rows = rows;
  }
  
  // Set aria-label for accessibility
  input.setAttribute('aria-labelledby', label.replace(/\s+/g, '-').toLowerCase());
  
  textField.appendChild(input);
  
  // Add trailing icon
  if (trailingIcon) {
    const trailingIconElement = document.createElement('i');
    trailingIconElement.className = 'material-icons mdc-text-field__icon mdc-text-field__icon--trailing';
    trailingIconElement.setAttribute('tabindex', '0');
    trailingIconElement.setAttribute('role', 'button');
    trailingIconElement.textContent = trailingIcon;
    textField.appendChild(trailingIconElement);
  }
  
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
    floatingLabel.id = label.replace(/\s+/g, '-').toLowerCase();
    floatingLabel.textContent = label + (required ? ' *' : '');
    notchedOutlineNotch.appendChild(floatingLabel);
    
    notchedOutline.appendChild(notchedOutlineNotch);
    
    const notchedOutlineTrailing = document.createElement('span');
    notchedOutlineTrailing.className = 'mdc-notched-outline__trailing';
    notchedOutline.appendChild(notchedOutlineTrailing);
    
    textField.appendChild(notchedOutline);
  } else {
    // Filled variant label
    const floatingLabel = document.createElement('span');
    floatingLabel.className = 'mdc-floating-label';
    floatingLabel.id = label.replace(/\s+/g, '-').toLowerCase();
    floatingLabel.textContent = label + (required ? ' *' : '');
    textField.appendChild(floatingLabel);
    
    const lineRipple = document.createElement('span');
    lineRipple.className = 'mdc-line-ripple';
    textField.appendChild(lineRipple);
  }
  
  container.appendChild(textField);
  
  // Add helper text
  if (helperText || errorText) {
    const helperLine = document.createElement('div');
    helperLine.className = 'mdc-text-field-helper-line';
    
    const helperTextElement = document.createElement('div');
    helperTextElement.className = errorText ? 
      'mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg' : 
      'mdc-text-field-helper-text';
    helperTextElement.textContent = errorText || helperText;
    
    helperLine.appendChild(helperTextElement);
    container.appendChild(helperLine);
  }
  
  return container;
};