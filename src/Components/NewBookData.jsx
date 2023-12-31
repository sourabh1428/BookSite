import React from 'react';
import './newbookData.css'


const NewBookData = ({details}) => {
let obj={
    "kind": "books#volume",
    "id": "xNgstAEACAAJ",
    "etag": "FmEs6wFLSWo",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/xNgstAEACAAJ",
    "volumeInfo": {
        "title": "Fantastic Beasts and Where to Find Them",
        "authors": [
            "J K. ROFLING"
        ],
        "publisher": "Blurb",
        "publishedDate": "2017-09-02",
        "description": "\"Fantastic Beasts and Where to Find Them: Coloring Book\" is parody of \"Fantastic Beasts and Where to Find Them: Magical Creatures Coloring Book.\" Harry Potter fans are loving coloring this book.",
        "industryIdentifiers": [
            {
                "type": "ISBN_10",
                "identifier": "1389679071"
            },
            {
                "type": "ISBN_13",
                "identifier": "9781389679070"
            }
        ],
        "readingModes": {
            "text": false,
            "image": false
        },
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
        },
        "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=xNgstAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=xNgstAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.in/books?id=xNgstAEACAAJ&dq=harry+potter&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.co.in/books?id=xNgstAEACAAJ&dq=harry+potter&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Fantastic_Beasts_and_Where_to_Find_Them.html?hl=&id=xNgstAEACAAJ"
    },
    "saleInfo": {
        "country": "IN",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
    },
    "accessInfo": {
        "country": "IN",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
            "isAvailable": false
        },
        "pdf": {
            "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=xNgstAEACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
    },
    "searchInfo": {
        "textSnippet": "&quot;Fantastic Beasts and Where to Find Them: Coloring Book&quot; is parody of &quot;Fantastic Beasts and Where to Find Them: Magical Creatures Coloring Book.&quot; Harry Potter fans are loving coloring this book."
    }
};


    return (
        <div className='card411'>
        <div className='card4'>
            <div className='c4l'>
                <img src={details.imageLinks.thumbnail} alt="" />
            </div>
            <div className='c4r'>
                <div className='c4r1'>
                    <h1>{details.title}</h1>
                    <h4>Published on {" "+details.publishedDate}</h4>
                </div>
                <h3>{" "+details.authors[0]}</h3>
                <p>{(details.description)?details.description:'This non-fiction short-form eBook features content which is adapted from the audiobook Harry Potter: A History of Magic - inspired by the British Library exhibition of the same name. How to become invisible, to make someone fall in love with you, to transform into another creature: these are all things that people have believed in, yearned for, or feared, throughout history. Spells and charms have captured the imagination for hundreds of years. Warding off evil is also something that has concerned people throughout history. From werewolves to all manner of snakes in the wizarding world, youd learn how to face a number of strange and frightening forces in Defence Against the Dark Arts classes. This eBook short examines the colourful characters and curious incidents of the real history of magic, and how they relate to the Hogwarts lesson subjects of Charms and Defence Against the Dark Arts. The history of magic is as long as time and as wide as the world. In every culture, in every age, in every place and, probably, in every heart, there is magic'}</p>
                <div className='c4r2'>
                    <h2>Average rating 4.5</h2>
                    <h2>Rating count 67</h2>
                    <h2>Publisher {details.publisher}</h2>
                    <h2>Language :{details.language}</h2>

                </div>
                <div className='c4r3'>
                    <a href={details.previewLink}><button >Now read! </button></a>
                    <a href={details.infoLink}><button>More info</button></a>
                </div>
            </div>
        </div>
        </div>
    );
}

export default NewBookData;
