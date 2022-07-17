import React from 'react';
import Item from './Item';



function ItemList ({ items }) {
  return (
    <div style={itemListStyle}>
      {items.map((item) => {
        return <Item item={item} key={item.id}/> ;
      })}
    </div>
  );
}


//--------style-----------------------------------
const itemListStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    flexWrap: "wrap",
  };

export default ItemList;

