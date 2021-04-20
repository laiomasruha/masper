import React from 'react';
import { useRouter } from 'next/router';
import { useFetch } from '../../util/useFetch';
import Avatar from '../../components/avatar';
import Info from '../../components/Info';

export default function Member() {
  const router = useRouter();

  const { data } = useFetch(`http://localhost:3000/api/user/${router.query.id}`);

  if (!data) {
    return <div></div>
  }

  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center">
          <Avatar size="60" src={data.image} />
          <div className="ml-5">
            <h1 className="text-3xl font-bold text-gray-600">{data.name}</h1>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600 ml-1">{data.cpf}</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex">
          <Info user={data} />
        </div>
      </main>
    </div>
  )
}
