export const createMaterialDialog = ({
  title = 'Dialog Title',
  content = 'Dialog content goes here.',
  primaryAction = 'OK',
  secondaryAction = 'Cancel',
  dismissible = true,
  scrollable = false,
  fullscreen = false,
  open = false,
  onPrimaryAction = () => {},
  onSecondaryAction = () => {},
  onClose = () => {},
  ...props
}) => {
  const container = document.createElement('div');
  container.style.position = 'relative';
  container.style.width = '100%';
  container.style.height = '400px';
  container.style.backgroundColor = '#f5f5f5';
  container.style.display = 'flex';
  container.style.alignItems = 'center';
  container.style.justifyContent = 'center';
  
  // Scrim
  const scrim = document.createElement('div');
  scrim.className = 'mdc-dialog__scrim';
  scrim.style.position = 'absolute';
  scrim.style.top = '0';
  scrim.style.left = '0';
  scrim.style.width = '100%';
  scrim.style.height = '100%';
  scrim.style.backgroundColor = 'rgba(0, 0, 0, 0.32)';
  scrim.style.opacity = open ? '1' : '0';
  scrim.style.visibility = open ? 'visible' : 'hidden';
  scrim.style.transition = 'opacity 0.25s ease, visibility 0.25s ease';
  
  if (dismissible) {
    scrim.addEventListener('click', onClose);
  }
  
  // Dialog
  const dialog = document.createElement('div');
  let classes = ['mdc-dialog'];
  
  if (open) {
    classes.push('mdc-dialog--open');
  }
  
  if (scrollable) {
    classes.push('mdc-dialog--scrollable');
  }
  
  if (fullscreen) {
    classes.push('mdc-dialog--fullscreen');
  }
  
  dialog.className = classes.join(' ');
  dialog.style.position = 'absolute';
  dialog.style.zIndex = '7';
  
  // Container
  const dialogContainer = document.createElement('div');
  dialogContainer.className = 'mdc-dialog__container';
  dialogContainer.style.display = 'flex';
  dialogContainer.style.alignItems = 'center';
  dialogContainer.style.justifyContent = 'center';
  dialogContainer.style.height = '100%';
  dialogContainer.style.width = '100%';
  
  // Surface
  const surface = document.createElement('div');
  surface.className = 'mdc-dialog__surface';
  surface.style.backgroundColor = '#ffffff';
  surface.style.borderRadius = fullscreen ? '0' : '4px';
  surface.style.boxShadow = '0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12)';
  surface.style.minWidth = fullscreen ? '100%' : '280px';
  surface.style.maxWidth = fullscreen ? '100%' : '560px';
  surface.style.minHeight = fullscreen ? '100%' : 'auto';
  surface.style.maxHeight = fullscreen ? '100%' : '80%';
  surface.style.transform = open ? 'scale(1)' : 'scale(0.8)';
  surface.style.opacity = open ? '1' : '0';
  surface.style.transition = 'transform 0.25s ease, opacity 0.25s ease';
  surface.setAttribute('role', 'alertdialog');
  surface.setAttribute('aria-modal', 'true');
  surface.setAttribute('aria-labelledby', 'dialog-title');
  surface.setAttribute('aria-describedby', 'dialog-content');
  
  // Header
  const header = document.createElement('div');
  header.className = 'mdc-dialog__header';
  header.style.padding = '24px 24px 0 24px';
  
  const titleElement = document.createElement('h2');
  titleElement.className = 'mdc-dialog__title';
  titleElement.id = 'dialog-title';
  titleElement.textContent = title;
  titleElement.style.margin = '0';
  titleElement.style.fontSize = '20px';
  titleElement.style.fontWeight = '500';
  titleElement.style.lineHeight = '24px';
  header.appendChild(titleElement);
  
  surface.appendChild(header);
  
  // Content
  const contentSection = document.createElement('div');
  contentSection.className = 'mdc-dialog__content';
  contentSection.id = 'dialog-content';
  contentSection.style.padding = '20px 24px';
  contentSection.style.fontSize = '14px';
  contentSection.style.lineHeight = '20px';
  contentSection.style.color = 'rgba(0, 0, 0, 0.6)';
  
  if (scrollable) {
    contentSection.style.maxHeight = '200px';
    contentSection.style.overflow = 'auto';
  }
  
  if (typeof content === 'string') {
    contentSection.textContent = content;
  } else {
    contentSection.appendChild(content);
  }
  
  surface.appendChild(contentSection);
  
  // Actions
  const actions = document.createElement('div');
  actions.className = 'mdc-dialog__actions';
  actions.style.display = 'flex';
  actions.style.alignItems = 'center';
  actions.style.justifyContent = 'flex-end';
  actions.style.padding = '8px 8px 8px 24px';
  actions.style.gap = '8px';
  
  if (secondaryAction) {
    const secondaryButton = document.createElement('button');
    secondaryButton.className = 'mdc-button mdc-dialog__button';
    secondaryButton.type = 'button';
    secondaryButton.style.color = '#6200ea';
    
    const secondaryRipple = document.createElement('div');
    secondaryRipple.className = 'mdc-button__ripple';
    secondaryButton.appendChild(secondaryRipple);
    
    const secondaryLabel = document.createElement('span');
    secondaryLabel.className = 'mdc-button__label';
    secondaryLabel.textContent = secondaryAction;
    secondaryButton.appendChild(secondaryLabel);
    
    secondaryButton.addEventListener('click', onSecondaryAction);
    actions.appendChild(secondaryButton);
  }
  
  if (primaryAction) {
    const primaryButton = document.createElement('button');
    primaryButton.className = 'mdc-button mdc-dialog__button';
    primaryButton.type = 'button';
    primaryButton.style.color = '#6200ea';
    primaryButton.style.fontWeight = '500';
    
    const primaryRipple = document.createElement('div');
    primaryRipple.className = 'mdc-button__ripple';
    primaryButton.appendChild(primaryRipple);
    
    const primaryLabel = document.createElement('span');
    primaryLabel.className = 'mdc-button__label';
    primaryLabel.textContent = primaryAction;
    primaryButton.appendChild(primaryLabel);
    
    primaryButton.addEventListener('click', onPrimaryAction);
    actions.appendChild(primaryButton);
  }
  
  surface.appendChild(actions);
  dialogContainer.appendChild(surface);
  dialog.appendChild(dialogContainer);
  
  container.appendChild(scrim);
  container.appendChild(dialog);
  
  return container;
};

export const showDialog = (options) => {
  const existingDialogs = document.querySelectorAll('.mdc-dialog');
  existingDialogs.forEach(dialog => dialog.remove());
  
  const dialogContainer = createMaterialDialog({ ...options, open: true });
  const dialog = dialogContainer.querySelector('.mdc-dialog');
  const scrim = dialogContainer.querySelector('.mdc-dialog__scrim');
  const surface = dialogContainer.querySelector('.mdc-dialog__surface');
  
  // Position as overlay
  dialog.style.position = 'fixed';
  dialog.style.top = '0';
  dialog.style.left = '0';
  dialog.style.width = '100%';
  dialog.style.height = '100%';
  dialog.style.zIndex = '7';
  
  scrim.style.position = 'fixed';
  
  document.body.appendChild(dialog);
  document.body.appendChild(scrim);
  
  // Trigger entrance animation
  setTimeout(() => {
    scrim.style.opacity = '1';
    scrim.style.visibility = 'visible';
    surface.style.transform = 'scale(1)';
    surface.style.opacity = '1';
  }, 10);
  
  const closeDialog = () => {
    scrim.style.opacity = '0';
    scrim.style.visibility = 'hidden';
    surface.style.transform = 'scale(0.8)';
    surface.style.opacity = '0';
    
    setTimeout(() => {
      if (dialog.parentNode) dialog.remove();
      if (scrim.parentNode) scrim.remove();
    }, 250);
  };
  
  // Update event handlers to close dialog
  const primaryButton = dialog.querySelector('.mdc-dialog__button:last-child');
  const secondaryButton = dialog.querySelector('.mdc-dialog__button:first-child');
  
  if (primaryButton) {
    primaryButton.addEventListener('click', () => {
      options.onPrimaryAction?.();
      closeDialog();
    });
  }
  
  if (secondaryButton) {
    secondaryButton.addEventListener('click', () => {
      options.onSecondaryAction?.();
      closeDialog();
    });
  }
  
  if (options.dismissible !== false) {
    scrim.addEventListener('click', () => {
      options.onClose?.();
      closeDialog();
    });
  }
  
  return { dialog, scrim, close: closeDialog };
};