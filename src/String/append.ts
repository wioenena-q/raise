'use strict';

/**
 * Appends to the beginning, end, or specified index of the string.
 * @param content - The string to append.
 * @param word - String to add.
 * @param index - Target index.
 * @returns {string}
 * @example
 * append("How", " are you ?"); // How are you ?
 */
export default function append(content: string, word: string, index?: number): string {
    if (index === undefined || index > content.length)
        index = content.length;

    const { length } = content;
    if (index >= length) return content + word;
    if (index < 1) return word + content;

    return content.slice(0, index) + word + content.slice(index, content.length);
}
