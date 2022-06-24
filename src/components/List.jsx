import React from 'react';
import Image from './Image';

const List = ({albums, width=600, height = 600}) => {
  return (
    <div className="list">
      {
        albums.map(album => (
          <div key={album.id} className="tile">
            <Image key={album.id} src={album.url} alt={album.title} width={width} height={height}/>
            <div>{album.title}</div>
          </div>
        ))
      }
    </div>
  );
}

export default List;
