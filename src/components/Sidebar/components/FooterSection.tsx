import { useNavigation } from '../hooks/useNavigation';
import { useSidebar } from '../store/sidebar';

import * as Action from './ActionItem';
import { SectionDivider } from './SectionDivider';

type FooterSectionP = {
  title?: string;
};

export const FooterSection = ({ title }: FooterSectionP) => {
  const { footer } = useNavigation();
  const {
    state: { isOpen },
  } = useSidebar();

  return (
    <>
      {title && isOpen ? <SectionDivider>{title}</SectionDivider> : <></>}

      {isOpen
        ? footer.map((props) => <Action.Item key={`footer-nav-item-${props.name}`} {...props} />)
        : footer.map((props) => (
            <Action.Collapsed key={`footer-nav-item-${props.name}`} {...props} />
          ))}
    </>
  );
};
