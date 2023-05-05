import { ReactElement, createContext, useMemo, useReducer } from "react";

export type CartItemType = {
  sku: string;
  name: string;
  price: number;
  qty: number;
};

type CartStateType = { cart: CartItemType[] };

const initCartState: CartStateType = { cart: [] };

const ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};

export type ReducerActionType = typeof ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("Action.payload missing in ADD action");
      }

      const { sku, name, price } = action.payload;
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );
      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.sku == sku
      );
      const qty: number = itemExists ? itemExists.qty + 1 : 1;
      return { ...state, cart: [...filteredCart, { sku, name, price, qty }] };
    }

    case ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error("Action.payload missing in REMOVE action");
      }

      const { sku } = action.payload;
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );
      return { ...state, cart: [...filteredCart] };
    }

    case ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error("Action.payload missing in Quanity action");
      }

      const { sku, qty } = action.payload;
      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.sku == sku
      );

      if (!itemExists) {
        throw new Error("Item must exist in order to update qty");
      }

      const updatedItem: CartItemType = { ...itemExists, qty };
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );
      return { ...state, cart: [...filteredCart, updatedItem] };
    }

    case ACTION_TYPE.SUBMIT: {
      return { ...state, cart: [] };
    }

    default:
      throw new Error("Unidentified reducer action type");
  }
};

const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);

  const REDUCER_ACTIONS = useMemo(() => {
    return ACTION_TYPE;
  }, []);

  const totalItems: number = state.cart.reduce((prev, item) => {
    return prev + item.qty;
  }, 0);

  const totalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(
    state.cart.reduce((prev, item) => {
      return prev + item.qty * item.price;
    }, 0)
  );

  const cart = state.cart.sort((a,b) => {
    const itemA = Number(a.sku.slice(-4))
    const itemB = Number(b.sku.slice(-4))
    return itemA - itemB
  })

  return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart }
};

export type UseCartContextType = ReturnType<typeof useCartContext>

const initCartContextState: UseCartContextType = {
    dispatch: () => {},
    REDUCER_ACTIONS: ACTION_TYPE,
    totalItems: 0,
    totalPrice: '',
    cart: [],
}

export const CartContext = createContext<UseCartContextType>(initCartContextState)

type ChildrenTye = { children? : ReactElement | ReactElement[] }
export const CartProvider = ({ children }: ChildrenTye): ReactElement => {
    return (
        <CartContext.Provider value={useCartContext(initCartState)}>
            {children}
        </CartContext.Provider>
    )
}