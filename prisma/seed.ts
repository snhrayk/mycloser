import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.songPhrase.deleteMany({});
  await prisma.song.deleteMany({});

  await prisma.song.create({
    data: {
      title: "Still Standing",
      background:
        "セクシーさを排除し、静かで境界線のはっきりした強さを描いた楽曲。",
      phrases: {
        create: [
          {
            order: 1,
            section: "Verse1",
            lyricEn: "I don’t shake when you say my name",
            lyricJa: "あなたが私の名前を呼んでも、もう揺れない",
          },
          {
            order: 2,
            section: "Verse1",
            lyricEn: "It’s just a sound, it’s not a flame",
            lyricJa: "それはただの音、もう炎じゃない",
          },
          {
            order: 3,
            section: "Verse1",
            lyricEn: "I remember who I was before",
            lyricJa: "私は、前の自分を覚えている",
          },
          {
            order: 4,
            section: "Verse1",
            lyricEn: "I bent myself behind your door",
            lyricJa: "あなたのドアの向こうで、自分を折り曲げていた",
          },

          {
            order: 5,
            section: "Pre-Chorus",
            lyricEn: "I mistook your weight for love",
            lyricJa: "あなたの重さを、愛だと勘違いしていた",
          },
          {
            order: 6,
            section: "Pre-Chorus",
            lyricEn: "Carried things that weren’t enough",
            lyricJa: "私のものじゃないものまで背負っていた",
          },
          {
            order: 7,
            section: "Pre-Chorus",
            lyricEn: "I don’t hate you, that’s the truth",
            lyricJa: "あなたを憎んではいない、それが本音",
          },
          {
            order: 8,
            section: "Pre-Chorus",
            lyricEn: "I just don’t move for you",
            lyricJa: "ただ、もうあなたのためには動かない",
          },

          {
            order: 9,
            section: "Chorus",
            lyricEn: "I’m still standing, no applause",
            lyricJa: "私はまだ立っている、拍手はいらない",
          },
          {
            order: 10,
            section: "Chorus",
            lyricEn: "No revenge, no final cause",
            lyricJa: "復讐も、劇的な理由もない",
          },
          {
            order: 11,
            section: "Chorus",
            lyricEn: "I didn’t win, I didn’t lose",
            lyricJa: "勝ったわけでも、負けたわけでもない",
          },
          {
            order: 12,
            section: "Chorus",
            lyricEn: "I just finally choose",
            lyricJa: "ただ、やっと自分を選んだだけ",
          },
          {
            order: 13,
            section: "Chorus",
            lyricEn: "I’m still standing in my skin",
            lyricJa: "私は私のままで、立っている",
          },
          {
            order: 14,
            section: "Chorus",
            lyricEn: "Not your fault, not my sin",
            lyricJa: "あなたのせいでも、私の罪でもない",
          },
          {
            order: 15,
            section: "Chorus",
            lyricEn: "I don’t need you to understand",
            lyricJa: "理解される必要はない",
          },
          {
            order: 16,
            section: "Chorus",
            lyricEn: "I’m still standing",
            lyricJa: "私はまだ立っている",
          },

          {
            order: 17,
            section: "Verse2",
            lyricEn: "I don’t rewrite what we were",
            lyricJa: "私たちの過去を書き換えたりしない",
          },
          {
            order: 18,
            section: "Verse2",
            lyricEn: "I don’t pretend it didn’t hurt",
            lyricJa: "傷つかなかったふりもしない",
          },
          {
            order: 19,
            section: "Verse2",
            lyricEn: "But pain is not my identity",
            lyricJa: "でも痛みは、私そのものじゃない",
          },
          {
            order: 20,
            section: "Verse2",
            lyricEn: "It’s just a chapter, not the key",
            lyricJa: "ただの一章で、答えじゃない",
          },

          {
            order: 21,
            section: "Pre-Chorus",
            lyricEn: "I held the line, I held my breath",
            lyricJa: "境界線を守り、息を止めていた",
          },
          {
            order: 22,
            section: "Pre-Chorus",
            lyricEn: "I let you be, I chose my depth",
            lyricJa: "あなたを自由にして、私は自分の深さを選んだ",
          },
          {
            order: 23,
            section: "Pre-Chorus",
            lyricEn: "You looked for me when I was gone",
            lyricJa: "私が去ってから、あなたは私を探した",
          },
          {
            order: 24,
            section: "Pre-Chorus",
            lyricEn: "That’s not my weight to carry on",
            lyricJa: "それはもう、私が背負う重さじゃない",
          },

          {
            order: 25,
            section: "Bridge",
            lyricEn: "I don’t rise by tearing you down",
            lyricJa: "あなたを壊して、私は強くならない",
          },
          {
            order: 26,
            section: "Bridge",
            lyricEn: "I rise by keeping my ground",
            lyricJa: "自分の立ち位置を守ることで、私は立つ",
          },
          {
            order: 27,
            section: "Bridge",
            lyricEn: "I don’t need closure from your hands",
            lyricJa: "あなたの手からの納得はいらない",
          },
          {
            order: 28,
            section: "Bridge",
            lyricEn: "I closed the door when I could stand",
            lyricJa: "立てた瞬間に、ドアは閉めた",
          },

          {
            order: 29,
            section: "Final Chorus",
            lyricEn: "I’m still standing, calm and clear",
            lyricJa: "私はまだ立っている、静かで、はっきりと",
          },
          {
            order: 30,
            section: "Final Chorus",
            lyricEn: "No disguise, no fear",
            lyricJa: "偽りも、恐れもない",
          },
          {
            order: 31,
            section: "Final Chorus",
            lyricEn: "I don’t ask to be forgiven",
            lyricJa: "許しを乞うこともしない",
          },
          {
            order: 32,
            section: "Final Chorus",
            lyricEn: "I just live as I’m given",
            lyricJa: "ただ、与えられた人生を生きる",
          },
          {
            order: 33,
            section: "Final Chorus",
            lyricEn: "I’m still standing, whole and real",
            lyricJa: "私はまだ立っている、完全で、現実のまま",
          },
          {
            order: 34,
            section: "Final Chorus",
            lyricEn: "I trust what I feel",
            lyricJa: "自分の感情を信じている",
          },
          {
            order: 35,
            section: "Final Chorus",
            lyricEn: "Say my name, it doesn’t land",
            lyricJa: "名前を呼ばれても、もう響かない",
          },
          {
            order: 36,
            section: "Final Chorus",
            lyricEn: "I’m still standing",
            lyricJa: "私はまだ立っている",
          },

          {
            order: 37,
            section: "Outro",
            lyricEn: "No echo.",
            lyricJa: "反響はない",
          },
          {
            order: 38,
            section: "Outro",
            lyricEn: "Just me.",
            lyricJa: "私だけ",
          },
        ],
      },
    },
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
