import { createMaterialSelect } from './MaterialSelect.js';

export default {
  title: 'Components/MaterialSelect',
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the select field',
      defaultValue: 'Select option'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected',
      defaultValue: 'Choose...'
    },
    variant: {
      control: { type: 'select' },
      options: ['outlined', 'filled'],
      description: 'Visual variant of the select',
      defaultValue: 'outlined'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
      defaultValue: false
    },
    required: {
      control: 'boolean',
      description: 'Whether the select is required',
      defaultValue: false
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the select',
      defaultValue: ''
    },
    errorText: {
      control: 'text',
      description: 'Error text displayed below the select',
      defaultValue: ''
    },
    onChange: {
      action: 'changed',
      description: 'Called when selection changes'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A Material Design select dropdown component for choosing from multiple options.'
      }
    }
  }
};

const Template = (args) => {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.width = '300px';
  
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];
  
  const select = createMaterialSelect({
    ...args,
    options,
    onChange: (value, label) => {
      args.onChange(value, label);
      console.log('Selected:', value, label);
    }
  });
  
  container.appendChild(select);
  return container;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Choose an option',
  placeholder: 'Select...',
  variant: 'outlined',
  disabled: false,
  required: false,
  helperText: '',
  errorText: ''
};

export const Filled = Template.bind({});
Filled.args = {
  label: 'Choose an option',
  placeholder: 'Select...',
  variant: 'filled',
  disabled: false,
  required: false,
  helperText: '',
  errorText: ''
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'Choose an option',
  placeholder: 'Select...',
  variant: 'outlined',
  disabled: false,
  required: false,
  helperText: 'Please select one of the available options',
  errorText: ''
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Choose an option',
  placeholder: 'Select...',
  variant: 'outlined',
  disabled: false,
  required: true,
  helperText: '',
  errorText: 'This field is required'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Choose an option',
  placeholder: 'Select...',
  variant: 'outlined',
  disabled: true,
  required: false,
  helperText: '',
  errorText: ''
};

// POS System example
const POSTemplate = () => {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.width = '400px';
  
  const posOptions = [
    { value: 'square', label: 'Square' },
    { value: 'pestroutes', label: 'PestRoutes' },
    { value: 'jobber', label: 'Jobber' },
    { value: 'servicetitan', label: 'ServiceTitan' },
    { value: 'housecallpro', label: 'Housecall Pro' },
    { value: 'other', label: 'Other' },
    { value: 'none', label: 'None / I don\'t use a POS system' }
  ];
  
  const select = createMaterialSelect({
    label: 'Point of sales system...',
    placeholder: 'Select your POS system',
    options: posOptions,
    variant: 'outlined',
    onChange: (value, label) => {
      console.log('Selected POS:', value, label);
      
      // Show different messages based on selection
      let message = '';
      switch (value) {
        case 'pestroutes':
          message = 'PestRoutes integration requires API access.';
          break;
        case 'servicetitan':
          message = 'ServiceTitan integration requires app installation.';
          break;
        case 'square':
          message = 'Square integration can be set up automatically.';
          break;
        case 'other':
          message = 'Custom POS integrations require setup assistance.';
          break;
        case 'none':
          message = 'You can always add a POS system later.';
          break;
        default:
          message = `Selected: ${label}`;
      }
      
      // Show info message
      let infoBox = container.querySelector('.info-message');
      if (!infoBox) {
        infoBox = document.createElement('div');
        infoBox.className = 'info-message';
        infoBox.style.cssText = `
          margin-top: 16px;
          padding: 12px;
          background: #f1f3f4;
          border-radius: 4px;
          font-size: 14px;
          color: #666;
        `;
        container.appendChild(infoBox);
      }
      infoBox.textContent = message;
    }
  });
  
  container.appendChild(select);
  return container;
};

export const POSSelection = POSTemplate.bind({});
POSSelection.parameters = {
  docs: {
    description: {
      story: 'Example of the POS system selection as used in the onboarding flow.'
    }
  }
};