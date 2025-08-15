export const createRecommendationTile = ({
  title = 'New customers',
  description = 'Sends an email to customers after their first transaction welcoming them to the business.',
  icon = 'waving_hand',
  iconType = 'material-icons', // 'material-icons', 'material-symbols-outlined', 'material-symbols-rounded'
  iconColor = '#085282',
  backgroundColor = '#F1F3F4',
  titleColor = '#010C14',
  descriptionColor = 'rgba(1, 12, 20, 0.7)',
  onClick = () => {},
  selected = false,
  disabled = false,
  ...props
}) => {
  const container = document.createElement('div');
  container.className = 'recommendation-tile';
  
  // Container styling to match Figma design
  container.style.display = 'flex';
  container.style.flexDirection = 'row';
  container.style.alignItems = 'flex-start';
  container.style.gap = '16px';
  container.style.padding = '12px 16px 12px 12px';
  container.style.backgroundColor = selected ? 'rgba(8, 82, 130, 0.08)' : backgroundColor;
  container.style.borderRadius = '8px';
  container.style.width = '452px';
  container.style.minHeight = 'fit-content';
  container.style.cursor = disabled ? 'default' : 'pointer';
  container.style.transition = 'background-color 0.2s ease';
  container.style.border = selected ? '2px solid #085282' : '2px solid transparent';
  container.style.opacity = disabled ? '0.6' : '1';
  container.style.pointerEvents = disabled ? 'none' : 'auto';
  
  // Hover effects - only background color change
  if (!disabled) {
    const originalBackgroundColor = selected ? 'rgba(8, 82, 130, 0.08)' : backgroundColor;
    
    container.addEventListener('mouseenter', () => {
      container.style.backgroundColor = '#DADFE2';
    });
    
    container.addEventListener('mouseleave', () => {
      container.style.backgroundColor = originalBackgroundColor;
    });
  }
  
  // Icon container
  const iconContainer = document.createElement('div');
  iconContainer.className = 'recommendation-tile__icon-container';
  iconContainer.style.width = '80px';
  iconContainer.style.height = '80px';
  iconContainer.style.backgroundColor = iconColor;
  iconContainer.style.borderRadius = '8px';
  iconContainer.style.display = 'flex';
  iconContainer.style.alignItems = 'center';
  iconContainer.style.justifyContent = 'center';
  iconContainer.style.flexShrink = '0';
  
  // Icon element - support different Material icon types
  const iconElement = document.createElement(iconType === 'material-icons' ? 'i' : 'span');
  iconElement.className = iconType;
  iconElement.textContent = icon;
  iconElement.style.fontSize = '32px';
  iconElement.style.color = '#FFFFFF';
  iconElement.style.lineHeight = '1';
  
  // Apply Material Symbols specific styling if needed
  if (iconType.startsWith('material-symbols')) {
    iconElement.style.fontVariationSettings = "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48";
  }
  
  iconContainer.appendChild(iconElement);
  
  // Text container
  const textContainer = document.createElement('div');
  textContainer.className = 'recommendation-tile__text-container';
  textContainer.style.display = 'flex';
  textContainer.style.flexDirection = 'column';
  textContainer.style.gap = '4px';
  textContainer.style.flex = '1';
  textContainer.style.minWidth = '0'; // Allows text to wrap properly
  
  // Title element
  const titleElement = document.createElement('h3');
  titleElement.className = 'recommendation-tile__title';
  titleElement.textContent = title;
  titleElement.style.margin = '0';
  titleElement.style.fontFamily = 'Roboto, sans-serif';
  titleElement.style.fontWeight = '800';
  titleElement.style.fontSize = '20px';
  titleElement.style.lineHeight = '1.4';
  titleElement.style.color = titleColor;
  titleElement.style.textAlign = 'left';
  
  // Description element
  const descriptionElement = document.createElement('p');
  descriptionElement.className = 'recommendation-tile__description';
  descriptionElement.textContent = description;
  descriptionElement.style.margin = '0';
  descriptionElement.style.fontFamily = 'Roboto, sans-serif';
  descriptionElement.style.fontWeight = '400';
  descriptionElement.style.fontSize = '16px';
  descriptionElement.style.lineHeight = '1.5';
  descriptionElement.style.color = descriptionColor;
  descriptionElement.style.letterSpacing = '0.009em';
  descriptionElement.style.height = '48px';
  descriptionElement.style.overflow = 'hidden';
  descriptionElement.style.textAlign = 'left';
  descriptionElement.style.display = '-webkit-box';
  descriptionElement.style.webkitLineClamp = '2';
  descriptionElement.style.webkitBoxOrient = 'vertical';
  
  // Assemble components
  textContainer.appendChild(titleElement);
  textContainer.appendChild(descriptionElement);
  
  container.appendChild(iconContainer);
  container.appendChild(textContainer);
  
  // Click handler
  if (!disabled) {
    container.addEventListener('click', onClick);
  }
  
  return container;
};

// Utility function to create a grid of recommendation tiles
export const createRecommendationTileGrid = ({
  tiles = [],
  columns = 2,
  gap = '16px',
  onTileClick = () => {},
  ...props
}) => {
  const grid = document.createElement('div');
  grid.className = 'recommendation-tile-grid';
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  grid.style.gap = gap;
  grid.style.width = '100%';
  
  tiles.forEach((tileConfig, index) => {
    const tile = createRecommendationTile({
      ...tileConfig,
      onClick: () => onTileClick(tileConfig, index),
    });
    grid.appendChild(tile);
  });
  
  return grid;
};