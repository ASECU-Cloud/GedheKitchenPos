import AppLayout from '@/layouts/app-layout';
import { rupiahConverter } from '@/lib/utils';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 p-4 dark:border-sidebar-border">
                        {/* <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" /> */}
                        <div className="flex h-full flex-col justify-around">
                            <div className="text-4xl font-bold underline">Today Sales </div>
                            <div className="bottom-2 pb-4 text-end text-3xl">83</div>
                        </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 p-4 dark:border-sidebar-border">
                        {/* <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" /> */}
                        <div className="flex h-full flex-col justify-around">
                            <div className="text-4xl font-bold underline">Income </div>
                            <div className="bottom-2 pb-4 text-end text-3xl">Rp. {rupiahConverter(1000000)}</div>
                        </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 p-4 dark:border-sidebar-border">
                        {/* <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" /> */}
                        <div className="flex h-full flex-col justify-around">
                            <div className="text-4xl font-bold underline">Expense </div>
                            <div className="bottom-2 pb-4 text-end text-3xl">Rp. {rupiahConverter(845480)}</div>
                        </div>
                    </div>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 p-4 md:min-h-min dark:border-sidebar-border">
                    {/* <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" /> */}
                    <div>Latest Activity</div>
                    <div className="mt-3">
                        <table className="w-full text-center">
                            <thead>
                                <tr className="h-8">
                                    <th className="rounded-tl-md bg-neutral-800">No.</th>
                                    <th className="bg-neutral-800">Type</th>
                                    <th className="bg-neutral-800">Detail</th>
                                    <th className="rounded-tr-md bg-neutral-800">Income/Expense</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr className="h-8">
                                    <td className="bg-neutral-700">1</td>
                                    <td className="bg-neutral-700">Sales</td>
                                    <td className="bg-neutral-700">Sales Detail</td>
                                    <td className="bg-neutral-700">24.000</td>
                                </tr>
                                <tr className="h-8">
                                    <td className="bg-neutral-700">2</td>
                                    <td className="bg-neutral-700">Expense</td>
                                    <td className="bg-neutral-700">Expense Detail</td>
                                    <td className="bg-neutral-700">18.000</td>
                                </tr>
                                <tr className="h-8">
                                    <td className="bg-neutral-700">2</td>
                                    <td className="bg-neutral-700">Expense</td>
                                    <td className="bg-neutral-700">Expense Detail</td>
                                    <td className="bg-neutral-700">18.000</td>
                                </tr>
                                <tr className="h-8">
                                    <td className="bg-neutral-700">2</td>
                                    <td className="bg-neutral-700">Expense</td>
                                    <td className="bg-neutral-700">Expense Detail</td>
                                    <td className="bg-neutral-700">18.000</td>
                                </tr>
                                <tr className="h-8">
                                    <td className="bg-neutral-700">2</td>
                                    <td className="bg-neutral-700">Expense</td>
                                    <td className="bg-neutral-700">Expense Detail</td>
                                    <td className="bg-neutral-700">18.000</td>
                                </tr>
                                <tr className="h-8">
                                    <td className="bg-neutral-700">2</td>
                                    <td className="bg-neutral-700">Expense</td>
                                    <td className="bg-neutral-700">Expense Detail</td>
                                    <td className="bg-neutral-700">18.000</td>
                                </tr>
                                <tr className="h-8">
                                    <td className="bg-neutral-700">2</td>
                                    <td className="bg-neutral-700">Expense</td>
                                    <td className="bg-neutral-700">Expense Detail</td>
                                    <td className="bg-neutral-700">18.000</td>
                                </tr>
                                <tr className="h-8">
                                    <td className="bg-neutral-700">2</td>
                                    <td className="bg-neutral-700">Expense</td>
                                    <td className="bg-neutral-700">Expense Detail</td>
                                    <td className="bg-neutral-700">18.000</td>
                                </tr>
                                <tr className="h-8">
                                    <td className="bg-neutral-700">2</td>
                                    <td className="bg-neutral-700">Expense</td>
                                    <td className="bg-neutral-700">Expense Detail</td>
                                    <td className="bg-neutral-700">18.000</td>
                                </tr>
                                <tr className="h-8">
                                    <td className="bg-neutral-700">2</td>
                                    <td className="bg-neutral-700">Expense</td>
                                    <td className="bg-neutral-700">Expense Detail</td>
                                    <td className="bg-neutral-700">18.000</td>
                                </tr>
                                <tr className="h-8">
                                    <td className="bg-neutral-700">2</td>
                                    <td className="bg-neutral-700">Expense</td>
                                    <td className="bg-neutral-700">Expense Detail</td>
                                    <td className="bg-neutral-700">18.000</td>
                                </tr>
                                <tr className="h-8">
                                    <td className="bg-neutral-700">2</td>
                                    <td className="bg-neutral-700">Expense</td>
                                    <td className="bg-neutral-700">Expense Detail</td>
                                    <td className="bg-neutral-700">18.000</td>
                                </tr>
                                <tr className="h-8">
                                    <td className="bg-neutral-700">2</td>
                                    <td className="bg-neutral-700">Expense</td>
                                    <td className="bg-neutral-700">Expense Detail</td>
                                    <td className="bg-neutral-700">18.000</td>
                                </tr>
                                <tr className="h-8">
                                    <td className="bg-neutral-700">2</td>
                                    <td className="bg-neutral-700">Expense</td>
                                    <td className="bg-neutral-700">Expense Detail</td>
                                    <td className="bg-neutral-700">18.000</td>
                                </tr>
                                <tr className="h-8">
                                    <td className="rounded-bl-md bg-neutral-700">3</td>
                                    <td className="bg-neutral-700">Stock</td>
                                    <td className="bg-neutral-700">Restock </td>
                                    <td className="rounded-br-md bg-neutral-700">-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
