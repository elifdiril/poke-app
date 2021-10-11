import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useQuery } from '@apollo/client';
import { POKEMON_DETAIL_QUERY } from './queries';
import '../App.css';

function Item({ item }) {
  const [modal, setModal] = useState(false);
  let itemId = item.id || "UG9rZW1vbjowMDE=";
  const { loading, error, data } = useQuery(POKEMON_DETAIL_QUERY, {
    variables: {id: itemId}
  });
  const toggle = () => setModal(!modal);

  return (
    <div className="item" onClick={toggle}>
      <div className="title">{item.name}</div>
      <img key={item.id} src={item.image} alt="" className="item-img" />
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Evolution Details</ModalHeader>
        <ModalBody>
          {loading && "Loading..."}
          {error && "Error " + error}
          {data && data.pokemon.evolutions && data.pokemon.evolutions.length > 0 && data.pokemon.evolutions.map((item, id) => (
            <img key={id} src={item.image} alt="" className="item-img" />
          ))
          }
          {data && !data.pokemon.evolutions
          && "No Evaluation"}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Item;
