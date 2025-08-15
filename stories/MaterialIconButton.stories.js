import { createMaterialIconButton } from './MaterialIconButton.js';
import { createIconControl } from '../.storybook/iconControl.js';

export default {
  title: 'Material Design/Icon Button',
  parameters: {
    docs: {
      description: {
        component: 'Icon buttons help people take supplementary actions with a single tap. They are used for secondary actions and can be toggled on and off.',
      },
    },
  },
  argTypes: {
    icon: createIconControl(),
    size: {
      control: { type: 'select' },
      options: ['small', 'standard', 'large'],
      description: 'Size of the icon button',
    },
    variant: {
      control: { type: 'select' },
      options: ['standard', 'filled', 'tonal', 'outlined'],
      description: 'Visual variant of the icon button',
    },
    selected: {
      control: 'boolean',
      description: 'Whether the button is in selected state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    toggle: {
      control: 'boolean',
      description: 'Whether the button toggles between states',
    },
    label: {
      control: 'text',
      description: 'Accessible label for the button',
    },
  },
};

export const Standard = {
  args: {
    icon: 'favorite',
    variant: 'standard',
    label: 'Add to favorites',
  },
  render: (args) => createMaterialIconButton(args),
};

export const Filled = {
  args: {
    icon: 'bookmark',
    variant: 'filled',
    label: 'Bookmark',
  },
  render: (args) => createMaterialIconButton(args),
};

export const Toggle = {
  args: {
    icon: 'favorite_border',
    variant: 'standard',
    toggle: true,
    onIcon: 'favorite',
    offIcon: 'favorite_border',
    label: 'Toggle favorite',
  },
  render: (args) => createMaterialIconButton(args),
};

export const Sizes = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.gap = '16px';
    container.style.padding = '20px';
    
    const sizes = ['small', 'standard', 'large'];
    
    sizes.forEach(size => {
      const sizeContainer = document.createElement('div');
      sizeContainer.style.textAlign = 'center';
      
      const button = createMaterialIconButton({
        icon: 'star',
        size: size,
        variant: 'filled',
        label: `${size} star button`,
      });
      
      const label = document.createElement('p');
      label.textContent = size;
      label.style.margin = '8px 0 0 0';
      label.style.fontSize = '12px';
      label.style.textTransform = 'capitalize';
      
      sizeContainer.appendChild(button);
      sizeContainer.appendChild(label);
      container.appendChild(sizeContainer);
    });
    
    return container;
  },
};