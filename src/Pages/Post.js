import React from 'react'
import { useParams } from 'react-router-dom';
import { formatDate } from '../components/utility';


const Post = () => {
    const { id } = useParams()

    const posts = JSON.parse(localStorage.getItem("posts"))

    /* const { content, title, authorName, category, authorId, imgUrl, uniqueId } =article._document.data.value.mapValue.fields; */

    const post = posts.find(
        (post) => {
            const { uniqueId } = post._document.data.value.mapValue.fields
            return uniqueId.stringValue === id
        }
    )

    const { content, title, authorName, category, authorId, imgUrl, uniqueId } = post._document.data.value.mapValue.fields;

    const timeStamp = post._document.createTime.timestamp.seconds











    return (
        <div className='flex flex-col  w-full py-10 text-left'>
            <div className='mb-4'>
                <h1 className='font-black text-3xl mx-10'>
                    {title.stringValue}
                </h1>

                <span className='flex mx-10 my-6 text-gray-500  items-baseline'>
                    <h6 className='font-black text-sm'>
                        {formatDate(timeStamp)}
                    </h6>

                    <h6 className='font-black text-sm mx-1 my-1'>.</h6>

                    <h6 className='font-black text-sm ml-1'>
                        {
                            `${Math.round((content.stringValue.length * 0.2) / 60)} minute read`
                        }
                    </h6>
                </span>
            </div>


            <img src={imgUrl.stringValue} alt={title.stringValue} className='w-5/6 h-80 mx-10 md:w-10/12 md:h-5/6' />

            <p className='mx-10 my-10 text-lg font-medium leading-9'>
                {content.stringValue}

            </p>
        </div>
    )


}

export default Post