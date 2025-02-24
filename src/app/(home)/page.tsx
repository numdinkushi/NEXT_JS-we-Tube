// 'use client';
// import { trpc } from '@/trpc/client';
import { HydrateClient, trpc } from '@/trpc/server';
import React, { Suspense } from 'react';
import PageClient from './client';
import {ErrorBoundary} from 'react-error-boundary';

const Home = async () => {
  void trpc.hello.prefetch({ text: 'd' });
  // const { data } = trpc.hello.useQuery({text: 'kushhee'});
  // console.log('data', data);

  return (
    <HydrateClient>
      <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary fallback={<p>Error...</p>} />
        <PageClient />
      </Suspense>
    </HydrateClient>
  );
};

export default Home;