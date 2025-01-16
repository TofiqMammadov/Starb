// Components
import RibbonGiftcards from "../components/Giftcards/RibbonGiftcards";
import { GiftcardsFeatured } from "../components/Giftcards/GiftcardsFeatured";
import GiftcardsBulk from "../components/Giftcards/GiftcardsBulk";
import GiftcardsSupport from "../components/Giftcards/GiftcardsSupport";
import AllGiftCards from "./AllGiftCards";

export default function Giftcards() {
  return (
    <div className="giftcards">
      <GiftcardsFeatured />
      <RibbonGiftcards />
      <div className='flex flex-col md:flex-row justify-center items-center mt-10'>
        <AllGiftCards />
      </div>
      <GiftcardsBulk />
      <GiftcardsSupport />
    </div>
  );
}
