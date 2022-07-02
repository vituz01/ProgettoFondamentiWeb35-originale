

import { Component } from "react";
import items from "../../services/items";
import orders from "../../services/orders";

class Flush extends Component {

    constructor(props) {
        super(props);
        this.state = { ordini: [] , items:[]};
        this.handleGet = this.handleGet.bind(this);
    }


    componentDidMount() {
        this.handleGet();
    }

    handleGet() {
        orders.getAll()
            .then(data => {
                this.setState({
                    ordini: [...data]
                }
                )
            });
            items.getAll()
            .then(data=> {
                this.setState({
                    items: [...data]
                }
                )
            })
            
    }





    render() {

        return (
            <>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            ID Ordine: #{this.props.flush._id}
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"> Importo: €{this.props.flush.importo}</div>
                    </div>
                </div>



            </>

        )
    }
}

export default Flush;
