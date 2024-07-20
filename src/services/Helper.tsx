import { createGlobalState } from "react-hooks-global-state";

export const { setGlobalState, useGlobalState } = createGlobalState({
  mustConnectWalletScale: "scale-0",
  errorCreateCampaignModalScale: "scale-0",
  signOutConfirmationScale: "scale-0",
  successfullyCreateCampaignScale: "scale-0",
  successfullyParticipateModalScale: "scale-0",
  participateConfirmationModalScale: "scale-0"
})

export function truncate(
  text: string,
  startChar: number,
  endChar: number,
  maxLength: number
) {
  if (text.length > maxLength) {
    let start = text.substring(0, startChar);
    let end = text.substring(text.length - endChar, text.length);
    while (start.length + end.length < maxLength) {
      start = start + ".";
    }
    return start + end;
  }
  return text;
}

export const unixTimestampConverter = (unixTimestamp: number) => {
  const date = new Date(unixTimestamp * 1000);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const today = new Date();
  const tomorrow = new Date();

  tomorrow.setDate(today.getDate() + 1);
  today.setHours(0, 0, 0, 0);
  tomorrow.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);

  let dayLabel;
  if (date.getTime() === today.getTime()) {
    dayLabel = "Today";
  } else if (date.getTime() == tomorrow.getTime()) {
    dayLabel = "Tomorrow";
  } else {
    dayLabel = `${day} ${month} ${year}`;
  }

  const formatedDateTime = `${dayLabel} at ${hours}:${minutes}`;
  return formatedDateTime;
};

export function formatParticipantTimestamp(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  
  return `${day}/${month}/${year}`;
}