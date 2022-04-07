import React, { FC } from 'react'
import styles from './SourceCredit.module.css'

import { SourceCreditProps } from './SourceCredit.d'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SourceCredit: FC<SourceCreditProps> = (props: SourceCreditProps) => {
  return (
    <div className={styles.SourceCredit}>
      <span>
        <FontAwesomeIcon icon={['fab', 'github']} size={'lg'} /> <a href="https://github.com/TyIsI/serenity-dashboard" target={'_blank'} rel="noreferrer">Serenity Dashboard</a>
      </span>
    </div>
  )
}

export default SourceCredit
