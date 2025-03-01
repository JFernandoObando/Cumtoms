export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  groupClasses?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
  link?: string;
  description?: string;
  path?: string;
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'default',
        title: 'Default',
        type: 'item',
        classes: 'nav-item',
        url: '/dashboard/default',
        icon: 'dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'authentication',
    title: 'Authentication',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      // {
      //   id: 'login',
      //   title: 'Login',
      //   type: 'item',
      //   classes: 'nav-item',
      //   url: '/login',
      //   icon: 'login',
      //   // target: true,
      //   // breadcrumbs: false
      // },
      {
        id: 'register',
        title: 'Register',
        type: 'item',
        classes: 'nav-item',
        url: '/register',
        icon: 'profile',
        // target: true,
        // breadcrumbs: false
      },
      {
        id: 'register',
        title: 'Usuarios',
        type: 'item',
        classes: 'nav-item',
        url: '/user',
        icon: 'user',
        // target: true,
        // breadcrumbs: false
      }
    ]
  },
  {
    id: 'utilities',
    title: 'UI Components',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'typography',
        title: 'Typography',
        type: 'item',
        classes: 'nav-item',
        url: '/typography',
        icon: 'font-size'
      },
      {
        id: 'color',
        title: 'Colors',
        type: 'item',
        classes: 'nav-item',
        url: '/color',
        icon: 'bg-colors'
      },
      {
        id: 'tabler',
        title: 'Tabler',
        type: 'item',
        classes: 'nav-item',
        url: 'https://ant.design/components/icon',
        icon: 'ant-design',
        target: true,
        external: true
      }
    ]
  },

  {
    id: 'other',
    title: 'Other',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'chrome'
      },
      {
        id: 'document',
        title: 'Document',
        type: 'item',
        classes: 'nav-item',
        url: 'https://codedthemes.gitbook.io/mantis-angular/',
        icon: 'question',
        target: true,
        external: true
      }
    ]
  },
  {
    id: 'settings',
    title: 'Configuraciones',
    type: 'group',
    icon: 'setting',  // Puedes cambiar el icono a uno que se ajuste a "Configuraciones"
    children: [
      {
        id: 'roles',
        title: 'Roles',
        type: 'item',
        classes: 'nav-item',
        url: '/roles',
        icon: 'team'  // Icono para "Roles"
      },
      {
        id: 'roles-table',
        title: 'Tabla de roles',
        type: 'item',
        classes: 'nav-item',
        url: '/roles-table',
        icon: 'team'  // Icono para "Roles"
      }
    ]
  }
];
