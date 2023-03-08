import copy from 'copy-to-clipboard';
import { FC } from 'react';
import { Clock, Copy, Eye } from 'react-feather';
import { Text } from '../text/Text';
import * as sc from './card.style';

interface CardProps {
  shortId: string;
  originUrl: string;
  createdAt: string;
  views: number;
}

export const Card: FC<CardProps> = ({ shortId, originUrl, createdAt, views }) => {

  // Copy short URL to clicpboard
  const handleCopyUrl = () => {
    copy(`https://www.fiii.it/${shortId}`);
  };

  return (
    <sc.Wrapper>
      <sc.Header>
        <sc.ShortUrl>
          <Text large bold>fiii.it/</Text>
          <Text color="#1463ff" large bold>{shortId}</Text>
        </sc.ShortUrl>
        <sc.Side>
          <sc.Copy onClick={handleCopyUrl}>
            <Copy size={16} />
          </sc.Copy>
          <sc.View>
            <Eye size={16} /> {views}
          </sc.View>
        </sc.Side>
      </sc.Header>
      <sc.Spacer size=".5rem" />
      <Text ellipsis small>{originUrl}</Text>
      <sc.Spacer size="1.5rem" />
      <sc.CreatedAt>
        <Clock size={14} />
        <Text ellipsis small>{createdAt}</Text>
      </sc.CreatedAt>
    </sc.Wrapper >
  );
};
