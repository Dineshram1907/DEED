import React from 'react';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-4">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-white border border-[#DDE3EE] shadow-sm">
        <div className="font-mono text-xs font-bold text-[#2457F5] uppercase tracking-widest">
          ERROR 404
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1220] font-syne tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm text-[#667085] leading-relaxed">
          The requested route does not exist or has been relocated within the DEED digital architecture.
        </p>
        <div className="pt-2 flex justify-center">
          <Button variant="primary" size="md" to="/">
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};
