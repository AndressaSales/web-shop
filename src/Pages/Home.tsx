import Features from "../Components/Features";
import MultBanner from "../Components/MultBanner";
import OneBanner from "../Components/OneBanner";
import PartBanner from "../Components/PartBanner";

export default function Home(){
    return(
        <>
            <PartBanner />
            <MultBanner />
            <OneBanner />
            <Features />
        </>
    )
}