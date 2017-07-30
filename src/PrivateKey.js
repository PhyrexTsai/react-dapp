import React from 'react'

const PrivateKey = (props: { text: string }) => (
  <h3>{props.text}</h3>
)

// 加入props的資料類型驗証
PrivateKey.propTypes = {
  text: React.PropTypes.string.isRequired
}

// 匯出TextShow模組
export default PrivateKey