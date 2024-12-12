import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function sendEmail(subject: string, text: string) {
  try {
    const timestamp = new Date().toLocaleString();
    const response = await fetch('https://souravvmishra-createemailapi.web.val.run', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject,
        text: `${text}\n\nSent at: ${timestamp}`,
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}


export function getRandomEmoji(): string {
  // Unicode ranges for emojis
  const emojiRanges: [number, number][] = [
    [0x1F600, 0x1F64F], // Emoticons
    [0x1F300, 0x1F5FF], // Symbols & Pictographs
    [0x1F680, 0x1F6FF], // Transport & Map Symbols
    [0x1F700, 0x1F77F], // Alchemical Symbols
    [0x1F780, 0x1F7FF], // Geometric Shapes Extended
    [0x1F800, 0x1F8FF], // Supplemental Arrows-C
    [0x1F900, 0x1F9FF], // Supplemental Symbols and Pictographs
    [0x1FA00, 0x1FA6F], // Chess Symbols
    [0x1FA70, 0x1FAFF], // Symbols and Pictographs Extended-A
  ];

  // Select a random range
  const [start, end] = emojiRanges[Math.floor(Math.random() * emojiRanges.length)];

  // Generate a random code point within the selected range
  const randomCodePoint = Math.floor(Math.random() * (end - start + 1)) + start;

  // Convert the random code point to a string
  return String.fromCodePoint(randomCodePoint);
}
