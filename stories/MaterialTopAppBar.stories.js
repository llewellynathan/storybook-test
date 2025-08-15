import { createMaterialTopAppBar } from './MaterialTopAppBar.js';

export default {
  title: 'Material Design/Top App Bar',
  parameters: {
    docs: {
      description: {
        component: 'Material Design top app bars provide content and actions at the top of screens. They display information and actions relating to the current screen.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The title displayed in the app bar',
    },
    variant: {
      control: { type: 'select' },
      options: ['standard', 'short', 'short-collapsed', 'dense', 'prominent'],
      description: 'The visual variant of the top app bar',
    },
    navigationIcon: {
      control: 'text',
      description: 'Material icon name for navigation button',
    },
    fixed: {
      control: 'boolean',
      description: 'Whether the app bar is fixed to the top',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'surface'],
      description: 'Color theme of the app bar',
    },
    onNavigationClick: { 
      action: 'navigation-clicked',
      description: 'Function called when navigation icon is clicked',
    },
  },
};

export const Standard = {
  args: {
    title: 'Cinch',
    variant: 'standard',
    navigationIcon: 'menu',
    actionItems: [
      { icon: 'search', label: 'Search' },
      { icon: 'more_vert', label: 'More options' },
    ],
  },
  render: (args) => createMaterialTopAppBar(args),
};

export const Short = {
  args: {
    title: 'Short App Bar',
    variant: 'short',
    navigationIcon: 'menu',
    actionItems: [
      { icon: 'favorite', label: 'Favorite' },
      { icon: 'share', label: 'Share' },
    ],
  },
  render: (args) => createMaterialTopAppBar(args),
};

export const Dense = {
  args: {
    title: 'Dense App Bar',
    variant: 'dense',
    navigationIcon: 'arrow_back',
    actionItems: [
      { icon: 'edit', label: 'Edit' },
      { icon: 'delete', label: 'Delete' },
    ],
  },
  render: (args) => createMaterialTopAppBar(args),
};

export const Prominent = {
  args: {
    title: 'Prominent App Bar',
    variant: 'prominent',
    navigationIcon: 'menu',
    actionItems: [
      { icon: 'search', label: 'Search' },
      { icon: 'filter_list', label: 'Filter' },
    ],
  },
  render: (args) => createMaterialTopAppBar(args),
};

export const Fixed = {
  args: {
    title: 'Fixed App Bar',
    variant: 'standard',
    navigationIcon: 'menu',
    fixed: true,
    actionItems: [
      { icon: 'notifications', label: 'Notifications' },
      { icon: 'account_circle', label: 'Account' },
    ],
  },
  render: (args) => createMaterialTopAppBar(args),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Fixed app bar that remains at the top when scrolling. Try scrolling the content area.',
      },
    },
  },
};

export const SecondaryColor = {
  args: {
    title: 'Secondary Color',
    variant: 'standard',
    navigationIcon: 'close',
    color: 'secondary',
    actionItems: [
      { icon: 'done', label: 'Done' },
    ],
  },
  render: (args) => createMaterialTopAppBar(args),
};

export const SurfaceColor = {
  args: {
    title: 'Surface Color',
    variant: 'standard',
    navigationIcon: 'arrow_back',
    color: 'surface',
    actionItems: [
      { icon: 'bookmark', label: 'Bookmark' },
      { icon: 'share', label: 'Share' },
    ],
  },
  render: (args) => createMaterialTopAppBar(args),
};

export const CampaignExample = {
  args: {
    title: 'Campaign Management',
    variant: 'standard',
    navigationIcon: 'menu',
    color: 'primary',
    actionItems: [
      { icon: 'search', label: 'Search campaigns' },
      { icon: 'filter_list', label: 'Filter' },
      { icon: 'more_vert', label: 'More options' },
    ],
  },
  render: (args) => createMaterialTopAppBar(args),
  parameters: {
    docs: {
      description: {
        story: 'Example app bar for the Cinch campaign management interface.',
      },
    },
  },
};