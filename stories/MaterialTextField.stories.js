import { createMaterialTextField } from './MaterialTextField.js';

export default {
  title: 'Material Design/Text Field',
  parameters: {
    docs: {
      description: {
        component: 'Material Design text fields for user input with floating labels, icons, and validation states.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text for the field',
    },
    value: {
      control: 'text',
      description: 'The current value of the field',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'textarea'],
      description: 'The input type',
    },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined'],
      description: 'The visual variant of the text field',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the field is disabled',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the field',
    },
    errorText: {
      control: 'text',
      description: 'Error text displayed below the field',
    },
    leadingIcon: {
      control: 'text',
      description: 'Material icon name for leading icon',
    },
    trailingIcon: {
      control: 'text',
      description: 'Material icon name for trailing icon',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
};

export const Outlined = {
  args: {
    label: 'Email',
    variant: 'outlined',
    type: 'email',
    helperText: 'Enter your email address',
  },
  render: (args) => createMaterialTextField(args),
};

export const Filled = {
  args: {
    label: 'Name',
    variant: 'filled',
    value: 'John Doe',
  },
  render: (args) => createMaterialTextField(args),
};

export const WithLeadingIcon = {
  args: {
    label: 'Search',
    variant: 'outlined',
    leadingIcon: 'search',
    placeholder: 'Search campaigns...',
  },
  render: (args) => createMaterialTextField(args),
};

export const WithTrailingIcon = {
  args: {
    label: 'Password',
    variant: 'outlined',
    type: 'password',
    trailingIcon: 'visibility',
  },
  render: (args) => createMaterialTextField(args),
};

export const Required = {
  args: {
    label: 'Campaign Name',
    variant: 'outlined',
    required: true,
    helperText: 'This field is required',
  },
  render: (args) => createMaterialTextField(args),
};

export const WithError = {
  args: {
    label: 'Email',
    variant: 'outlined',
    value: 'invalid-email',
    errorText: 'Please enter a valid email address',
  },
  render: (args) => createMaterialTextField(args),
};

export const Disabled = {
  args: {
    label: 'Disabled Field',
    variant: 'outlined',
    value: 'Cannot edit',
    disabled: true,
  },
  render: (args) => createMaterialTextField(args),
};

export const Textarea = {
  args: {
    label: 'Description',
    variant: 'outlined',
    type: 'textarea',
    rows: 4,
    placeholder: 'Describe your campaign...',
    helperText: 'Provide a detailed description',
  },
  render: (args) => createMaterialTextField(args),
};

export const AllVariants = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '24px';
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    
    const variants = [
      { label: 'Outlined Email', variant: 'outlined', type: 'email', leadingIcon: 'email' },
      { label: 'Filled Name', variant: 'filled', value: 'John Doe' },
      { label: 'Search', variant: 'outlined', leadingIcon: 'search', placeholder: 'Search...' },
      { label: 'Password', variant: 'outlined', type: 'password', trailingIcon: 'visibility' },
      { label: 'Required Field', variant: 'outlined', required: true, helperText: 'Required' },
    ];
    
    variants.forEach(config => {
      container.appendChild(createMaterialTextField(config));
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Collection of different text field variants and configurations.',
      },
    },
  },
};