import { createMaterialMenu } from './MaterialMenu.js';

export default {
  title: 'Material Design/Menu',
  parameters: {
    docs: {
      description: {
        component: 'Menus display a list of choices on temporary surfaces. They appear when users interact with a button, action, or other control.',
      },
    },
  },
};

export const Basic = {
  render: () => {
    return createMaterialMenu({
      items: [
        { text: 'Profile', value: 'profile' },
        { text: 'Settings', value: 'settings' },
        { text: 'Help', value: 'help' },
        { text: 'Sign out', value: 'signout' },
      ],
      onSelect: (item, index) => console.log('Selected:', item.text, 'at index', index),
    });
  },
};

export const CampaignActions = {
  render: () => {
    return createMaterialMenu({
      items: [
        { text: 'Edit Campaign', value: 'edit' },
        { text: 'Duplicate', value: 'duplicate' },
        { text: 'View Analytics', value: 'analytics' },
        { text: 'Export Data', value: 'export' },
        { text: 'Delete', value: 'delete' },
      ],
      onSelect: (item, index) => {
        console.log('Campaign action:', item.text);
        alert(`You selected: ${item.text}`);
      },
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'Menu for campaign management actions.',
      },
    },
  },
};

export const FilterMenu = {
  render: () => {
    return createMaterialMenu({
      items: [
        { text: 'All Campaigns', value: 'all' },
        { text: 'Active', value: 'active' },
        { text: 'Paused', value: 'paused' },
        { text: 'Draft', value: 'draft' },
        { text: 'Completed', value: 'completed' },
      ],
      onSelect: (item, index) => {
        console.log('Filter by:', item.text);
      },
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'Menu for filtering campaign lists.',
      },
    },
  },
};

export const SortMenu = {
  render: () => {
    return createMaterialMenu({
      items: [
        { text: 'Date Created (Newest)', value: 'date-desc' },
        { text: 'Date Created (Oldest)', value: 'date-asc' },
        { text: 'Name (A-Z)', value: 'name-asc' },
        { text: 'Name (Z-A)', value: 'name-desc' },
        { text: 'Performance (Best)', value: 'performance-desc' },
        { text: 'Performance (Worst)', value: 'performance-asc' },
      ],
      onSelect: (item, index) => {
        console.log('Sort by:', item.text);
      },
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'Menu for sorting options.',
      },
    },
  },
};