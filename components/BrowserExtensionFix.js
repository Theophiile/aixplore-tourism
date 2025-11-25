'use client';

import { useEffect } from 'react';

export default function BrowserExtensionFix() {
  useEffect(() => {
    // Supprimer les attributs ajoutés par les extensions de navigateur
    const removeExtensionAttributes = () => {
      if (typeof document !== 'undefined') {
        document.body.removeAttribute('cz-shortcut-listen');
      }
    };

    removeExtensionAttributes();
    
    // Observer pour supprimer l'attribut s'il est réajouté
    const observer = new MutationObserver(removeExtensionAttributes);
    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return null;
}

