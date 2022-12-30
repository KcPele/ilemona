import Image from 'next/image'
import { customerType } from '../assets/data'
import {WiDirectionRight} from "react-icons/wi"
const BlogCard = ({image, title, subtitle}: customerType) => {
  return (
    <div className=''>
        <div>
            <Image src={image} width="293px" height="231px" alt="blog picture"/>
        </div>
        <div className='blogcard__subsection'>
            <h3>{title}</h3>
            <button style={{"fontSize":"1.3rem"}} className='app__btn_puple app__btn'>{subtitle} <WiDirectionRight size={34} /></button>
        </div>
    </div>
  )
}

export default BlogCard