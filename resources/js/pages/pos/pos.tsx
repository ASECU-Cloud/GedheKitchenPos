import PosLayout from '@/layouts/pos-layout';
import { pos } from '@/routes';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { ArrowBigRightDashIcon, SaveIcon, ShoppingBasketIcon } from 'lucide-react';

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

const mockMenuData: menu[] = [
    { name: 'nasi Ayam Geprek', price: 12000 },
    { name: 'nasi Ayam Krispi', price: 10000 },
    { name: 'nasi Ayam Krispi', price: 10000 },
    { name: 'nasi Ayam Krispi', price: 10000 },
    { name: 'nasi Ayam Krispi', price: 10000 },
    { name: 'nasi Ayam Krispi', price: 10000 },
    { name: 'nasi Ayam Krispi', price: 10000 },
    { name: 'nasi Ayam Krispi', price: 10000 },
    { name: 'nasi Ayam Krispi', price: 10000 },
    { name: 'nasi Ayam Krispi', price: 10000 },
    { name: 'nasi Ayam Krispi', price: 10000 },
    { name: 'nasi Ayam Krispi', price: 10000 },
    { name: 'nasi Ayam Krispi', price: 10000 },
    { name: 'nasi Ayam Krispi', price: 10000 },
    { name: 'nasi Ayam Krispi', price: 10000 },
    { name: 'nasi Ayam Krispi', price: 10000 },
    { name: 'nasi Ayam Krispi', price: 10000 },
    { name: 'nasi Ayam Krispi', price: 10000 },
    { name: 'nasi Ayam Krispi', price: 10000 },
    { name: 'nasi Ayam Krispi', price: 10000 },
    { name: 'nasi Ayam Krispi', price: 10000 },
];

function mockMenu(mockMenuData: menu[]) {
    return mockMenuData.map((menu: menu, index) => (
        <div key={index} className="flex h-32 w-32 flex-col rounded-md bg-neutral-700 p-2">
            <div>image</div>
            <div>
                <div className="text-lg">{menu.name}</div>
                <div>Rp {menu.price}</div>
            </div>
        </div>
    ));
}

export default function Pos() {
    return (
        <PosLayout breadcrumbs={breadcrumbs}>
            <Head title="Inventory" />
            <div className="flex flex-1 flex-col gap-4 overflow-scroll p-4">
                <div className="grid h-full grid-cols-6">
                    <div className="col-span-4 overflow-scroll">
                        <div className="flex flex-row flex-wrap gap-3">{mockMenu(mockMenuData)}</div>
                        {/* <div className="text-center">No Menu found.</div> */}
                    </div>
                    <div className="col-span-2 box-border flex h-full w-full flex-col rounded-md bg-neutral-800 p-4">
                        <div className="flex flex-row gap-2 border-b-2 border-accent-foreground p-3">
                            <ShoppingBasketIcon /> <span className="font-black">CART</span>
                        </div>
                        <div id="cartItems" className="my-4">
                            <div id="item" className="flex flex-row justify-between rounded bg-emerald-800 p-1">
                                <ul className="text-xs">
                                    <li className="font-bold">paket nasi ayam krispi</li>
                                    <li>Rp 10.000/pcs</li>
                                    <li>Extra: nasi, Extra: sambel bawang</li>
                                </ul>

                                <ul className="self-center text-xs">
                                    <li>Rp 15.000</li>
                                    <li>1pcs</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-auto flex w-full gap-2">
                            <button className="rounded-full bg-cyan-700 p-2 hover:bg-cyan-600 disabled:bg-gray-400">
                                <SaveIcon className="h-6 w-6" />
                            </button>
                            <button className="inline-flex w-full justify-center rounded-md bg-emerald-700 p-2 hover:bg-emerald-600 disabled:bg-gray-400">
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
