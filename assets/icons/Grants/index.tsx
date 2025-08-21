import { FC } from 'react';

import { TIcon } from '@/lib/interfaces/shared';
import cn from '@/lib/packages/cn';

const Grants: FC<TIcon> = ({ className }) => {
  return (
    <svg className={cn(className)}>
      <use xlinkHref='#FPG_logo_white' />
    </svg>
  );
};

export default Grants;
