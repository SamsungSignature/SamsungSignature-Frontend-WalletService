import {useHeaderHeight} from '@react-navigation/elements';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import AppButton from '../../../components/common/AppButton';
import AppCheckbox from '../../../components/common/AppCheckbox';
import STYLES from '../../../constants/appStyles';
import TERMS from '../../../constants/terms';
import createCheckArray from '../../../functions/createCheckArray';
import useTerms from '../../../hooks/useTerms';
import {RootStackParams} from '../../../routes/RootNavigator';
import {useAppSelector} from '../../../stores/hooks';
import {RootState} from '../../../stores/store';
import {BottomButtonView, Wrapper} from '../Common.style';
import {
  AllCheckBox,
  AllCheckText,
  AllCheckView,
  Container,
  Info,
  InfoView,
  TermDetail,
  TermTextView,
  TermTitle,
  TermView,
  TermsView,
} from './AddCardTerms.style';

const AddCardTerms = () => {
  const headerHeight = useHeaderHeight();
  const cardCompany = useAppSelector(
    (state: RootState) => state.addCard.cardInfo.card_company,
  );
  const {termChecks, setTermChecks, setAgreement, checkValid} = useTerms(
    'ADD_CARD',
    {function: {isFunction: true, props: {cardCompany}}},
  );

  // 단일 체크
  const setTermCheck = (idx: number) => {
    setTermChecks(prev => {
      const next = [...prev];
      next[idx] = !next[idx];
      return next;
    });
  };

  // 모두 동의하기
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (checked) {
      setTermChecks(
        createCheckArray(TERMS.ADD_CARD(cardCompany).length, {fillTrue: true}),
      );
    } else if (!termChecks.some(item => !item)) {
      setTermChecks(createCheckArray(TERMS.ADD_CARD.length));
    }
  }, [checked]);

  // 동의 체크 해제
  useEffect(() => {
    if (!termChecks.some(item => !item)) {
      setAgreement(true);
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [termChecks]);

  // 네비게이션
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const toNext = () => {
    navigation.navigate('BiometricCheck');
  };

  return (
    <Wrapper $headerHeight={headerHeight}>
      <Container>
        <InfoView>
          <Info>{cardCompany}카드</Info>
          <Info>서비스 사용을 위해 버튼을 눌러 다음에 동의해주세요.</Info>
        </InfoView>
        <TermsView>
          {TERMS.ADD_CARD(cardCompany).map((term, idx) => (
            <TermView key={idx}>
              <AppCheckbox
                checked={termChecks[idx]}
                setChecked={() => setTermCheck(idx)}
                style={STYLES.CHECKBOX.SMALL}
              />
              <TermTextView>
                <TermTitle>{term.title}</TermTitle>
                <TermDetail>자세히</TermDetail>
              </TermTextView>
            </TermView>
          ))}
        </TermsView>
      </Container>
      <AllCheckBox>
        <AllCheckView>
          <AppCheckbox
            checked={checked}
            setChecked={setChecked}
            style={STYLES.CHECKBOX.SMALL}
          />
          <AllCheckText>전체</AllCheckText>
        </AllCheckView>
      </AllCheckBox>
      <BottomButtonView>
        <AppButton
          text="계속"
          style={STYLES.BUTTONS.TRANSPARENT}
          type="pressable"
          disabled={!checkValid()}
          onPress={toNext}
        />
      </BottomButtonView>
    </Wrapper>
  );
};

export default AddCardTerms;
