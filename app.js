const valyutalar = [
    { Ccy: "USD", Code: "840", CcyNm_UZ: "AQSH dollari", Rate: "12060.84", Diff: "51.55" },
    { Ccy: "EUR", Code: "978", CcyNm_UZ: "EVRO", Rate: "13754.18", Diff: "55.18" },
    { Ccy: "RUB", Code: "643", CcyNm_UZ: "Rossiya rubli", Rate: "155.00", Diff: "0.26" },
    { Ccy: "GBP", Code: "826", CcyNm_UZ: "Angliya funt sterlingi", Rate: "15943.22", Diff: "65.74" },
    { Ccy: "CNY", Code: "156", CcyNm_UZ: "Xitoy yuani", Rate: "1775.14", Diff: "8.6" }
];

const tbody = document.getElementById('valyutaJoyi');

valyutalar.forEach(v => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td><strong>${v.Ccy}</strong></td>
        <td>${v.Code}</td>
        <td>${v.CcyNm_UZ}</td>
        <td>${Number(v.Rate).toLocaleString('uz-UZ', { minimumFractionDigits: 2 })} so'm</td>
        <td style="color: ${Number(v.Diff) >= 0 ? 'green' : 'red'}">${v.Diff}</td>
    `;
    tbody.appendChild(tr);
});
