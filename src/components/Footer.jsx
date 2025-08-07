import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-200 py-10 md:flex justify-around items-center '>
      
      {/* bottom section */}
      <div className='text-center text-sm'>
        <p>&copy; {new Date().getFullYear()} <span className='text-red-500'>TCVShop</span>. All rights reserved</p>
      </div>

      <div className='max-w-7xl mt-5 md:mt-0 text-center'>
        {/* social media links */}
        <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold text-center'>Follow me</h3>
            <div className='flex space-x-4 mt-2 justify-center'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitterSquare/>
                <FaPinterest/>
            </div>
        </div>
      </div>
    
    </footer>
  )
}

export default Footer