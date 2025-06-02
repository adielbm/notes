index.md is made using obsidian.

```bash
# index.md to index.html
pandoc index.md -o index.html --standalone --mathjax --resource-path=.:images
```
