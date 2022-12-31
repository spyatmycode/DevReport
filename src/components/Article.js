import React from 'react'
import ArticleCSS from '../styles/Article.module.css'
import Img from '../assets/test.jpg'

const Article = () => {
    return (
        <article className={ArticleCSS.article}>
            <div className={ArticleCSS.image}>
                <img src={Img} alt="test" />

            </div>
            <div className={ArticleCSS.two}>
                <span className={ArticleCSS.span}>
                    <div className={ArticleCSS.category}>
                        Lifestyle

                    </div>
                    <div className={ArticleCSS.date}>
                        December 31, 2022

                    </div>

                </span>

                <p className={ArticleCSS.topic} >WHY WE STARTED THIS BLOG: WE DID IT FOR THE MONEY !</p>

                <h6 className={ArticleCSS.author}>Jamil Amasa</h6>
            </div>

        </article>
    )
}

export default Article
