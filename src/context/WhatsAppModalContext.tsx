'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { WhatsAppModal } from '@/components/ui/WhatsAppModal';

interface WhatsAppModalContextType {
  isOpen: boolean;
  messageText?: string;
  openWhatsAppModal: (customMessage?: string) => void;
  closeWhatsAppModal: () => void;
}

const WhatsAppModalContext = createContext<WhatsAppModalContextType | undefined>(undefined);

export function WhatsAppModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messageText, setMessageText] = useState<string | undefined>(undefined);

  const openWhatsAppModal = (customMessage?: string) => {
    setMessageText(customMessage);
    setIsOpen(true);
  };

  const closeWhatsAppModal = () => {
    setIsOpen(false);
  };

  // Intercept all clicks on wa.me links to show the 2-number option popup
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a[href*="wa.me"], [data-open-whatsapp-modal]');
      if (target) {
        e.preventDefault();
        e.stopPropagation();
        
        let msg: string | undefined;
        if (target instanceof HTMLAnchorElement && target.href.includes('text=')) {
          try {
            const url = new URL(target.href);
            msg = url.searchParams.get('text') || undefined;
          } catch {
            // fallback
          }
        }
        openWhatsAppModal(msg);
      }
    };

    document.addEventListener('click', handleGlobalClick, true);
    return () => document.removeEventListener('click', handleGlobalClick, true);
  }, []);

  return (
    <WhatsAppModalContext.Provider value={{ isOpen, messageText, openWhatsAppModal, closeWhatsAppModal }}>
      {children}
      <WhatsAppModal isOpen={isOpen} onClose={closeWhatsAppModal} customMessage={messageText} />
    </WhatsAppModalContext.Provider>
  );
}

export function useWhatsAppModal() {
  const context = useContext(WhatsAppModalContext);
  if (!context) {
    throw new Error('useWhatsAppModal must be used within a WhatsAppModalProvider');
  }
  return context;
}
