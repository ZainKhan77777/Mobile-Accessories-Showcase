type Props = {
    title: string;
};
import React from 'react'

const Title = ({title} : Props) => {
  return (
    <div className='text-center mt-10 font-semibold text-xl underline underline-offset-4 decoration-[1px]'>
      {title}
    </div>
  )
}

export default Title
