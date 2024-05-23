import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CardInfo} from '../../pages/wallet/AddCard/CardInputs';
import {Card} from '../../pages/wallet/WalletMain';

interface AddCardState {
  cardInfo: CardInfo;
  cards: Card[];
}

const initialState: AddCardState = {
  cardInfo: {
    card_num: '',
    card_expiration_date: '',
    card_cvc: '',
    card_name: '',
    card_company: '',
    card_img: '',
  },
  cards: [],
};

export const addCardSlice = createSlice({
  name: 'addCard',
  initialState,
  reducers: {
    setCardInfo: (state, action: PayloadAction<CardInfo>) => {
      state.cardInfo = action.payload;
    },
    setCards: (state, action: PayloadAction<Partial<Card[]>>) => {
      state.cards = action.payload;
    },
  },
});

export const {setCardInfo, setCards} = addCardSlice.actions;

export default addCardSlice.reducer;
