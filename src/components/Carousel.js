import React from 'react'

import { Carousel } from 'react-carousel-minimal'


const Slider = () => {


    const posts = JSON.parse(localStorage.getItem("posts"))


    /* const { content, title, authorName, category, authorId, imgUrl, uniqueId } =
        posts._document.data.value.mapValue.fields;

    console.log(content);

 */

    console.log(posts);

    const postData = posts.map((post) => {

        const { content, title, authorName, category, authorId, imgUrl, uniqueId } = post._document.data.value.mapValue.fields;

        console.log(content);


        return {
            image: imgUrl.stringValue,
            caption: `<div style="display:flex;flex-direction:column" class="absolute md:bottom-[100px] bottom-2/4 flex left-[30px] !flex-column items-start">
                     <h1 class="font-bold text-3xl md:text-6xl w-auto mb-6 md:w-max-[500px]"> ${title.stringValue}</h1>
                    
                    <button class="px-5 py-4 text-sm rounded-md bg-blue-500 ">${category.stringValue}</button>
                    <h6 class="mt-5 text-xl italic text-red-600">${authorName.stringValue}</h6>
                    </div>`
        }

    })




    const data = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
            caption: `<div>
                      San Francisco
                      <br/>
                      Next line
                    </div>`
        },
        {
            image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
            caption: "Scotland"
        },
        {
            image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
            caption: "Darjeeling"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
            caption: "San Francisco"
        },
        {
            image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
            caption: "Scotland"
        },
        {
            image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
            caption: "Darjeeling"
        },
        {
            image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
            caption: "San Francisco"
        },
        {
            image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
            caption: "Scotland"
        },
        {
            image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
            caption: "Darjeeling"
        }
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (
        <div className="App">
            <div style={{ textAlign: "center" }}>

                <div style={{
                    padding: "0 20px"
                }}>
                    <Carousel
                        data={postData}
                        time={7000}
                        width="1000px"
                        height="500px"
                        captionStyle={captionStyle}
                        radius="0px"
                        slideNumber={false}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="black"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "1000px",
                            maxHeight: "500px",
                            margin: "40px auto",
                        }}
                    />
                </div>
            </div>
        </div>
    );

}

export default Slider