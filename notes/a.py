import os
import re

def get_words_from_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        words = re.findall(r'\b\w+\b', content)
        return words


def write_words_to_file(words, file_path):
    with open(file_path, 'w', encoding='utf-8') as f:  # Specify utf-8 encoding
        for word in words:
            f.write(word + '\n')


def main():
    file_path = 'C:\\Users\\adiel\\repos\\notes-quartz\\notes\\tmpwords.md'
    words = get_words_from_file(file_path)
    words = list(set(words))  # Remove duplicates
    words.sort()  # Sort alphabetically
    write_words_to_file(words, 'words.txt')


if __name__ == '__main__':
    main()
