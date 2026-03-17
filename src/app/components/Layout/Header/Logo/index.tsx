import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <span className='text-2xl font-bold text-primary'>
        Syed<span className='text-darkblue dark:text-white'> Qamar Abbas</span>
      </span>
    </Link>
  )
}

export default Logo
