import { FC, ReactNode } from 'react';
import { XCircle } from 'react-feather';
import * as sc from './modal.style';

interface ModalProps {
  isOpen: boolean;
  bgColor: string;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, bgColor, onClose, children }) => {
  return (
    <sc.Wrapper isOpen={isOpen}>
      <sc.Modal bgColor={bgColor}>
        <sc.CloseContainer>
          <sc.Close onClick={onClose}>
            <XCircle size={28} />
          </sc.Close>
        </sc.CloseContainer>
        <sc.Main>
          {children}
        </sc.Main>
      </sc.Modal>
    </sc.Wrapper>
  );
};
