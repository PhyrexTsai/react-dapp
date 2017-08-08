import React, { Component } from 'react'
import PropTypes from 'prop-types'

const h2d = (s) => {

    function add(x, y) {
        var c = 0, r = [];
        var x = x.split('').map(Number);
        var y = y.split('').map(Number);
        while(x.length || y.length) {
            var s = (x.pop() || 0) + (y.pop() || 0) + c;
            r.unshift(s < 10 ? s : s - 10); 
            c = s < 10 ? 0 : 1;
        }
        if(c) r.unshift(c);
        return r.join('');
    }

    var dec = '0';
    s.split('').forEach(function(chr) {
        var n = parseInt(chr, 16);
        for(var t = 8; t; t >>= 1) {
            dec = add(dec, dec);
            if(n & t) dec = add(dec, '1');
        }
    });
    return dec;
}


const AddressBalance = (props: { balance: string }) => (
  <div>Balance: {h2d(props.balance)}</div>
)

// 加入props的資料類型驗証
AddressBalance.propTypes = {
  balance: PropTypes.string.isRequired
}

// 匯出TextShow模組
export default AddressBalance
