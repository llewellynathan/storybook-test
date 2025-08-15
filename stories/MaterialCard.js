export const createMaterialCard = ({
  title = 'Card Title',
  subtitle = null,
  content = 'Card content goes here',
  hasMedia = false,
  mediaUrl = null,
  actions = [],
  outlined = false,
  onClick = null,
  ...props
}) => {
  const card = document.createElement('div');
  card.className = outlined ? 'mdc-card mdc-card--outlined' : 'mdc-card';
  card.style.maxWidth = '350px';
  card.style.margin = '16px';
  
  // If card is clickable, make it a primary action
  const cardContent = onClick ? document.createElement('div') : card;
  if (onClick) {
    cardContent.className = 'mdc-card__primary-action';
    cardContent.style.cursor = 'pointer';
    cardContent.addEventListener('click', onClick);
    card.appendChild(cardContent);
  }
  
  // Add media if provided
  if (hasMedia) {
    const media = document.createElement('div');
    media.className = 'mdc-card__media mdc-card__media--16-9';
    if (mediaUrl) {
      media.style.backgroundImage = `url(${mediaUrl})`;
    } else {
      // Default gradient background
      media.style.background = 'linear-gradient(135deg, #6200ea 0%, #03dac6 100%)';
    }
    cardContent.appendChild(media);
  }
  
  // Add content section
  const contentSection = document.createElement('div');
  contentSection.className = 'mdc-card__content';
  contentSection.style.padding = '16px';
  
  // Add title
  const titleElement = document.createElement('h2');
  titleElement.className = 'mdc-typography--headline6';
  titleElement.style.margin = '0 0 8px 0';
  titleElement.textContent = title;
  contentSection.appendChild(titleElement);
  
  // Add subtitle if provided
  if (subtitle) {
    const subtitleElement = document.createElement('h3');
    subtitleElement.className = 'mdc-typography--subtitle2';
    subtitleElement.style.margin = '0 0 8px 0';
    subtitleElement.style.color = 'rgba(0, 0, 0, 0.6)';
    subtitleElement.textContent = subtitle;
    contentSection.appendChild(subtitleElement);
  }
  
  // Add content
  const contentElement = document.createElement('p');
  contentElement.className = 'mdc-typography--body2';
  contentElement.style.margin = '0';
  contentElement.style.color = 'rgba(0, 0, 0, 0.6)';
  contentElement.textContent = content;
  contentSection.appendChild(contentElement);
  
  cardContent.appendChild(contentSection);
  
  // Add actions if provided
  if (actions.length > 0) {
    const actionsSection = document.createElement('div');
    actionsSection.className = 'mdc-card__actions';
    
    const actionButtons = document.createElement('div');
    actionButtons.className = 'mdc-card__action-buttons';
    
    actions.forEach(action => {
      const button = document.createElement('button');
      button.className = 'mdc-button mdc-card__action mdc-card__action--button';
      
      const ripple = document.createElement('div');
      ripple.className = 'mdc-button__ripple';
      button.appendChild(ripple);
      
      const label = document.createElement('span');
      label.className = 'mdc-button__label';
      label.textContent = action.label;
      button.appendChild(label);
      
      if (action.onClick) {
        button.addEventListener('click', action.onClick);
      }
      
      actionButtons.appendChild(button);
    });
    
    actionsSection.appendChild(actionButtons);
    card.appendChild(actionsSection);
  }
  
  return card;
};