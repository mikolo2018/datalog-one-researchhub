'use client';

import { useEffect, useState } from 'react';

type Preferences = { largeText: boolean; highContrast: boolean; reducedMotion: boolean };
const defaults: Preferences = { largeText: false, highContrast: false, reducedMotion: false };

function applyPreferences(value: Preferences) {
  const root = document.documentElement;
  root.dataset.mathoLargeText = String(value.largeText);
  root.dataset.mathoHighContrast = String(value.highContrast);
  root.dataset.mathoReducedMotion = String(value.reducedMotion);
}

export default function MathoepediaAccessibility() {
  const [preferences, setPreferences] = useState<Preferences>(defaults);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('matho-accessibility-v1') || 'null');
      if (saved) {
        const next = { ...defaults, ...saved };
        setPreferences(next);
        applyPreferences(next);
      }
    } catch {}
  }, []);

  function update(key: keyof Preferences) {
    const next = { ...preferences, [key]: !preferences[key] };
    setPreferences(next);
    applyPreferences(next);
    localStorage.setItem('matho-accessibility-v1', JSON.stringify(next));
  }

  function reset() {
    setPreferences(defaults);
    applyPreferences(defaults);
    localStorage.removeItem('matho-accessibility-v1');
  }

  return <aside className="matho-accessibility" aria-label="Mathoepedia accessibility controls">
    <button type="button" className="matho-accessibility-toggle" aria-expanded={open} onClick={() => setOpen((value) => !value)}>Accessibility</button>
    {open && <div className="matho-accessibility-panel">
      <strong>Make Mathoepedia easier to use</strong>
      <button type="button" aria-pressed={preferences.largeText} onClick={() => update('largeText')}>Larger text</button>
      <button type="button" aria-pressed={preferences.highContrast} onClick={() => update('highContrast')}>High contrast</button>
      <button type="button" aria-pressed={preferences.reducedMotion} onClick={() => update('reducedMotion')}>Reduce motion</button>
      <button type="button" className="matho-accessibility-reset" onClick={reset}>Reset</button>
    </div>}
  </aside>;
}
