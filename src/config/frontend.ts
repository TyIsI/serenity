import { normalizeTime } from '@/lib/util'

import type { TFrontendConfig } from '@/types/config'

export const frontendConfig: TFrontendConfig = {
    backgroundUpdateInterval: normalizeTime(process.env.NEXT_PUBLIC_BG_UPDATE_INTERVAL != null ? parseInt(process.env.NEXT_PUBLIC_BG_UPDATE_INTERVAL) : 900),
    quoteUpdateInterval: normalizeTime(process.env.NEXT_PUBLIC_QUOTE_UPDATE_INTERVAL != null ? parseInt(process.env.NEXT_PUBLIC_QUOTE_UPDATE_INTERVAL) : 60)
}

export default frontendConfig
