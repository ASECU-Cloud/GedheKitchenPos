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

const tableRowPlaceholderProps = {
    header: ['No.', 'Type', 'Detail', 'Income/Expense'],
    rowCount: 50,
};

function tableRowPlaceholder(props: typeof tableRowPlaceholderProps) {
    return (
        <table className="w-full overflow-x-scroll text-center">
            <thead>
                <tr className="h-8">
                    {props.header.map((item, index) => (
                        <th
                            key={index}
                            className={`bg-neutral-800 ${index === 0 ? 'rounded-tl-md' : ''} ${index === props.header.length - 1 ? 'rounded-tr-md' : ''}`}
                        >
                            {item}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="overflow-auto">
                {Array.from({ length: props.rowCount }).map((_, index) => (
                    <tr key={index} className="h-8">
                        {props.header.map((_, cellIndex) => (
                            <td
                                key={cellIndex}
                                className={`bg-neutral-700 ${cellIndex === 0 ? (index === props.rowCount - 1 ? 'rounded-bl-md' : '') : ''} ${cellIndex === props.header.length - 1 ? (index === props.rowCount - 1 ? 'rounded-br-md' : '') : ''}`}
                            >
                                testValue
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex flex-1 flex-col gap-4 rounded-xl bg-red-400 p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 p-4 dark:border-sidebar-border">
                        {/* <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" /> */}
                        <div className="flex h-full flex-col justify-around">
                            <div className="text-4xl font-bold underline">Today Sales </div>
                            <div className="bottom-2 pb-4 text-end text-3xl">83</div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 p-4 dark:border-sidebar-border">
                        {/* <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" /> */}
                        <div className="flex h-full flex-col justify-around">
                            <div className="text-4xl font-bold underline">Income </div>
                            <div className="bottom-2 pb-4 text-end text-3xl">Rp. {rupiahConverter(1000000)}</div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 p-4 dark:border-sidebar-border">
                        {/* <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" /> */}
                        <div className="flex h-full flex-col justify-around">
                            <div className="text-4xl font-bold underline">Expense </div>
                            <div className="bottom-2 pb-4 text-end text-3xl">Rp. {rupiahConverter(845480)}</div>
                        </div>
                    </div>
                </div>
                <div className="relative min-h-screen flex-1 rounded-xl border border-sidebar-border/70 bg-emerald-300 p-4 md:min-h-min dark:border-sidebar-border">
                    {/* <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" /> */}
                    <div>Latest Account Activity</div>
                    <div className="bg-emerald-400">{tableRowPlaceholder(tableRowPlaceholderProps)}</div>
                </div>
            </div>
        </AppLayout>
    );
}
