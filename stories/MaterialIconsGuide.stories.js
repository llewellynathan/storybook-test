export default {
  title: 'Material Design/Icons Guide',
  parameters: {
    docs: {
      description: {
        component: 'Guide for using Material Icons and Material Symbols from Google Fonts in your components.',
      },
    },
  },
};

export const IconTypes = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.fontFamily = 'Roboto, sans-serif';
    
    const title = document.createElement('h2');
    title.textContent = 'Material Icons & Symbols Guide';
    title.style.color = '#1976d2';
    title.style.marginBottom = '24px';
    container.appendChild(title);
    
    // Material Icons section
    const iconSection = document.createElement('div');
    iconSection.style.marginBottom = '32px';
    
    const iconTitle = document.createElement('h3');
    iconTitle.textContent = '1. Material Icons (Classic)';
    iconTitle.style.color = '#333';
    iconTitle.style.marginBottom = '16px';
    iconSection.appendChild(iconTitle);
    
    const iconDesc = document.createElement('p');
    iconDesc.innerHTML = `
      Use class <code>material-icons</code> for the classic filled icons. 
      Loaded from: <code>https://fonts.googleapis.com/icon?family=Material+Icons</code>
    `;
    iconDesc.style.marginBottom = '16px';
    iconDesc.style.lineHeight = '1.5';
    iconSection.appendChild(iconDesc);
    
    const iconExamples = document.createElement('div');
    iconExamples.style.display = 'flex';
    iconExamples.style.gap = '16px';
    iconExamples.style.alignItems = 'center';
    iconExamples.style.marginBottom = '16px';
    
    ['home', 'favorite', 'settings', 'search', 'account_circle'].forEach(iconName => {
      const iconWrapper = document.createElement('div');
      iconWrapper.style.textAlign = 'center';
      iconWrapper.style.padding = '8px';
      iconWrapper.style.border = '1px solid #e0e0e0';
      iconWrapper.style.borderRadius = '4px';
      
      const icon = document.createElement('i');
      icon.className = 'material-icons';
      icon.textContent = iconName;
      icon.style.fontSize = '24px';
      icon.style.color = '#1976d2';
      icon.style.display = 'block';
      icon.style.marginBottom = '4px';
      
      const label = document.createElement('small');
      label.textContent = iconName;
      label.style.fontSize = '10px';
      label.style.color = '#666';
      
      iconWrapper.appendChild(icon);
      iconWrapper.appendChild(label);
      iconExamples.appendChild(iconWrapper);
    });
    iconSection.appendChild(iconExamples);
    
    const iconCode = document.createElement('pre');
    iconCode.style.backgroundColor = '#f5f5f5';
    iconCode.style.padding = '12px';
    iconCode.style.borderRadius = '4px';
    iconCode.style.fontSize = '14px';
    iconCode.style.overflow = 'auto';
    iconCode.innerHTML = `<i class="material-icons">favorite</i>`;
    iconSection.appendChild(iconCode);
    
    container.appendChild(iconSection);
    
    // Material Symbols Outlined section
    const outlinedSection = document.createElement('div');
    outlinedSection.style.marginBottom = '32px';
    
    const outlinedTitle = document.createElement('h3');
    outlinedTitle.textContent = '2. Material Symbols Outlined';
    outlinedTitle.style.color = '#333';
    outlinedTitle.style.marginBottom = '16px';
    outlinedSection.appendChild(outlinedTitle);
    
    const outlinedDesc = document.createElement('p');
    outlinedDesc.innerHTML = `
      Use class <code>material-symbols-outlined</code> for outlined symbols with customizable weight, fill, and grade.
      Loaded from: <code>https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined</code>
    `;
    outlinedDesc.style.marginBottom = '16px';
    outlinedDesc.style.lineHeight = '1.5';
    outlinedSection.appendChild(outlinedDesc);
    
    const outlinedExamples = document.createElement('div');
    outlinedExamples.style.display = 'flex';
    outlinedExamples.style.gap = '16px';
    outlinedExamples.style.alignItems = 'center';
    outlinedExamples.style.marginBottom = '16px';
    
    ['home', 'favorite', 'settings', 'search', 'account_circle'].forEach(iconName => {
      const iconWrapper = document.createElement('div');
      iconWrapper.style.textAlign = 'center';
      iconWrapper.style.padding = '8px';
      iconWrapper.style.border = '1px solid #e0e0e0';
      iconWrapper.style.borderRadius = '4px';
      
      const icon = document.createElement('span');
      icon.className = 'material-symbols-outlined';
      icon.textContent = iconName;
      icon.style.fontSize = '24px';
      icon.style.color = '#1976d2';
      icon.style.display = 'block';
      icon.style.marginBottom = '4px';
      
      const label = document.createElement('small');
      label.textContent = iconName;
      label.style.fontSize = '10px';
      label.style.color = '#666';
      
      iconWrapper.appendChild(icon);
      iconWrapper.appendChild(label);
      outlinedExamples.appendChild(iconWrapper);
    });
    outlinedSection.appendChild(outlinedExamples);
    
    const outlinedCode = document.createElement('pre');
    outlinedCode.style.backgroundColor = '#f5f5f5';
    outlinedCode.style.padding = '12px';
    outlinedCode.style.borderRadius = '4px';
    outlinedCode.style.fontSize = '14px';
    outlinedCode.style.overflow = 'auto';
    outlinedCode.innerHTML = `<span class="material-symbols-outlined">favorite</span>`;
    outlinedSection.appendChild(outlinedCode);
    
    container.appendChild(outlinedSection);
    
    // Material Symbols Rounded section
    const roundedSection = document.createElement('div');
    roundedSection.style.marginBottom = '32px';
    
    const roundedTitle = document.createElement('h3');
    roundedTitle.textContent = '3. Material Symbols Rounded';
    roundedTitle.style.color = '#333';
    roundedTitle.style.marginBottom = '16px';
    roundedSection.appendChild(roundedTitle);
    
    const roundedDesc = document.createElement('p');
    roundedDesc.innerHTML = `
      Use class <code>material-symbols-rounded</code> for rounded symbols with softer edges.
      Loaded from: <code>https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded</code>
    `;
    roundedDesc.style.marginBottom = '16px';
    roundedDesc.style.lineHeight = '1.5';
    roundedSection.appendChild(roundedDesc);
    
    const roundedExamples = document.createElement('div');
    roundedExamples.style.display = 'flex';
    roundedExamples.style.gap = '16px';
    roundedExamples.style.alignItems = 'center';
    roundedExamples.style.marginBottom = '16px';
    
    ['home', 'favorite', 'settings', 'search', 'account_circle'].forEach(iconName => {
      const iconWrapper = document.createElement('div');
      iconWrapper.style.textAlign = 'center';
      iconWrapper.style.padding = '8px';
      iconWrapper.style.border = '1px solid #e0e0e0';
      iconWrapper.style.borderRadius = '4px';
      
      const icon = document.createElement('span');
      icon.className = 'material-symbols-rounded';
      icon.textContent = iconName;
      icon.style.fontSize = '24px';
      icon.style.color = '#1976d2';
      icon.style.display = 'block';
      icon.style.marginBottom = '4px';
      
      const label = document.createElement('small');
      label.textContent = iconName;
      label.style.fontSize = '10px';
      label.style.color = '#666';
      
      iconWrapper.appendChild(icon);
      iconWrapper.appendChild(label);
      roundedExamples.appendChild(iconWrapper);
    });
    roundedSection.appendChild(roundedExamples);
    
    const roundedCode = document.createElement('pre');
    roundedCode.style.backgroundColor = '#f5f5f5';
    roundedCode.style.padding = '12px';
    roundedCode.style.borderRadius = '4px';
    roundedCode.style.fontSize = '14px';
    roundedCode.style.overflow = 'auto';
    roundedCode.innerHTML = `<span class="material-symbols-rounded">favorite</span>`;
    roundedSection.appendChild(roundedCode);
    
    container.appendChild(roundedSection);
    
    return container;
  },
};

export const CustomizationOptions = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.fontFamily = 'Roboto, sans-serif';
    
    const title = document.createElement('h3');
    title.textContent = 'Material Symbols Customization';
    title.style.color = '#1976d2';
    title.style.marginBottom = '24px';
    container.appendChild(title);
    
    const desc = document.createElement('p');
    desc.textContent = 'Material Symbols can be customized with CSS properties:';
    desc.style.marginBottom = '16px';
    container.appendChild(desc);
    
    // Weight examples
    const weightSection = document.createElement('div');
    weightSection.style.marginBottom = '24px';
    
    const weightTitle = document.createElement('h4');
    weightTitle.textContent = 'Font Weight (100-700)';
    weightTitle.style.marginBottom = '12px';
    weightSection.appendChild(weightTitle);
    
    const weightExamples = document.createElement('div');
    weightExamples.style.display = 'flex';
    weightExamples.style.gap = '16px';
    weightExamples.style.alignItems = 'center';
    weightExamples.style.marginBottom = '12px';
    
    [100, 300, 500, 700].forEach(weight => {
      const iconWrapper = document.createElement('div');
      iconWrapper.style.textAlign = 'center';
      
      const icon = document.createElement('span');
      icon.className = 'material-symbols-outlined';
      icon.textContent = 'favorite';
      icon.style.fontSize = '32px';
      icon.style.color = '#1976d2';
      icon.style.fontWeight = weight.toString();
      icon.style.display = 'block';
      icon.style.marginBottom = '4px';
      
      const label = document.createElement('small');
      label.textContent = `${weight}`;
      label.style.fontSize = '12px';
      label.style.color = '#666';
      
      iconWrapper.appendChild(icon);
      iconWrapper.appendChild(label);
      weightExamples.appendChild(iconWrapper);
    });
    weightSection.appendChild(weightExamples);
    
    const weightCode = document.createElement('pre');
    weightCode.style.backgroundColor = '#f5f5f5';
    weightCode.style.padding = '12px';
    weightCode.style.borderRadius = '4px';
    weightCode.style.fontSize = '14px';
    weightCode.innerHTML = `.icon { font-weight: 300; }`;
    weightSection.appendChild(weightCode);
    
    container.appendChild(weightSection);
    
    // Fill examples
    const fillSection = document.createElement('div');
    fillSection.style.marginBottom = '24px';
    
    const fillTitle = document.createElement('h4');
    fillTitle.textContent = 'Fill (0-1)';
    fillTitle.style.marginBottom = '12px';
    fillSection.appendChild(fillTitle);
    
    const fillExamples = document.createElement('div');
    fillExamples.style.display = 'flex';
    fillExamples.style.gap = '16px';
    fillExamples.style.alignItems = 'center';
    fillExamples.style.marginBottom = '12px';
    
    [0, 0.5, 1].forEach(fill => {
      const iconWrapper = document.createElement('div');
      iconWrapper.style.textAlign = 'center';
      
      const icon = document.createElement('span');
      icon.className = 'material-symbols-outlined';
      icon.textContent = 'favorite';
      icon.style.fontSize = '32px';
      icon.style.color = '#1976d2';
      icon.style.fontVariationSettings = `'FILL' ${fill}`;
      icon.style.display = 'block';
      icon.style.marginBottom = '4px';
      
      const label = document.createElement('small');
      label.textContent = `${fill}`;
      label.style.fontSize = '12px';
      label.style.color = '#666';
      
      iconWrapper.appendChild(icon);
      iconWrapper.appendChild(label);
      fillExamples.appendChild(iconWrapper);
    });
    fillSection.appendChild(fillExamples);
    
    const fillCode = document.createElement('pre');
    fillCode.style.backgroundColor = '#f5f5f5';
    fillCode.style.padding = '12px';
    fillCode.style.borderRadius = '4px';
    fillCode.style.fontSize = '14px';
    fillCode.innerHTML = `.icon { font-variation-settings: 'FILL' 1; }`;
    fillSection.appendChild(fillCode);
    
    container.appendChild(fillSection);
    
    return container;
  },
};

export const CommonIcons = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.fontFamily = 'Roboto, sans-serif';
    
    const title = document.createElement('h3');
    title.textContent = 'Common Campaign & Marketing Icons';
    title.style.color = '#1976d2';
    title.style.marginBottom = '24px';
    container.appendChild(title);
    
    const iconsData = [
      // Campaign icons
      { category: 'Campaign Management', icons: ['campaign', 'email', 'send', 'schedule', 'analytics', 'trending_up'] },
      { category: 'User Actions', icons: ['person_add', 'favorite', 'share', 'notifications', 'star', 'thumb_up'] },
      { category: 'Content', icons: ['edit', 'image', 'video_library', 'article', 'attach_file', 'link'] },
      { category: 'Navigation', icons: ['home', 'menu', 'search', 'filter_list', 'sort', 'more_vert'] },
      { category: 'Status', icons: ['check_circle', 'error', 'warning', 'info', 'pending', 'sync'] },
    ];
    
    iconsData.forEach(({ category, icons }) => {
      const categorySection = document.createElement('div');
      categorySection.style.marginBottom = '32px';
      
      const categoryTitle = document.createElement('h4');
      categoryTitle.textContent = category;
      categoryTitle.style.color = '#333';
      categoryTitle.style.marginBottom = '16px';
      categorySection.appendChild(categoryTitle);
      
      const iconGrid = document.createElement('div');
      iconGrid.style.display = 'grid';
      iconGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(120px, 1fr))';
      iconGrid.style.gap = '12px';
      iconGrid.style.marginBottom = '16px';
      
      icons.forEach(iconName => {
        const iconWrapper = document.createElement('div');
        iconWrapper.style.display = 'flex';
        iconWrapper.style.alignItems = 'center';
        iconWrapper.style.gap = '8px';
        iconWrapper.style.padding = '8px';
        iconWrapper.style.border = '1px solid #e0e0e0';
        iconWrapper.style.borderRadius = '4px';
        iconWrapper.style.cursor = 'pointer';
        iconWrapper.style.transition = 'background-color 0.2s';
        
        iconWrapper.addEventListener('mouseenter', () => {
          iconWrapper.style.backgroundColor = '#f5f5f5';
        });
        
        iconWrapper.addEventListener('mouseleave', () => {
          iconWrapper.style.backgroundColor = 'transparent';
        });
        
        // Show both Material Icons and Material Symbols versions
        const materialIcon = document.createElement('i');
        materialIcon.className = 'material-icons';
        materialIcon.textContent = iconName;
        materialIcon.style.fontSize = '20px';
        materialIcon.style.color = '#1976d2';
        
        const symbolIcon = document.createElement('span');
        symbolIcon.className = 'material-symbols-outlined';
        symbolIcon.textContent = iconName;
        symbolIcon.style.fontSize = '20px';
        symbolIcon.style.color = '#ff9800';
        
        const label = document.createElement('span');
        label.textContent = iconName;
        label.style.fontSize = '12px';
        label.style.color = '#333';
        label.style.flex = '1';
        
        iconWrapper.appendChild(materialIcon);
        iconWrapper.appendChild(symbolIcon);
        iconWrapper.appendChild(label);
        iconGrid.appendChild(iconWrapper);
      });
      
      categorySection.appendChild(iconGrid);
      container.appendChild(categorySection);
    });
    
    return container;
  },
};