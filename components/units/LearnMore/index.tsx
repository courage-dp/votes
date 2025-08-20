import { FC } from 'react';

import { ArrowRight } from 'lucide-react';

import Link from '@/components/elements/Link';
import { TWithClassName } from '@/lib/interfaces/shared';
import cn from '@/lib/packages/cn';

const LearnMore: FC<TWithClassName & { href?: string; text?: string }> = ({
  className,
  href = '/',
  text = 'Подробнее',
}) => {
  return (
    <Link
      href={href}
      className={cn('flex items-center gap-x-2 text-base/7 font-semibold hover:text-info md:text-sm/6', className)}
    >
      {text}&nbsp;
      <span aria-hidden='true'>
        <ArrowRight className='size-4 sm:size-6' />
      </span>
    </Link>
  );
};

export default LearnMore;
