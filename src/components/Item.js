import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { POKEMON_DETAIL_QUERY } from './queries';
import '../App.css';
import DetailModal from './DetailModal';

function Item({ item }) {
  const [modal, setModal] = useState(false);
  let itemId = item.id;
  const { loading, error, data } = useQuery(POKEMON_DETAIL_QUERY, {
    variables: { id: itemId }
  });
  const toggle = () => setModal(!modal);

  return (
    <div className="item" onClick={toggle}>
      <div className="title">{item.name}</div>
      <img key={item.id} src={item.image} alt="" className="item-img" />
      <DetailModal modal={modal} toggle={toggle} data={data} loading={loading} error={error} />
    </div>
  );
}

export default Item;
