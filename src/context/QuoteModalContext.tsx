'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { QuoteModal } from '@/components/ui/QuoteModal';

export interface QuoteModalOptions {
  title?: string;
  subtitle?: string;
  defaultDistrict?: string;
  defaultService?: string;
  defaultBill?: string;
  intent?: string;
}

interface QuoteModalContextType {
  isOpen: boolean;
  options: QuoteModalOptions;
  openQuoteModal: (options?: QuoteModalOptions) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<QuoteModalOptions>({});

  const openQuoteModal = (opts?: QuoteModalOptions) => {
    setOptions(opts || {});
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Global click listener for any element with data-open-quote-modal attribute or href with intent=quote
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('[data-open-quote-modal], a[href*="intent=quote"]');
      if (target) {
        // Prevent default navigation to keep user on same page with smooth popup
        e.preventDefault();
        const district = target.getAttribute('data-district') || undefined;
        const service = target.getAttribute('data-service') || undefined;
        const title = target.getAttribute('data-title') || undefined;
        openQuoteModal({ defaultDistrict: district, defaultService: service, title });
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <QuoteModalContext.Provider value={{ isOpen, options, openQuoteModal, closeQuoteModal }}>
      {children}
      <QuoteModal isOpen={isOpen} onClose={closeQuoteModal} options={options} />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider');
  }
  return context;
}
