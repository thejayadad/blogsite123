import React from 'react'
import Sidebar from './_components/sidebar';
import Header from '@/components/header/header';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

const layout = async ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const session = await auth();
  const userEmail = session?.user?.email;
  if(!userEmail){
    redirect('/')
  }
  let websites: { title: string; webaddress: string }[] = [];
  let recentWebsite: { title: string; webaddress: string } | null = null;
  if (userEmail) {
    websites = await prisma.website.findMany({
      where: { userEmail: userEmail },
      orderBy: { createdAt: 'desc' },
    });

    recentWebsite = websites[0] || null; // Get the most recent website if it exists
  }
  return (
    <div className='h-full'>
      <Header
      websites={websites} recentWebsite={recentWebsite}
      userEmail={userEmail}
      />
      <div className='flex'>
        <div className="flex-grow w-full lg:ml-64">
          {children}
        </div>
      </div>
    </div>
  ) 
}

export default layout