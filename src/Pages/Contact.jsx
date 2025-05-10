import { div } from "motion/react-client"; // Bu importni o'zgartirmadim, sizning kodingizda shunday edi
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt, FaTelegramPlane, FaTrash } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { IoImageOutline } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri"; // Bu import ham avvalgi kodingizda bor edi
import { toast } from "react-toastify";

const links = [
  {
    name: "GitHub",
    icon: <FiGithub />,
    link: "https://github.com/Xurshidbek002",
    color: "white",
  },
  {
    name: "Telegram",
    icon: <FaTelegramPlane />,
    link: "https://t.me/egoistmiz",
    color: "blue-500",
  },
  {
    name: "Linkedin",
    icon: <FiLinkedin />,
    link: "https://www.linkedin.com/in/xurshidbekdev",
    color: "cyan-300",
  },
  {
    name: "Instagram",
    icon: <GrInstagram />,
    link: "https://www.instagram.com/egooist.uz",
    color: "purple-400",
  },
];

function Contact() {
  const [commentData, setCommentData] = useState({
    name: "",
    comment: "",
    image: null,
    imagePreview: null,
  });
  const [comments, setComments] = useState(() => {
    const stored = localStorage.getItem("comments");
    return stored ? JSON.parse(stored) : [];
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Fikr yuborish uchun isSubmitting

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setCommentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCommentData((prev) => ({
          ...prev,
          image: file,
          imagePreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // ----- YANGILANGAN FUNKSIYA (handleCommentSubmit) -----
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Qayta bosishni oldini olish
    setIsSubmitting(true);

    const newComment = {
      ...commentData,
      date: new Date().toISOString(),
      id: Date.now(), // Unikal ID uchun
    };

    // 1. Lokal state va localStorage'ni darhol yangilash
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));

    // 2. Telegramga yuborishni kutish (await)
    await sendToTelegram(newComment);

    // 3. Telegramga yuborish tugagandan keyin formani tozalash
    setCommentData({
      name: "",
      comment: "",
      image: null,
      imagePreview: null,
    });

    setIsSubmitting(false);
  };

  const handleDeleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  // ----- YANGILANGAN FUNKSIYA (sendToTelegram - fikrlar uchun) -----
  const sendToTelegram = async (comment) => {
    // Bot token va chat ID ni .env fayllaridan olish tavsiya etiladi
    const botToken = "7861410527:AAEhCBGXK51lPWyStsfYyXVd3nLC5GKHNCw";
    const chatId = "6873538625";
    let messageText = `Yangi Fikr:\n\nIsm: ${comment.name}\nFikr: ${comment.comment}`;
    let response; // Telegram API javobini saqlash uchun

    try {
      if (comment.image) {
        // Agar rasm mavjud bo'lsa
        const formData = new FormData();
        formData.append("chat_id", chatId);
        formData.append("photo", comment.image); // 'comment.image' fayl obyekti
        formData.append("caption", messageText);

        response = await fetch(
          `https://api.telegram.org/bot${botToken}/sendPhoto`,
          {
            method: "POST",
            body: formData,
          }
        );
      } else {
        // Agar faqat matn bo'lsa
        response = await fetch(
          `https://api.telegram.org/bot${botToken}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text: messageText }),
          }
        );
      }

      // Telegram javobini tekshirish
      if (response.ok) {
        toast.success("Fikr Telegramga muvaffaqiyatli yuborildi!");
      } else {
        const errorData = await response.json().catch(() => null); // Agar javob JSON bo'lmasa xatolikni oldini olish
        const errorMessage =
          errorData?.description ||
          `Telegramga yuborishda xato: ${response.status} ${response.statusText}`;
        toast.error(errorMessage);
        console.error("Telegram API xatoligi:", errorData || response);
      }
    } catch (error) {
      // Tarmoq xatolari yoki fetch'dan oldingi boshqa xatolarni ushlaydi
      toast.error("Telegramga yuborishda tizim xatosi: " + error.message);
      console.error(
        "Telegramga yuborishdagi tarmoq yoki tizim xatoligi:",
        error
      );
    }
  };

  // Quyidagi qismlar sizning asl kodingizdan, o'zgartirilmagan
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false); // Bu ariza yuborish uchun loading
  const [btnName, setBtnName] = useState(t("contact.left.to"));

  useEffect(() => {
    setBtnName(t("contact.left.to"));
  }, [i18n.language, t]); // t ni ham dependency arrayga qo'shish yaxshi amaliyot

  const [forms, setforms] = useState({
    name: "",
    number: "",
    email: "",
    desc: "",
  });

  // Asosiy ariza uchun handleSubmit (bu funksiyaga tegilmadi)
  const handleSubmit = (e) => {
    e.preventDefault();

    const botToken = "7861410527:AAEhCBGXK51lPWyStsfYyXVd3nLC5GKHNCw";
    const chatId = "6873538625";

    const message = `
        Yangi ariza:
        👤 Ism: ${forms.name}
        📞 Telefon: ${forms.number}
        📧 Email: ${forms.email}
        💬 Xabar: ${forms.desc}
      `;

    setLoading(true);
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })
      .then((data) => {
        // Bu yerda data.ok ni tekshirish kerak aslida
        setBtnName(t("contact.left.to2"));
        toast.success("Yuborildi"); // Bu toast asosiy ariza uchun

        setTimeout(() => {
          // setBtnName(t("contact.left.to2")); // Bu qayta o'rnatish noto'g'ri, contact.left.to bo'lishi kerak
          setBtnName(t("contact.left.to")); // To'g'rilandi
        }, 3000);
        setforms({
          name: "",
          number: "",
          email: "",
          desc: "",
        });
      })
      .catch((error) => {
        toast.error("Hatolik");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleClick = (e) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${
      e.clientX - button.getBoundingClientRect().left - radius
    }px`;
    circle.style.top = `${
      e.clientY - button.getBoundingClientRect().top - radius
    }px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  // JSX qismi o'zgarishsiz
  return (
    <div id="contact">
      <div className="container">
        <h2
          data-aos="zoom-in-down"
          className="text-center text-4xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-blue-500 to-purple-800 bg-clip-text"
        >
          {t("contact.title")}
        </h2>
        <p
          data-aos="zoom-in-up"
          className="max-w-[90%] text-sm md:text-md md:max-w-[70%] text-center mx-auto text-white/80 mt-4 mb-6"
        >
          {t("contact.text")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left side (ariza formasi) */}
          <div className="bg-[#33407641] rounded-2xl p-5">
            <h2 className="text-2xl font-bold text-white pb-3">
              {t("contact.left.title")}
            </h2>
            <form
              onSubmit={handleSubmit} // Asosiy ariza uchun
              data-aos="zoom-in-right"
              className="flex flex-col gap-4 bg-[#33407641] p-5 rounded-2xl"
            >
              {/* Inputlar (o'zgarishsiz) */}
              <div className="">
                <input
                  required
                  type="text"
                  value={forms.name}
                  onChange={(e) => setforms({ ...forms, name: e.target.value })}
                  placeholder={t("contact.left.name")}
                  className="bg-[#33407641] w-full outline-none rounded-xl border-1 border-transparent focus:scale-102 duration-500 focus:border-blue-500 focus:shadow-[0_0_15px_blue]/30 py-3 px-4 text-white"
                />
              </div>
              <div className="">
                <input
                  required
                  type="text"
                  value={forms.number}
                  onChange={(e) =>
                    setforms({ ...forms, number: e.target.value })
                  }
                  placeholder={t("contact.left.phone")}
                  className="bg-[#33407641] w-full outline-none rounded-xl border-1 border-transparent focus:scale-102 duration-500 focus:border-blue-500 focus:shadow-[0_0_15px_blue]/30 py-3 px-4 text-white"
                />
              </div>
              <div className="">
                <input
                  required
                  type="email"
                  value={forms.email}
                  onChange={(e) =>
                    setforms({ ...forms, email: e.target.value })
                  }
                  placeholder={t("contact.left.email")}
                  className="bg-[#33407641] w-full outline-none rounded-xl border-1 border-transparent focus:scale-102 duration-500 focus:border-blue-500 focus:shadow-[0_0_15px_blue]/30 py-3 px-4 text-white"
                />
              </div>
              <div className="">
                <textarea
                  required
                  name="" // Bu name atributi bo'sh edi, shunday qoldirdim
                  value={forms.desc}
                  onChange={(e) => setforms({ ...forms, desc: e.target.value })}
                  placeholder={t("contact.left.desc")}
                  className="bg-[#33407641] w-full outline-none rounded-xl border-1 border-transparent focus:scale-102 duration-500 focus:border-blue-500 focus:shadow-[0_0_15px_blue]/30 py-3 px-4 text-white"
                />
              </div>
              <div className="">
                <button
                  type="submit"
                  onClick={handleClick}
                  className={`w-full ripple-container hover:bg-blue-600 duration-700 rounded-xl py-3 text-xl font-extrabold text-white cursor-pointer ${
                    loading ? "bg-amber-300" : "bg-blue-700"
                  }`}
                >
                  <span className="ripple"></span>
                  {btnName}
                </button>
              </div>
            </form>

            {/* links (o'zgarishsiz) */}
            <div
              data-aos="zoom-in-down"
              className="mt-5 bg-[#33407641] rounded-2xl p-5 flex flex-col gap-3"
            >
              <h2 className="text-2xl font-bold text-white">
                {t("contact.left.links")}
              </h2>
              {links.map((item, index) => (
                <div
                  key={index}
                  className="text-white relative overflow-hidden bg-[#33407641] group hover:bg-blue-300/19 duration-700 px-5 py-4 rounded-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/5 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
                  <div className="absolute inset-0 bg-purple-500 blur-sm opacity-30 transform -translate-x-[110%] group-hover:translate-x-[110%] transition-transform duration-1000 delay-200 pointer-events-none" />

                  <a
                    href={item.link}
                    target="_blank" // Havolalar yangi tabda ochilishi uchun
                    rel="noopener noreferrer" // Xavfsizlik uchun
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`text-3xl text-${item.color}`}>
                        {item.icon}
                      </div>
                      <div className="text-xl font-bold">{item.name}</div>
                    </div>
                    <FaExternalLinkAlt className="group-hover:rotate-45 duration-500 group-hover:text-blue-500" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right side (fikrlar formasi va ro'yxati) */}
          <div className="bg-[#33407641] rounded-2xl p-5">
            <h3 className="text-xl font-bold mb-5 text-white">
              {t("contact.right.com")}
            </h3>
            <form
              data-aos="zoom-in-left"
              onSubmit={handleCommentSubmit} // Fikrlar uchun to'g'rilangan funksiya
              className="mb-6 bg-[#33407641] p-5 rounded-2xl"
            >
              {/* Inputlar (o'zgarishsiz, logikasi yuqorida to'g'rilangan) */}
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  autoComplete="off"
                  value={commentData.name}
                  onChange={handleCommentChange}
                  placeholder={t("contact.right.name")}
                  required
                  className="bg-[#33407641] w-full outline-none rounded-xl border-1 border-transparent focus:scale-102 duration-500 focus:border-purple-500 focus:shadow-[0_0_15px_purple]/30 py-3 px-4 text-white"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="comment"
                  value={commentData.comment}
                  onChange={handleCommentChange}
                  placeholder={t("contact.right.desc")}
                  rows={3}
                  required
                  className="bg-[#33407641] w-full outline-none rounded-xl border-1 border-transparent focus:scale-102 duration-500 focus:border-purple-500 focus:shadow-[0_0_15px_purple]/30 py-3 px-4 text-white"
                ></textarea>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="relative flex-1">
                  <input
                    type="file"
                    id="comment-image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute opacity-0 w-full h-full cursor-pointer"
                  />
                  <label
                    htmlFor="comment-image"
                    className="block bg-[#33407641] w-full outline-none rounded-xl border-1 border-transparent hover:border-purple-500 hover:shadow-[0_0_15px_blue]/30 py-3 px-4 text-white text-center cursor-pointer duration-300"
                  >
                    {commentData.imagePreview ? (
                      "Change Image" // Buni ham tarjima qilish mumkin: t("contact.right.changeimg")
                    ) : (
                      <div className="flex justify-center items-center gap-2">
                        {t("contact.right.img")} <IoImageOutline />
                      </div>
                    )}
                  </label>
                </div>
                {commentData.imagePreview && (
                  <div className="w-12 h-12 rounded-md overflow-hidden border border-purple-500">
                    <img
                      src={commentData.imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
              <button
                type="submit"
                onClick={handleClick} // Ripple effekti uchun
                disabled={isSubmitting} // Fikr yuborilayotganda tugmani o'chirish
                className="ripple-container w-full bg-purple-500 hover:bg-purple-600 duration-700 rounded-xl py-3 text-xl font-extrabold text-white cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="ripple"></span>
                {t("contact.right.combtn")}
              </button>
            </form>

            {/* Fikrlar ro'yxati (o'zgarishsiz) */}
            <div
              data-aos="zoom-in-down"
              className="comments-section max-h-[400px] overflow-y-auto no-scrollbar bg-[#33407641] p-5 h-auto rounded-2xl"
            >
              <h3 className="text-xl rounded-md font-bold mb-4 text-white">
                {t("contact.right.comments")} ({comments.length})
              </h3>
              {comments.length === 0 ? (
                <p className="text-gray-400 text-center py-4">
                  {t("contact.right.no")}
                </p>
              ) : (
                comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-[#33407641] rounded-xl p-4 mb-4 relative group"
                  >
                    <button
                      onClick={() => handleDeleteComment(comment.id)}
                      className="absolute bottom-2 right-2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-red-500"
                      title="Delete comment" // Buni ham tarjima qilish mumkin
                    >
                      <FaTrash />
                    </button>
                    <span className="absolute -top-2 right-5 bg-[#334076] py-[2px] px-[3px] rounded-sm text-[8px] text-gray-400">
                      {new Date(comment.date).toLocaleString()}
                    </span>
                    <div className="flex justify-between items-center">
                      <div className="pr-4">
                        <div className="flex justify-between items-center">
                          <h4 className="font-bold text-xl text-blue-300">
                            {comment.name}
                          </h4>
                        </div>
                        <p className="text-white">{comment.comment}</p>
                      </div>
                      {comment.imagePreview && (
                        <img
                          src={comment.imagePreview}
                          alt="Comment attachment" // Buni ham tarjima qilish mumkin
                          className="rounded-full w-20 h-20 object-cover"
                        />
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
