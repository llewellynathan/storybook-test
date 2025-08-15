export const createMaterialSnackbar = ({
  message = 'This is a snackbar message',
  actionText = null,
  leading = false,
  stacked = false,
  dismissible = true,
  timeout = 4000,
  onAction = () => {},
  onDismiss = () => {},
  ...props
}) => {
  const container = document.createElement('div');
  container.style.position = 'relative';
  container.style.width = '100%';
  container.style.height = '200px';
  container.style.display = 'flex';
  container.style.alignItems = 'flex-end';
  container.style.justifyContent = 'center';
  container.style.backgroundColor = '#f5f5f5';
  container.style.padding = '20px';
  
  const snackbar = document.createElement('div');
  let classes = ['mdc-snackbar'];
  
  if (leading) {
    classes.push('mdc-snackbar--leading');
  }
  
  if (stacked) {
    classes.push('mdc-snackbar--stacked');
  }
  
  snackbar.className = classes.join(' ');
  snackbar.style.position = 'relative';
  snackbar.style.transform = 'none';
  snackbar.style.opacity = '1';
  snackbar.style.visibility = 'visible';
  
  const surface = document.createElement('div');
  surface.className = 'mdc-snackbar__surface';
  surface.style.backgroundColor = '#323232';
  surface.style.color = '#ffffff';
  surface.style.borderRadius = '4px';
  surface.style.boxShadow = '0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12)';
  surface.style.minWidth = '344px';
  surface.style.maxWidth = '672px';
  surface.style.display = 'flex';
  surface.style.alignItems = 'center';
  surface.style.padding = '0 16px';
  surface.style.minHeight = '48px';
  
  const label = document.createElement('div');
  label.className = 'mdc-snackbar__label';
  label.setAttribute('role', 'status');
  label.setAttribute('aria-live', 'polite');
  label.textContent = message;
  label.style.flex = '1';
  label.style.padding = '14px 0';
  label.style.fontSize = '14px';
  label.style.fontWeight = '400';
  label.style.lineHeight = '20px';
  
  surface.appendChild(label);
  
  const actions = document.createElement('div');
  actions.className = 'mdc-snackbar__actions';
  actions.style.display = 'flex';
  actions.style.alignItems = 'center';
  actions.style.marginLeft = '8px';
  
  // Action button
  if (actionText) {
    const actionButton = document.createElement('button');
    actionButton.className = 'mdc-button mdc-snackbar__action';
    actionButton.type = 'button';
    actionButton.style.color = '#bb86fc';
    actionButton.style.fontSize = '14px';
    actionButton.style.fontWeight = '500';
    actionButton.style.textTransform = 'uppercase';
    actionButton.style.padding = '8px';
    actionButton.style.margin = '6px 0';
    actionButton.style.background = 'none';
    actionButton.style.border = 'none';
    actionButton.style.cursor = 'pointer';
    actionButton.style.borderRadius = '4px';
    
    const ripple = document.createElement('div');
    ripple.className = 'mdc-button__ripple';
    actionButton.appendChild(ripple);
    
    const labelSpan = document.createElement('span');
    labelSpan.className = 'mdc-button__label';
    labelSpan.textContent = actionText;
    actionButton.appendChild(labelSpan);
    
    actionButton.addEventListener('click', onAction);
    
    actions.appendChild(actionButton);
  }
  
  // Dismiss button
  if (dismissible) {
    const dismissButton = document.createElement('button');
    dismissButton.className = 'mdc-icon-button mdc-snackbar__dismiss';
    dismissButton.type = 'button';
    dismissButton.setAttribute('aria-label', 'Dismiss');
    dismissButton.style.color = '#ffffff';
    dismissButton.style.padding = '12px';
    dismissButton.style.margin = '2px 0';
    dismissButton.style.background = 'none';
    dismissButton.style.border = 'none';
    dismissButton.style.cursor = 'pointer';
    dismissButton.style.borderRadius = '50%';
    dismissButton.style.width = '48px';
    dismissButton.style.height = '48px';
    dismissButton.style.display = 'flex';
    dismissButton.style.alignItems = 'center';
    dismissButton.style.justifyContent = 'center';
    
    const dismissIcon = document.createElement('i');
    dismissIcon.className = 'material-icons';
    dismissIcon.textContent = 'close';
    dismissIcon.style.fontSize = '18px';
    dismissButton.appendChild(dismissIcon);
    
    dismissButton.addEventListener('click', () => {
      snackbar.style.opacity = '0';
      snackbar.style.transform = 'translateY(100%)';
      setTimeout(() => {
        onDismiss();
        snackbar.remove();
      }, 300);
    });
    
    actions.appendChild(dismissButton);
  }
  
  surface.appendChild(actions);
  snackbar.appendChild(surface);
  container.appendChild(snackbar);
  
  // Auto-dismiss after timeout
  if (timeout > 0) {
    setTimeout(() => {
      if (snackbar.parentNode) {
        snackbar.style.opacity = '0';
        snackbar.style.transform = 'translateY(100%)';
        setTimeout(() => {
          if (snackbar.parentNode) {
            onDismiss();
            snackbar.remove();
          }
        }, 300);
      }
    }, timeout);
  }
  
  // Add entrance animation
  snackbar.style.transform = 'translateY(100%)';
  snackbar.style.transition = 'transform 0.25s ease, opacity 0.25s ease';
  setTimeout(() => {
    snackbar.style.transform = 'translateY(0)';
  }, 10);
  
  return container;
};

export const showSnackbar = (options) => {
  const existingSnackbars = document.querySelectorAll('.mdc-snackbar');
  existingSnackbars.forEach(snackbar => snackbar.remove());
  
  const snackbarContainer = createMaterialSnackbar(options);
  const snackbar = snackbarContainer.querySelector('.mdc-snackbar');
  
  // Position at bottom of viewport
  snackbar.style.position = 'fixed';
  snackbar.style.bottom = '16px';
  snackbar.style.left = '50%';
  snackbar.style.transform = 'translateX(-50%) translateY(100%)';
  snackbar.style.zIndex = '8';
  
  document.body.appendChild(snackbar);
  
  // Trigger entrance animation
  setTimeout(() => {
    snackbar.style.transform = 'translateX(-50%) translateY(0)';
  }, 10);
  
  return snackbar;
};