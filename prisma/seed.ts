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
      sections: {
        create: [
          {
            section: "Verse1",
            background:
              "関係の中で自分を失っていた過去の認識\n\nこのVerseは、別れた直後の怒りや悲しみではなく、「距離ができたあとに初めて見えた事実」を描いている。\n\n名前を呼ばれても揺れない。相手の存在が、もう感情を燃やさない、という描写から、すでに感情的な決別は終わっている状態。\n\n「あなたのドアの向こうで自分を折り曲げていた」これは、相手に合わせるために自分の価値観や境界線を歪めていた過去への冷静な自己分析。被害者意識ではなく、「あの時の自分はそう選んでいた」という視点。",
            order: 1,
          },
          {
            section: "Pre-Chorus",
            background:
              "依存と愛情を取り違えていたことへの自覚\n\nここは感情のピークじゃない。むしろ誤認の修正。\n\n重さを愛だと勘違いしていた。本当は背負う必要のないものを抱えていた。\n\n重要なのは、「I don't hate you」。憎しみがない＝未練ではなく、感情の整理が終わっている証拠。\n\n「動かない」という言葉は冷酷さじゃなく、自分の境界線を守る決断を意味している。",
            order: 2,
          },
          {
            section: "Chorus",
            background:
              '勝ち負けでも解放でもない、自己選択の宣言\n\nこの曲の核。\n\n拍手はいらない。復讐もしない。勝ったわけでも負けたわけでもない。\n\nここで描かれているのは"正しさ"でも"強さの誇示"でもない。\n\n「I just finally choose」＝他人や状況ではなく、自分を選ぶという行為そのもの。\n\n「理解されなくていい」という一節は、承認から自由になった状態を示している。',
            order: 3,
          },
          {
            section: "Verse2",
            background:
              "痛みを否定せず、人生の一部として位置づける段階\n\nこのVerseはとても成熟してる。\n\n過去を書き換えない。傷つかなかったふりもしない。\n\nでも同時に、「痛み＝私ではない」。\n\nここでトラウマをアイデンティティにしないというかなり強い自己定義が行われている。\n\n過去は「章」であって「答え」ではない、という距離感が大人。",
            order: 4,
          },
          {
            section: "Bridge",
            background:
              "強さの定義の更新\n\nこのBridge、かなり重要。\n\n誰かを壊しても強くはならない。自分の立ち位置を守ることで立つ。\n\nここでこの曲は「強い女性像」を攻撃性から完全に切り離している。\n\nドアを閉める行為も、感情的な遮断じゃなく「立てるようになったから閉めた」という順序がポイント。",
            order: 5,
          },
          {
            section: "Final Chorus",
            background:
              "静かな自己信頼の確立\n\nここは高揚じゃない。澄んでいる。\n\n偽りも恐れもない。許しも求めない。\n\nもう相手の反応は自己価値に一切影響しない。\n\n「名前を呼ばれても、もう響かない」＝感情的フックが完全に外れた状態。",
            order: 6,
          },
          {
            section: "Outro",
            background:
              "余韻ではなく、確定\n\nNo echo. Just me.\n\nこれは孤独じゃない。反響を必要としない自立。\n\n誰かに返ってくる言葉も、説明も、証明もいらない。\n\nただ「在る」状態。",
            order: 7,
          },
        ],
      },
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
