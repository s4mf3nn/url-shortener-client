import copy from 'copy-to-clipboard';
import { FC } from 'react';
import { Clock, Copy, Eye } from 'react-feather';
import { useStore } from '../../store';
import { Text } from '../text/Text';
import * as sc from './card.style';
import Moment from 'react-moment';

interface CardProps {
  shortId: string;
  originUrl: string;
  createdAt: Date;
  views: number;
}

export const Card: FC<CardProps> = ({ shortId, originUrl, createdAt, views }) => {
  const { theme } = useStore();

  // Copy short URL to clicpboard
  const handleCopyUrl = () => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      copy(`http://localhost:3000/${shortId}`);
    } else {
      copy(`https://url-shortener-81190.web.app/${shortId}`);
    }
  };

  return (
    <sc.Wrapper bgColor={theme.CARD_BACKGROUND}>
      <sc.Header>
        <sc.ShortUrl>
          <Text large bold>fiii.it/</Text>
          <Text color={theme.SHORT_LINK} large bold>{shortId}</Text>
        </sc.ShortUrl>
        <sc.Side>
          <sc.Copy onClick={handleCopyUrl} theme={theme}>
            <Copy size={16} color={theme.COPY_BTN_ICON} />
          </sc.Copy>
          <sc.View theme={theme}>
            <Eye size={16} color={theme.VIEWS_BTN_LABEL} /> {views}
          </sc.View>
        </sc.Side>
      </sc.Header>
      <sc.Spacer size=".5rem" />
      <Text ellipsis small>{originUrl}</Text>
      <sc.Spacer size="1.5rem" />
      <sc.CreatedAt>
        <Clock size={14} />
        <Text ellipsis small>
          <Moment date={createdAt} format="MMMM DD YYYY · HH:mm" />
        </Text>
      </sc.CreatedAt>
    </sc.Wrapper >
  );
};
