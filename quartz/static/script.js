/* document.querySelectorAll('li').forEach(li => {
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
}); */

/*

related: tikzjax.js, tikz.css, 


function processTikzBlocks() {
  const pretikzBlocks = document.querySelectorAll('pre[data-language="tikz"], pre[data-language="tex"]');

  pretikzBlocks.forEach(pretikz => {
    console.log('pretikz found');

    const code = pretikz.textContent;
    const script = document.createElement('script');
    script.setAttribute('type', 'text/tikz');
    script.setAttribute('data-show-console', 'true');
    script.textContent = code;

    const container = pretikz.parentNode;
    container.classList.add('tikzjaxdiagram');
    container.insertBefore(script, pretikz);
    container.removeChild(pretikz);

    console.log('processing tikz');

    if (window.tikzjax && typeof window.tikzjax.process === 'function') {
      window.tikzjax.process(script);
    } else {
      console.error('tikzjax not available or process is not a function');
    }
  });
}

// ✅ 1. Run on full page load
document.addEventListener('DOMContentLoaded', () => {
  processTikzBlocks();
});

// ✅ 2. Observe changes to <body data-slug="">
const observer = new MutationObserver(mutations => {
  for (const mutation of mutations) {
    if (
      mutation.type === 'attributes' &&
      mutation.attributeName === 'data-slug'
    ) {
      console.log('data-slug changed to:', document.body.getAttribute('data-slug'));
      processTikzBlocks();
    }
  }
});

observer.observe(document.body, { attributes: true });
 */