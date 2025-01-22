// Components
import RibbonGiftcards from "../components/Giftcards/RibbonGiftcards";
import { GiftcardsFeatured } from "../components/Giftcards/GiftcardsFeatured";
import GiftcardsBulk from "../components/Giftcards/GiftcardsBulk";
import GiftcardsSupport from "../components/Giftcards/GiftcardsSupport";
import AllGiftCards from "./AllGiftCards";

export default function Giftcards() {
  return (
    <div className="container mx-auto p-6">
      <GiftcardsFeatured />
      <RibbonGiftcards />
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-4 md:space-y-0 md:space-x-4">
        <AllGiftCards />
      </div>
      <GiftcardsBulk />
      <GiftcardsSupport />
    </div>
  );
}
