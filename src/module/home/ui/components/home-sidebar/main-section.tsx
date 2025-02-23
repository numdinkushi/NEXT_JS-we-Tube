'use client';

import { SidebarGroupContent, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { useAuth, useClerk } from "@clerk/nextjs";
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
    const { isSignedIn } = useAuth();
    const clerk = useClerk();
    return (
        <SidebarGroupContent>
            {items.map((item) => (
                <SidebarMenuItem key={item.title} className="list-none">
                    <SidebarMenuButton
                        tooltip={item.title}
                        onClick={(e) => {
                            console.log(123213, 'kush');
                            if (!isSignedIn && item.auth) {
                                e.preventDefault();
                                return clerk.openSignIn();
                            }
                        }}
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