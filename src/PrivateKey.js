import React from 'react'
import PropTypes from 'prop-types'

const PrivateKey = (props: { text: string }) => (
  <h3>{props.text}</h3>
)

// 加入props的資料類型驗証
PrivateKey.propTypes = {
  text: PropTypes.string.isRequired
}

// 匯出TextShow模組
export default PrivateKey