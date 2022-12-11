// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'orders',
    path: '/dashboard/orders',
    icon: icon('ic_user'),
  },
  {
    title: 'transactions',
    path: '/dashboard/transactions',
    icon: icon('ic_user'),
  },
  {
    title: 'inventory',
    path: '/dashboard/inventory',
    icon: icon('ic_user'),
  },
  {
    title: 'schools',
    path: '/dashboard/schools',
    icon: icon('ic_user'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
];

export default navConfig;
