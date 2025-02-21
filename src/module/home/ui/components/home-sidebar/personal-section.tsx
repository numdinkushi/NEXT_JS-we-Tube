'use client';

import { SidebarGroupContent, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import {  HistoryIcon, ListVideoIcon, ThumbsUpIcon } from "lucide-react";
import Link from "next/link";

const items = [
    {
        title: 'History',
        url: '/playlists/history',
        icon: HistoryIcon,
    },
    {
        title: 'Liked Videos',
        url: '/playlists/liked',
        icon: ThumbsUpIcon,
        auth: true
    },
    {
        title: 'All Playlists',
        url: '/playlists',
        icon: ListVideoIcon,
        auth: true,
    },
];

const PersonalSection = () => {
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

export default PersonalSection;