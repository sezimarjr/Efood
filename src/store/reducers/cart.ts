import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Cardapio[]
  isOpen: boolean
}
const initialState: CartState = {
  items: [],
  isOpen: false
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      const food = state.items.find((item) => item.id === action.payload.id)

      if (!food) {
        state.items.push(action.payload)
      } else {
        alert('Esse item ja foi adicionado')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, remove, open, close, clear } = CartSlice.actions
export default CartSlice.reducer
