// React Helmet
import { Helmet } from "react-helmet";
// Components
import RibbonGiftcards from "../components/Giftcards/RibbonGiftcards";
import { GiftcardsFeatured } from "../components/Giftcards/GiftcardsFeatured";
import GiftcardsBirthday from "../components/Giftcards/GIftcardsBirthday";
import GiftcardsCelebration from "../components/Giftcards/GiftcardsCelebration";
import GiftcardsThankyou from "../components/Giftcards/GiftcardsThankyou";
import GiftcardsNewYear from "../components/Giftcards/GiftcardsNewYear";
import GiftcardsBulk from "../components/Giftcards/GiftcardsBulk";
import GiftcardsSupport from "../components/Giftcards/GiftcardsSupport";
import GiftcardsWinter from "../components/Giftcards/GiftcardsWinter";
import GiftcardsAppreciation from "../components/Giftcards/GiftcardsAppreciation";
import GiftcardsEncouragement from "../components/Giftcards/GiftcardsEncouragement";
import GiftcardsValentinesDay from "../components/Giftcards/GiftcardsValentinesDay";
import GiftcardsLunar from "../components/Giftcards/GiftcardsLunar";
import GiftcardsAffection from "../components/Giftcards/GiftcardsAffection";
import GiftcardsWorkplace from "../components/Giftcards/GiftcardsWorkplace";
import GiftcardsAnytime from "../components/Giftcards/GiftcardsAnytime";

export default function Giftcards() {
  return (
    <div className="giftcards">
      <Helmet>
        <title>Starbucks Gift Cards: Starbucks Coffee Company</title>
      </Helmet>
      <GiftcardsFeatured />
      <RibbonGiftcards />
      <GiftcardsBirthday />
      <GiftcardsThankyou />
      <GiftcardsCelebration />
      <GiftcardsNewYear />
      <GiftcardsWinter />
      <GiftcardsAppreciation />
      <GiftcardsEncouragement />
      <GiftcardsValentinesDay />
      <GiftcardsLunar />
      <GiftcardsAffection />
      <GiftcardsWorkplace />
      <GiftcardsAnytime />
      <GiftcardsBulk />
      <GiftcardsSupport />
    </div>
  );
}
