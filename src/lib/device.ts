"use client"

// Is this page running somewhere other than the site it was built for: a
// repackaged WebView, an unknown host? Asked once on mount; the answer does not
// change while the page lives.

import { useSyncExternalStore } from "react"

const P =
  "eyJoIjpbIm1pcG8ucmV6ZS5vbmUiLCJ3d3cubWlwby5yZXplLm9uZSIsImxvY2FsaG9zdCIsIjEyNy4wLjAuMSJdLCJzIjoiLnZlcmNlbC5hcHAiLCJlIjoiRWxlY3Ryb24vIiwidyI6Ijsgd3ZcXCkiLCJiIjoiQW5kcm9pZCBXZWJWaWV3IiwiYSI6Ik1pY3JvTWVzc2VuZ2VyfFdlQ2hhdHxRUS98TVFRQnJvd3NlcnxXZWlib3xCaWxpQXBwfGJpbGktfGF3ZW1lfEF3ZW1lfE5ld3NBcnRpY2xlfHhoc2Rpc2NvdmVyfERpbmdUYWxrfExhcmt8RmVpc2h1fFRlbGVncmFtfERpc2NvcmR8RkJBTnxGQkFWfEluc3RhZ3JhbXxMaW5lL3xUd2l0dGVyIn0="

function noticeDue(): boolean {
  try {
    const p = JSON.parse(atob(P)) as { h: string[]; s: string; e: string; w: string; b: string; a: string }
    const u = navigator.userAgent
    if (u.includes(p.e)) return false
    const h = window.location.hostname
    if (!p.h.includes(h) && !h.endsWith(p.s)) return true
    const d = (navigator as { userAgentData?: { brands?: { brand: string }[] } }).userAgentData
    const marked = new RegExp(p.w).test(u) || !!d?.brands?.some((x) => x.brand === p.b)
    return marked && !new RegExp(p.a).test(u)
  } catch {
    return false
  }
}

const never = () => () => {}

/** Server render answers false: the notice is a client decision. */
export function useNotice(): boolean {
  return useSyncExternalStore(never, noticeDue, () => false)
}
