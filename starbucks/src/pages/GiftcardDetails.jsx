import { FaTrashAlt } from "react-icons/fa";
import { Giftcards } from "../database/db.js";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const GiftCardPage = () => {
  const { imgID } = useParams();
  const selectedCard = Giftcards.find((card) => card.id.toString() === imgID);
  const [customAmount, setCustomAmount] = useState({});
  const [recipients, setRecipients] = useState(
    Giftcards.reduce((acc, card) => ({ ...acc, [card.id]: [{ name: "", email: "" }] }), {})
  );
  const [touched, setTouched] = useState({});
  const [senderInfo, setSenderInfo] = useState({ name: "", email: "" });
  const [senderTouched, setSenderTouched] = useState({ name: false, email: false });
  const [personalNote, setPersonalNote] = useState("");

  const handleSelectChange = (e, cardId) => {
    const value = e.target.value;
    setCustomAmount((prev) => ({
      ...prev,
      [cardId]: value === "custom" ? "" : undefined,
    }));
  };

  const addRecipient = (cardId) => {
    if (recipients[cardId].length < 10) {
      setRecipients((prev) => ({
        ...prev,
        [cardId]: [...prev[cardId], { name: "", email: "" }],
      }));
    }
  };

  const removeRecipient = (cardId, index) => {
    setRecipients((prev) => {
      const updatedRecipients = prev[cardId].filter((_, i) => i !== index);
      return { ...prev, [cardId]: updatedRecipients };
    });
  };

  const handleRecipientChange = (cardId, index, field, value) => {
    setRecipients((prev) => {
      const updatedRecipients = [...prev[cardId]];
      updatedRecipients[index][field] = value;
      return { ...prev, [cardId]: updatedRecipients };
    });
  };

  const handleBlur = (cardId, index, field) => {
    setTouched((prev) => ({
      ...prev,
      [cardId]: { ...prev[cardId], [`${index}-${field}`]: true },
    }));
  };

  const handleSenderChange = (field, value) => {
    setSenderInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSenderBlur = (field) => {
    setSenderTouched(prev => ({
      ...prev,
      [field]: true
    }));
  };

  return (
    <div className="min-h-screen">
      <nav className="w-full pt-6 text-gray-600 px-4 sm:px-6 lg:px-8">
        <ul className="flex sm:justify-center justify-start align-center">
          <li className="tracking-wide">
            <Link to={"/giftcards"}>Gift</Link>
          </li>
          <span className="px-1">/</span>
          <li className="tracking-wide font-bold">
            <span>Create eGift</span>
          </li>
        </ul>
      </nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 sm:text-center text-start">
          Create eGift
        </h1>

        <div className="flex flex-col gap-8">
          <div
            key={selectedCard.id}
            className="bg-white  overflow-hidden w-full mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
          >
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
              <img
                src={selectedCard.img}
                alt={`Gift Card ${selectedCard.id}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 sm:p-6 lg:p-8">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 text-center">
                  Select an Amount
                </h2>
                <select
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-green-300 outline-none text-gray-800"
                  onChange={(e) => handleSelectChange(e, selectedCard.id)}
                >
                  {selectedCard.amount.map((option, index) => (
                    <option key={index} value={option.value}>
                      ${option.value}
                    </option>
                  ))}
                  <option value="custom">Custom Amount</option>
                </select>
                {customAmount[selectedCard.id] !== undefined && (
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    className="w-full mt-4 p-3 border border-gray-300 rounded-md focus:ring focus:ring-green-300 outline-none"
                    onChange={(e) => setCustomAmount({ ...customAmount, [selectedCard.id]: e.target.value })}
                  />
                )}
              </div>

              <div className="mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
                  Who are you gifting to?
                </h2>
                <div className="space-y-4">
                  {recipients[selectedCard.id]?.map((recipient, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-md font-semibold text-gray-800">
                          Recipient {index + 1}
                        </h3>
                        {recipients[selectedCard.id].length > 1 && (
                          <button
                            onClick={() => removeRecipient(selectedCard.id, index)}
                            className="text-gray-500 hover:text-red-500 transition-colors"
                          >
                            <FaTrashAlt />
                          </button>
                        )}
                      </div>
                      <div className="space-y-3">
                        <div>
                          <input
                            type="text"
                            placeholder="Recipient Name"
                            className={`w-full p-3 border rounded-md outline-none focus:ring focus:ring-red-300 
                                ${touched[selectedCard.id]?.[`${index}-name`] && !recipient.name ? 'border-red-500' : 'border-gray-300'}`}
                            value={recipient.name}
                            onChange={(e) => handleRecipientChange(selectedCard.id, index, "name", e.target.value)}
                            onBlur={() => handleBlur(selectedCard.id, index, "name")}
                          />
                          {touched[selectedCard.id]?.[`${index}-name`] && !recipient.name && (
                            <p className="text-red-500 text-sm mt-1">Please enter the recipient's name.</p>
                          )}
                        </div>
                        <div>
                          <input
                            type="email"
                            placeholder="Recipient Email"
                            className={`w-full p-3 border rounded-md outline-none focus:ring focus:ring-red-300
                                ${touched[selectedCard.id]?.[`${index}-email`] && !recipient.email ? 'border-red-500' : 'border-gray-300'}`}
                            value={recipient.email}
                            onChange={(e) => handleRecipientChange(selectedCard.id, index, "email", e.target.value)}
                            onBlur={() => handleBlur(selectedCard.id, index, "email")}
                          />
                          {touched[selectedCard.id]?.[`${index}-email`] && !recipient.email && (
                            <p className="text-red-500 text-sm mt-1">Please enter the recipient's email.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-gray-500 text-sm mt-4">
                  Maximum of 10 recipients
                </p>
                {recipients[selectedCard.id].length < 10 && (
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={() => addRecipient(selectedCard.id)}
                      className="bg-black text-white font-semibold py-[6px] px-3 rounded-lg transition-colors hover:bg-gray-100 hover:text-black border-2 border-black"
                    >
                      Add another recipient
                    </button>
                  </div>
                )}
              </div>

              <div className="mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
                  Personal note
                </h2>
                <textarea
                  placeholder="Message (optional)"
                  maxLength={160}
                  value={personalNote}
                  onChange={(e) => setPersonalNote(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md min-h-[120px] outline-none
                              focus:border-green-300 focus:bg-green-50 transition-colors
                              resize-none sm:min-h-[150px]"
                />
                <div className="text-right text-gray-500 text-sm">
                  {personalNote.length} / 160
                </div>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
                  From
                </h2>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Sender Name"
                      className={`w-full p-3 border rounded-md outline-none focus:ring focus:ring-red-300
                          ${senderTouched.name && !senderInfo.name ? 'border-red-500' : 'border-gray-300'}`}
                      value={senderInfo.name}
                      onChange={(e) => handleSenderChange("name", e.target.value)}
                      onBlur={() => handleSenderBlur("name")}
                    />
                    {senderTouched.name && !senderInfo.name && (
                      <p className="text-red-500 text-sm mt-1">Please enter the sender's name.</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Sender Email"
                      className={`w-full p-3 border rounded-md outline-none focus:ring focus:ring-red-300
                          ${senderTouched.email && !senderInfo.email ? 'border-red-500' : 'border-gray-300'}`}
                      value={senderInfo.email}
                      onChange={(e) => handleSenderChange("email", e.target.value)}
                      onBlur={() => handleSenderBlur("email")}
                    />
                    {senderTouched.email && !senderInfo.email && (
                      <p className="text-red-500 text-sm mt-1">Please enter the sender's email.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCardPage;
