import notFound from '../assets/notFound.png'

function NotFoundPage() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <img className='w-[80vw] h-[80vh] overflow-hidden border-5 rounded-4xl' src={notFound} alt="" srcset="" />
    </div>
  )
}

export default NotFoundPage