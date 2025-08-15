import { POPULAR_ICONS, CAMPAIGN_ICONS, ALL_ICONS } from '../.storybook/iconControl.js';

export default {
  title: 'Material Design/Icon Browser',
  parameters: {
    docs: {
      description: {
        component: 'Browse and search through all available Material Icons and Symbols. Click any icon to copy its name.',
      },
    },
  },
};

export const IconBrowser = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.fontFamily = 'Roboto, sans-serif';
    container.style.maxWidth = '1200px';
    
    // Title and description
    const title = document.createElement('h2');
    title.textContent = 'Material Icons Browser';
    title.style.color = '#1976d2';
    title.style.marginBottom = '8px';
    container.appendChild(title);
    
    const subtitle = document.createElement('p');
    subtitle.textContent = 'Click any icon to copy its name to clipboard';
    subtitle.style.color = '#666';
    subtitle.style.marginBottom = '24px';
    container.appendChild(subtitle);
    
    // Search input
    const searchContainer = document.createElement('div');
    searchContainer.style.marginBottom = '24px';
    searchContainer.style.position = 'relative';
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search icons... (e.g., "home", "email", "settings")';
    searchInput.style.width = '100%';
    searchInput.style.padding = '12px 16px';
    searchInput.style.border = '2px solid #e0e0e0';
    searchInput.style.borderRadius = '8px';
    searchInput.style.fontSize = '16px';
    searchInput.style.fontFamily = 'Roboto, sans-serif';
    searchInput.style.outline = 'none';
    searchInput.style.transition = 'border-color 0.2s';
    
    searchInput.addEventListener('focus', () => {
      searchInput.style.borderColor = '#1976d2';
    });
    
    searchInput.addEventListener('blur', () => {
      searchInput.style.borderColor = '#e0e0e0';
    });
    
    searchContainer.appendChild(searchInput);
    container.appendChild(searchContainer);
    
    // Icon type selector
    const typeSelector = document.createElement('div');
    typeSelector.style.marginBottom = '24px';
    typeSelector.style.display = 'flex';
    typeSelector.style.gap = '12px';
    typeSelector.style.alignItems = 'center';
    
    const typeLabel = document.createElement('label');
    typeLabel.textContent = 'Icon Style:';
    typeLabel.style.fontWeight = '500';
    typeLabel.style.minWidth = '80px';
    typeSelector.appendChild(typeLabel);
    
    const iconTypes = [
      { value: 'material-icons', label: 'Material Icons (filled)' },
      { value: 'material-symbols-outlined', label: 'Material Symbols (outlined)' },
      { value: 'material-symbols-rounded', label: 'Material Symbols (rounded)' }
    ];
    
    let selectedIconType = 'material-icons';
    
    iconTypes.forEach(({ value, label }) => {
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'iconType';
      radio.value = value;
      radio.checked = value === selectedIconType;
      radio.id = `iconType-${value}`;
      radio.style.marginRight = '6px';
      
      const radioLabel = document.createElement('label');
      radioLabel.htmlFor = `iconType-${value}`;
      radioLabel.textContent = label;
      radioLabel.style.marginRight = '16px';
      radioLabel.style.cursor = 'pointer';
      radioLabel.style.display = 'flex';
      radioLabel.style.alignItems = 'center';
      
      radio.addEventListener('change', () => {
        if (radio.checked) {
          selectedIconType = value;
          updateIconDisplay();
        }
      });
      
      radioLabel.insertBefore(radio, radioLabel.firstChild);
      typeSelector.appendChild(radioLabel);
    });
    
    container.appendChild(typeSelector);
    
    // Status message
    const statusMessage = document.createElement('div');
    statusMessage.style.padding = '8px 12px';
    statusMessage.style.backgroundColor = '#e3f2fd';
    statusMessage.style.border = '1px solid #bbdefb';
    statusMessage.style.borderRadius = '4px';
    statusMessage.style.marginBottom = '16px';
    statusMessage.style.fontSize = '14px';
    statusMessage.style.color = '#1976d2';
    statusMessage.style.display = 'none';
    container.appendChild(statusMessage);
    
    // Icon grid container
    const iconGrid = document.createElement('div');
    iconGrid.style.display = 'grid';
    iconGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(140px, 1fr))';
    iconGrid.style.gap = '12px';
    iconGrid.style.marginTop = '16px';
    container.appendChild(iconGrid);
    
    // Function to show status message
    const showStatus = (message, type = 'info') => {
      statusMessage.textContent = message;
      statusMessage.style.display = 'block';
      statusMessage.style.backgroundColor = type === 'success' ? '#e8f5e8' : '#e3f2fd';
      statusMessage.style.borderColor = type === 'success' ? '#c8e6c9' : '#bbdefb';
      statusMessage.style.color = type === 'success' ? '#2e7d32' : '#1976d2';
      
      setTimeout(() => {
        statusMessage.style.display = 'none';
      }, 2000);
    };
    
    // Function to copy to clipboard
    const copyToClipboard = async (text) => {
      try {
        await navigator.clipboard.writeText(text);
        showStatus(`Copied "${text}" to clipboard!`, 'success');
      } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showStatus(`Copied "${text}" to clipboard!`, 'success');
      }
    };
    
    // Function to create icon card
    const createIconCard = (iconName) => {
      const card = document.createElement('div');
      card.style.display = 'flex';
      card.style.flexDirection = 'column';
      card.style.alignItems = 'center';
      card.style.padding = '16px 8px';
      card.style.border = '1px solid #e0e0e0';
      card.style.borderRadius = '8px';
      card.style.cursor = 'pointer';
      card.style.transition = 'all 0.2s ease';
      card.style.backgroundColor = '#ffffff';
      
      // Icon element
      const icon = document.createElement(selectedIconType === 'material-icons' ? 'i' : 'span');
      icon.className = selectedIconType;
      icon.textContent = iconName;
      icon.style.fontSize = '32px';
      icon.style.color = '#1976d2';
      icon.style.marginBottom = '8px';
      icon.style.lineHeight = '1';
      
      // Apply Material Symbols styling if needed
      if (selectedIconType.startsWith('material-symbols')) {
        icon.style.fontVariationSettings = "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48";
      }
      
      // Icon name
      const name = document.createElement('div');
      name.textContent = iconName;
      name.style.fontSize = '12px';
      name.style.color = '#333';
      name.style.textAlign = 'center';
      name.style.wordBreak = 'break-word';
      name.style.lineHeight = '1.3';
      
      card.appendChild(icon);
      card.appendChild(name);
      
      // Hover effects
      card.addEventListener('mouseenter', () => {
        card.style.backgroundColor = '#f5f5f5';
        card.style.borderColor = '#1976d2';
        card.style.transform = 'translateY(-2px)';
        card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.backgroundColor = '#ffffff';
        card.style.borderColor = '#e0e0e0';
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
      });
      
      // Click to copy
      card.addEventListener('click', () => {
        copyToClipboard(iconName);
        card.style.backgroundColor = '#e8f5e8';
        card.style.borderColor = '#4caf50';
        setTimeout(() => {
          card.style.backgroundColor = '#f5f5f5';
          card.style.borderColor = '#1976d2';
        }, 200);
      });
      
      return card;
    };
    
    // Function to update icon display
    const updateIconDisplay = () => {
      const searchTerm = searchInput.value.toLowerCase().trim();
      iconGrid.innerHTML = '';
      
      const filteredIcons = searchTerm 
        ? ALL_ICONS.filter(icon => icon.toLowerCase().includes(searchTerm))
        : ALL_ICONS;
      
      if (filteredIcons.length === 0) {
        const noResults = document.createElement('div');
        noResults.textContent = `No icons found for "${searchTerm}"`;
        noResults.style.gridColumn = '1 / -1';
        noResults.style.textAlign = 'center';
        noResults.style.padding = '40px';
        noResults.style.color = '#666';
        noResults.style.fontSize = '16px';
        iconGrid.appendChild(noResults);
        return;
      }
      
      // Limit to first 200 results for performance
      const displayIcons = filteredIcons.slice(0, 200);
      
      displayIcons.forEach(iconName => {
        const card = createIconCard(iconName);
        iconGrid.appendChild(card);
      });
      
      if (filteredIcons.length > 200) {
        const moreResults = document.createElement('div');
        moreResults.textContent = `Showing first 200 of ${filteredIcons.length} results. Use search to narrow down.`;
        moreResults.style.gridColumn = '1 / -1';
        moreResults.style.textAlign = 'center';
        moreResults.style.padding = '16px';
        moreResults.style.color = '#666';
        moreResults.style.fontSize = '14px';
        moreResults.style.backgroundColor = '#f9f9f9';
        moreResults.style.borderRadius = '4px';
        iconGrid.appendChild(moreResults);
      }
    };
    
    // Search functionality
    let searchTimeout;
    searchInput.addEventListener('input', () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(updateIconDisplay, 300);
    });
    
    // Initial display
    updateIconDisplay();
    
    return container;
  },
};

export const PopularIcons = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.fontFamily = 'Roboto, sans-serif';
    
    const title = document.createElement('h3');
    title.textContent = 'Popular Material Icons';
    title.style.color = '#1976d2';
    title.style.marginBottom = '16px';
    container.appendChild(title);
    
    const iconGrid = document.createElement('div');
    iconGrid.style.display = 'grid';
    iconGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(120px, 1fr))';
    iconGrid.style.gap = '12px';
    
    POPULAR_ICONS.forEach(iconName => {
      const card = document.createElement('div');
      card.style.display = 'flex';
      card.style.flexDirection = 'column';
      card.style.alignItems = 'center';
      card.style.padding = '12px';
      card.style.border = '1px solid #e0e0e0';
      card.style.borderRadius = '6px';
      card.style.cursor = 'pointer';
      card.style.transition = 'background-color 0.2s';
      
      const icon = document.createElement('i');
      icon.className = 'material-icons';
      icon.textContent = iconName;
      icon.style.fontSize = '28px';
      icon.style.color = '#1976d2';
      icon.style.marginBottom = '6px';
      
      const name = document.createElement('div');
      name.textContent = iconName;
      name.style.fontSize = '11px';
      name.style.color = '#333';
      name.style.textAlign = 'center';
      
      card.appendChild(icon);
      card.appendChild(name);
      
      card.addEventListener('mouseenter', () => {
        card.style.backgroundColor = '#f5f5f5';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.backgroundColor = 'transparent';
      });
      
      card.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(iconName);
          card.style.backgroundColor = '#e8f5e8';
          setTimeout(() => {
            card.style.backgroundColor = '#f5f5f5';
          }, 300);
        } catch (err) {
          console.log('Copy failed:', err);
        }
      });
      
      iconGrid.appendChild(card);
    });
    
    container.appendChild(iconGrid);
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Most commonly used Material icons. Click any icon to copy its name.',
      },
    },
  },
};

export const CampaignIcons = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.fontFamily = 'Roboto, sans-serif';
    
    const title = document.createElement('h3');
    title.textContent = 'Campaign & Marketing Icons';
    title.style.color = '#1976d2';
    title.style.marginBottom = '16px';
    container.appendChild(title);
    
    const iconGrid = document.createElement('div');
    iconGrid.style.display = 'grid';
    iconGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(120px, 1fr))';
    iconGrid.style.gap = '12px';
    
    CAMPAIGN_ICONS.forEach(iconName => {
      const card = document.createElement('div');
      card.style.display = 'flex';
      card.style.flexDirection = 'column';
      card.style.alignItems = 'center';
      card.style.padding = '12px';
      card.style.border = '1px solid #e0e0e0';
      card.style.borderRadius = '6px';
      card.style.cursor = 'pointer';
      card.style.transition = 'background-color 0.2s';
      
      const icon = document.createElement('i');
      icon.className = 'material-icons';
      icon.textContent = iconName;
      icon.style.fontSize = '28px';
      icon.style.color = '#1976d2';
      icon.style.marginBottom = '6px';
      
      const name = document.createElement('div');
      name.textContent = iconName;
      name.style.fontSize = '11px';
      name.style.color = '#333';
      name.style.textAlign = 'center';
      
      card.appendChild(icon);
      card.appendChild(name);
      
      card.addEventListener('mouseenter', () => {
        card.style.backgroundColor = '#f5f5f5';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.backgroundColor = 'transparent';
      });
      
      card.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(iconName);
          card.style.backgroundColor = '#e8f5e8';
          setTimeout(() => {
            card.style.backgroundColor = '#f5f5f5';
          }, 300);
        } catch (err) {
          console.log('Copy failed:', err);
        }
      });
      
      iconGrid.appendChild(card);
    });
    
    container.appendChild(iconGrid);
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Icons specifically useful for campaigns, marketing, and business applications.',
      },
    },
  },
};