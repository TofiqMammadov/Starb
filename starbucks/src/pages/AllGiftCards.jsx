import React from 'react'
import GiftcardsBirthday from '../components/Giftcards/GIftcardsBirthday'
import GiftcardsThankyou from '../components/Giftcards/GiftcardsThankyou'
import GiftcardsCelebration from '../components/Giftcards/GiftcardsCelebration'
import GiftcardsNewYear from '../components/Giftcards/GiftcardsNewYear'
import GiftcardsWinter from '../components/Giftcards/GiftcardsWinter'
import GiftcardsAppreciation from '../components/Giftcards/GiftcardsAppreciation'
import GiftcardsEncouragement from '../components/Giftcards/GiftcardsEncouragement'
import GiftcardsValentinesDay from '../components/Giftcards/GiftcardsValentinesDay'
import GiftcardsLunar from '../components/Giftcards/GiftcardsLunar'
import GiftcardsAffection from '../components/Giftcards/GiftcardsAffection'
import GiftcardsWorkplace from '../components/Giftcards/GiftcardsWorkplace'
import GiftcardsAnytime from '../components/Giftcards/GiftcardsAnytime'

const AllGiftCards = () => {
    return (
        <div className='giftcards-container px-4 lg:px-8 container mx-auto'>
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
        </div>
    )
}

export default AllGiftCards