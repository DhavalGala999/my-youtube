import { msgList, nameList } from "./constants";

export function generateRamdomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function generateRandomMessage() {
  return msgList[Math.floor(Math.random() * msgList.length)];
}

export function transformNumberFormat(views) {
  var thousand = 1000;
  var million = 1000000;
  var billion = 1000000000;
  var trillion = 1000000000000;
  if (views < thousand) {
    return String(views);
  }

  if (views >= thousand && views <= 1000000) {
    return Math.round(views / thousand) + "k";
  }

  if (views >= million && views <= billion) {
    return Math.round(views / million) + "M";
  }

  if (views >= billion && views <= trillion) {
    return Math.round(views / billion) + "B";
  } else {
    return Math.round(views / trillion) + "T";
  }
}

export const mockCommentData = [
  {
    name: generateRamdomName(),
    comment: generateRandomMessage(),
    replies: [
      {
        name: generateRamdomName(),
        comment: generateRandomMessage(),
      },
      {
        name: generateRamdomName(),
        comment: generateRandomMessage(),
      },
    ],
  },
  {
    name: generateRamdomName(),
    comment: generateRandomMessage(),
    replies: [
      {
        name: generateRamdomName(),
        comment: generateRandomMessage(),
      },
      {
        name: generateRamdomName(),
        comment: generateRandomMessage(),
      },
    ],
  },
  {
    name: generateRamdomName(),
    comment: generateRandomMessage(),
    replies: [],
  },
  {
    name: generateRamdomName(),
    comment: generateRandomMessage(),
    replies: [],
  },
];
