'use client';

import { FC } from 'react';

import { useTheme } from 'next-themes';

import Image from '@/components/elements/Image';
import Tag from '@/components/elements/Tag';
import Title from '@/components/elements/Title';
import { TWithId } from '@/lib/interfaces/shared';
import cn from '@/lib/packages/cn';

const Partnership: FC<TWithId> = ({ id }) => {
  const { theme } = useTheme();

  return (
    <Tag tag='section' id={id} inMotion={false} className='py-10 sm:py-20'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8' suppressHydrationWarning >
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          <Title level='3' variant='tertiary' className='text-center'>
            Наши партнеры
          </Title>
          <div className='mx-auto mt-24 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-4'>
            <Image
              alt='Фонд президентских грантов'
              src='/fpg_white.png'
              width={158}
              height={48}
              className={cn(
                'col-span-2 max-h-16 w-full object-contain object-center lg:col-span-1',
                theme === 'dark' ? 'invert-0' : 'invert-100'
              )}
            />
            <Image
              alt='Госуслуги'
              src='/gos_uslugi.png'
              width={158}
              height={48}
              className={cn(
                'col-span-2 max-h-16 w-full items-center justify-center object-contain object-center lg:col-span-1',
                theme === 'dark' ? 'invert-0' : 'invert-100'
              )}
            />
            <Image
              alt='SavvyCal'
              src='/dobro.png'
              width={158}
              height={48}
              className={cn(
                'col-span-2 max-h-16 w-full object-contain object-left lg:col-span-1',
                theme === 'dark' ? 'invert-0' : 'invert-100'
              )}
            />

            <Image
              alt='Statamic'
              src='/sber_logo.png'
              width={158}
              height={48}
              className={cn(
                'col-span-2 max-h-12 w-full object-contain object-center lg:col-span-1',
                theme === 'dark' ? 'invert-0' : 'invert-100'
              )}
            />
          </div>
        </div>
      </div>
    </Tag>
  );
};

export default Partnership;
