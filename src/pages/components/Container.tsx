export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8'>
      {children}
    </div>
  )
}
