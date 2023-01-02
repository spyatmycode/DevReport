import React, { useState, useEffect } from 'react'
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore'
import Article from '../components/Article'
import { database, auth } from '../firebase/firebaseConfig'

const Feed = () => {

    const deleteArticle = async (docId) => {
        const docRef = doc(database, "Articles", docId)



        await deleteDoc(docRef)


        console.log(auth.currentUser.email);
    }



    const docRef = collection(database, "Articles")
    const [feed, setFeed] = useState([])

    const getDocuments = async () => {

        await getDocs(docRef)
            .then((res) => { setFeed(res.docs) })

    }

    useEffect(() => {
        getDocuments()
    })




    return (

        <div className='w-full flex-col flex basis-full items-center justify-center p-10 lg:basis-1/3 lg:flex-row'>
            {
                feed.map((article) => {

                    // { authorId: "", authorName: "", content: "", title: "", category: "" }
                    const { content, title, authorName, category, authorId, imgUrl } = article._document.data.value.mapValue.fields





                    return (


                        <Article
                            key={article.id}
                            articleId={article.id}
                            content={content.stringValue}
                            title={title.stringValue}
                            authorName={authorName.stringValue}
                            category={category.stringValue}
                            authorId={authorId.stringValue}
                            imgUrl={imgUrl.stringValue}
                            deleteDoc={deleteArticle}

                        />



                    )
                })
            }

        </div>
    )
}

export default Feed
