import axios from 'axios';

export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function fetchOptions(symbol = 'NIFTY') {
  return axios.get(`https://www.nseindia.com/api/option-chain-indices?symbol=${symbol}`, {
    headers: {
        withCredentials: true,
        Cookie: 'cookie=ak_bmsc=E0AB398F3C4974D6FFD94F132EEDD85117417C4D1E5D0000EB01C660B5DDFA28~ploSny3IQMbP61jqUWFFxw/OSRu2Y14OmdOlFijLdLp/Qsf7xUnTlFpFPiX7dQT29E7TVOcjlbJEnkvPbbWDhrX0I/4VOzfoQ+eHDm4BCHLZlq4aUdnVsM4dE3b83u0lmiIpDCWWkhNrCFuCKBcRayj77yzg5RW2CHxtp88ZJcD8yPosC/xwQOLcv20p1GJt7u4KRHkkVJBBsbELumJgl7mDLA7dlOqp6teCq1tDTnVlM=; AKA_A2=A; nsit=uG3BUhFK9DMMTfNzOCjIAxtW; nseappid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkubnNlIiwiYXVkIjoiYXBpLm5zZSIsImlhdCI6MTYyMzU4OTQ3OSwiZXhwIjoxNjIzNTkzMDc5fQ.z0982cQeinLWernblHtZQ2mmnGz8rVJnKAu_RU-ckTM; bm_mi=3CAE4470A08053841A8B3AA8F03C6EC9~pQ9AN3d9EMIXjGfqpYsRZ5zHRavHHPQOvqybgdcHsrlflCQvCytV+YlmQ9CJHqJ6tZ8UP4RC8won+J4dJ5tB+Mea0kzv0Rtq+SOY1n1cvbXOPfFzchitoCLKBoKr6FjoiPFwQMueNcyUGcD62UQKSc5ZmJcSRrBx91KL4iv8qaZEnmP9w+PbcEA3ffmL7hEG54t0STN99kBxUnSzJQvY/J1/8QB9Rg2t3lPwV+XvowugIulB5mZfSDYlwR9RyfTZ; bm_sv=6A0BB2D76C64E9B994C92E657F6A6A29~sIdtI+g57BscFF8ArNI/xFgrphMbweAf83PHaQU4gosyrhpqKWOkwxBZuck+P75vlu6B5zvxutbwyIVghzpR+1s1DOp8nDOS5nnuj1ZN/z/rFWiDELvg0axIFdh/LHAIL6yjKIg7Ho/J7RcHRidI5y42yworIfkpBiQVDgGXtBM=;path=/'
    }
  })
      .then(res => {
        debugger;
        return res.data;
      });
}