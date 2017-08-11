const add = (x, y) => {
  let c = 0;
  const r = [];

  let xNumbers = x.split('').map(Number);
  let yNumbers = y.split('').map(Number);

  while (xNumbers.length || yNumbers.length) {
    const s = (xNumbers.pop() || 0) + (yNumbers.pop() || 0) + c;
    r.unshift(s < 10 ? s : s - 10);
    c = s < 10 ? 0 : 1;
  }
  if (c) r.unshift(c);
  return r.join('');
};

export const h2d = (s) => {
  let dec = '0';
  s.split('').forEach((chr) => {
    const n = parseInt(chr, 16);
    for (var t = 8; t; t >>= 1) {
      dec = add(dec, dec);
      if (n & t) dec = add(dec, '1');
    }
  });
  return dec;
};