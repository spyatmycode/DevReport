import React, { useState, useEffect } from "react";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import Article from "../components/Article";
import { database, auth } from "../firebase/firebaseConfig";
import { Link } from "react-router-dom";

const Feed = () => {
  const deleteArticle = async (docId) => {
    const docRef = doc(database, "Articles", docId);

    await deleteDoc(docRef);

    console.log(auth.currentUser.email);
  };

  const docRef = collection(database, "Articles");
  const [feed, setFeed] = useState([]);

  const getDocuments = async () => {
    await getDocs(docRef).then((res) => {
      setFeed(res.docs);
      console.log(1);

    });
  };

  useEffect(() => {
    getDocuments();
  }, []);

  return (
    <div className="grid w-auto my-10 grid-cols-1 md:grid-cols-3 place-items-center gap-y-20 md:w-11/12 m-auto ">
      {feed.map((article) => {
        // { authorId: "", authorName: "", content: "", title: "", category: "" }
        const { content, title, authorName, category, authorId, imgUrl } =
          article._document.data.value.mapValue.fields;

        return (
          <Link to={`/feed/${article.id}`} key={article.id}>
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
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
