import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { database } from '../firebase/firebaseConfig'
import { auth } from '../firebase/firebaseConfig'

/* authorId
""
(string)
authorName
""
content
""
imageUrl
""
title
 */



const CreatePost = () => {

    const [post, setPost] = useState({ authorId: "", authorName: "", content: "", title: "", category: "" })

    const navigate = useNavigate()

    const docRef = collection(database, "Articles")

    const handleChange = (e) => {
        const { name, value } = e.target



        setPost({ ...post, [name]: value })



    }



    const handlePost = async (e) => {

        e.preventDefault()

        await addDoc(docRef, {

            authorId: auth.currentUser.uid,
            authorName: auth.currentUser.displayName,
            content: post.content,
            title: post.title,
            category: post.category,
            imgUrl: `https://source.unsplash.com/1600x900/? ${post.category}`,




        })
            .then((res) => {
                navigate('/feed')
                setPost({ authorId: "", authorName: "", content: "", title: "", category: "" })
                e.target.reset()
            })

    }
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

                <form onSubmit={handlePost}>
                    <div className='m-5 p-5 bg-blue-100 rounded-md'>
                        <label htmlFor="" className='text-lg font-semibold'>Title</label>
                        <p>Be specific and imagine someone else reading your article.</p>
                        <input name="title" onChange={handleChange} type="text" className='p-3 w-full border-black my-3 rounded-md border' />
                    </div>

                    <select name="category" defaultValue='Category' onChange={handleChange} className='mx-5 p-5 bg-slate-300 rounded-md'>
                        <option value="Category">Category</option>
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="TypeScript">TypeScript</option>
                        <option value="Python">Python</option>
                        <option value="GitHub">GitHub</option>
                        <option value="Git">Git</option>
                        <option value="CSS">CSS</option>
                        <option value="HTML">HTML</option>
                        <option value="Open Source">Open Source</option>
                        <option value="Flutter">Flutter</option>
                        <option value="Flutter">Flutter</option>
                        <option value="Collaboration">Collaboration</option>


                    </select>



                    <div className='m-5 p-5 bg-blue-100 rounded-md'>
                        <label htmlFor="" className='text-lg font-semibold'>Details</label>
                        <p>Introduce your thoughts and expand on what you put in the title</p>
                        <textarea name="content" onChange={handleChange} id="" cols="30" rows="10" className='w-full p-3 my-3 rounded-md border border-black'></textarea>
                    </div>

                    <button type='submit' className='mx-5 my-1 px-4 py-2 bg-blue-400 rounded-md'>Publish</button>



                </form>
            </div>


        </div>
    )
}

export default CreatePost
