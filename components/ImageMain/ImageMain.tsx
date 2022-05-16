import "twin.macro";

export type ImageMainProps = {
    src:string,
    alt:string
}

export default function ImageMain({src, alt}:ImageMainProps){
    return(
        <div tw="w-full h-16  sm:(w-10/12 h-16) md:(w-4/5 h-24) mt-8 mx-auto mb-12 max-w-4xl relative">
            <img src={src} alt={alt} />
        </div>
    )
}