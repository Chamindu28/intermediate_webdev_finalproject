'use strict';

/** Calculate simple interest using numeric values (not string concatenation). */
function calculate(principal, rate, time) {
  const p = Number(principal);
  const r = Number(rate);
  const t = Number(time);
  if ([principal, rate, time].some(value => value === '' || value === null || value === undefined) ||
      ![p, r, t].every(Number.isFinite) || [p, r, t].some(value => value < 0)) {
    throw new TypeError('Enter valid non-negative numbers for all fields.');
  }
  const interest = (p * r * t) / 100;
  return { interest, total: p + interest };
}

function formatAmount(amount) {
  return amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function initializeCalculator() {
  const form = document.getElementById('interest-form');
  if (!form) return; // No TypeError when the script is loaded on another page.
  const error = document.getElementById('error');
  const interestOutput = document.getElementById('interest-output');
  const totalOutput = document.getElementById('total-output');
  form.addEventListener('submit', event => {
    event.preventDefault();
    try {
      const result = calculate(
        document.getElementById('principal').value,
        document.getElementById('rate').value,
        document.getElementById('time').value
      );
      interestOutput.textContent = formatAmount(result.interest);
      totalOutput.textContent = formatAmount(result.total);
      error.hidden = true;
      error.textContent = '';
    } catch (err) {
      error.textContent = err.message;
      error.hidden = false;
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCalculator);
  } else {
    initializeCalculator();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calculate, formatAmount };
}
