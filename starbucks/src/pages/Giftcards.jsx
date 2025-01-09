// React Helmet
import { Helmet } from "react-helmet";
// Components
import RibbonGiftcards from "../components/Giftcards/RibbonGiftcards";
import { GiftcardsFeatured } from "../components/Giftcards/GiftcardsFeatured";
import GiftcardsSpring from "../components/Giftcards/GiftcardsSpring";
import GiftcardsBirthday from "../components/Giftcards/GIftcardsBirthday";
import GiftcardsThankyou from "../components/Giftcards/GiftcardsThankyou";
import GiftcardsBulk from "../components/Giftcards/GiftcardsBulk";
import GiftcardsSupport from "../components/Giftcards/GiftcardsSupport";

export default function Giftcards() {
  return (
    <div className="giftcards">
      <Helmet>
        <title>Starbucks Gift Cards: Starbucks Coffee Company</title>
      </Helmet>
      <GiftcardsFeatured />
      <RibbonGiftcards />
      <GiftcardsSpring />
      <GiftcardsBirthday />
      <GiftcardsThankyou />
      <GiftcardsBulk />
      <GiftcardsSupport />
    </div>
  );
}
