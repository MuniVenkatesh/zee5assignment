import React, {useState, useEffect} from 'react';
import { useInView } from 'react-intersection-observer';

const Image = ({src, alt, width, height, ...restProps}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref, inView } = useInView({
        triggerOnce: true
    });

  useEffect(()=>{
    if(inView && !imageLoaded) {
        setImageLoaded(true);
    }
  }, [inView, imageLoaded, src]);
  
  return (
    <div className="image" ref={ref}>
      <img alt={alt} src={imageLoaded ? src : ''} width={width} height={height} {...restProps}/>
    </div>
  );
}

export default Image;
