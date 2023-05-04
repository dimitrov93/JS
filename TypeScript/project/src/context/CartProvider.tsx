export type CartItemType = {
    sku: string,
    name: string,
    price: number,
    qty: number
}

type CartStateType = { cart: CartItemType[] }

const initCartState: CartStateType = { cart: []}

const ACTION_TYPE = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT",
}

export type ReducerActionType = typeof ACTION_TYPE

export type ReducerAction = {
    type: string,
    payload?: CartItemType
}

const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
    switch (action.type) {
        case ACTION_TYPE.ADD: {
            if (!action.payload) {
                throw new Error('Action.payload missing in ADD action')
            }

            const { sku, name, price } = action.payload
            const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku )
            const itemExists: CartItemType | undefined = state.cart.find(item => item.sku == sku)
            const qty: number = itemExists ? itemExists.qty + 1 : 1
            return {...state, cart: [...filteredCart, { sku, name, price, qty}]}
        }
            
        case ACTION_TYPE.REMOVE: {
            if (!action.payload) {
                throw new Error('Action.payload missing in REMOVE action')
            }
        }

        case ACTION_TYPE.QUANTITY: {
            if (!action.payload) {
                throw new Error('Action.payload missing in Quanity action')
            }
        }

        case ACTION_TYPE.SUBMIT: {
            return {...state, cart: []}
        }
    
        default:
            throw new Error('Unidentified reducer action type')
    }
}