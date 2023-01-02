import React from 'react'
// import '../index.css'


const CreatePost = () => {
    return (
        <div className='w-screen h-full flex-col bg-gray-50 py-10'>

            <div className=' flex-col lg:w-2/3 sm:w-auto text-base'>
                <h2 className='font-bold text-2xl m-5 '>
                    Create a public post
                </h2>

                <div className='p-5 bg-blue-100 rounded-md m-5'>
                    <h2 className='text-lg font-semibold'>Writing a good post</h2>
                    <p>You’re ready to write a programming-related article and this form will help guide you through the process</p>
                    <br />

                    <h5 className='text-lg font-semibold'>Steps</h5>
                    <ul className='list-disc'>
                        <li className='m-5'>Summarize your title in one line.</li>
                        <li className='m-5'>Expatiate your article in more detail.</li>
                        <li className='m-5'>Review your content and then publish it to the site.</li>
                    </ul>
                </div>

                <form>
                    <div className='m-5 p-5 bg-blue-100 rounded-md'>
                        <label htmlFor="" className='text-lg font-semibold'>Title</label>
                        <p>Be specific and imagine someone else reading your article.</p>
                        <input type="text" className='p-3 w-full border-black my-3 rounded-md border' />
                    </div>



                    <div className='m-5 p-5 bg-blue-100 rounded-md'>
                        <label htmlFor="" className='text-lg font-semibold'>Detaiils</label>
                        <p>Introduce your thoughts and expand on what you put in the title</p>
                        <textarea name="" id="" cols="30" rows="10" className='w-full p-3 my-3 rounded-md border border-black'></textarea>
                    </div>

                    <button type='submit' className='mx-5 my-1 px-4 py-2 bg-blue-400 rounded-md'>Publish</button>



                </form>
            </div>


        </div>
    )
}

export default CreatePost
