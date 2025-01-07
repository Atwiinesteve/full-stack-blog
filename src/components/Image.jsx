import React from "react";
import { IKImage } from "imagekitio-react";

export default function Image({ src, w, h, alt, className }) {
	return (
		<IKImage
			urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
			path={src}
			alt={alt}
			className={className}
			width={w}
			height={h}
			loading="lazy"
			lqip={{ active: true, quality: 20 }}
		/>
	);
}
