import Image from '@/components/elements/Image';
import ZoomOnHover from '@/components/elements/ZoomOnHover';

const ImageGrid = () => {
  return (
    <div className='mt-14 flex justify-end gap-8 lg:-mt-44 xl:mt-0 xl:pl-20'>
      <div className='ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-0 lg:pt-36 xl:order-last xl:pt-80'>
        <div className='relative overflow-hidden rounded-xl'>
          <ZoomOnHover>
            <Image
              alt='images'
              src='/4.jpg'
              className='aspect-2/3 w-full rounded-xl bg-primary/5 object-cover shadow-lg'
            />
          </ZoomOnHover>
          <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-primary/10 ring-inset' />
        </div>
      </div>
      <div className='mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36'>
        <div className='relative overflow-hidden rounded-xl'>
          <ZoomOnHover>
            <Image
              alt='images'
              src='/2.jpg'
              className='aspect-2/3 w-full rounded-xl bg-primary/5 object-cover shadow-lg'
            />
          </ZoomOnHover>
          <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset' />
        </div>
        <div className='relative overflow-hidden rounded-xl'>
          <ZoomOnHover>
            <Image
              alt='images'
              src='/1.jpg'
              className='aspect-2/3 w-full rounded-xl bg-primary/5 object-cover shadow-lg'
            />
          </ZoomOnHover>
          <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset' />
        </div>
      </div>
      <div className='w-44 flex-none space-y-8 pt-32 sm:pt-0'>
        <div className='relative overflow-hidden rounded-xl'>
          <ZoomOnHover>
            <Image
              alt='images'
              src='/3.jpg'
              className='aspect-2/3 w-full rounded-xl bg-primary/5 object-cover shadow-lg'
            />
          </ZoomOnHover>
          <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset' />
        </div>
        <div className='relative overflow-hidden rounded-xl'>
          <ZoomOnHover>
            <Image alt='' src='/5.jpg' className='aspect-2/3 w-full rounded-xl bg-primary/5 object-cover shadow-lg' />
          </ZoomOnHover>
          <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset' />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
