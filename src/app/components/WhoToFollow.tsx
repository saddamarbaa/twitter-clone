/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import Button from './Button';
import RandomUser from './RandomUser';
import { RandomUserT } from '../types/randomUser';

type Props = {
  initialResult: RandomUserT[];
};

export default function WhoToFollow({ initialResult }: Props) {
  const [usersNumber, setUsersNumber] = useState(3);

  return initialResult?.length ? (
    <div className='flex w-full flex-col rounded bg-gray-50 py-1  text-gray-900 shadow transition duration-150 dark:bg-[#202327] dark:text-white dark:placeholder-gray-400 '>
      <div className='flex w-full flex-col space-y-2'>
        <p className='w-full cursor-pointer px-3 pt-1 text-base font-semibold md:text-lg '>Whats happening</p>
        {initialResult.slice(0, usersNumber).map((user) => (
          <RandomUser user={user} key={user.phone} />
        ))}
      </div>

      <Button
        preStyled='cursor-pointer p-2 text-sm text-twitterBlue-500  hover:text-twitterBlue-700 w-fit disabled:cursor-not-allowed'
        onClick={() => {
          setUsersNumber((prev) => (usersNumber > initialResult.length ? 3 : prev + 3));
        }}
      >
        {`${usersNumber < initialResult.length ? 'See More' : 'Show less'} `}
      </Button>
    </div>
  ) : (
    <div></div>
  );
}
