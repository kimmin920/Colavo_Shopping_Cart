import { NoticeContainer } from './NoticeContainer';
import { HeartPurple } from './StyledIcons';

export default function Loader(): JSX.Element {
  return (
    <NoticeContainer>
      <HeartPurple size={40} />
      <br />
      Loading...
    </NoticeContainer>
  );
}
