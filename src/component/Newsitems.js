import React from 'react'
import image from '../news.webp'
function Newsitems({title,description,url,imageUrl}) {
    return (
        <>
            <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2" style={{width: "380px"}}>
                <img src={imageUrl?imageUrl:image} className="card-img-center" style={{height:"200px", width:"360px"}} alt="sorry cannot load"/>
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0,50)}...</h5>
                        <p className="card-text">{description?description.slice(0,50):"we are really sorry , currently we cannot able to fetch the deescription of the above news"}...</p>
                        <a href={url} className="btn btn-primary">Read more</a>
                    </div>
            </div>
        </>
    )
}

export default Newsitems
