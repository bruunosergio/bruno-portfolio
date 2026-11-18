"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="border border-line px-4 py-2 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
    >
      Imprimir / salvar PDF
    </button>
  );
}
