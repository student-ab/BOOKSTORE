
import Course from '../comp/Course'
import Footer from '../comp/Footer'
import Navbar from '../comp/Navbar'

const Courses = () => {
  return (
  <>
  <Navbar/>

  <div className='min-h-screen' >
  <Course/>
  </div>
  
  <Footer/>
  </>
  )
}

export default Courses