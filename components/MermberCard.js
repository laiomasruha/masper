import Link from 'next/link';
import React from 'react';
import Avatar from './avatar';

export default function MemberCard(props) {
  return (
    <div className="bg-white shadow p-10 rounded flex flex-col items-center">
      <Avatar size="80" src={props.src} />
      <div className="py-5 font-medium text-gray-700">{props.name}</div>
      <Link href={`/member/${props.id}`}>
        <button className="px-6 py-2 rounded shadow bg-gray-700 text-white flex" type="button">
          Ver mais
        </button>
      </Link>
    </div>
  )
}
