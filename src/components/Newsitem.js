import React from 'react'
const Newsitem=(props)=> {

        let { title, description, imageUrl, newsUrl, author, date ,source} = props;
        return (
            <div>
                <div className="card"style={{height:"35rem"}}>
                    <div>

            <span className="badge rounded-pill bg-danger" style={{display:"flex",justifyItems:"flex-end",position:"absolute",right:"-4px",top:"-5px"}}>
                            {source}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </div>
                    <img style={{height:"16rem"}}  src={imageUrl ? imageUrl : "https://images.hindustantimes.com/img/2021/08/31/1600x900/Breaking-News-Live-Blog-pic_1626307942790_1630368384239.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body my-2">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text my-3">{description}..</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-outline-primary">Read More</a>
                    </div>
                </div>

            </div >
        )
    
}

export default Newsitem

