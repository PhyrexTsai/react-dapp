import React, { Component } from 'react'

const AddressBalance = (props: { balance: string }) => (
  <div>Balance: {props.balance}</div>
)

// 加入props的資料類型驗証
AddressBalance.propTypes = {
  balance: React.PropTypes.string.isRequired
}

// 匯出TextShow模組
export default AddressBalance
