import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../App.css';

function DetailModal({ modal, toggle, data, loading, error }) {
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Evolution Details</ModalHeader>
            <ModalBody>
                {loading && "Loading..."}
                {error && "Error " + error}
                {data && data.pokemon.evolutions && data.pokemon.evolutions.length > 0 && data.pokemon.evolutions.map((item, id) => (
                    <div className="detail-item"><img key={id} src={item.image} alt="" className="item-img" />
                        <div className="detail-name">{item.name}</div>
                    </div>
                ))
                }
                {data && !data.pokemon.evolutions
                    && "No Evaluation"}
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>Close</Button>
            </ModalFooter>
        </Modal>
    )
}

export default DetailModal;