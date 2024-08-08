document.querySelectorAll('li').forEach(li => {
    li.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            const textContent = node.textContent;
            const replacedContent = textContent.replace(/\(([^)]+)\)/g, (match, p1) => {
                // Check if the content inside the parentheses matches the pattern
                if (/\b(?:\d+\.\d+|\w+\d+\.\d+(?:\.\d+)*)(?:,\s*\d+\.\d+)*\b/.test(p1)) {
                    const span = document.createElement('span');
                    span.className = 'paren-text';
                    span.textContent = `(${p1})`;
                    return span.outerHTML;
                }
                return match; // Return the original text if it doesn't match the pattern
            });

            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = replacedContent;

            while (tempContainer.firstChild) {
                li.insertBefore(tempContainer.firstChild, node);
            }

            li.removeChild(node);
        }
    });
});
