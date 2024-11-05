import { useState } from 'react';
const ImageWithFallback = ({ src, alt, className }) => {
    const [error, setError] = useState(false);

    return (
        <img
            src={error ? '/placeholder-image.jpg' : src}
            alt={alt}
            className={className}
            onError={() => setError(true)}
        />
    );
};
export default ImageWithFallback;
