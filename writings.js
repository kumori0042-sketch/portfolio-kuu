// 회고/노트 목록. title·summary는 {ko, ja, en}. 링크 대상 글은 한국어 원문이라 ja/en 요약 끝에 그 사실을 적는다.
const WRITINGS = [
  {
    date: "2026-09-07",
    title: {
      ko: "0명이 반응해도, 8일간의 과정을 그대로 기록하기",
      ja: "反応が0人でも、8日間の過程をそのまま記録する",
      en: "Even with zero responses, recording the eight days as they were"
    },
    summary: {
      ko: "\"오늘의 역기획\" — 리서치부터 배포, 거의 없었던 커뮤니티 반응까지 숨기지 않고 정리한 회고",
      ja: "「今日のリバース企画」— リサーチから公開、ほとんどなかったコミュニティの反応まで、隠さずまとめた振り返り（リンク先は韓国語）",
      en: "\"Daily Reverse Engineering\" — a retrospective covering research through deploy, including the almost nonexistent community response, with nothing hidden (the linked write-up is in Korean)"
    },
    url: "https://claude.ai/code/artifact/5db5e871-4dd1-40d7-bfb0-1e003d6f33b6"
  }
];
