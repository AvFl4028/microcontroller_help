import '../css/card.css'

export default function Card(props){
    return(
        <>
            <br />
        <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card card-background">
                        <img src={props.img_one} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{props.title_one}</h5>
                            <p className="card-text">{props.text_one}</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card card-background">
                        <img src={props.img_two} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{props.title_two}</h5>
                            <p className="card-text">{props.text_two}</p>
                        </div>
                    </div>
                </div>
        </div>
        <br />
        </>
    )
}
