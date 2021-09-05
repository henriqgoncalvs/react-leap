import { useNavigation } from '../hooks/useNavigation';
import { useSidebar } from '../store/sidebar';

import * as Nav from './NavItem';

export const NavigationSection = () => {
  const { navigation } = useNavigation();
  const {
    state: { isOpen },
  } = useSidebar();

  return (
    <>
      {isOpen
        ? navigation.map((props) => <Nav.Item key={`nav-item-${props.name}`} {...props} />)
        : navigation.map((props) => <Nav.Collapsed key={`nav-item-${props.name}`} {...props} />)}
    </>
  );
};
