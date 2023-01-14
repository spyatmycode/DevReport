import React, { useState, useEffect } from "react";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import Article from "../components/Article";
import { database, auth } from "../firebase/firebaseConfig";
import { Link } from "react-router-dom";
import Carousel from '../components/Carousel'
import Loader from "../components/Loader";





const Feed = () => {





  const [loading, setLoading] = useState(true)
  const deleteArticle = async (docId) => {
    const docRef = doc(database, "Articles", docId);//For delete

    await deleteDoc(docRef);


  };

  const docRef = collection(database, "Articles");
  const [feed, setFeed] = useState([]);

  const getDocuments = async () => {
    await getDocs(docRef).then((res) => {
      setFeed(res.docs);
      setLoading(false)
      localStorage.setItem("posts", JSON.stringify(res.docs))



    });
  };

  useEffect(() => {
    getDocuments();
  }, []);

  return (
    <>


      <Carousel></Carousel>




      {loading ? <Loader width={"full"} />
        :
        <div className="grid w-auto my-10 grid-cols-1 md:grid-cols-3 place-items-center gap-y-20 md:w-3/4 lg:w-[1060px] m-auto ">
          {feed.map((article) => {
            // { authorId: "", authorName: "", content: "", title: "", category: "" }
            const { content, title, authorName, category, authorId, imgUrl, uniqueId } =
              article._document.data.value.mapValue.fields;

            return (
              <Link to={`/feed/${uniqueId.stringValue}`} key={article.id}>
                <Article
                  key={article.id}
                  articleId={article.id}
                  content={content.stringValue}
                  title={title.stringValue}
                  authorName={authorName.stringValue}
                  category={category.stringValue}
                  authorId={authorId.stringValue}
                  imgUrl={imgUrl.stringValue}
                  uniqueId={uniqueId.stringValue}
                  deleteDoc={deleteArticle}
                />
              </Link>
            );
          })}
        </div>}




    </>
  );
};

export default Feed;
