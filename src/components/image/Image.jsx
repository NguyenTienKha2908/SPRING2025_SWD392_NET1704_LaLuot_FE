/* eslint-disable react/prop-types */

import { useState } from "react";
import images from "./Images.js";
export default function Image({
    src,
    alt,
    fallback = images.noImage,
    onClick = () => {},
    width,
    height,
    borderRadius,
    cursor,
    className,
    ...props
}) {
    const [_fallback, setFallBack] = useState("");
    const style = {
        display: "blok",
        borderRadius: borderRadius && "50%",
        width: `${width}`,
        height: `${height}`,
        cursor: cursor && "pointer",
    };
    return (
        <img
            className={className}
            onClick={onClick}
            src={_fallback || src}
            alt={alt}
            loading="lazy"
            {...props}
            style={style}
            onError={() => {
                setFallBack(fallback);
            }}
        />
    );
}
