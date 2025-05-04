function calculateReliability() {
    const omega_oc = parseFloat(document.getElementById("omega_oc").value);
    const t_v = parseFloat(document.getElementById("t_v").value);
    const k_p_max = parseFloat(document.getElementById("k_p_max").value);
    const omega_cb = parseFloat(document.getElementById("omega_cb").value);

    const k_a_oc = (omega_oc * t_v) / 8760;
    const k_p_oc = 1.2 * k_p_max / 8760;
    const omega_dk = 2 * omega_oc * (k_a_oc + k_p_oc);
    const omega_ds = omega_dk + omega_cb;

    document.getElementById("reliabilityResult").innerHTML = `
        <p><strong>Коеф. аварійного простою:</strong> ${k_a_oc.toExponential(2)}</p>
        <p><strong>Коеф. планового простою:</strong> ${k_p_oc.toExponential(2)}</p>
        <p><strong>Частота відмов двокіл:</strong> ${omega_dk.toExponential(2)} рік⁻¹</p>
        <p><strong>Загальна частота відмов (з секц. вимикачем):</strong> ${omega_ds.toExponential(2)} рік⁻¹</p>
        <p><strong>Висновок:</strong> Надійність двоколової системи є значно вищою.</p>
    `;
}

function calculateLosses() {
    const omega = parseFloat(document.getElementById("omega").value);
    const t_avr = parseFloat(document.getElementById("t_avr").value);
    const k_p = parseFloat(document.getElementById("k_p").value);
    const P_m = parseFloat(document.getElementById("P_m").value);
    const T_m = parseFloat(document.getElementById("T_m").value);
    const Z_a = parseFloat(document.getElementById("Z_a").value);
    const Z_p = parseFloat(document.getElementById("Z_p").value);

    const W_a = omega * t_avr * P_m * T_m;
    const W_p = k_p * P_m * T_m;
    const totalLoss = Z_a * W_a + Z_p * W_p;

    document.getElementById("lossResult").innerHTML = `
        <p><strong>Аварійне недопостачання:</strong> ${W_a.toFixed(0)} кВт·год</p>
        <p><strong>Планове недопостачання:</strong> ${W_p.toFixed(0)} кВт·год</p>
        <p><strong>Загальні збитки:</strong> ${totalLoss.toLocaleString()} грн</p>
    `;
}

