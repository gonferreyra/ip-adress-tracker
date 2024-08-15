export default function Skeleton() {
  return (
    <div className='p-6 bg-white z-10 w-full max-w-md rounded-lg flex flex-col text-center gap-4 md:flex-row md:justify-between md:max-w-xl md:text-left anim'>
      <div className='basis-1/4'>
        <div className='animate-pulse w-full h-4 rounded-md bg-gray-300 mb-2' />
        <div className='animate-pulse w-full h-4 rounded-md bg-gray-300' />
      </div>
      <div className='border-l border-darkGray hidden md:block' />
      <div className='basis-1/4'>
        <div className='animate-pulse w-full h-4 rounded-md bg-gray-300 mb-2' />
        <div className='animate-pulse w-full h-4 rounded-md bg-gray-300' />
      </div>
      <div className='border-l border-darkGray hidden md:block' />
      <div className='basis-1/4'>
        <div className='animate-pulse w-full h-4 rounded-md bg-gray-300 mb-2' />
        <div className='animate-pulse w-full h-4 rounded-md bg-gray-300' />
      </div>
      <div className='border-l border-darkGray hidden md:block' />
      <div className='basis-1/4'>
        <div className='animate-pulse w-full h-4 rounded-md bg-gray-300 mb-2' />
        <div className='animate-pulse w-full h-4 rounded-md bg-gray-300' />
      </div>
    </div>
  );
}
