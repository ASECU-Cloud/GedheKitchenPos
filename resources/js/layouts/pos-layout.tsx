import PosLayoutTemplate from '@/layouts/pos/pos-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
    <PosLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
        {children}
    </PosLayoutTemplate>
);
