import { createMaterialButton } from './MaterialButton.js';

export default {
  title: 'Material Design/Button',
  parameters: {
    docs: {
      description: {
        component: 'Material Design buttons with different variants and states. These buttons follow Material Design specifications and include ripple effects.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['raised', 'outlined', 'text'],
      description: 'The visual variant of the button',
    },
    label: {
      control: 'text',
      description: 'The text displayed on the button',
    },
    icon: {
      control: 'text',
      description: 'Material icon name to display (optional)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
    onClick: { 
      action: 'clicked',
      description: 'Function called when button is clicked',
    },
  },
};

export const Raised = {
  args: {
    variant: 'raised',
    label: 'Raised Button',
  },
  render: (args) => createMaterialButton(args),
};

export const Outlined = {
  args: {
    variant: 'outlined',
    label: 'Outlined Button',
  },
  render: (args) => createMaterialButton(args),
};

export const Text = {
  args: {
    variant: 'text',
    label: 'Text Button',
  },
  render: (args) => createMaterialButton(args),
};

export const WithIcon = {
  args: {
    variant: 'raised',
    label: 'Create Campaign',
    icon: 'add',
  },
  render: (args) => createMaterialButton(args),
};

export const Disabled = {
  args: {
    variant: 'raised',
    label: 'Disabled Button',
    disabled: true,
  },
  render: (args) => createMaterialButton(args),
};

export const AllVariants = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '16px';
    container.style.flexWrap = 'wrap';
    container.style.padding = '20px';
    
    const variants = [
      { variant: 'raised', label: 'Raised' },
      { variant: 'outlined', label: 'Outlined' },
      { variant: 'text', label: 'Text' },
    ];
    
    variants.forEach(config => {
      container.appendChild(createMaterialButton(config));
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'All button variants displayed together for comparison.',
      },
    },
  },
};