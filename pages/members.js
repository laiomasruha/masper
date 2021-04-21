import Head from 'next/head';
import React from 'react';
import { useFetch } from '../util/useFetch';
import MemberCard from '../components/MermberCard';

export default function Members() {
  const { data } = useFetch(`users`);

  if(!data){
    return <div></div>
  }
  
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Masper - Membros</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gray-300 rounded-t-lg">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-500">Membros</h1>
        </div>
      </header>

      <main>
        <div className="container max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex space-x-4">
          {
            data.map(user => (
              <MemberCard id={user._id} name={user.name} src={user.image} />
            ))
          }
        </div>
      </main>
    </div>
  )
}
