'use strict';

const ulTree = document.querySelector('.tree');

WrapTextWithSpan();

ulTree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const parentSelected = e.target.closest('li');

    const closestUL =
      parentSelected.querySelector('ul') ?? parentSelected.parentElement;

    closestUL.style.display =
      closestUL.style.display === 'none' ? null : 'none';
  }
});

function WrapTextWithSpan() {
  ulTree.querySelectorAll('li').forEach((li) => {
    li.childNodes.forEach((childNode) => {
      if (childNode.nodeType === Node.TEXT_NODE) {
        const span = document.createElement('span');

        span.textContent = childNode.textContent;
        childNode.replaceWith(span);
      }
    });
  });
}
