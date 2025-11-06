import PosLayout from '@/layouts/pos-layout';
import { rupiahConverter } from '@/lib/utils';
import { pos } from '@/routes';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { ArrowBigRightDashIcon, SaveIcon, ShoppingBasketIcon, TrashIcon } from 'lucide-react';
import { ReactNode, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'POS',
        href: pos().url,
    },
];

interface menu {
    name: string;
    price: number;
}

interface basketItem extends menu {
    quantity: number;
}

const menus: menu[] = [
    { name: 'nasi Ayam Geprek', price: 12000 },
    { name: 'nasi Ayam Krispi', price: 10000 },
];

type AlterBasketTyping = (menu: menu, action: 'add' | 'remove' | 'alter', value?: number) => void;

interface popUp {
    children: ReactNode;
    basketItem: basketItem;
    tempQuantity: string;
    showPopUp: boolean;
    setPopUp: React.Dispatch<boolean>;
    alterBasket: AlterBasketTyping;
}

function PopUp({ children, basketItem, tempQuantity, showPopUp, setPopUp, alterBasket }: popUp) {
    if (!showPopUp) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="relative w-xl rounded-lg bg-neutral-800 p-6 shadow-lg">
                <button
                    onClick={() => {
                        setPopUp(false);
                        alterBasket(basketItem, 'alter', parseInt(tempQuantity));
                    }}
                    className="absolute -top-1 -right-1 h-7 w-7 rounded-full bg-red-500 font-bold hover:bg-red-700"
                >
                    X
                </button>
                {children}
            </div>
        </div>
    );
}

export default function Pos() {
    const [basket, setBasket] = useState<basketItem[]>([]);
    const [showPopUp, setPopUp] = useState<boolean>(false);
    const [basketItem, setBasketItem] = useState<basketItem>({ name: '', price: 0, quantity: 0 });
    const [tempQuantity, setTempQuantity] = useState('');

    function alterBasket(menu: menu, action: 'add' | 'remove' | 'alter', value: number = 0) {
        switch (action) {
            case 'add':
                setBasket((prevBasket) => {
                    const existingItemIndex = prevBasket.findIndex((item) => item.name === menu.name);
                    if (existingItemIndex !== -1) {
                        const updatedBasket = [...prevBasket];
                        updatedBasket[existingItemIndex].quantity += 1;
                        return updatedBasket;
                    } else {
                        return [...prevBasket, { ...menu, quantity: 1 }];
                    }
                });
                break;
            case 'remove':
                setBasket((prevBasket) => {
                    const existingItemIndex = prevBasket.findIndex((item) => item.name === menu.name);
                    if (existingItemIndex !== -1 && value > 0) {
                        const updatedBasket = [...prevBasket];
                        if (updatedBasket[existingItemIndex].quantity > 1) {
                            updatedBasket[existingItemIndex].quantity -= 1;
                        } else {
                            updatedBasket.splice(existingItemIndex, 1);
                            setBasketItem({ name: '', price: 0, quantity: 0 });
                        }
                        return updatedBasket;
                    }

                    return prevBasket;
                });
                break;
            case 'alter':
                setBasket((prevBasket) => {
                    const existingItemIndex = prevBasket.findIndex((item) => item.name === menu.name);
                    // jika item ditemukan
                    // value lebih dari 0
                    // update basket item quantity to value
                    // jika bukan 0 maka hapus
                    const updatedBasket = [...prevBasket];
                    if (existingItemIndex !== -1 && value > 0) {
                        updatedBasket[existingItemIndex].quantity = value;
                        return updatedBasket;
                    } else if (updatedBasket[existingItemIndex].quantity >= 1 && value === 0) {
                        updatedBasket.splice(existingItemIndex, 1);
                        setPopUp(false);
                        setBasketItem({ name: '', price: 0, quantity: 0 });
                        return updatedBasket;
                    } else {
                        return prevBasket;
                    }
                });
                break;

            default:
                break;
        }
    }

    function renderMenu(menus: menu[]) {
        return menus.map((menu: menu, index) => (
            <div
                key={index}
                onClick={() => alterBasket(menu, 'add')}
                className="flex h-32 w-32 flex-col rounded-md bg-neutral-700 p-2 hover:bg-neutral-600"
            >
                <div>image</div>
                <div>
                    <div className="text-lg">{menu.name}</div>
                    <div>Rp {menu.price}</div>
                </div>
            </div>
        ));
    }

    function renderBasketItem(basket: basketItem[]) {
        return basket.length > 0 ? (
            basket?.map((item, index) => (
                <div
                    id="item"
                    key={index}
                    onClick={() => {
                        setTempQuantity('' + item.quantity);
                        setPopUp(true);
                        setBasketItem(item);
                    }}
                    className="mb-2 flex flex-row justify-between rounded bg-emerald-800 p-1"
                >
                    <ul className="text-xs">
                        <li className="font-bold">{item.name}</li>
                        <li>Rp {rupiahConverter(item.price)}/pcs</li>
                        <li>Extra: nasi, Extra: sambel bawang</li>
                    </ul>

                    <ul className="self-center text-xs">
                        <li>Rp {rupiahConverter(item.price * item.quantity)}</li>
                        <li>{item.quantity}pcs</li>
                    </ul>
                </div>
            ))
        ) : (
            <div></div>
        );
    }

    function proceedBasket() {
        console.log('proceeding basket', basket);
    }

    return (
        <PosLayout breadcrumbs={breadcrumbs}>
            <Head title="Inventory" />
            <div className="flex flex-1 flex-col gap-4 overflow-scroll p-4">
                <PopUp showPopUp={showPopUp} basketItem={basketItem} tempQuantity={tempQuantity} setPopUp={setPopUp} alterBasket={alterBasket}>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row justify-between">
                            <ul className="">
                                <li className="font-bold">{basketItem.name}</li>
                                <li>Rp {rupiahConverter(basketItem.price)}/pcs</li>
                                <li>Extra: nasi, Extra: sambel bawang</li>
                            </ul>

                            <ul className="self-center">
                                <li>Rp {rupiahConverter(basketItem.price * basketItem.quantity)}</li>
                            </ul>
                            <ul className="self-center">
                                <input
                                    key={basketItem.name}
                                    className="w-20 rounded border border-neutral-700 bg-neutral-900 p-2 text-end"
                                    onFocus={(e) => {
                                        const val = e.target.value;
                                        e.target.value = '';
                                        e.target.value = val;
                                    }}
                                    value={tempQuantity}
                                    onChange={(e) => setTempQuantity(e.target.value)}
                                />
                            </ul>
                        </div>
                        <div className="mt-auto flex w-full gap-2">
                            <div>
                                <button
                                    onClick={() => alterBasket(basketItem, 'alter', 0)}
                                    className="rounded-full bg-red-700 p-2 hover:bg-cyan-600 disabled:bg-gray-400"
                                >
                                    <TrashIcon className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </PopUp>
                <div className="grid h-full grid-cols-6">
                    <div className="col-span-4 overflow-scroll">
                        <div className="flex flex-row flex-wrap gap-3">{renderMenu(menus)}</div>
                        {/* <div className="text-center">No Menu found.</div> */}
                    </div>
                    <div className="col-span-2 box-border flex h-full w-full flex-col overflow-scroll rounded-md bg-neutral-800 p-4">
                        <div className="flex flex-row gap-2 border-b-2 border-accent-foreground p-3">
                            <ShoppingBasketIcon /> <span className="font-black">CART</span>
                        </div>
                        <div id="cartItems" className="my-4 grow overflow-scroll">
                            {renderBasketItem(basket)}
                        </div>
                        <div className="mt-auto flex w-full gap-2">
                            <button className="rounded-full bg-cyan-700 p-2 hover:bg-cyan-600 disabled:bg-gray-400">
                                <SaveIcon className="h-6 w-6" />
                            </button>
                            <button
                                onClick={() => proceedBasket()}
                                className="inline-flex w-full justify-center rounded-md bg-emerald-700 p-2 hover:bg-emerald-600 disabled:bg-gray-400"
                            >
                                <div className="font-bold">Proceed</div>
                                <ArrowBigRightDashIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </PosLayout>
    );
}
