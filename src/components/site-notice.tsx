"use client"

import { useNotice } from "@/lib/device"

const NAME = "Reze MiPo"
const HOME = "https://mipo.reze.one"
const REPO = "https://github.com/AmyangXYZ/reze-mipo"
const SITE = HOME.replace("https://", "")

/** A repackaged build or an unknown host: the page stays covered, with the
 *  way to the official site. Nothing underneath is reachable. */
export function SiteNotice() {
  if (!useNotice()) return null
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 text-white"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="site-notice-title"
    >
      <div className="w-full max-w-sm rounded-lg border border-white/10 bg-neutral-900 p-5 text-left shadow-xl">
        <h2 id="site-notice-title" className="text-sm font-semibold">
          This is not the official {NAME}
        </h2>
        <div className="mt-2 space-y-2 text-xs leading-relaxed text-neutral-300">
          <p>
            This copy was repackaged by a third party. {NAME} runs only as the web app at {SITE}; wrapped builds are
            not supported and may be modified or out of date.
          </p>
          <p>
            The source is open at{" "}
            <a href={REPO} target="_blank" rel="noreferrer" className="text-blue-400 underline underline-offset-2">
              {REPO.replace("https://", "")}
            </a>
            .
          </p>
        </div>
        <div className="mt-4 flex justify-end">
          <a
            href={HOME}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-blue-400 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-400/90"
          >
            Open {SITE}
          </a>
        </div>
      </div>
    </div>
  )
}
