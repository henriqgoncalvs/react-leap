import { useNavigation } from '../hooks/useNavigation';
import { useSidebar } from '../store/sidebar';

import * as Action from './ActionItem';
import { SectionDivider } from './SectionDivider';

type ActionSectionP = {
  title?: string;
};

export const ActionSection = ({ title }: ActionSectionP) => {
  const { actions } = useNavigation();
  const {
    state: { isOpen },
  } = useSidebar();

  return (
    <>
      {title && isOpen ? <SectionDivider>{title}</SectionDivider> : <></>}

      {isOpen
        ? actions.map((props) => <Action.Item key={`action-nav-item-${props.name}`} {...props} />)
        : actions.map((props) => (
            <Action.Collapsed key={`action-nav-item-${props.name}`} {...props} />
          ))}
    </>
  );
};
