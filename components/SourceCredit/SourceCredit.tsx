import React, { FC } from 'react'
import styles from './SourceCredit.module.css'

import { SourceCreditProps } from './SourceCredit.d'

const SourceCredit: FC<SourceCreditProps> = (props: SourceCreditProps) => {
  return (
    <div className={styles.SourceCredit}>
      <span>
        <a href="https://github.com/TyIsI/serenity-dashboard" target={'_blank'} rel="noreferrer">Serenity Dashboard</a>
      </span>
    </div>
  )
}

export default SourceCredit
