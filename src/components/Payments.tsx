import { CardExpiredDate, CardNumbers } from '../type';

import BottomButton from './BottomButton';
import CardForm from './CardForm';
import CardPreview from './CardPreview';
import { Link } from 'react-router-dom';
import { UseCardCVC } from '../hooks/useCardCVC';
import { UseCardExpiredDate } from '../hooks/useCardExpiredDate';
import { UseCardHolder } from '../hooks/useCardHolder';
import { UseCardIssuer } from '../hooks/useCardIssuer';
import { UseCardNumbers } from '../hooks/useCardNumbers';
import { UseCardPasswordHead } from '../hooks/useCardPasswordHead';
import styled from '@emotion/styled';

interface Props {
  useCardNumbers: UseCardNumbers;
  useCardExpiredDate: UseCardExpiredDate;
  useCardHolder: UseCardHolder;
  useCardIssuer: UseCardIssuer;
  useCardCVC: UseCardCVC;
  useCardPasswordHead: UseCardPasswordHead;
  setPath: () => void;
}

function Payments({
  useCardNumbers,
  useCardExpiredDate,
  useCardHolder,
  useCardIssuer,
  useCardCVC,
  useCardPasswordHead,
  setPath,
}: Props) {
  setPath();
  const cardInfo = {
    cardNumbers: useCardNumbers.cardNumbers as CardNumbers,
    cardIssuer: useCardIssuer.issuer,
    expiredDate: useCardExpiredDate.expiredDate as CardExpiredDate,
    cardHolder: useCardHolder.holder,
  };

  const isValid =
    useCardNumbers.isValid &&
    useCardExpiredDate.isValid &&
    useCardHolder.isValid &&
    useCardCVC.isValid &&
    useCardPasswordHead.isValid;

  return (
    <PaymentsContainer>
      <CardPreview cardInfo={cardInfo} />
      <CardForm
        useCardNumbers={useCardNumbers}
        useCardExpiredDate={useCardExpiredDate}
        useCardHolder={useCardHolder}
        useCardIssuer={useCardIssuer}
        useCardCVC={useCardCVC}
        useCardPasswordHead={useCardPasswordHead}
      />
      {isValid && (
        <Link to='/complete-payment-register'>
          <BottomButton tabIndex={11} autoFocus>
            확인
          </BottomButton>
        </Link>
      )}
    </PaymentsContainer>
  );
}

export default Payments;

const PaymentsContainer = styled.section({
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '30px',
  padding: '50px',
  paddingBottom: '0px',
});
