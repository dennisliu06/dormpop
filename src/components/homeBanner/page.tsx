import Image from "next/image";

export default function HomeBanner() {
    return(
    <div>
        <Image 
        src="/neu-banner.jpg"
        alt="Vercel logomark"
        width={1440}
        height={20}
        >
            
        </Image>
    </div>
    )
}