import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: {
                    "Welcome to React": "Welcome to React and react-i18next",
                    "title": "Japan",
                    "main text":
                        "is an island country in East Asia. Located in the northwest Pacific Ocean, it borders the Sea of Japan to the west, and extends from the Sea of Okhotsk in the north to the East China Sea and Taiwan in the south. Japan is part of the Pacific Ring of Fire and comprises an archipelago of 6,852 islands covering 377,975 square kilometers (145,937 sq mi); its five main islands, from north to south, are Hokkaido, Honshu, Shikoku, Kyushu, and Okinawa. Tokyo is the country's capital and largest city; other major cities include Osaka and Nagoya."
                }
            },
            jap: {
                translation: {
                    "Welcome to React": "no no no no ",
                    "title": "日本",
                    "main text":
                        "東アジアの島国です。北西太平洋に位置し、日本海と西に接し、北はオホーツク海から南は東シナ海、台湾へと伸びています。日本はパシフィックリングオブファイアの一部であり、377,975平方キロメートル（145,937平方マイル）をカバーする6,852の島からなる群島で構成されています。北から南に5つの主要な島は、北海道、本州、四国、九州、沖縄です。東京は国の首都であり最大の都市です。他の主要都市には、大阪と名古屋が含まれます。"
                }
            }

        },
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;



// const resources = {
//     en: {
//         translations: {
//             "title": "Japan",
//             "main text":
//                 "is an island country in East Asia. Located in the northwest Pacific Ocean, it borders the Sea of Japan to the west, and extends from the Sea of Okhotsk in the north to the East China Sea and Taiwan in the south. Japan is part of the Pacific Ring of Fire and comprises an archipelago of 6,852 islands covering 377,975 square kilometers (145,937 sq mi); its five main islands, from north to south, are Hokkaido, Honshu, Shikoku, Kyushu, and Okinawa. Tokyo is the country's capital and largest city; other major cities include Osaka and Nagoya."
//         }
//     },
//     jap: {
//         translations: {
//             "title": "日本",
//             "main text":
//                 "東アジアの島国です。北西太平洋に位置し、日本海と西に接し、北はオホーツク海から南は東シナ海、台湾へと伸びています。日本はパシフィックリングオブファイアの一部であり、377,975平方キロメートル（145,937平方マイル）をカバーする6,852の島からなる群島で構成されています。北から南に5つの主要な島は、北海道、本州、四国、九州、沖縄です。東京は国の首都であり最大の都市です。他の主要都市には、大阪と名古屋が含まれます。"
//         }
//     }
// };
