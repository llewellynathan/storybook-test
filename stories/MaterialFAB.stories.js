import { createMaterialFAB } from './MaterialFAB.js';

export default {
  title: 'Material Design/FAB (Floating Action Button)',
  parameters: {
    docs: {
      description: {
        component: 'Floating Action Buttons (FABs) are used for primary actions in an application. They float above the content and are highly visible.',
      },
    },
  },
  argTypes: {
    icon: {
      control: 'text',
      description: 'Material icon name for the FAB',
    },
    label: {
      control: 'text',
      description: 'Text label (only visible on extended FABs)',
    },
    extended: {
      control: 'boolean',
      description: 'Whether to show the extended variant with text label',
    },
    mini: {
      control: 'boolean',
      description: 'Whether to use the smaller mini variant',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Color theme of the FAB',
    },
    onClick: { 
      action: 'fab-clicked',
      description: 'Function called when FAB is clicked',
    },
  },
};

export const Default = {
  args: {
    icon: 'add',
    color: 'secondary',
  },
  render: (args) => createMaterialFAB(args),
};

export const Extended = {
  args: {
    icon: 'add',
    label: 'New Campaign',
    extended: true,
    color: 'secondary',
  },
  render: (args) => createMaterialFAB(args),
};

export const Mini = {
  args: {
    icon: 'edit',
    mini: true,
    color: 'primary',
  },
  render: (args) => createMaterialFAB(args),
};

export const Primary = {
  args: {
    icon: 'favorite',
    color: 'primary',
  },
  render: (args) => createMaterialFAB(args),
};

export const WithDifferentIcons = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '20px';
    container.style.padding = '20px';
    container.style.flexWrap = 'wrap';
    container.style.alignItems = 'center';
    
    const fabConfigs = [
      { icon: 'add', color: 'secondary' },
      { icon: 'edit', color: 'primary' },
      { icon: 'share', color: 'secondary' },
      { icon: 'favorite', color: 'primary' },
    ];
    
    fabConfigs.forEach(config => {
      container.appendChild(createMaterialFAB(config));
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'FABs with different icons and colors.',
      },
    },
  },
};

export const Sizes = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '20px';
    container.style.padding = '20px';
    container.style.alignItems = 'center';
    
    // Mini FAB
    const miniFab = createMaterialFAB({ 
      icon: 'add', 
      mini: true, 
      color: 'primary' 
    });
    
    // Regular FAB
    const regularFab = createMaterialFAB({ 
      icon: 'add', 
      color: 'secondary' 
    });
    
    // Extended FAB
    const extendedFab = createMaterialFAB({ 
      icon: 'add', 
      label: 'Create', 
      extended: true, 
      color: 'primary' 
    });
    
    // Add labels
    const miniContainer = document.createElement('div');
    miniContainer.style.textAlign = 'center';
    const miniLabel = document.createElement('p');
    miniLabel.textContent = 'Mini';
    miniLabel.style.margin = '8px 0 0 0';
    miniLabel.style.fontSize = '12px';
    miniContainer.appendChild(miniFab);
    miniContainer.appendChild(miniLabel);
    
    const regularContainer = document.createElement('div');
    regularContainer.style.textAlign = 'center';
    const regularLabel = document.createElement('p');
    regularLabel.textContent = 'Regular';
    regularLabel.style.margin = '8px 0 0 0';
    regularLabel.style.fontSize = '12px';
    regularContainer.appendChild(regularFab);
    regularContainer.appendChild(regularLabel);
    
    const extendedContainer = document.createElement('div');
    extendedContainer.style.textAlign = 'center';
    const extendedLabel = document.createElement('p');
    extendedLabel.textContent = 'Extended';
    extendedLabel.style.margin = '8px 0 0 0';
    extendedLabel.style.fontSize = '12px';
    extendedContainer.appendChild(extendedFab);
    extendedContainer.appendChild(extendedLabel);
    
    container.appendChild(miniContainer);
    container.appendChild(regularContainer);
    container.appendChild(extendedContainer);
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison of different FAB sizes: Mini, Regular, and Extended.',
      },
    },
  },
};