'use client';

import { SidebarGroupContent, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";
import Link from "next/link";

const items = [
    {
        title: 'Home',
        url: '/',
        icon: HomeIcon
    },
    {
        title: 'Subscriptions',
        url: '/feed/subscriptions',
        icon: PlaySquareIcon,
        auth: true
    },
    {
        title: 'Trending',
        url: '/feed/trending',
        icon: FlameIcon
    },
];

const MainSection = () => {
    return (
        <SidebarGroupContent>
            {items.map((item) => (
                <SidebarMenuItem key={item.title} className="list-none">
                    <SidebarMenuButton
                        tooltip={item.title}
                        onClick={() => { }}
                        isActive={false}
                        asChild
                    >
                        <Link href={item.url} className="flex items-center gap-4">
                            <item.icon />
                            <span className="text-sm">{item.title}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </SidebarGroupContent>
    );
};

export default MainSection;