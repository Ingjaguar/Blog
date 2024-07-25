import { useState } from 'react';
import Article from './components/Article.jsx';
import { news } from "./utils/news.js";
import ArticleDetails from './components/ArticleDetails.jsx';
import SortButton from './components/SortButton.jsx';

let isAscAlpha = true;

function App() {
    
    const [newsFeed, setNewsFeed] = useState(news);
    const [newsDetails, setNewsDetails] = useState(-1);

    const deleteClick = (indice) => {
        console.log("Elemento a borrar", indice);        
        setNewsFeed(newsFeed.filter( (_,index) => index !== indice));
    }
    const showNewsDetail = (indice) => {
        setNewsDetails(indice);
    }

    const alphaSort = () => {
        const newArray = newsFeed.toSorted( (a,b) => {

            if (isAscAlpha) {
                return a.titulo.localeCompare(b.titulo)
            } else {
                return b.titulo.localeCompare(a.titulo)
            }
        })
        isAscAlpha = !isAscAlpha;
        setNewsFeed(newArray);
    }

    let content;
    //let order;
    if (newsDetails < 0) {
        content = [
        <SortButton
            alphaSort={alphaSort}
            sortAlpha={isAscAlpha}
        />,
        newsFeed.map((elemento, indice) => (
                <>
                    <Article
                        key={indice}
                        articulo={elemento}
                        deleteFunction={deleteClick}
                        indice={indice}
                        showDetail={showNewsDetail}
                    />
                </>
            ))]
    } else {
        content = <ArticleDetails
            indice={newsDetails}
            newsFeed={newsFeed}
            goBack={showNewsDetail}
        />
    }

    return (
        <div>
            {content}            
        </div>        
    );
}

export default App;
