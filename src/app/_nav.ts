interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'Configuraciones'
  },
  {
    name: 'Configuración general',
    url: '/configuracion',
    icon: 'icon-settings'
  },
  {
    name: 'Fotos y videos',
    url: '/photos',
    icon: 'icon-settings'
  },
  {
    title: true,
    name: 'Catálogos'
  },
  {
    name: 'Artículos',
    url: '/articulos',
    icon: 'icon-star'
  },
  {
    name: 'Categorías',
    url: '/categorias',
    icon: 'icon-star'
  },
  {
    title: true,
    name: 'Consultas'
  },
  {
    name: 'Donaciones',
    url: '/donaciones',
    icon: 'icon-star',
  }
];
