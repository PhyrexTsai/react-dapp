# React ÐApp
實作利用 React + Ethereum library + INFURA 創建 ÐApp 

## Technical Stack
- react: 實作 HTML 介面與功能
- ethereumjs-util: 輔助操作 Ethereum 元件庫，A collection of utility functions for ethereum. It can be used in node.js or can be in the browser with browserify.
- ethereumjs-tx: 輔助操作 Ethereum transaction，A simple module for creating, manipulating and signing ethereum transactions.
- infura: 透過 JSON-RPC 2.0 連線到 Ethereum 網路，參考[https://github.com/ethereum/wiki/wiki/JSON-RPC](https://github.com/ethereum/wiki/wiki/JSON-RPC)

## Run
`npm start` or `yarn start` 

## React Components
介紹每個 Component 都在做些什麼事情

### AddressSearch
搜尋 Ethereum 的 Address 查看餘額

### AddressBalance
顯示 Ethereum Address 中的餘額

### BlockNumber
顯示 Ethereum 區塊鏈的區塊編號

### Upload
提供上傳 keystore(JSON) 與輸入 passphrase 產生 PrivateKey

### PrivateKey
顯示 PrivateKey 的內容

## TODO
- [x] 建立一個 React App Page 來提供上傳 Private Key 功能
- [ ] 參考 [MetaMask](https://github.com/MetaMask/metamask-extension/blob/c2aa05e0134d552e784391ae22ec2b8c35a7eb94/ui/app/accounts/import/index.js) 取得上傳後的 Private Key，這樣就可以透過這個 Private Key 來 Sign Transaction
- [ ] 使用 [ethereum-tx](https://github.com/ethereumjs/ethereumjs-tx) 來打包 Raw Transaction
- [ ] 透過 Signed Transaction 將資料透過 INFURA 提供的 RESTful API 傳送到 [https://ropsten.infura.io](https://ropsten.infura.io)
- [ ] Watch Transaction by Transaction Hash
- [ ] 尋找 MetaMask 都把資料存在瀏覽器的哪邊，這樣可以直接透過 MetaMask 來操作
- [ ] 把 Transaction Hash 的資料都記錄下來方便以後查詢，Local Storage
