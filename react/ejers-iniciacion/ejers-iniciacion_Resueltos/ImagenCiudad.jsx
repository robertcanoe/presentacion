import Image from 'next/image';

const ImagenCiudad = ({ ciudad }) => {
  return (
    <div style={{
      marginTop: '10px',
      border: '2px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      width: '300px',
      height: '200px',
      position: 'relative'
    }}>
      <Image 
        src={`/ciudades/${ciudad}.png`}
        alt={`Imagen de ${ciudad}`}
        fill
        style={{ objectFit: 'cover' }}
        sizes="300px"
      />
    </div>
  );
};

export default ImagenCiudad;
