import React from 'react'
import ArticleCSS from '../styles/Article.module.css'
import { auth } from '../firebase/firebaseConfig'



const Article = (props) => {

    const { /* content, */ title, authorName, authorId, category, imgUrl, deleteDoc, articleId } = props




    return (
        <article className={ArticleCSS.article} >
            <div className={ArticleCSS.image}>
                <img src={imgUrl} alt="test" />

            </div>
            <div className={ArticleCSS.two}>
                <span className={ArticleCSS.span}>
                    <div className={ArticleCSS.category}>
                        {category}

                    </div>
                    <div className={ArticleCSS.date}>
                        December 31, 2022

                    </div>

                </span>

                <p className={ArticleCSS.topic} >{title}</p>

                <span className='flex w-1/2 items-center justify-between'>
                    <h6 className={ArticleCSS.author}>{authorName}</h6>


                    <span>
                        {
                            auth.currentUser.uid === authorId ? <h4 onClick={() => { deleteDoc(articleId) }} className='text-red-600 font-semibold'>
                                Delete
                            </h4> :
                                null

                        }


                    </span>
                </span>
            </div>

        </article>
    )
}

export default Article
