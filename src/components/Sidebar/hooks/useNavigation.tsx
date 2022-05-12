import { BsQuestionCircleFill } from 'react-icons/bs';
import { FaPiggyBank, FaMoneyBillWave } from 'react-icons/fa';
import { FiPower } from 'react-icons/fi';
import { HiUsers, HiUser } from 'react-icons/hi';

import { useAuth } from '@/lib/auth/authentication';
import { ROLES, useRBAC } from '@/lib/authorization';
import { Roles } from '@/types';

type SideNavigationItem = {
  name: string;
  to: string;
  count?: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

type SideActionItem = {
  name: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  fn: () => void;
};

type SideFooterItem = {
  name: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  fn: () => void;
};

export const useNavigation = () => {
  const { checkAllowedRole } = useRBAC();
  const { logout } = useAuth();

  const navigation = [
    { name: 'About', to: '/app', icon: BsQuestionCircleFill },
    {
      name: 'Incomes',
      to: '/app/incomes',
      icon: FaPiggyBank,
    },
    {
      name: 'Expenses',
      to: '/app/expenses',
      icon: FaMoneyBillWave,
    },
    checkAllowedRole({ allowedRoles: [ROLES.ADMIN as Roles] }) && {
      name: 'Users',
      to: '/app/users',
      icon: HiUsers,
    },
  ].filter(Boolean) as SideNavigationItem[];

  const actions = [
    // {
    //   name: 'Jira',
    //   fn: () => console.log('object'),
    //   icon: FaJira,
    // },
  ] as SideActionItem[];

  const footer = [
    {
      name: 'Profile',
      fn: () => console.log('object'),
      icon: HiUser,
    },
    {
      name: 'Logout',
      fn: () => logout(),
      icon: FiPower,
    },
  ] as SideFooterItem[];

  return { navigation, actions, footer };
};
