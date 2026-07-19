import React from 'react';
import { AlertTriangle, Trash2, X } from 'lucide-react';


function ConfirmDialog({ open, title = 'Are you sure?', message, confirmLabel = 'Delete', onConfirm, onCancel }) {
  if (!open) return null;

  return (
    
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onCancel}
    >
      {}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {}
      <div
        className="relative z-10 w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl shadow-black/50 animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        {}
        <div className="p-6 border-b border-border flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-5 h-5 text-red-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{title}</h3>
            {message && (
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{message}</p>
            )}
          </div>
          <button
            onClick={onCancel}
            className="p-1 rounded-full hover:bg-secondary transition-colors flex-shrink-0 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {}
        <div className="p-4 flex items-center justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-5 py-2 rounded-xl border border-border text-sm font-medium hover:bg-secondary transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-medium transition-colors flex items-center gap-2 shadow-lg shadow-red-500/20"
          >
            <Trash2 className="w-4 h-4" />
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
