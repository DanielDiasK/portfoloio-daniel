"use client";
import { useState } from "react";

export default function CopyButton({ value }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value);
        } catch {
            const ta = document.createElement("textarea");
            ta.value = value;
            ta.style.position = "fixed";
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <span className="inline-flex items-center gap-1">
            <button
                onClick={handleCopy}
                aria-label="Copiar"
                title="Copiar"
                className="p-1 border border-base-content/20 rounded hover:border-base-content/80 transition-colors cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-all duration-200 ${
                        copied
                            ? "text-green-500 scale-125"
                            : "text-base-content/60"
                    }`}
                >
                    {copied ? (
                        <path d="M20 6 9 17l-5-5" />
                    ) : (
                        <>
                            <rect
                                width="14"
                                height="14"
                                x="8"
                                y="8"
                                rx="2"
                                ry="2"
                            />
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </>
                    )}
                </svg>
            </button>
            <span
                className={`text-xs transition-all duration-200 ${
                    copied
                        ? "opacity-100 text-green-500"
                        : "opacity-0 -translate-x-1"
                }`}
            >
                Copiado!
            </span>
        </span>
    );
}
